import type {
  ArchiveProject,
  Artwork,
  Certification,
  Education,
  EngineeringProject,
  Experience,
  NoteArticle,
  SketchbookItem,
  SkillCategory,
} from '@/types/portfolio';

/**
 * Resolve the canonical site origin.
 * Priority: an explicit NEXT_PUBLIC_SITE_URL, then Netlify's build-time `URL`
 * (automatically set to the site's primary address, including the custom domain
 * once attached : so production picks up the real domain with no code change).
 * The localhost fallback is only ever used in local development, so production
 * never emits a localhost canonical URL. See NETLIFY.md.
 */
const resolveSiteUrl = (): string => {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL;
  if (candidate) return candidate.replace(/\/+$/, '');
  return 'http://localhost:3000';
};

export const SITE_CONFIG = {
  name: 'Ayesha Rahman',
  title: 'Ayesha Rahman | AI / ML Engineer & Artist',
  description:
    'Ayesha Rahman is an AI / ML Engineer working across trustworthy AI, privacy-preserving machine learning and intelligent systems, and an Artist working in charcoal and acrylic.',
  location: 'Jeddah, Saudi Arabia',
  email: 'ayesharahman7755@gmail.com',
  github: 'https://github.com/AyeshaRahman2002',
  linkedin: 'https://www.linkedin.com/in/ayesha-rahman-ml/',
  instagram: 'https://www.instagram.com/artxar_/',
  url: resolveSiteUrl(),
  portrait: '/images/ayesha-rahman.jpg' as string | undefined,
} as const;

export const PERSONAL_INFO = {
  name: 'AYESHA RAHMAN',
  taglineEngineer: 'AI / ML ENGINEER',
  taglineEngineerShort: 'AI / ML',
  taglineArtist: 'ARTIST',
  positioning:
    'AI / ML Engineer focused on secure, interpretable and privacy-preserving intelligent systems.',
  artPositioning:
    'Artist working in charcoal, acrylic, portraiture and realism.',
  location: SITE_CONFIG.location,
  email: SITE_CONFIG.email,
  github: SITE_CONFIG.github,
  linkedin: SITE_CONFIG.linkedin,
  instagram: SITE_CONFIG.instagram,
};

export const EDUCATION: Education[] = [
  {
    degree: 'MEng Computer Science with Artificial Intelligence',
    institution: 'University of Leeds',
    period: '2024-2025',
    grade: 'Strong 2:1 · 81% dissertation',
  },
  {
    degree: 'BSc Computer Science with Artificial Intelligence',
    institution: 'University of Leeds',
    period: '2021-2024',
    grade: '2:1',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'palmate',
    role: 'AI and Software Engineer',
    organization: 'Palmate Technology',
    period: 'May 2026-Present',
    location: 'Jeddah, Saudi Arabia',
    primary: true,
    summary:
      'Building and modernising end-to-end software products across AI, web, mobile and Odoo enterprise systems.',
    focus: [
      'Implementing and configuring Odoo ERP modules across Sales, Inventory, Accounting and Fiscal Positions.',
      'Mapping ERP behaviour to client processes and operational requirements.',
      'Designing and integrating AI components into in-house products.',
      'Building complete software systems across backend services, application logic, data flows and product interfaces.',
      'Contributing to frontend architecture and interface design for clear, usable product experiences.',
      'Developing a mobile application connected to the wider product ecosystem.',
      'Redesigning and modernising a legacy product system for compatibility with current tooling, standards and business requirements.',
    ],
  },
  {
    id: 'cybersar',
    role: 'Research Intern and AI Product Developer',
    organization: 'CyberSaR / KAUST',
    period: 'December 2025-Present',
    location: 'Remote / Jeddah, Saudi Arabia',
    primary: true,
    summary:
      'Researching continuous post-authentication behavioural trust, preparing the work for conference-paper submission and developing it toward a practical AI security product.',
    focus: [
      'Investigating behavioural authentication through human, process and temporal telemetry.',
      'Working with VAE, Transformer, CNN, temporal autoencoder and TSFresh methods.',
      'Using CERT, LANL and IAM datasets for research evaluation.',
      'Exploring federated learning, differential privacy, agentic AI, XAI and adaptive risk scoring.',
      'Preparing the research methodology, evaluation and findings for submission as a conference paper.',
      'Translating the research architecture into a practical product for continuous, explainable post-login identity assurance.',
    ],
  },
  {
    id: 'outlier',
    role: 'Freelance AI Evaluator and Software Developer',
    organization: 'Outlier',
    period: 'December 2024-September 2025',
    location: 'Remote',
    summary:
      'Evaluated AI outputs for quality and edge-case behaviour while contributing software-development work across web technologies and Flask.',
    focus: [
      'Designed and tested AI prompts with emphasis on edge cases, ambiguous instructions and response quality.',
      'Evaluated model outputs for correctness, relevance, consistency and adherence to task requirements.',
      'Identified failure cases and quality issues to support more reliable AI-generated responses.',
      'Applied structured quality-assurance thinking across varied technical and reasoning tasks.',
      'Contributed web-development work using HTML, CSS, JavaScript and Flask.',
      'Worked independently in a remote freelance environment while adapting to changing task specifications and evaluation criteria.',
    ],
  },
  {
    id: 'uti',
    role: 'Equity Research IT Analyst Intern',
    organization: 'UTI Mutual Fund',
    period: 'July 2023-September 2023',
    location: 'Mumbai, India',
    summary:
      'Built data-collection automation and analysed travel and hospitality information to support equity research and financial decision-making.',
    focus: [
      'Built two Python web-scraping tools for hotel-room pricing and Google Flights data collection.',
      'Structured hotel prices, room types, availability, breakfast options, flight schedules, airlines, stops and journey durations into analysis-ready Excel outputs.',
      'Developed simple interfaces and configurable workflows so analysts could run data collection without editing the underlying Python code.',
      'Applied responsible scraping practices including request throttling, site-change risk documentation and consideration of terms and robots.txt guidance.',
      'Analysed travel and hospitality datasets and presented comparative findings to equity research managers.',
      'Contributed to sector analysis and financial trend reporting used to evaluate companies and potential portfolio opportunities.',
      'Reduced repetitive manual data-processing work by approximately 30%.',
    ],
  },
];

// Secondary roles : full CV only, kept off the homepage and About-primary chronology.
export const ADDITIONAL_EXPERIENCE: Experience[] = [
  {
    id: 'student-cribs',
    role: 'Brand Manager',
    organization: 'Student Cribs',
    period: 'October 2022-September 2023',
    location: 'Leeds, UK',
    summary:
      'Represented the Student Cribs brand on campus through student outreach, local promotion and relationship building.',
    focus: [
      'Represented the brand across the University of Leeds student community and communicated its accommodation offering to prospective customers.',
      'Supported campus marketing activity through direct student outreach, promotional campaigns and in-person engagement.',
      'Built awareness through student networks, societies and relevant campus relationships.',
      'Helped generate interest and prospective leads by answering questions and directing students toward suitable accommodation information.',
      'Shared student feedback and recurring questions to support clearer messaging and more relevant campaign activity.',
    ],
  },
  {
    id: 'leeds-events',
    role: 'Events Promoter & Night Staff',
    organization: 'University of Leeds',
    period: '2023-2024',
    location: 'Leeds, UK',
    summary:
      'Supported event promotion, venue operations and student engagement across University of Leeds events.',
    focus: [
      'Promoted university events through direct student engagement and clear communication of event details.',
      'Supported event logistics and front-of-house operations across multiple venues and busy evening environments.',
      'Helped guide attendees, answer questions and maintain an organised and welcoming event experience.',
      'Worked collaboratively with event and venue teams while adapting to changing operational requirements.',
      'Developed customer-service, communication and situational problem-solving skills in fast-paced settings.',
    ],
  },
  {
    id: 'freelance-artist',
    role: 'Freelance Artist',
    organization: 'Self-employed',
    period: 'Ongoing',
    location: 'Remote',
    summary:
      'Independent art practice and commissioned work across portrait sketching, realism painting, abstract painting and digital drawing.',
    focus: [
      'Creating commissioned portraits and original artwork for individual clients.',
      'Working across portrait sketching, realism painting, abstract painting and digital drawing.',
      'Translating client references and ideas into compositions while retaining a distinct personal visual approach.',
      'Developing likeness, form, light, colour and material detail through observational practice.',
      'Managing the commission process from initial discussion and visual direction through creation and final delivery.',
      'Exploring both traditional and digital media to adapt the final work to different subjects and intended uses.',
    ],
  },
];

