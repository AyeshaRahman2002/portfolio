'use client';

import Image from '@/components/BasePathImage';
import { Canvas, ThreeEvent, useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { withBasePath } from '@/data/portfolioData';

interface AcrylicCanvas3DProps {
  imageSrc: string;
  alt: string;
  normalMap?: string;
  roughnessMap?: string;
  displacementMap?: string;
}

// Loads an optional PBR map and disposes the GPU texture when the source changes
// or the component unmounts, preventing texture leaks across artwork pages.
function useOptionalTexture(src?: string) {
  const [texture,setTexture]=useState<THREE.Texture>();
  useEffect(()=>{
    if(!src){setTexture(undefined);return;}
    let active=true; let loaded:THREE.Texture|undefined;
    new THREE.TextureLoader().load(src,value=>{ value.colorSpace=THREE.NoColorSpace; loaded=value; if(active) setTexture(value); else value.dispose(); });
    return()=>{ active=false; loaded?.dispose(); setTexture(undefined); };
  },[src]);
  return texture;
}

function releaseCapture(target: EventTarget | null, pointerId: number) {
  const el = target as (HTMLElement & { hasPointerCapture?: (id:number)=>boolean }) | null;
  try { if (el?.hasPointerCapture?.(pointerId)) el.releasePointerCapture(pointerId); } catch { /* capture already lost */ }
}

function PhysicalCanvas({ imageSrc, normalMap, roughnessMap, displacementMap, reducedMotion }:{imageSrc:string;normalMap?:string;roughnessMap?:string;displacementMap?:string;reducedMotion:boolean}) {
  const art = useLoader(THREE.TextureLoader,imageSrc);
  const normal = useOptionalTexture(normalMap), roughness = useOptionalTexture(roughnessMap), displacement = useOptionalTexture(displacementMap);
  const group=useRef<THREE.Group>(null), light=useRef<THREE.DirectionalLight>(null), target=useRef({x:0,y:0}), lightTarget=useRef({x:-3,y:4}), drag=useRef<{x:number;y:number;rx:number;ry:number}|null>(null);
  art.colorSpace=THREE.SRGBColorSpace;
  const image=art.image as {width?:number;height?:number};
  const aspect=THREE.MathUtils.clamp((image.width||4)/(image.height||3),.55,1.8);
  const frontWidth=aspect>=1?3.2:3.2*aspect, frontHeight=aspect>=1?3.2/aspect:3.2;
  const bodyWidth=frontWidth+.11, bodyHeight=frontHeight+.11, barWidth=Math.max(.12,frontWidth*.055);
  useFrame(()=>{if(group.current){group.current.rotation.x=reducedMotion?target.current.x:THREE.MathUtils.lerp(group.current.rotation.x,target.current.x,.1);group.current.rotation.y=reducedMotion?target.current.y:THREE.MathUtils.lerp(group.current.rotation.y,target.current.y,.1)}if(light.current&&!reducedMotion){light.current.position.x=THREE.MathUtils.lerp(light.current.position.x,lightTarget.current.x,.06);light.current.position.y=THREE.MathUtils.lerp(light.current.position.y,lightTarget.current.y,.06)}});
  const down=(e:ThreeEvent<PointerEvent>)=>{e.stopPropagation();try{(e.nativeEvent.target as HTMLElement).setPointerCapture(e.pointerId)}catch{/* capture unsupported */}drag.current={x:e.clientX,y:e.clientY,rx:target.current.x,ry:target.current.y}};
  const move=(e:ThreeEvent<PointerEvent>)=>{if(!reducedMotion)lightTarget.current={x:THREE.MathUtils.clamp((e.pointer.x||0)*2.5,-2.5,2.5),y:3+THREE.MathUtils.clamp((e.pointer.y||0)*1.5,-1.5,1.5)};if(!drag.current)return;target.current.y=THREE.MathUtils.clamp(drag.current.ry+(e.clientX-drag.current.x)*.006,-.55,.55);target.current.x=THREE.MathUtils.clamp(drag.current.rx+(e.clientY-drag.current.y)*.006,-.35,.35)};
  const endDrag=(e:ThreeEvent<PointerEvent>)=>{if(!drag.current)return;drag.current=null;releaseCapture(e.nativeEvent.target,e.pointerId)};
  return <><directionalLight ref={light} position={[-3,4,5]} intensity={2.2}/><group ref={group} onPointerDown={down} onPointerMove={move} onPointerUp={endDrag} onPointerCancel={endDrag} onPointerLeave={endDrag}>
    <mesh position={[0,0,-.09]}><boxGeometry args={[bodyWidth,bodyHeight,.18]}/><meshStandardMaterial color="#bdb5a7" roughness={.92}/></mesh>
    <mesh position={[0,0,.012]}><planeGeometry args={[frontWidth,frontHeight,displacement?96:1,displacement?96:1]}/><meshStandardMaterial map={art} normalMap={normal} roughnessMap={roughness} displacementMap={displacement} displacementScale={displacement?.06:0} roughness={roughness?1:.55}/></mesh>
    <mesh position={[0,0,-.19]}><planeGeometry args={[frontWidth*.86,frontHeight*.86]}/><meshStandardMaterial color="#9b9285" roughness={1}/></mesh>
    <mesh position={[0,frontHeight*.37,-.24]}><boxGeometry args={[frontWidth*.82,barWidth,.09]}/><meshStandardMaterial color="#756957" roughness={.86}/></mesh>
    <mesh position={[0,-frontHeight*.37,-.24]}><boxGeometry args={[frontWidth*.82,barWidth,.09]}/><meshStandardMaterial color="#756957" roughness={.86}/></mesh>
    <mesh position={[frontWidth*.37,0,-.24]}><boxGeometry args={[barWidth,frontHeight*.82,.09]}/><meshStandardMaterial color="#756957" roughness={.86}/></mesh>
    <mesh position={[-frontWidth*.37,0,-.24]}><boxGeometry args={[barWidth,frontHeight*.82,.09]}/><meshStandardMaterial color="#756957" roughness={.86}/></mesh>
  </group></>;
}

export function AcrylicCanvas3D(props:AcrylicCanvas3DProps) {
  const [webgl,setWebgl]=useState(false);
  const [reducedMotion,setReducedMotion]=useState(false);
  useEffect(()=>{try{const canvas=document.createElement('canvas');const media=window.matchMedia('(prefers-reduced-motion: reduce)');setReducedMotion(media.matches);setWebgl(Boolean(canvas.getContext('webgl2')||canvas.getContext('webgl')));const update=()=>setReducedMotion(media.matches);media.addEventListener('change',update);return()=>media.removeEventListener('change',update)}catch{setWebgl(false)}},[]);
  if(!webgl) return <div className="relative aspect-[4/3] bg-[var(--bg-card)]"><Image src={props.imageSrc} alt={props.alt} fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain"/></div>;
  const textureProps = {
    ...props,
    imageSrc: withBasePath(props.imageSrc),
    normalMap: props.normalMap && withBasePath(props.normalMap),
    roughnessMap: props.roughnessMap && withBasePath(props.roughnessMap),
    displacementMap: props.displacementMap && withBasePath(props.displacementMap),
  };
  return <figure className="space-y-4"><div className="h-[320px] cursor-grab border border-[var(--border-subtle)] bg-[var(--bg-card)] active:cursor-grabbing sm:h-[420px] lg:h-[560px]"><Canvas camera={{position:[0,0,4.7],fov:42}} gl={{antialias:true,alpha:false}}><color attach="background" args={['#ded8cc']}/><ambientLight intensity={1.1}/><PhysicalCanvas {...textureProps} reducedMotion={reducedMotion}/></Canvas></div><figcaption className="eyebrow">Drag to examine the physical canvas.</figcaption></figure>;
}