export const VOLUNTEERING: Experience[] = [
  {
    id: 'teacher-bihar',
    role: 'Teacher',
    organization: 'Government Primary School',
    period: 'August 2018-December 2018',
    location: 'Bihar, India',
    focus: [
      'Taught mathematics and English to primary and secondary students in village schools.',
      'Developed lesson plans and class materials to improve learning outcomes.',
    ],
  },
  {
    id: 'translator-bihar',
    role: 'Freelance Translator',
    organization: 'Government Primary School',
    period: 'August 2018-December 2018',
    location: 'Bihar, India',
    focus: [
      'Translated educational materials between Hindi/Urdu and English for students learning English.',
      'Supported language proficiency through one-to-one and small-group assistance.',
    ],
  },
];

const trustPipeline = [
  { id: 'login', name: 'LOGIN', description: 'Point-in-time trust event', detail: 'Initial authentication establishes trust at one moment.' },
  { id: 'telemetry', name: 'TELEMETRY', description: 'Behaviour and process activity', detail: 'Human, process and temporal signals continue throughout the session.' },
  { id: 'representation', name: 'REPRESENTATION', description: 'Temporal pattern modelling', detail: 'VAE, Transformer, CNN, temporal autoencoder and extracted features are investigated.' },
  { id: 'risk', name: 'RISK', description: 'Adaptive scoring', detail: 'Deviation evidence can inform an interpretable, continuously updated trust assessment.' },
  { id: 'session', name: 'SESSION', description: 'Trust over time', detail: 'The research focuses on the interval after login, without claiming a complete production enforcement system.' },
];

export const FEATURED_ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    id: 'zero-trust-ai', number: '01', title: 'CONTINUOUS RISK-ADAPTIVE IDENTITY', slug: 'zero-trust-ai-identity',
    year: '2025-Present', category: 'Research Project', purpose: 'Investigating what happens to identity trust after login.',
    overview: 'Initial authentication is a point-in-time trust event. This research investigates behavioural and process telemetry as evidence that can evolve throughout a session.',
    problem: 'Identity may be strongly validated at login while behaviour can change afterwards.',
    approach: 'Investigate temporal feature extraction, representation learning, anomaly modelling, privacy-preserving learning and explainable adaptive risk scoring.',
    implementation: ['Behavioural, process and temporal telemetry research', 'Model investigation across VAE, Transformer, CNN and temporal autoencoders', 'TSFresh feature extraction', 'Federated learning and differential privacy exploration'],
    methods: ['Behavioural authentication', 'Anomaly modelling', 'Federated learning', 'Differential privacy', 'Explainable AI'],
    models: ['VAE', 'Transformer', 'CNN', 'Temporal autoencoder'], datasets: ['CERT', 'LANL', 'IAM datasets'],
    technologies: ['Python', 'PyTorch', 'TSFresh'], architecture: trustPipeline,
    limitations: ['Research is ongoing; no production-readiness or automatic enforcement claim is made.'],
    futureWork: ['Advance the research towards a practical, auditable product.'], featured: true, researchRelevant: true,
    visuals: [{ type: 'image', src: '/projects/archive/trustworthy_ai_finance.jpg', alt: 'Visual overview for continuous adaptive trust research', caption: 'Continuous post-login identity assurance research overview.', aspect: 'landscape' }],
  },
  {
    // TODO: Verify the project year from the original project record or CV.
    id: 'compiler-autotuning', number: '02', title: 'MACHINE-LEARNING-DRIVEN COMPILER AUTO-TUNING', slug: 'compiler-autotuning',
    category: 'Machine Learning Project', purpose: 'Predicting compiler transformations from program features.',
    overview: 'An ML framework for selecting compiler optimisations from structural code features.',
    problem: 'Manually selecting optimisation schedules is costly and may generalise poorly across kernels.',
    approach: 'Extract program and loop features, train supervised models and evaluate with leave-one-kernel-out validation.',
    implementation: ['AST and loop feature extraction', 'Transformation classification', 'Leave-one-kernel-out evaluation', 'Feature importance analysis'],
    methods: ['Supervised learning', 'LOKO validation', 'Feature analysis'], models: ['Decision tree', 'Random forest', 'GBDT', 'Logistic regression', 'MLP'],
    datasets: ['Compiler benchmark kernels'], technologies: ['Python', 'C++', 'scikit-learn'],
    architecture: [
      { id: 'code', name: 'PROGRAM', description: 'Source input', detail: 'Program structure supplies the input evidence.' },
      { id: 'features', name: 'FEATURES', description: 'Loop and program properties', detail: 'Structural features represent each optimisation problem.' },
      { id: 'model', name: 'MODEL', description: 'Transformation prediction', detail: 'Supervised models predict an optimisation decision.' },
      { id: 'schedule', name: 'SCHEDULE', description: 'Compiler configuration', detail: 'The selected transformation schedule is evaluated.' },
    ],
    metrics: [{ label: 'Accuracy', value: '0.89' }, { label: 'Macro-F1', value: '0.43' }, { label: 'Speedup', value: '≈3×' }, { label: 'LOKO', value: '0.81' }],
    featured: true, researchRelevant: true,
    visuals: [{ type: 'image', src: '/projects/archive/mlloopoptselector.jpg', alt: 'Machine learning compiler optimisation project interface', caption: 'Compiler transformation selection and evaluation workflow.', aspect: 'landscape' }],
  },
  {
    // TODO: Verify the project year from the original project record or CV.
    id: 'lit-review-rag', number: '03', title: 'AUTOMATED LITERATURE REVIEW & LLM EFFICIENCY', slug: 'automated-literature-review-rag',
    category: 'Machine Learning Project', purpose: 'Evaluating retrieval and language-model efficiency for literature review.',
    overview: 'A literature-review workflow combining retrieval, ranking and model evaluation.',
    problem: 'Academic search and synthesis requires relevant retrieval and measurable output quality.',
    approach: 'Evaluate dense retrieval, reranking and generation approaches using supported ranking and text-similarity measures.',
    implementation: ['Document retrieval', 'Ranking evaluation', 'Generation evaluation', 'Efficiency comparison'],
    methods: ['Dense retrieval', 'Reranking', 'Language-model evaluation'], models: ['MiniLM', 'FLAN-T5'], datasets: ['Academic literature corpus'],
    technologies: ['Python', 'PyTorch', 'FAISS'], architecture: [
      { id: 'query', name: 'QUERY', description: 'Research question', detail: 'A question defines the information need.' },
      { id: 'retrieve', name: 'RETRIEVE', description: 'Candidate documents', detail: 'Relevant passages are retrieved from the corpus.' },
      { id: 'rank', name: 'RANK', description: 'Relevance ordering', detail: 'Candidates are evaluated and ordered.' },
      { id: 'generate', name: 'GENERATE', description: 'Evidence-grounded output', detail: 'Retrieved evidence supports the generated response.' },
    ],
    metrics: [{ label: 'nDCG@5', value: '≈0.85' }, { label: 'ROUGE-L', value: '≈0.18' }, { label: 'BERTScore-F1', value: '≈0.86' }],
    github: 'https://github.com/AyeshaRahman2002/LLM-research-assistant',
    reports: [{ label: 'Research paper', url: '/documents/projects/llm-efficiency-platform.pdf' }],
    featured: true, researchRelevant: true,
    visuals: [{ type: 'image', src: '/projects/archive/llm_research_project.jpg', alt: 'Automated literature review research project', caption: 'Retrieval, evaluation and efficient language-model research workflow.', aspect: 'landscape' }],
  },
  {
    // TODO: Verify the project year from the original project record or CV.
    id: 'heritage-nerf', number: '04', title: 'NEURAL RECONSTRUCTION OF HERITAGE ARTEFACTS', slug: 'neural-reconstruction-heritage',
    category: 'Computer Vision / 3D', purpose: 'Reconstructing heritage artefacts from multiple views.',
    overview: 'A computer-vision and neural-representation study connecting photographs, camera geometry, 3D form and semantic access.',
    problem: 'Physical heritage objects are difficult to examine remotely from arbitrary viewpoints.',
    approach: 'Use image capture, camera reconstruction and neural radiance fields to represent view-dependent form.',
    implementation: ['Multi-view images', 'Camera reconstruction', 'NeRF training', 'Novel-view rendering', 'Semantic indexing investigation'],
    methods: ['Camera estimation', 'Neural rendering', 'Vision-language representation'], models: ['NeRF', 'BLIP / CLIP'], datasets: ['Multi-view image collection'],
    technologies: ['COLMAP', 'PyTorch', 'NeRF'], architecture: [
      { id: 'images', name: 'IMAGES', description: 'Multiple viewpoints', detail: 'Overlapping photographs observe the object from different positions.' },
      { id: 'camera', name: 'CAMERAS', description: 'COLMAP reconstruction', detail: 'Camera poses and sparse geometry establish viewpoint relationships.' },
      { id: 'field', name: 'NERF', description: 'Neural scene representation', detail: 'A radiance field models view-dependent density and colour.' },
      { id: 'views', name: 'NOVEL VIEWS', description: 'Rendered perspective', detail: 'The representation supports views beyond the source photographs.' },
    ],
    limitations: ['Quality depends on image coverage, camera reconstruction and training conditions.'], featured: true,
  },
  {
    // TODO: Verify the project year and research positioning from original source material.
    id: 'simmind', number: '05', title: 'SIMMIND COGNITIVE MULTI-AGENT SIMULATION', slug: 'simmind-cognitive-simulation',
    category: 'Multi-Agent Systems', purpose: 'Exploring explicit state, memory and decision loops in agent simulations.',
    overview: 'A multi-agent simulation focused on inspectable cognitive state and reproducible decision flow.',
    problem: 'Agent behaviour can become difficult to inspect when memory and state changes are implicit.',
    approach: 'Represent agent state, memory and decisions explicitly and compare changes across iterations.',
    implementation: ['Agent state representation', 'Memory loops', 'State-diff inspection', 'Simulation orchestration'],
    methods: ['Multi-agent simulation', 'State modelling', 'Memory systems'], models: ['Agent-based system'], datasets: [],
    technologies: ['Python'], architecture: [
      { id: 'observe', name: 'OBSERVE', description: 'Environment evidence', detail: 'Agents receive a bounded view of the simulation state.' },
      { id: 'memory', name: 'MEMORY', description: 'Retained context', detail: 'Relevant state is maintained for subsequent decisions.' },
      { id: 'decide', name: 'DECIDE', description: 'Inspectable action', detail: 'A decision is produced from state and memory.' },
      { id: 'diff', name: 'STATE DIFF', description: 'Change inspection', detail: 'State changes can be compared between simulation steps.' },
    ],
    limitations: ['No unsupported benchmark or general-intelligence claim is made.'], featured: true,
  },
  {
    // TODO: Verify the project year from the original project record or CV.
    id: 'pce', number: '06', title: 'US PCE INFLATION FORECASTING', slug: 'us-pce-inflation-forecasting',
    year: 'MEng Dissertation', category: 'Time-Series Research', purpose: 'MEng dissertation project comparing neural forecasts across inflation horizons.',
    overview: 'A time-series study evaluating models for one-, three- and six-month US PCE inflation forecasts.',
    problem: 'Forecast performance changes materially as the prediction horizon grows.',
    approach: 'Compare time-series models across multiple horizons using out-of-sample error and fit measures.',
    implementation: ['Time-series preparation', 'Multi-horizon training', 'Model comparison', 'Forecast evaluation'],
    methods: ['Multi-horizon forecasting', 'Time-series evaluation'], models: ['N-HiTS'], datasets: ['US PCE inflation data'],
    technologies: ['Python', 'PyTorch'], architecture: [
      { id: 'series', name: 'PCE SERIES', description: 'Historical observations', detail: 'Historical inflation measurements form the temporal input.' },
      { id: 'windows', name: 'WINDOWS', description: 'Forecast samples', detail: 'Time windows create supervised forecasting examples.' },
      { id: 'forecast', name: 'N-HiTS', description: 'Multi-horizon model', detail: 'N-HiTS produced the strongest reported results.' },
      { id: 'evaluate', name: 'EVALUATE', description: 'Horizon-specific metrics', detail: 'R² and RMSE are assessed separately for each horizon.' },
    ],
    metrics: [{ label: 'R² · 1 month', value: '0.97' }, { label: 'R² · 3 months', value: '0.89' }, { label: 'R² · 6 months', value: '0.69' }, { label: 'RMSE', value: '≈0.14-0.41' }],
    results: ['N-HiTS was the strongest model.', 'R² decreased from 0.97 at one month to 0.69 at six months.', 'RMSE ranged approximately from 0.14 to 0.41 by horizon.'],
    github: 'https://github.com/AyeshaRahman2002/Inflation-Forecasting-Group-Project', video: 'https://youtu.be/Dtd82dyeasE',
    reports: [{ label: 'Group report', url: '/documents/projects/inflation-group-report.pdf' }, { label: 'Individual report', url: '/documents/projects/inflation-individual-report.pdf' }],
    featured: true, researchRelevant: true,
    visuals: [{ type: 'image', src: '/projects/archive/inflation_project.jpg', alt: 'US inflation forecasting project visual', caption: 'Multi-horizon PCE forecasting and model comparison.', aspect: 'landscape' }],
  },
  {
    id: 'smart-poultry', number: '07', title: 'SMART POULTRY FARM MANAGEMENT PLATFORM', slug: 'smart-poultry-farm-management',
    category: 'Machine Learning Project', purpose: 'Building a secure desktop platform for farm telemetry, operational reporting and risk monitoring.',
    overview: 'A broiler farm management platform combining secure operational records, simulated environmental telemetry, analytics and exportable reporting.',
    problem: 'Farm operations require reliable monitoring, controlled access and timely identification of environmental and mortality risk.',
    approach: 'Combine encrypted storage, role-based access, audit trails, telemetry simulation, anomaly detection and operational dashboards in one desktop workflow.',
    implementation: ['Encrypted storage and credential rotation', 'Role-based access control and audit trails', 'Multithreaded environmental telemetry simulator', 'KPI reporting and PDF or CSV exports', 'Anomaly detection and mortality-risk scoring'],
    methods: ['Secure software design', 'Telemetry analytics', 'Anomaly detection', 'Risk scoring'], models: ['Anomaly detection models'], datasets: ['Simulated environmental telemetry'],
    technologies: ['Python', 'SQLCipher', 'RBAC', 'Data analytics'], architecture: [
      { id: 'capture', name: 'TELEMETRY', description: 'Environmental signals', detail: 'A multithreaded simulator produces operational farm telemetry.' },
      { id: 'secure', name: 'SECURE STORE', description: 'Encrypted records', detail: 'Encrypted storage, controlled access and audit trails protect operational data.' },
      { id: 'analyse', name: 'ANALYSE', description: 'Risk and KPI processing', detail: 'Analytics identify anomalies, operational patterns and mortality risk.' },
      { id: 'report', name: 'REPORT', description: 'Dashboard and exports', detail: 'Dashboards and PDF or CSV exports support review and decision making.' },
    ],
    featured: true,
    visuals: [{ type: 'image', src: '/projects/archive/bio_opt_project.jpg', alt: 'Smart poultry farm management platform visual', caption: 'Secure telemetry, analytics and operational reporting workflow.', aspect: 'landscape' }],
  },
];

// Curated archive of genuine earlier work : distinct from the featured six.
// Years are intentionally omitted where unverified rather than guessed.
export const SECONDARY_PROJECT_ARCHIVE: ArchiveProject[] = [
  { title: 'Digital Health AI for Autism Spectrum Disorder', domain: 'BSc Dissertation / Applied AI / health', summary: 'A digital health system for identifying and tracking adult autism indicators through questionnaires, language analysis and eye-tracking evidence.', implementation: ['Built notes analysis with a bidirectional LSTM over text embeddings', 'Trained a Random Forest eye-tracking classifier with approximately 77% accuracy and 0.81 AUC', 'Added transformer sentiment and intent analysis for social feedback', 'Designed encrypted AWS deployment and consent flows with GDPR considerations'], technologies: ['LSTM', 'Random Forest', 'NLP', 'Eye tracking', 'AWS'], github: 'https://github.com/AyeshaRahman2002/Digital-Health-ASD', report: { label: 'BSc dissertation report', url: '/documents/projects/digital-health-asd-report.pdf' } },
  { title: 'Multi-Modal CNN-RNN Visual Recognition & Captioning', domain: 'Multimodal ML', summary: 'An end-to-end visual recognition and image captioning pipeline connecting convolutional image features with sequence generation.', implementation: ['Built a CNN visual feature extractor and RNN caption decoder in PyTorch', 'Optimised TinyImageNet30 classification with augmentation, dropout and hyperparameter tuning', 'Used transformer-derived embeddings to improve caption representation', 'Evaluated with confusion matrices, ROC curves and Kaggle benchmarking'], technologies: ['CNN', 'RNN', 'PyTorch', 'Transfer learning'] },
  { title: 'Autonomous Navigation & Detection for Spacecraft', domain: 'Robotics / vision', summary: 'A ROS2 navigation system combining perception, obstacle avoidance, planet recognition and motion control for a simulated spacecraft module.', implementation: ['Built sign and window detection using HSV masks and contour analysis', 'Implemented obstacle avoidance with LaserScan and dual PID controllers', 'Trained a ResNet18 planet classifier and created panorama stitching', 'Proposed LaserScan stretching for unreliable LiDAR streams'], technologies: ['ROS2', 'ResNet18', 'PID control', 'OpenCV'], github: 'https://github.com/AyeshaRahman2002/PlanetDetection', report: { label: 'Report', url: '/documents/projects/spacecraft-navigation-report.pdf' } },
  { title: 'Bio-Inspired Optimisation for Neural Network Training', domain: 'Machine learning', summary: 'A comparative study of evolutionary optimisers for direct neural network weight and architecture optimisation.', implementation: ['Compared PSO, MPA and an LM-enhanced MPA hybrid with Adam', 'Evaluated six benchmark functions and breast cancer classification', 'Encoded architecture and weights in an extendable optimisation genome', 'Analysed convergence behaviour across smooth and rugged landscapes'], technologies: ['PSO', 'Marine Predators', 'Python'], github: 'https://github.com/AyeshaRahman2002/bio-inspired-optimization', report: { label: 'Report', url: '/documents/projects/bio-inspired-optimisation-report.pdf' } },
  { title: 'xv6 Memory Management (malloc, free, rqstMem)', domain: 'Operating systems', summary: 'A low-level memory allocation extension for xv6 on RISC-V, covering heap growth, allocation, release and block coalescing.', implementation: ['Implemented malloc and free with a circular free list', 'Coalesced adjacent free blocks to reduce fragmentation', 'Added rqstMem using page-sized sbrk increments', 'Tested zero-size, null and boundary cases and documented complexity'], technologies: ['C', 'RISC-V', 'xv6'], github: 'https://github.com/AyeshaRahman2002/MemoryManagement-C', report: { label: 'Report', url: '/documents/projects/xv6-memory-management-report.pdf' } },
  { title: 'Interactive 3D Rendering Application', domain: 'Graphics', summary: 'A shader-based interactive scene with textured terrain, instanced geometry, an animated rocket and real-time camera control.', implementation: ['Built an OpenGL pipeline for OBJ terrain and orthophoto texturing', 'Implemented Blinn-Phong lighting and first-person camera movement', 'Modelled and animated a multi-part rocket from reusable primitives', 'Profiled GPU timing and validated matrix operations with Catch2'], technologies: ['OpenGL', 'GLSL', 'C++', 'Blinn-Phong'], github: 'https://github.com/AyeshaRahman2002/ComputerGraphics_3D_Rendering', report: { label: 'Report', url: '/documents/projects/3d-rendering-report.pdf' } },
  { title: '2D Rendering Application', domain: 'Graphics', summary: 'An interactive software renderer implementing core rasterisation, clipping and geometric transformation algorithms.', implementation: ['Implemented Bresenham and DDA line drawing', 'Built scanline polygon filling and Sutherland-Hodgman clipping', 'Added translation, rotation and scaling with homogeneous matrices', 'Supported mouse selection, gradients, colour interpolation and concave polygons'], technologies: ['C++', 'OpenGL', 'Rasterisation'], github: 'https://github.com/AyeshaRahman2002/ComputerGraphics-2d-Rendering', report: { label: 'Report', url: '/documents/projects/2d-rendering-report.pdf' } },
  { title: 'Sentiment-to-Stock Movement Classification', domain: 'NLP / finance', summary: 'A classifier connecting online product sentiment with stock price movement around product release windows.', implementation: ['Processed social text with tokenisation, negation tagging, Word2Vec and TF-IDF', 'Compared Logistic Regression, SVM, Random Forest, Naive Bayes and J48', 'Created popularity-weighted daily sentiment indices', 'Linked sentiment with pre-release and post-release return deltas'], technologies: ['NLP', 'SVM', 'Word2Vec'], report: { label: 'Report', url: '/documents/projects/sentiment-stock-report.pdf' } },
  { title: 'Olympic Medal Data Visualisation', domain: 'Information visualisation', summary: 'An interactive analysis of Summer Olympic medal patterns from 1896 to 2020, evaluated through a timed user study.', implementation: ['Built Flask-powered line, bar and area visualisations', 'Designed country and era comparisons for interactive exploration', 'Ran timed comprehension tasks with ten participants', 'Measured more than 90% overall answer accuracy and chart-specific response times'], technologies: ['Flask', 'D3.js', 'Python'], github: 'https://github.com/AyeshaRahman2002/InfoVis-MedalAnalysis', report: { label: 'Report', url: '/documents/projects/olympic-medal-visualisation-report.pdf' } },
  { title: 'GreenMyCloud: Carbon Footprint Monitoring', domain: 'Software systems / sustainability', summary: 'A multi-device carbon monitoring concept for smartphone, IoT, cloud and general online activity.', implementation: ['Aggregated daily and yearly emissions across devices', 'Designed device-level graphs, comparison tables and purchase guidance', 'Added multilingual and colour-blind-friendly interface concepts', 'Specified encrypted sessions and password-protected accounts'], technologies: ['Web application', 'IoT', 'Data visualisation', 'Accessible design'], report: { label: 'Report', url: '/documents/projects/greenmycloud-report.pdf' } },
  { title: 'Video Editing Application', domain: 'HCI / systems', summary: 'A C++ desktop editor designed around modular media operations, accessible controls and immediate visual feedback.', implementation: ['Implemented trim, split, merge, filters, transitions and text overlays', 'Designed a multi-track timeline with drag-and-drop media', 'Added real-time preview, keyboard navigation and screen-reader labels', 'Separated MediaIO, TimelineCore, EffectsEngine and PreviewRenderer modules'], technologies: ['C++', 'UI/UX', 'Real-time preview'], github: 'https://github.com/AyeshaRahman2002/VideoEditingApplication', video: 'https://youtu.be/fnO9mHOX-lA', report: { label: 'UI report', url: '/documents/projects/video-editing-ui-report.pdf' } },
  { title: 'Sports Management Web Application', domain: 'Web systems', summary: 'A full-stack sports centre platform for memberships, programmes, bookings, events and operational communication.', implementation: ['Built Flask and SQLAlchemy data and service layers', 'Added Flask-Login authentication, bcrypt and CSRF protection', 'Implemented seat availability and booking conflict checks', 'Created admin CRUD workflows, CSV exports and email reminders'], technologies: ['Flask', 'SQLAlchemy', 'Python', 'Authentication'], github: 'https://github.com/AyeshaRahman2002/SportsManagementSystem' },
  { title: 'Assessment To-Do Application', domain: 'Web systems', summary: 'A secure coursework manager for organising assessments by deadline, priority, label and completion state.', implementation: ['Built create, edit and delete task workflows with Flask and SQLAlchemy', 'Added per-user authentication and secure sessions', 'Implemented search, filters, keyboard shortcuts and status transitions', 'Used CSRF protection, bcrypt, Bootstrap and ARIA labels'], technologies: ['Flask', 'SQLite', 'Auth', 'Bootstrap'] , github: 'https://github.com/AyeshaRahman2002/Coursework-Management-Application' },
  { title: 'Aarogya Setu vs. COVIDSafe: Comparative Analysis', domain: 'HCI / privacy', summary: 'A comparative HCI and privacy study of two national contact-tracing applications and their contrasting adoption models.', implementation: ['Compared Bluetooth plus GPS collection with Bluetooth-only tracing', 'Assessed mandatory and voluntary adoption tradeoffs', 'Evaluated transparency, privacy and critical-mass limitations', 'Proposed decentralisation, clearer communication and iterative updates'], technologies: ['UX research', 'Comparative study', 'Privacy analysis'], report: { label: 'Slides', url: '/documents/projects/covid-apps-comparison.pdf' } },
  { title: 'Use of AI in Psychological Treatments', domain: 'Health / research', summary: 'A research review of AI-supported psychological treatment, including VR exposure, internet-delivered CBT and conversational systems.', implementation: ['Reviewed evidence for depression and anxiety interventions', 'Examined chatbots for psychoeducation, mood tracking and skills rehearsal', 'Analysed empathy, over-reliance and patient safety limitations', 'Defined the continuing need for clinician oversight'], technologies: ['Research paper', 'NLP', 'CBT', 'VR therapy'], report: { label: 'Report', url: '/documents/projects/ai-in-psychological-treatments.pdf' } },
  { title: 'Lyft Back-End Engineering (Forage)', domain: 'Systems', summary: 'A modular serviceability simulator that applies object-oriented design patterns to vehicle maintenance decisions.', implementation: ['Modelled multiple engine, battery and tyre families', 'Used the Factory pattern to assemble vehicle variants', 'Defined a shared Serviceable interface and delegated status decisions', 'Built comprehensive unit tests through a four-stage implementation'], technologies: ['Python', 'OOP', 'Factory pattern', 'Unit testing'], github: 'https://github.com/AyeshaRahman2002/lyft' },
  // TODO: Verify the Smart Poultry Farm Management project year.
  { title: 'Smart Poultry Farm Management', domain: 'Software systems', summary: 'An AI-assisted farm management application combining environmental monitoring, predictive analytics and simulation.', implementation: ['Modelled mortality risk, feed optimisation and growth forecasting', 'Processed temperature, humidity, consumption and flock-weight telemetry', 'Built a simulator for operational what-if analysis', 'Connected monitoring, predictions and reporting in a desktop workflow'], technologies: ['Python', 'Machine learning', 'Simulation', 'Desktop application'] },
  { title: 'Hotel Price Data Scraping Tool', domain: 'Finance / automation', summary: 'A configurable tool for collecting hotel pricing and availability data into analyst-ready Excel outputs.', implementation: ['Extracted room prices, room types, availability and breakfast options', 'Used city-specific Excel configuration for target pages and selectors', 'Built a GUI for directories, date ranges and live status logs', 'Documented robots.txt, throttling and site-change risks'], technologies: ['Python', 'Web scraping', 'Excel', 'GUI'], report: { label: 'Proposal', url: '/documents/projects/hotel-scraping-proposal.pdf' } },
  { title: 'Flights Price Data Scraping Tool', domain: 'Finance / automation', summary: 'A browser-automated pricing collector for flights, schedules, carriers, stops and duration data.', implementation: ['Automated Google Flights navigation with Playwright and Chromium', 'Parsed results into structured Excel records', 'Built a tkinter interface for journey, city and date inputs', 'Documented rate limits, site terms and blocking risks'], technologies: ['Python', 'Playwright', 'Excel', 'GUI'], report: { label: 'Proposal', url: '/documents/projects/flights-scraping-proposal.pdf' } },
];

export const ARTWORKS: Artwork[] = [
  {
    id: 'india-window-01', slug: 'india-through-a-window-i',
    title: 'Punjab', medium: 'Acrylic on canvas',
    category: 'India Through a Window / Realism',
    description: 'Punjab is seen from inside a working tractor: fields, patterned textiles, agricultural machinery and a distant gurdwara place the viewer within the movement of rural life.',
    image: '/art/originals/india-through-a-window-01.jpg', featured: true, accent: '#b62f22',
  },
  {
    id: 'india-window-02', slug: 'india-through-a-window-ii',
    title: 'Rajasthan', medium: 'Acrylic on canvas',
    category: 'India Through a Window / Realism',
    description: 'Rajasthan is viewed through an ornate architectural opening. A long market street draws the eye between closely layered façades, people and warm stone.',
    image: '/art/originals/india-through-a-window-02.jpg', featured: true, accent: '#9b7337',
  },
  {
    id: 'india-window-03', slug: 'india-through-a-window-iii',
    title: 'Kashmir', medium: 'Acrylic on canvas',
    category: 'India Through a Window / Realism',
    description: 'Kashmir pairs an intimate still life with a mountain view. Textiles, metalwork, flowers and tea hold the foreground against water, forest and cool blue peaks.',
    image: '/art/originals/india-through-a-window-03.jpg', featured: true, accent: '#6459a7',
  },
  {
    id: 'india-window-04', slug: 'india-through-a-window-iv',
    title: 'Kerala', medium: 'Acrylic on canvas',
    category: 'India Through a Window / Realism',
    description: 'Kerala opens from a richly detailed interior onto palm-lined backwaters and a houseboat. Reflected light connects the domestic foreground to the landscape beyond.',
    image: '/art/originals/india-through-a-window-04.jpg', featured: true, accent: '#16756f',
  },
  {
    id: 'rewind-room', slug: 'rewind-the-room',
    title: 'Rewind the Room', medium: 'Acrylic on canvas',
    category: 'Independent Work / Still Life',
    description: 'A nostalgic still life built around a cassette, boombox, records, books and houseplants. The room becomes an archive of sound and touch, holding the physical rituals of listening before everything became instant.',
    image: '/art/originals/rewind-the-room.jpg', featured: true, accent: '#bd6437',
  },
  {
    id: 'bridgerton-inspired', slug: 'bridgerton-inspired',
    title: 'Bridgerton Inspired', medium: 'Acrylic on canvas',
    category: 'Independent Work / Figurative',
    description: 'A Bridgerton-inspired ballroom scene in violet, gold and warm umber. The entering couple draws the viewer into a theatrical room shaped by chandeliers, sweeping architecture and the quiet spectacle of a crowd.',
    image: '/art/originals/bridgerton-inspired.jpg', featured: true, accent: '#6f4592',
  },
];

// Sketchbook studies/process notes. Intentionally empty until genuine assets exist.
export const SKETCHBOOK: SketchbookItem[] = [];

/**
 * Deliberate ordering for the About page's professional chronology. Research
 * (CyberSaR) leads because the About narrative is research-first; this is
 * intentional and not an accident of array order in EXPERIENCE.
 */
export const ABOUT_CHRONOLOGY_ORDER = ['cybersar', 'palmate', 'outlier', 'uti'] as const;

export const SKILL_CATEGORIES: SkillCategory[] = [
  { category: 'AI / Machine Learning', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'Deep Learning', 'Computer Vision', 'Time-Series Forecasting'] },
  { category: 'Trust / Security', items: ['Zero Trust', 'IAM', 'Behavioural Authentication', 'Federated Learning', 'Differential Privacy', 'Explainable AI', 'Threat Modelling'] },
  { category: 'Software / Systems', items: ['Python', 'C++', 'TypeScript', 'FastAPI', 'Flask', 'React', 'PostgreSQL'] },
  { category: 'Cloud / Infrastructure', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'] },
  { category: 'Edge / Robotics', items: ['ROS2', 'OpenCV', 'SLAM', 'LiDAR', 'Jetson'] },
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Security, Compliance and Identity Fundamentals', issuer: 'Microsoft', tier: 'Primary', group: 'Cloud & Security' },
  { title: 'Azure AI Fundamentals', issuer: 'Microsoft', tier: 'Primary', group: 'Cloud & Security' },
  { title: 'Azure Fundamentals', issuer: 'Microsoft', tier: 'Primary', group: 'Cloud & Security' },
  { title: 'Python for Everybody Specialization', issuer: 'University of Michigan', tier: 'Additional study', group: 'Programming & CS' },
  { title: 'Computational Thinking for Problem Solving', issuer: 'University of Pennsylvania', tier: 'Additional study', group: 'Programming & CS' },
  { title: 'IBM Skills Network (coursework)', issuer: 'IBM', tier: 'Additional study', group: 'Programming & CS' },
  { title: 'Global Financial Markets and Instruments', issuer: 'Rice University', tier: 'Additional study', group: 'Finance' },
  { title: 'Fundamentals of Finance', issuer: 'University of Pennsylvania', tier: 'Additional study', group: 'Finance' },
  { title: 'Introduction to Corporate Finance', issuer: 'University of Pennsylvania', tier: 'Additional study', group: 'Finance' },
  { title: 'Introduction to Finance: The Basics', issuer: 'University of Illinois Urbana-Champaign', tier: 'Additional study', group: 'Finance' },
  { title: 'Blockchain Transformations of Financial Services', issuer: 'INSEAD', tier: 'Additional study', group: 'Blockchain & Web3' },
  { title: 'Blockchain, Cryptoassets, Decentralized Finance', issuer: 'INSEAD', tier: 'Additional study', group: 'Blockchain & Web3' },
  { title: 'Introduction to Blockchain for Financial Services', issuer: 'INSEAD', tier: 'Additional study', group: 'Blockchain & Web3' },
  { title: 'Foundations of User Experience (UX) Design', issuer: 'Google', tier: 'Additional study', group: 'UX / Design' },
  { title: 'Back-End Engineering Virtual Experience', issuer: 'Lyft (Forage)', tier: 'Additional study', group: 'Virtual experience' },
  { title: 'Visa Token Service Technology Virtual Experience', issuer: 'Visa (Forage)', tier: 'Additional study', group: 'Virtual experience' },
  { title: 'Technology in Banking Virtual Program', issuer: 'Commonwealth Bank Australia (Forage)', tier: 'Additional study', group: 'Virtual experience' },
];

/**
 * Full verified technical index : used behind a `skills --all` disclosure so the
 * curated SKILL_CATEGORIES stay the primary view (no giant pill wall).
 */
export const FULL_TECHNICAL_INDEX: SkillCategory[] = [
  { category: 'ML / Data', items: ['PyTorch', 'TensorFlow / Keras', 'scikit-learn', 'Pandas', 'NumPy', 'Hugging Face Transformers', 'ONNX / TorchScript', 'OpenVINO / TF Lite', 'Quantization (INT8/FP16)', 'LoRA / QLoRA', 'NLP & Sentiment Analysis', 'Time-Series Forecasting', 'Feature Engineering', 'Matplotlib / Plotly', 'TSFresh', 'Walk-Forward Validation', 'Hyperparameter Tuning', 'BERTScore / ROUGE-L'] },
  { category: 'Models', items: ['ARIMA / SARIMA / ARIMAX / SARIMAX', 'VAR / ARDL', 'Random Forest', 'Decision Tree', 'Isolation Forest', 'MARS', 'XGBoost / LightGBM / CatBoost', 'RNN / GRU / LSTM', 'Transformer', 'CNN', 'GNN', 'N-HiTS / N-BEATSx / TiDE', 'TFT / TCN', 'MLP', 'AutoEncoder / VAE / VFAE', 'Temporal AutoEncoder', 'ResNet18', 'NeRF / Nerfstudio', 'BLIP / CLIP', 'MiniLM', 'FLAN-T5', 'PSO / MPA / LM-IMPA'] },
  { category: 'Privacy & Federated AI', items: ['Federated Learning (FedAvg / FedProx)', 'Differential Privacy (DP-SGD)', 'SHAP', 'LIME', 'Welford Online Statistics', 'Privacy-Preserving ML', 'Gradient Clipping & Noise Injection', 'GDPR in ML', 'Data Anonymisation / Pseudonymisation', 'Non-IID Federated Training'] },
  { category: 'Security & IAM', items: ['Zero Trust Architecture', 'OAuth2 / SSO', 'RBAC / ABAC', 'Active Directory', 'JWT / Session Management', 'Behavioural Biometrics', 'Risk-Based Authentication', 'Anomaly Detection (IAM)', 'Device Fingerprinting', 'GeoIP / Impossible Travel', 'Adversarial Simulation / Fuzzing', 'SOC Integration', 'Threat Intelligence Enrichment', 'SQLCipher / Key Isolation', 'Audit Logging / NDJSON Export', 'OWASP Secure Development', 'Argon2id / Bcrypt', 'TLS / Certificate Pinning', 'Rate Limiting / Abuse Guards', 'CORS / Security Headers', 'Input Validation'] },
  { category: 'Agentic AI', items: ['LangChain', 'FAISS Vector Store', 'RAG Pipelines (Dense + Hybrid)', 'Multi-Agent Frameworks', 'Tool Calling', 'Short-Term / Episodic Memory', 'Hallucination Guards', 'Agentic Reasoning Loops', 'Multimodal Retrieval (BLIP / CLIP)', 'Prompt Engineering & Evaluation'] },
  { category: 'Frameworks', items: ['Flask', 'FastAPI', 'React', 'Node.js / Express', 'Streamlit', 'Vite', 'SQLAlchemy', 'REST APIs', 'Web Scraping (Playwright / BS4 / Selenium)', 'Flutter', 'OpenGL / GLSL', 'Odoo ERP', 'n8n Workflow Automation'] },
  { category: 'Languages', items: ['Python', 'JavaScript / TypeScript', 'C / C++', 'Java', 'SQL', 'Bash', 'HTML / CSS', 'Prolog'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis', 'Vector DB (FAISS)'] },
  { category: 'Cloud & Platform', items: ['AWS (EC2, S3, Lambda, CloudFront, IAM)', 'Azure (Compute / ML Endpoints)', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions (CI/CD)', 'Linux / Bash Administration'] },
  { category: 'DevOps & Tools', items: ['Git / GitHub / GitLab', 'Jupyter / Notebooks', 'VS Code / IntelliJ', 'Postman', 'Anaconda / venv', 'Chrome DevTools', 'Makefile Orchestration', 'pytest / unittest'] },
  { category: 'Edge & Robotics', items: ['ROS2', 'LiDAR-Camera Fusion', 'PID Control', 'SLAM', 'OpenCV', 'NVIDIA Jetson / Intel Movidius', 'Gazebo / RViz', 'COLMAP'] },
  { category: 'Finance & Analytics', items: ['Financial Statement Analysis', 'Cash Flow Forecasting', 'Market Trend / Equity Research', 'Data-Driven Financial Models', 'Portfolio Analysis'] },
  { category: 'Methods & Practices', items: ['Agile / Scrum / Kanban', 'TDD / BDD', 'CI/CD Pipelines', 'OOP / SOLID Design Patterns', 'API Design / Versioning', 'Security / Privacy by Design', 'Performance Profiling / Optimisation', 'ML Reproducibility / Experiment Tracking', 'Code Review / Pair Programming', 'Technical Documentation'] },
];

// Article bodies migrated verbatim from the previous portfolio (surface typos
// corrected only). Ordered newest-first.
export const NOTE_ARTICLES: NoteArticle[] = [
  {
    slug: 'cybersecurity-through-ai-risk-aware-system',
    title: 'Exploring Cybersecurity through AI and Building a Risk-Aware System',
    date: '2025-10-11',
    readingMins: 7,
    tags: ['Cybersecurity', 'Adaptive Security', 'Risk Intelligence', 'Identity', 'Explainable AI'],
    summary: 'How a finance app became a study in adaptive, explainable, risk-aware security.',
    body: [
      { type: 'p', text: `My introduction to cybersecurity did not start from encryption algorithms or network firewalls. It began with a simple question: can an app understand the risk behind every login and transaction, instead of treating all users the same? That question led me into the intersection of AI and security, where systems learn to recognize context, adapt behavior, and make decisions that are both explainable and fair.` },
      { type: 'h3', text: `Learning security by building it` },
      { type: 'p', text: `I started by designing a finance app that went beyond managing budgets. The goal was to make it aware of its own users and their risk profiles. Using Flutter for the frontend and FastAPI for the backend, I built a small ecosystem where every login, transaction, and device connection became part of a larger learning loop. I implemented adaptive authentication, geo-intelligence, and device trust using lightweight scoring models. Over time, this evolved into a complete Security Center inside the app.` },
      { type: 'h3', text: `How AI fits into security` },
      { type: 'p', text: `AI came in where rules stopped being enough. I trained contextual models that analyzed login behavior, transaction frequency, and device consistency to calculate a dynamic risk score. Instead of labeling users as safe or unsafe, the system evaluated intent, time, and context. It surfaced why a login was flagged, using explainable AI methods so that the user could see the reason behind every alert. This transparency became the bridge between security and trust.` },
      { type: 'h3', text: `Challenges that shaped my understanding` },
      { type: 'p', text: `I learned quickly that cybersecurity is as much about restraint as detection. Collecting every possible signal may look powerful, but it also risks privacy and interpretability. I focused on designing clear audit trails and transparent scoring mechanisms. The hardest part was building a risk system that was both proactive and respectful : strong enough to detect anomalies yet simple enough for the user to understand.` },
      { type: 'h3', text: `Simulating real threats` },
      { type: 'p', text: `To evaluate my system, I tested adversarial patterns such as rapid login attempts from similar networks, inconsistent device identifiers, and location spoofing. These tests helped refine my anomaly detection logic and improve the system's explainability layer. Each test was less about catching an intruder and more about understanding how adaptive systems should respond to uncertainty.` },
      { type: 'h3', text: `What this journey taught me` },
      { type: 'ul', items: [
        `AI in security should explain, not just decide.`,
        `Privacy is a feature, not an afterthought.`,
        `Users trust systems that are transparent and reversible.`,
        `Small context-aware models outperform rigid rule engines.`,
        `Every alert should lead to insight, not panic.`,
      ] },
      { type: 'h3', text: `Looking forward` },
      { type: 'p', text: `My next step is to expand the adaptive scoring into a continuous learning loop that adjusts risk thresholds over time. I also plan to integrate behavioral analytics that can learn from new devices and travel patterns without storing sensitive personal data. What started as a finance app experiment has grown into a real appreciation for the balance between intelligence, transparency, and user control in modern cybersecurity.` },
      { type: 'p', text: `This journey taught me that security is not just a backend feature : it is a conversation between a user, their context, and a system that learns to protect them intelligently.` },
    ],
  },
  {
    slug: 'ai-in-finance',
    title: 'The Role of Artificial Intelligence in Finance',
    date: '2025-05-22',
    readingMins: 7,
    tags: ['Finance', 'AI', 'Forecasting', 'NLP', 'Security', 'Blockchain'],
    summary: 'From inflation forecasting to sentiment and secure delivery, where AI creates value in finance.',
    body: [
      { type: 'p', text: `Artificial intelligence has become one of the most valuable tools in modern finance. From forecasting trends to detecting fraud, AI helps institutions make faster and smarter decisions with stronger security. For recruiters the appeal is not only technical depth but direct impact on profit, risk control, and customer trust.` },
      { type: 'h3', text: `Smarter Forecasting and Investment Decisions` },
      { type: 'p', text: `Markets are complex and influenced by many variables. Traditional models can miss these dynamics, while AI brings stronger predictive power. I built forecasting models for United States inflation using deep learning architectures such as LSTM, GRU, and N-BEATS. With robust data pipelines, feature checks, and validation across multiple horizons, the models delivered accurate forecasts that informed macro views and asset allocation. This shows practical skill in bringing AI to real economic problems with precision.` },
      { type: 'h3', text: `Automating Data Collection and Analysis` },
      { type: 'p', text: `Decisions are only as good as the data that supports them. During my role as an Equity Research Analyst at UTI Mutual Fund I created automated scraping tools to gather structured datasets such as hotel prices and flight costs. These tools reduced manual effort by thirty percent and gave analysts richer inputs for coverage and valuation work. The result was a faster research loop that combined AI with automation to support data driven strategies.` },
      { type: 'h3', text: `AI in Market Sentiment Analysis` },
      { type: 'p', text: `Public opinion and investor mood shape price action. Using natural language methods and classification models, AI can track sentiment in news and social streams and relate those signals to movement in equities. I built a sentiment system that linked crowd opinion with discretized stock price moves, which created a clear feature for tactical models used by traders and fintech products.` },
      { type: 'h3', text: `Fraud Detection and Security` },
      { type: 'p', text: `Protecting customers and platforms is essential. Learning models can flag unusual patterns in transactions and detect fraud in real time. My background in security and privacy, including Microsoft Security Compliance and Identity certification, guides my approach to AI solutions that respect regulation and earn trust. I design systems that keep data safe while supporting practical monitoring and audit.` },
      { type: 'h3', text: `Blockchain and Decentralized Finance` },
      { type: 'p', text: `The next frontier is the meeting point of AI and blockchain. Through academic and industry training I explored blockchain transformation in financial services and the rise of decentralized finance. Bringing AI to this space enables secure digital identity, risk scoring, and smarter settlement. These building blocks support inclusive financial ecosystems that scale across regions.` },
      { type: 'h3', text: `Looking Ahead` },
      { type: 'p', text: `Finance is changing quickly and AI is at the center of this shift. From inflation prediction to automated analysis and stronger compliance, AI is redefining how institutions operate. Recruiters need builders who combine strong engineering with a deep understanding of financial workflows. My experience across equity research, forecasting, sentiment modeling, and secure AI delivery positions me to contribute to teams that bridge technology and strategy.` },
      { type: 'p', text: `The future will favor organizations that adopt AI responsibly and professionals who can turn models into decisions that create value for clients and stakeholders.` },
    ],
  },
  {
    slug: 'ai-in-healthcare',
    title: 'The Role of Artificial Intelligence in Transforming Healthcare',
    date: '2025-05-21',
    readingMins: 7,
    tags: ['Healthcare', 'AI', 'Security', 'Cloud', 'Ethics'],
    summary: 'Diagnosis, privacy by design, personalization and responsible innovation in health AI.',
    body: [
      { type: 'p', text: `Artificial intelligence is no longer a futuristic idea in healthcare. It is already driving progress in diagnostics, treatment, and patient care. For recruiters and industry leaders, the real value of AI is not only the technical lift but the ability to solve challenges around access, efficiency, and security in modern health systems.` },
      { type: 'h3', text: `Smarter and Earlier Diagnosis` },
      { type: 'p', text: `AI excels at finding patterns in complex data. Learning models can study medical images, patient behavior, or even speech and text to flag early signs of conditions that might be missed during routine care. In my work I designed a digital health prototype that used learning models with eye tracking and natural language methods to support assessment for Autism Spectrum Disorder in adults. The goal was to give clinicians support tools that raise speed and reliability while keeping a patient friendly design.` },
      { type: 'h3', text: `Data Security and Privacy by Design` },
      { type: 'p', text: `Health innovation does not work without trust. Sensitive records require strong safeguards, and AI systems should follow privacy first principles from the start. During development of health focused apps I implemented encrypted storage, secure sign in, and data anonymization. These choices were not just checkboxes. They were core parts of building solutions that patients and clinicians can adopt with confidence. For recruiters this shows an ability to align advanced AI work with compliance, security, and ethical standards.` },
      { type: 'h3', text: `Personalization Through Data` },
      { type: 'p', text: `Beyond diagnosis, AI can tailor treatment to each person. Deep models can blend lifestyle data, genetic information, and medical history to recommend options that improve outcomes. My background with predictive modeling and time series forecasting shows how a data driven approach that I used in finance can extend to healthcare as well. The craft is to build, validate, and deploy models at scale so providers can deliver care that is precise and impactful.` },
      { type: 'h3', text: `Scalable and Reliable Systems` },
      { type: 'p', text: `Health apps must serve diverse populations. By deploying on cloud platforms such as AWS and Azure I ensured secure delivery and resilience during heavy use. This foundation makes apps available not only in large medical centers but also in communities with limited resources, which expands reach and impact.` },
      { type: 'h3', text: `Responsible Innovation` },
      { type: 'p', text: `Opportunity comes with responsibility. Reducing bias, improving transparency, and securing informed consent are as important as raw model performance. Across projects I focus on ethical AI practice, from careful handling of sensitive data to interfaces that support inclusion. For recruiters this reflects a focus on innovation that can last and earn trust.` },
      { type: 'h3', text: `Closing Thoughts` },
      { type: 'p', text: `AI is not here to replace medical professionals. It is here to empower them, reduce workload, improve decisions, and make quality care more widely available. As organizations adopt AI at scale they will look for people who blend strong engineering with privacy and security awareness. With experience across AI, cloud engineering, and data protection I am ready to help health teams deliver solutions that are both innovative and responsible.` },
    ],
  },
  {
    slug: 'my-journey-as-a-cs-student',
    title: 'My journey as a computer science student',
    date: '2025-05-21',
    readingMins: 6,
    tags: ['Journey', 'Student Life', 'CS'],
    summary: 'Starting by breaking things, and learning the build → break → fix loop.',
    body: [
      { type: 'p', text: `I did not start computer science by cracking algorithms. I started by breaking things. My first project was a todo app that deleted everything when I refreshed the page. It was frustrating and it was the moment I realized I love building systems even when they misbehave.` },
      { type: 'p', text: `In my early semesters I focused on the fundamentals: data structures, operating systems, networks, and a lot of debugging. The turning point came when I paired the foundation with projects that felt real, from small web apps and visualizations to machine learning experiments that connected code with people.` },
      { type: 'h3', text: `Why projects mattered more than perfect grades` },
      { type: 'p', text: `Shipping tiny and imperfect projects taught me real tradeoffs. I learned to choose simple designs, write readable code, and iterate. That loop of build → break → fix is where I learned the most.` },
      { type: 'h3', text: `Discovering AI and ML` },
      { type: 'p', text: `My curiosity shifted to machine learning when I realized that models are software with statistics. I enjoyed building preprocessing pipelines, evaluating results, and telling clear stories with data. Finance and health soon became my favorite places to test ideas in the real world.` },
      { type: 'h3', text: `What I built in finance and health` },
      { type: 'p', text: `Finance: I automated data collection for research, explored market sentiment for movement in stock prices, and built time series models for inflation forecasting. The key lesson was that clean data and honest baselines beat clever tricks every time.` },
      { type: 'p', text: `Health: I prototyped a digital support tool for adults with autism that used eye tracking signals and a lightweight NLP game. It taught me that privacy, consent, and clear interfaces matter as much as accuracy, especially when systems support people directly.` },
      { type: 'h3', text: `What I wish I knew sooner` },
      { type: 'ul', items: [
        `Write docs for your future self. Past me is my most frequent collaborator.`,
        `Small daily practice beats weekend marathons.`,
        `Read source code. Frameworks are friendlier than they look.`,
      ] },
      { type: 'h3', text: `Where I am headed` },
      { type: 'p', text: `I want to keep building tools at the intersection of software engineering and AI for finance and health. I care about forecasting under uncertainty, privacy aware data products, and interfaces that explain decisions. This portfolio and this post are part of that journey.` },
      { type: 'p', text: `Thanks for reading. If you are a student starting out, build, share, and repeat.` },
    ],
  },
];
