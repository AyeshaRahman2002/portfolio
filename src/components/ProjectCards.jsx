// Components/ProjectCards.jsx
import ProjectCard from "./ProjectCard";
import inflationProjectPic from "../images/inflation_project.jpg";
import digitalHealthPic from "../images/digital_health_project.jpg";
import sentimentProjectPic from "../images/sentiment_stock_project.jpg";
import hotelProjectPic from "../images/hotel_project.jpg";
import flightsProjectPic from "../images/flights_project.jpg";
import renderingProjectPic from "../images/rendering_project.jpg";
import spaceNavPic from "../images/space_nav_project.jpg";
import bioOptPic from "../images/bio_opt_project.jpg";
import xv6ProjectPic from "../images/xv6_project.jpg";
import psychAIProjectPic from "../images/psych_ai_project.jpg";
import twoDRenderPic from "../images/2d_render_project.jpg";
import covidAppsPic from "../images/covid_apps_project.jpg";
import medalsProjectPic from "../images/medals_project.jpg";
import lyftProjectPic from "../images/lyft_project.jpg";
import greenMyCloudPic from "../images/greenmycloud_project.jpg";
import videoEditingPic from "../images/video_editing_project.jpg";
import sportsMgmtPic from "../images/sports_mgmt_project.jpg";
import todoProjectPic from "../images/assessment_todo_project.jpg";
import multimodalPic from "../images/multimodal_project.jpg";
import trustAIPic from "../images/trustworthy_ai_finance.jpg";
import mlLoopPic from "../images/mlloopoptselector.jpg";
import llmResearchPic from "../images/llm_research_project.jpg";
// Placeholder images for projects without dedicated images yet
const poultryPic = bioOptPic;
const nerfPic = multimodalPic;
const simMindPic = psychAIProjectPic;

import inflationGroupReport from "../assets/Inflation_Forecasting_with_Machine_Learning_Models__Group_Report.pdf";
import inflationIndividualReport from "../assets/Inflation_Forecasting_with_Machine_Learning_Models__Individual_Report.pdf";
import digitalHealthReport from "../assets/Digital_Health_ASD_Report.pdf";
import dataMiningReport from "../assets/DataMiningProjectReport.pdf";
import hotelProposal from "../assets/ProjectProposal-Hotels.pdf";
import flightsProposal from "../assets/ProjectProposal-Flights.pdf";
import graphicsReport from "../assets/GraphicsCW.pdf";
import roboticsReport from "../assets/Robotics.pdf";
import bioOptReport from "../assets/bio-inspired-cw2-report.pdf";
import xv6Report from "../assets/xv6MemoryManagement.pdf";
import psychAIReport from "../assets/AIinPsychologicalTreatements.pdf";
import twoDReport from "../assets/RenderingProjectReport.pdf";
import covidSlides from "../assets/AarogyaSetu-vs-COVIDSafe.pdf";
import infoVisReport from "../assets/Info_Vis.pdf";
import greenMyCloudReport from "../assets/GreenMyCloud.pdf";
import uiReport from "../assets/UserInterface.pdf";
import llmResearchPaper from "../assets/LLM_Efficiency_Platform.pdf";

/** --------------------------
 * Small helper
 * -------------------------- */
const has = (text, ...patterns) =>
  patterns.some((p) => new RegExp(p, "i").test(text));

/** --------------------------
 * Inflation project
 * -------------------------- */
const inflationBullets = [
  "Multi-horizon US inflation (PCE Index) forecasting using deep learning and statistical models (N-BEATSx, N-HiTS, GRU, LSTM, SARIMAX, ARDL) across 1, 3, 6 and 12-month windows.",
  "Led implementation of N-BEATSx and N-HiTS with Fourier lag and momentum exogenous features; collaborated in a 7-member team.",
  "Leakage-safe preprocessing pipeline with walk-forward splits, Granger causality feature selection, and Diebold-Mariano significance tests.",
];

/** --------------------------
 * ASD project
 * -------------------------- */
const asdBullets = [
  "AI-driven digital health app for diagnosing and tracking Autism Spectrum Disorder in adults, integrating validated questionnaires and NLP-based social interaction coaching.",
  "Notes tracking with a bidirectional LSTM on text embeddings; eye-tracking classifier (Random Forest, ~77% accuracy, 0.81 AUC) using gaze and pupil features.",
  "Transformer-based sentiment and intent analysis for real-time social feedback; secure AWS deployment with encrypted credentials and GDPR-compliant consent flows.",
];

/** --------------------------
 * Sentiment Stock projects
 * -------------------------- */
const sentimentBullets = [
  "Sentiment-driven stock movement classifier fusing social media text (Amazon, Walmart, Twitter) with historical price changes around product release windows.",
  "NLP pipeline with tokenisation, negation tagging, Word2Vec and TF-IDF features; compared Logistic Regression, SVM, Random Forest, Naive Bayes and J48 with stratified CV.",
  "Daily sentiment index aggregated from post-level polarity with popularity weights, linked to pre/post release return deltas for directional movement prediction.",
];

/** --------------------------
 * Hotel Price Scraper
 * -------------------------- */
const hotelBullets = [
  "Python scraping tool extracting hotel room prices, types, availability and breakfast options into structured Excel datasets for financial analysts.",
  "City-specific Excel configuration for target URLs and HTML classes; GUI for directory selection, date range and real-time status logging.",
  "Ethical scraping with robots.txt compliance, request throttling, and documented risks around site changes and blocking.",
];

/** --------------------------
 * Flights Price Scraper
 * -------------------------- */
const flightsBullets = [
  "Python tool scraping Google Flights prices, schedules, airlines, stops and durations into structured Excel outputs for financial analysts.",
  "Playwright-driven Chromium navigation with LexborHTMLParser for parsing; tkinter GUI for trip type, city and date input.",
  "Responsible scraping with documented rate limits, site terms compliance and guidance on risks including IP blocking.",
];

/** --------------------------
 * 3D Rendering project
 * -------------------------- */
const renderingBullets = [
  "Shader-based OpenGL pipeline rendering an OBJ terrain with first-person camera, orthophoto texturing and instanced launch pads.",
  "Custom rocket model with Blinn-Phong lighting, multi-phase launch animation and GPU timestamp performance profiling.",
  "Matrix and vector math library validated with Catch2 tests; rocket composed of cube, cylinder and cone primitives with transforms.",
];

/** --------------------------
 * Spacecraft Nav project
 * -------------------------- */
const spaceNavBullets = [
  "Autonomous ROS 2 system for spacecraft module navigation: sign detection, obstacle avoidance using LaserScan and dual PID controllers.",
  "Window detection via HSV masks and contour analysis; ResNet18 planet classifier; panorama capture, stitching and inter-planet distance computation.",
  "Proposed LaserScan Stretching to mitigate unreliable LiDAR streams; validated across simulated and real robot environments.",
];

/** --------------------------
 * Bio-Inspired Optimisers project
 * -------------------------- */
const bioOptBullets = [
  "Compared PSO, MPA and an LM-enhanced MPA hybrid against Adam across six benchmark functions and Breast Cancer classification.",
  "Direct neural network weight optimisation without backpropagation; extendable genome evolves both architecture and weights simultaneously.",
  "LM-enhanced MPA showed strongest performance on multimodal rugged landscapes; PSO fastest convergence in early iterations.",
];

/** --------------------------
 * xv6 Memory Management
 * -------------------------- */
const xv6Bullets = [
  "Implemented malloc and free in xv6 RISC-V using a circular free list with coalescing of adjacent free blocks.",
  "Added rqstMem to extend the heap via sbrk with page-sized increments and safety checks for zero-size and null cases.",
  "Documented design tradeoffs, complexity analysis and kernel-level memory behaviour; validated correctness across edge cases.",
];

/** --------------------------
 * AI in Psychological Treatments
 * -------------------------- */
const psychAIBullets = [
  "Research paper examining AI in psychological treatment: VR exposure therapy and internet-delivered CBT for depression and anxiety.",
  "Covers self-help chatbots and virtual agents for psychoeducation, mood tracking and skills rehearsal alongside evidence of effectiveness.",
  "Analyses risks (limited empathy, over-reliance), ethical requirements and the necessity of clinician supervision.",
];

/** --------------------------
 * 2D Rendering project
 * -------------------------- */
const twoDBullets = [
  "Interactive 2D renderer implementing Bresenham and DDA line drawing, scanline polygon filling and Sutherland-Hodgeman clipping.",
  "Translation, scaling and rotation via 3x3 homogeneous matrix math; mouse selection, live controls, color interpolation and gradient fills.",
  "Optimised inner loops for real-time rendering; handles concave polygons with parity rules and basic anti-aliasing.",
];

/** --------------------------
 * Aarogya Setu vs. COVIDSafe
 * -------------------------- */
const covidAppsBullets = [
  "Comparative analysis of Aarogya Setu (India: Bluetooth and GPS, mandatory) and COVIDSafe (Australia: Bluetooth-only, voluntary opt-in).",
  "Evaluated privacy tradeoffs: Aarogya Setu achieved higher adoption but raised data-sharing concerns; COVIDSafe prioritised privacy but failed to reach critical mass.",
  "Proposed improvements including greater transparency, decentralised models, better adoption communication and frequent update cadence.",
];

/** --------------------------
 * Olympic Medal Analysis
 * -------------------------- */
const medalsBullets = [
  "Analysed Summer Olympic medals (1896-2020) with Flask-powered interactive line, bar and area charts comparing countries across eras.",
  "Ran a questionnaire study with timed tasks (10 participants) to evaluate how different chart types aid comprehension.",
  "Overall accuracy above 90%; measurable response time differences between chart types; hosted on PythonAnywhere for user study.",
];

/** --------------------------
 * Lyft System Design (Forage)
 * -------------------------- */
const lyftBullets = [
  "Modular car serviceability simulator using Factory pattern assembling Capulet/Willoughby/Sternman engines, Spindler/Nubbin batteries and Carrigan/Octoprime tires.",
  "Each component implements a Serviceable interface with needs_service() rules; Car delegates to its parts for accurate overall status.",
  "Progressive 4-stage build with comprehensive unit tests covering all components and service criteria end-to-end.",
];

/** --------------------------
 * GreenMyCloud project
 * -------------------------- */
const greenMyCloudBullets = [
  "Carbon footprint monitor tracking smartphone, IoT, cloud and general online usage with device-level emissions graphs and tables.",
  "Multi-device account aggregating daily and yearly emissions; check-before-you-buy device comparison and multi-language support.",
  "Color-blind-friendly graph themes, encrypted sessions, password protection and a 7-day trial; accessible on phones and laptops.",
];

/** --------------------------
 * Video editing app
 * -------------------------- */
const videoEditingBullets = [
  "C++ desktop video editor with trim, split, merge, multi-track timeline, filters, transitions, text overlays and slow-motion effects.",
  "Drag-and-drop media, real-time preview and customisable layouts; screen-reader labels, keyboard shortcuts and large hit-targets for accessibility.",
  "Modular OOP architecture (MediaIO, TimelineCore, EffectsEngine, PreviewRenderer); validated through iterative user testing on large files.",
];

/** --------------------------
 * Sports Management app
 * -------------------------- */
const sportsMgmtBullets = [
  "Python + Flask + SQLAlchemy web app managing sports centre memberships, classes, events, bookings and email notifications.",
  "Flask-Login auth with bcrypt and CSRF protection; dynamic class registration with real-time seat availability and conflict checks.",
  "Admin dashboard for CRUD on programs/events, user management and CSV exports; email reminders via Flask-Mail and SMTP.",
];

/** --------------------------
 * Assessment to do list app
 * -------------------------- */
const todoBullets = [
  "Flask + SQLAlchemy task manager with create/edit/delete, due dates, priority, labels and per-user auth via Flask-Login.",
  "Real-time status flows (Incomplete to In-Progress to Completed) with search, filters by text/priority/label and keyboard shortcuts.",
  "Secure sessions with CSRF protection and bcrypt password hashing; responsive Bootstrap 5 UI with ARIA labels.",
];

/** --------------------------
 * Multi-Modal CNN - RNN project
 * -------------------------- */
const multimodalBullets = [
  "End-to-end pipeline coupling CNN visual feature extraction (ResNet-style) with RNN sequence-based image captioning.",
  "TinyImageNet30 classification optimised via augmentation, dropout and hyperparameter tuning; captioning enhanced with transformer-driven embeddings.",
  "Validated with confusion matrices, ROC curves and Kaggle leaderboard benchmarking; reproducible PyTorch code and results.",
];

/** --------------------------
 * AgenCAT
 * -------------------------- */
const pfmRiskAIBullets = [
  "Ongoing cybersecurity research at KAUST: most security tools stop watching users closely after login, leaving a window where compromised accounts go undetected. AgenCAT continuously monitors post-login behaviour to decide whether to keep trusting a session or step up security.",
  "Builds a live behavioural profile for each user and detects drift , unusual access patterns, lateral movement, suspicious timing , triggering step-up authentication or session blocking when needed.",
  "Designed for real enterprise scale: privacy-preserving across organisations, explainable alerts for security analysts, and evaluated against real attack datasets rather than synthetic proxies.",
];

/** --------------------------
 * ML Loop Optimization Selector
 * -------------------------- */
const mlLoopBullets = [
  "Compiler-assist ML system selecting optimal loop transformations (tile, unroll, vectorize, OpenMP) for kernels like matmul, conv1d and stencil2d.",
  "Combined classical ML (ExtraTrees, RF, GBDT) with GNN-based optimization; LOKO cross-kernel evaluation yielding up to 6.6x median runtime speedup.",
  "Full pipeline: data collection, regret-aware training, LOKO evaluation, SHAP explainability and exportable C headers via Makefile.",
];

/** --------------------------
 * Automated Literature Review & LLM Efficiency Evaluation
 * -------------------------- */
const llmResearchBullets = [
  "CPU-only research assistant automating literature mining, dense retrieval (RAG) and LLM efficiency benchmarking using MiniLM, FLAN-T5-small and FAISS.",
  "Dense and TF-IDF hybrid retrieval achieving nDCG@5=0.85; summarisation stack reaching ROUGE-L=0.18, BERTScore-F1=0.86 across arXiv and Semantic Scholar corpora.",
  "LoRA-based PEFT, KV-cache micro-benchmarks, Streamlit dashboard, Makefile orchestration and a CPU-only Docker image for full reproducibility.",
];

/** --------------------------
 * Smart Poultry Farm Management
 * -------------------------- */
const poultryBullets = [
  "Desktop application for AI-driven smart poultry farm management combining real-time monitoring, predictive health analytics and a built-in farm simulator.",
  "ML models for mortality prediction, feed optimisation and growth forecasting trained on farm telemetry (temperature, humidity, weight, consumption).",
  "Simulator module enabling what-if scenario analysis for data-driven flock management decisions without real-world risk.",
];

const poultryResponder = (raw) => {
  const q = raw.trim();
  const m = (...p) => p.some((r) => new RegExp(r, "i").test(q));
  if (m("objective|overview|goal|aim|summary|what")) return "Smart Poultry Farm Management is a desktop AI application for managing poultry farms. It combines real-time monitoring of flock health and environmental conditions with predictive ML analytics and a built-in simulator for scenario planning.";
  if (m("model|ml|predict|forecast|mortality|feed|growth")) return "ML models cover three prediction tasks: mortality risk from health signals, feed consumption optimisation across flock stages, and growth rate forecasting from weight and consumption telemetry. Models are trained on farm sensor data.";
  if (m("simulator|simulation|scenario|what.if")) return "The built-in simulator lets farm managers run what-if scenarios: adjusting feed schedules, temperature, stocking density, or flock size and seeing predicted outcomes before making real changes.";
  if (m("data|telemetry|sensor|temperature|humidity|weight")) return "Input data includes temperature, humidity, feed consumption, water intake, flock weight measurements and mortality counts, aggregated across shed zones.";
  if (m("github|code|repo")) return "Repository details are not yet public.";
  return "Ask about the objective, ML models, simulator, sensor data, or tech stack.";
};

/** --------------------------
 * Neural Reconstruction of Heritage Artifacts (NeRF)
 * -------------------------- */
const nerfBullets = [
  "3D reconstruction of cultural heritage artifacts using Neural Radiance Fields (NeRF) combined with Vision-Language models for semantic understanding and automated annotation.",
  "Agentic AI pipeline for multi-view consistency checking, artifact quality assessment and intelligent scene decomposition.",
  "High-fidelity 3D representations enabling digital preservation, interactive museum-quality visualisation and virtual access to physical artifacts.",
];

const nerfResponder = (raw) => {
  const q = raw.trim();
  const m = (...p) => p.some((r) => new RegExp(r, "i").test(q));
  if (m("objective|overview|goal|aim|summary|what")) return "This project reconstructs cultural heritage artifacts in 3D using Neural Radiance Fields (NeRF). Vision-Language models add semantic understanding and automated annotation, while an Agentic AI pipeline manages quality assessment and scene decomposition for digital preservation use cases.";
  if (m("nerf|radiance|3d|reconstruction|view|render")) return "NeRF learns a continuous volumetric scene representation from multi-view images, enabling novel-view synthesis and high-fidelity 3D reconstructions without explicit mesh modeling. The method captures fine surface detail, material appearance and lighting in a compact neural representation.";
  if (m("vision.language|vlm|annotation|caption|semantic")) return "Vision-Language models (VLM) process the reconstructed scenes to generate semantic labels, artifact descriptions and searchable annotations, enabling museum staff to query the digital collection by content rather than just by image filename.";
  if (m("agent|agentic|pipeline|workflow|automat")) return "The agentic pipeline orchestrates the full workflow: capturing multi-view images, running NeRF training, invoking VLM annotation, performing consistency checks and flagging low-quality regions for re-capture, with minimal manual intervention.";
  if (m("github|code|repo")) return "Repository details are not yet public.";
  return "Ask about the NeRF reconstruction method, Vision-Language annotation, the agentic pipeline, or digital preservation applications.";
};

/** --------------------------
 * SimMind: Cognitive Multi-Agent Simulation Framework
 * -------------------------- */
const simMindBullets = [
  "Cognitive multi-agent simulation framework combining AI Planning with a CPU-level simulator for modeling emergent behavior across intelligent agents.",
  "Agents with individual BDI cognitive models (beliefs, desires, intentions) execute plans in a shared simulated environment under resource constraints.",
  "Used to study AI coordination strategies, emergent social behavior and cognitive architectures; outputs validated against known theoretical benchmarks.",
];

const simMindResponder = (raw) => {
  const q = raw.trim();
  const m = (...p) => p.some((r) => new RegExp(r, "i").test(q));
  if (m("objective|overview|goal|aim|summary|what")) return "SimMind is a cognitive multi-agent simulation framework that pairs AI Planning algorithms with a CPU-level simulator. The goal is to model and study emergent behavior when multiple agents with individual cognitive models interact in a shared, resource-constrained environment.";
  if (m("bdi|belief|desire|intention|cognitive|model")) return "Each agent uses a BDI (Belief-Desire-Intention) cognitive architecture. Beliefs represent the agent’s knowledge of the environment, desires are goals the agent wants to achieve, and intentions are the committed plan currently being executed. This models realistic decision-making under uncertainty.";
  if (m("plan|planning|algorithm|search|goal")) return "Agents use AI planning algorithms (STRIPS-style or HTN) to generate action sequences that achieve their goals. Plans are re-evaluated when beliefs update or when the environment changes, enabling reactive adaptation.";
  if (m("emergent|social|behavior|coordination|interact")) return "Emergent behaviors arise from local agent interactions: resource competition, cooperation, task allocation and communication patterns that were not explicitly programmed but emerge from individual BDI reasoning operating simultaneously.";
  if (m("cpu|simulator|performance|scale")) return "The CPU-level simulator models computational resource consumption per agent operation, enabling study of how cognitive overhead affects system throughput and emergent behavior under tight resource budgets.";
  if (m("github|code|repo")) return "Repository details are not yet public.";
  return "Ask about the BDI cognitive model, AI planning integration, emergent behavior experiments, or the CPU simulator.";
};
  
/** --------------------------
 * Project-specific responders
 * -------------------------- */

// Inflation Forecasting bot
const inflationResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|summary")) {
    return [
      "Objective build a rigorous multi horizon system to forecast US PCEPI with leakage safe preprocessing, fair walk forward evaluation, and model families spanning classical ML and deep learning.",
      "Scope horizons are 1, 3, 6, and 12 months with diagnostics using ACF, PACF, and the Ljung Box test, and selection of exogenous variables through Granger causality, cross correlation, and cointegration.",
    ].join(" ");
  }

  if (has(text, "architecture|approach|pipeline|design")) {
    return [
      "Architecture data ingestion from FRED and other public sources, then frequency harmonisation, feature engineering with lags, rolling statistics, Fourier seasonality, momentum, and calendar encodings. Then leakage safe scaling, per horizon training with walk forward splits, followed by inverse transforms, metrics, and Diebold Mariano tests.",
      "Model families include ARDL, VARccf, VARcointegration, ARIMA, SARIMA, ARIMAX, SARIMAX, Random Forest, XGBoost, MARS, RNN, GRU, LSTM, TCN, TFT, TiDE, N BEATSx, and N HiTS.",
    ].join(" ");
  }

  if (has(text, "\\bmodel(s)?\\b|algorithms|baselines|ensemble")) {
    return "Models compared include ARDL, VARccf, VARcointegration, ARIMA, SARIMA, ARIMAX, SARIMAX, Random Forest, XGBoost, MARS, and deep learning models such as RNN, GRU, LSTM, TCN, TFT, TiDE, N BEATSx, and N HiTS. N HiTS ranked best overall across 1, 3, 6, and 12 months.";
  }

  if (has(text, "dataset|data set|data source|source|fred|pcepi")) {
    return "Dataset target is PCEPI monthly with exogenous macroeconomic indicators from FRED and other sources. Daily and weekly data are aggregated to monthly and quarterly, missing values are linearly interpolated or removed, stationarity is checked, and strict leakage prevention is applied.";
  }

  if (has(text, "preprocess|feature|engineering|scaling|standardize|minmax|robust|log|fourier|seasonal|calendar")) {
    return "Preprocessing and features include log scaling, z score or robust scaling, Fourier seasonal terms, lagged PCEPI up to 12 months, rolling mean, standard deviation, skewness, kurtosis, momentum, and month and year encodings. Historical and future exogenous inputs are aligned for multi step forecasting.";
  }

  if (has(text, "granger|cointegration|acf|pacf|ljung|diagnostics")) {
    return "Diagnostics include Granger causality, Johansen cointegration, ACF, PACF, and the Ljung Box Q test to guide variable inclusion and lag selection.";
  }

  if (has(text, "train|training|hyperparam|config|optimizer|dropout|lookback|window|neuralforecast|pytorch|darts")) {
    return "Training setup uses NeuralForecast for N HiTS and N BEATSx with per horizon models, SMAPE loss, Adam optimizer with learning rate around three times ten to the power of minus four, dropout around zero point three, input window around 96 months, and early stopping on rolling validation within the PyTorch ecosystem.";
  }

  if (has(text, "results|metrics|performance|error|rmse|mae|r2|diebold|dm|significant")) {
    return [
      "Results N HiTS achieved the lowest MAE and RMSE, the best R squared, and beat the naive baseline through the Diebold Mariano test with HLN correction.",
      "Group findings N HiTS was significant across all horizons, and VAR variants were competitive by 12 months.",
    ].join(" ");
  }

  if (has(text, "horizon|forecast|prediction|long range|short term")) {
    return "Horizon behaviour N HiTS was stable across 1 to 12 months, SARIMAX was strong at 1 to 3 months, VAR improved by 12 months, and recurrent networks tended to overfit at 6 to 12 months.";
  }

  if (has(text, "interpret|explain|shap|insight|limitations|compute")) {
    return "Interpretability and limitations N HiTS trades interpretability for accuracy, requires more computation, and depends on careful scaling and alignment of exogenous variables, while large shocks remain challenging.";
  }

  if (has(text, "github|code|repo")) {
    return "GitHub Inflation https://github.com/AyeshaRahman2002/Inflation-Forecasting-Group-Project";
  }

  if (has(text, "video|demo|presentation")) {
    return "Video Inflation https://youtu.be/Dtd82dyeasE";
  }

  if (has(text, "report|paper|documentation|docs?")) {
    return [
      "Reports Inflation",
      "• Group Report  /Inflation_Forecasting_with_Machine_Learning_Models__Group_Report.pdf",
      "• Individual Report  /Inflation_Forecasting_with_Machine_Learning_Models__Individual_Report.pdf",
    ].join("\n");
  }

  return "Oops! I missed that. Please ask about objectives, architecture, datasets, preprocessing, diagnostics, training setup, horizons, metrics, Diebold Mariano results, limitations, or links to GitHub, video, and reports.";
};

/** --------------------------
 * Digital Health ASD bot
 * -------------------------- */
const asdResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|problem|motivation|summary")) {
    return "Aim deliver an adult focused ASD self screening and tracking app that integrates validated questionnaires, NLP based social interaction analysis, notes tracking, and an eye tracking module with secure deployment and accessible UI. The goal is to help users prepare for clinical conversations and understand their patterns over time.";
  }

  if (has(text, "architecture|approach|pipeline|design|system|stack|flow")) {
    return "Architecture React frontend on AWS CloudFront and EC2 served over HTTPS, connected to a Flask API with SQLite via SQLAlchemy. Modules include questionnaires AQ, AQ10, CAT Q, and RAADS R; an NLP based social interaction coach; a notes tracking BiLSTM model; and an eye tracking classifier. Shared middleware handles authentication, consent, CORS policies, and logging, with a lightweight rules based helper for in app guidance.";
  }

  if (has(text, "questionnaire|aq\\b|aq10|cat\\s*q|raads|raads\\s*r|screen(er|ing)|cut ?off|score|scoring")) {
    return "Questionnaires AQ and AQ10 provide rapid screening, CAT Q measures camouflaging behaviours, and RAADS R supports adult assessment. Scores are normalised against published cutoffs and combined into plain language feedback with next step suggestions. The app explains what each score band means and emphasises that it is not a diagnostic tool.";
  }

  if (has(text, "nlp|language|text|sentiment|intent|transformer|bert|distilbert|hugging(face)?|coaching|dialog|chat")) {
    return "NLP module applies transformer based sentiment and intent analysis along with keyword and synonym checks in a short roleplay game. The system provides real time coaching style feedback on clarity, reciprocity, and emotional tone, while logging anonymised aggregates for trend tracking. A small inference API runs pretrained transformers for efficiency.";
  }

  if (has(text, "notes|journal|lstm|rnn|embedding|glove|bi\\s*lstm|cross[ -]?validation|k[ -]?fold|early\\s*stopp?ing")) {
    return "Notes tracking involves text preprocessing, tokenisation, and word embeddings fed into a bidirectional LSTM trained with k fold cross validation and early stopping. The model outputs a calibrated score and a short explanation to help users reflect on weekly patterns while reducing overfitting.";
  }

  if (has(text, "eye\\s*tracking|gaze|pupil|camera|random\\s*forest|rf|auc|roc|accuracy|precision|recall|f1|grid\\s*search|feature(s)?")) {
    return "Eye tracking applies feature engineering on gaze and pupil time series, followed by a Random Forest classifier tuned with grid search and cross validation. Performance reached about 77 percent accuracy and around 0 point 81 ROC AUC, with stronger recall on the non autistic class. Plans include handling class imbalance with class weights or resampling.";
  }

  if (has(text, "\\bdatasets?\\b|data set|data source|corpus|collection|participant")) {
    return "Dataset anonymised adult screening records from validated questionnaires combined with curated or synthetic text prompts and a subset of eye tracking samples. Sampling balanced age and gender using class aware stratification for training. No personally identifiable data is stored and all records are anonymised.";
  }

  if (has(text, "metrics|evaluation|results|confusion|roc|precision|recall|f1|calibration|explain|explainability|lime|shap")) {
    return "Evaluation includes confusion matrices, ROC and precision recall curves, macro averages, and calibration checks. For text models, explanations use lightweight perturbation based methods so users receive short human readable rationales aligned with questionnaire benchmarks.";
  }

  if (has(text, "security|privacy|consent|ethic|gdpr|cors|encrypt|https|policy|pii")) {
    return "Security and ethics features include explicit informed consent, an academic use disclaimer, encrypted credentials, enforced CORS and HTTPS, minimal storage of personal data, and clear opt out and deletion pathways. The tool is positioned as an educational self screening aid that complements but does not replace clinical diagnosis.";
  }

  if (has(text, "ui|accessibility|design|contrast|font|feedback|ux|wcag|readability|layout")) {
    return "UI and accessibility design uses large readable typography, clear contrast, and reduced cognitive load through progressive disclosure. Adult oriented copy, image left and text right layouts, simple wording, and short interactions were refined through iterative feedback to work effectively on mobile devices.";
  }

  if (has(text, "stakeholder|nhs|clinician|doctor|user|age|adults|18|30|triage")) {
    return "Stakeholders include adult users, especially women who are often underdiagnosed, and clinicians who benefit from clearer pre visit summaries. The app supports faster triage and better clinical conversations by bundling questionnaire scores, notes summaries, and interaction feedback.";
  }

  if (has(text, "risk|mitigation|ops|load|testing|deployment|ci|cd|cloudfront|ec2|logging|monitoring|observability")) {
    return "Operations and risk management follow agile sprints for the shared platform and a dedicated track for the ASD app. Load tested API endpoints, monitored error rates, documented integration gaps, and prepared CI CD hooks for frontend and backend. Deployment uses CloudFront caching and EC2 hosting with HTTPS and strict headers.";
  }

  if (has(text, "future|improve|next|class weight|imbalance|data collection|on device|edge|calibration|fairness|bias")) {
    return "Future work includes improving eye tracking balance with class weights or resampling, expanding real world datasets, enhancing calibration and fairness checks, adding on device inference for NLP, and completing end to end AWS integration with automated rollout and rollback.";
  }

  if (has(text, "github|code|repo|repository")) {
    return "GitHub ASD https://github.com/AyeshaRahman2002/Digital-Health-ASD";
  }

  if (has(text, "video|demo|presentation|walkthrough")) {
    return "Video ASD a link will be added in the repository readme if a public walkthrough is published; otherwise a private demo is available on request.";
  }

  if (has(text, "report|paper|documentation|docs?|pdf")) {
    return "Report ASD  /Digital_Health_ASD_Report.pdf with full details on architecture, datasets, methods, evaluation, security, and deployment.";
  }

  return "Oops! I missed that. Please ask about aims, architecture, questionnaires, NLP, social coaching, notes tracking, eye tracking results, evaluation, security, accessibility, stakeholders, operations, roadmap, or links such as GitHub and the report.";
};
/** --------------------------
 * Sentiment Stock bot refined responses
 * -------------------------- */
const sentimentResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|hypothesis|problem|motivation|summary")) {
    return "Aim classify stock movement around product release windows using an online sentiment index derived from social reviews and tweets combined with historical returns. Hypothesis positive sentiment anticipates upward moves, while negative sentiment anticipates declines.";
  }

  if (has(text, "architecture|approach|pipeline|design|system|flow|framework")) {
    return "Pipeline collection from Amazon, Walmart, and Twitter through filtered scraping and APIs, followed by human assisted labelling, cleaning, tokenisation, case normalisation, negation tagging, stopword and emoji handling, and embedding feature construction. Post level polarity is aggregated with popularity weights into a daily sentiment index, which is linked to pre and post release return changes for a movement classifier.";
  }

  if (has(text, "\\bdatasets?\\b|dataset|corpus|collection|source|sketchengine|api|twitter")) {
    return "Dataset social text gathered via platform APIs and tools such as SketchEngine with filters to remove adverts and non opinion posts. Posts are labelled as positive, negative, or neutral and paired with basic popularity signals such as likes or helpful votes. The workflow is designed to scale from pilot samples to several hundred posts per product.";
  }

  if (has(text, "preprocess|clean|token|negation|stop ?words|emoji|embedding|word2vec|tfidf|feature")) {
    return "Preprocessing and features include tokenisation, case normalisation, regex cleaning, negation tagging using word NOT markers, removal of frequent uninformative terms, and emoji handling. Features are based on averaged Word2Vec vectors and TF IDF vectors representing each post for classification.";
  }

  if (has(text, "\\bmodel(s)?\\b|classifier|logistic|svm|random forest|naive bayes|j48|lr")) {
    return "Models logistic regression, linear SVM, random forest, Naive Bayes, and J48 are compared for sentiment and movement prediction. Training applies stratified cross validation with regularisation and calibrated probabilities where relevant.";
  }

  if (has(text, "metric|metrics|evaluation|accuracy|precision|recall|f1|auc|confusion|k ?fold|cross")) {
    return "Evaluation includes accuracy, precision, recall, and F1 at post level, with confusion matrices and stratified k fold cross validation. For movement classification, both accuracy and class balance are reported, with threshold tuning applied to account for asymmetric costs.";
  }

  if (has(text, "aggregate|index|weight|polarity|daily|time|link|combine|stock|return")) {
    return "Aggregation and linkage map each post polarity to plus one, minus one, or zero, then multiply by popularity weights and normalise into a daily sentiment index. The index is aligned to event windows and regressed against before and after returns to label up or down classes for the movement model.";
  }

  if (has(text, "limitation|risk|issue|imbalance|overfit|future|improve|scal(e|ing)")) {
    return "Limitations and next steps include increasing neutral examples, addressing class imbalance with reweighting or resampling, expanding sources to finance news and forums, adopting transformer embeddings for richer context, and running broader out of sample backtests across multiple tickers.";
  }

  if (has(text, "github|code|repo|repository")) {
    return "GitHub Sentiment a repository link will be added if made public.";
  }

  if (has(text, "report|paper|documentation|docs?|pdf")) {
    return "Report Sentiment  /DataMiningProjectReport.pdf with full details on methodology, datasets, preprocessing, analysis, and results.";
  }

  return "Oops! I missed that. Please ask about aims, pipeline, datasets, preprocessing, embeddings, models, metrics, aggregation to price movement, limitations and future work, or documents such as the report.";
};

/** --------------------------
 * Hotel Scraper
 * -------------------------- */
const hotelResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|aim|scope|overview|purpose|summary")) {
    return "Aim build an automated Python tool to extract hotel room prices, room types, and breakfast availability for analysts, with outputs in structured Excel over chosen date ranges and cities. Scope includes multi site scraping, dynamic day count, user chosen city, and legal awareness.";
  }

  if (has(text, "architecture|approach|pipeline|design|system|flow|workflow")) {
    return "Architecture uses Excel driven configuration of target URLs and HTML classes, then crawling and parsing with BeautifulSoup, followed by assembling records into a tabular dataset and exporting to Excel. User prompts guide city selection, input file, output folder, and number of days. A lock file and logging wrap the run for safety.";
  }

  if (has(text, "stack|tech|library|imports|dependencies|tools")) {
    return "Stack Python with BeautifulSoup, pandas, datetime, tkinter, logging, os, and time. The proposal does not mention Selenium or proxy rotation.";
  }

  if (has(text, "function|functions|api|endpoints|helpers|methods")) {
    return "Key functions include creating and removing a scraping lock file, showing popup dialogs, reading URL city workbooks, scraping hotel data into a shared dictionary, and saving results to Excel. The main function orchestrates prompts, file selection, and multi day loops.";
  }

  if (has(text, "\\bdatasets?\\b|data set|sources?|urls?|excel|workbook")) {
    return "Dataset is assembled from hotel booking pages whose URLs and CSS classes are read from a city specific Excel file. Output is an Excel workbook with date, hotel, room type, breakfast field, and price for each day. City selection determines which URL file is used.";
  }

  if (has(text, "schema|columns|fields|features|table|output|excel")) {
    return "Core columns include date run, booking date, hotel name, address, rating, room type, breakfast yes or no, and price. Output filename follows the format start date dash city for easy traceability.";
  }

  if (has(text, "gui|ui|popup|prompt|interface|app|exe|installer")) {
    return "User experience relies on tkinter popups to choose city, input and output locations, and number of days to scrape. Later iterations target a simple GUI and distributable executable so analysts can run without Python setup.";
  }

  if (has(text, "iteration|version|evolution|improve|enhance|changes")) {
    return "Iterations progressed from CSV to Excel output, added dynamic URL and class loading from Excel, introduced day range selection, lock file, directory choosers, logging, standardised filenames, improved prompts and error handling, and planned a GUI installer for analyst friendly use.";
  }

  if (has(text, "legal|legality|ethic|robots|terms|gdpr|policy|compliance|law")) {
    return "Legality and ethics emphasise respecting robots dot txt, avoiding heavy load with controlled request rates, using only public information, and acknowledging site terms. The document discusses grey areas and why careful, compliant use is required.";
  }

  if (has(text, "throttle|rate|delay|sleep|request|frequency|overload|retry")) {
    return "Responsible scraping applies time based delays to avoid overloading sites and to remain within acceptable request frequencies.";
  }

  if (has(text, "error|exception|fail|retry|logging|log|robust")) {
    return "Robustness measures include a lock file to prevent concurrent runs, logged status updates, and clearer prompts to help analysts recover from bad inputs or site changes.";
  }

  if (has(text, "visual|plot|chart|matplotlib|model|predict|forecast|ml")) {
    return "The proposal does not describe Matplotlib visuals or downstream machine learning models, although future GUI visualisations are mentioned.";
  }

  if (has(text, "deploy|package|exe|installer|distribution|shipping")) {
    return "Deployment plan converts the script into an executable with a simple installer so analysts can run the app without Python. Cloud deployment is not mentioned.";
  }

  if (has(text, "limit|limitation|risk|issue|captcha|ip|blocking|anti|change")) {
    return "Limits include site structure changes, anti scraping defences, captchas, IP blocking, variable data availability, legal constraints, and accuracy risks. Ethical request frequency and compliance are stressed.";
  }

  if (has(text, "report|paper|documentation|docs?|pdf")) {
    return "Report Hotel Scraper: /ProjectProposal-Hotels.pdf";
  }

  if (has(text, "github|code|repo|repository")) {
    return "The proposal does not mention a public GitHub repository.";
  }

  if (has(text, "video|demo|presentation")) {
    return "The proposal does not mention a public video demo.";
  }

  return "Oops! I missed that. Please ask about aims, architecture, imports, functions, datasets, fields, GUI, iterations, legality, throttling, error handling, limitations, deployment, or documents. If a topic is not in the proposal, I will say it is not mentioned.";
};

/** --------------------------
 * Flights Scraper
 * -------------------------- */
const flightsResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|aim|scope|overview|purpose|summary")) {
    return "Aim build an automated Python tool to extract Google Flights prices and details for one way and round trip journeys, and export a clean Excel table for analysis. Scope is limited to Google Flights only, with user chosen cities, dates, and trip type.";
  }

  if (has(text, "architecture|approach|pipeline|design|system|flow|workflow")) {
    return "Architecture uses Playwright to drive a headful Chromium session to the Google Flights results page. LexborHTMLParser then parses categories and rows into a dictionary, which is normalised to a pandas DataFrame and saved to Excel. Tkinter popups collect inputs, and a log file records actions.";
  }

  if (has(text, "stack|tech|library|imports|dependencies|tools|parser|browser")) {
    return "Stack Python with Playwright, LexborHTMLParser, pandas, tkinter, logging, json, and time. The proposal does not mention selenium, requests, aiohttp, or proxy rotation.";
  }

  if (has(text, "function|functions|helpers|methods|api")) {
    return "Key functions include get_trip_type, popup chooser, get_user_input form fields, get_page Playwright navigation, scrape_google_flights parser extraction, run orchestration to build DataFrames and save to Excel, plus a simple log_action and a lock file pattern.";
  }

  if (has(text, "dataset|data set|source|columns|schema|fields|excel|output")) {
    return "Output is an Excel file with structured rows per flight, including category, company, price, price type, departure and arrival times, duration, stops, and, where available, emissions fields. Filenames use departure date and origin for traceability.";
  }

  if (has(text, "ui|interface|popup|prompt|input|chooser|directory")) {
    return "UI uses tkinter popups to choose trip type (one way or round trip), collect cities and dates, optionally select an output directory and number of days to scrape, and display success or error messages.";
  }

  if (has(text, "iteration|version|evolution|improve|enhance")) {
    return "Iterations added support for one way trips, improved error popups, directory selection, dynamic day ranges, and enriched round trip columns for origin, destination, and dates.";
  }

  if (has(text, "error|exception|robust|logging|retry|validation")) {
    return "Robustness is handled with try except blocks, user friendly message boxes, a simple lock file to avoid concurrent runs, and a text log of actions to aid debugging.";
  }

  if (has(text, "legal|legality|ethic|robots|tos|terms|policy|compliance")) {
    return "Legality and ethics emphasise respecting site terms, scraping only public information, and keeping request frequency reasonable, while acknowledging grey areas and the risk of blocking.";
  }

  if (has(text, "limit|limitation|risk|captcha|ip|blocking|dynamic|javascript|maintenance")) {
    return "Limits include layout changes, heavy JavaScript, dynamic content, rate limits, IP blocking, data gaps, accuracy issues, and ongoing maintenance to keep selectors current.";
  }

  if (has(text, "storage|database|sql|sqlite|visual|chart|matplotlib|seaborn")) {
    return "The proposal does not mention a database or plots; the tool outputs Excel tables for analysts.";
  }

  if (has(text, "async|performance|concurrency|scalability")) {
    return "The proposal does not mention asynchronous scraping or multi session concurrency.";
  }

  if (has(text, "deploy|package|exe|installer|cloud")) {
    return "The proposal does not mention packaging as an executable or cloud deployment.";
  }

  if (has(text, "github|code|repo|repository")) return "The proposal does not mention a public GitHub repository.";
  if (has(text, "video|demo|presentation")) return "The proposal does not mention a public video demo.";
  if (has(text, "report|paper|documentation|docs?|pdf")) return "Report Flights  /ProjectProposal-Flights.pdf";

  return "Oops! I missed that. Please ask about aims, architecture, libraries, functions, fields, UI, iterations, legality, limitations, robustness, or documents. If it is not in the proposal, I will say it is not mentioned.";
};

/** --------------------------
 * 3D Rendering
 * -------------------------- */
const renderingResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|summary")) {
    return "Objective create an interactive OpenGL application that renders a terrain OBJ with a first person camera and demonstrates texturing, instancing, custom modelling, lighting, animation, and performance measurement.";
  }

  if (has(text, "architecture|pipeline|design|system|approach|flow")) {
    return "Pipeline initialises OpenGL via GLFW and GLAD, then loads shaders, then loads the Wavefront OBJ into VBOs and VAOs, computes projection and view matrices, and renders with a Blinn Phong shaded pass. Optional passes add textures, instanced pads, the rocket model, and timestamp queries for performance.";
  }

  if (has(text, "stack|tech|library|dependencies|tools|framework")) {
    return "Stack modern OpenGL with GLFW, GLAD, C plus plus, Catch2 for tests, and a simple math vmlib. The proposal does not mention Vulkan or DirectX.";
  }

  if (has(text, "math|matrix|vector|mat44|projection|rotation|translation")) {
    return "Math includes mat4 times mat4, mat4 times vec4, rotation, translation, and perspective projection helpers, fully validated with Catch2 against known values.";
  }

  if (has(text, "camera|navigation|input|wsad|mouse|first person|fps")) {
    return "Camera uses a first person style with WSAD for movement, mouse for look, and speed modifiers on Shift and Control, plus bounds to prevent leaving the scene.";
  }

  if (has(text, "shader|vertex|fragment|glsl|lighting pass")) {
    return "Shaders include a vertex shader that transforms positions and forwards attributes, and a fragment shader that performs Blinn Phong lighting with ambient, diffuse, and specular terms, plus optional texture sampling.";
  }

  if (has(text, "texture|texturing|orthophoto|uv|coordinates|mapping|mip")) {
    return "Texturing applies orthophotos mapped using OBJ UVs with GL texture parameters and linear filtering. Future work includes mipmapping to improve distance detail.";
  }

  if (has(text, "obj|mesh|loader|terrain|model data|vbo|vao")) {
    return "Mesh loading parses a Wavefront OBJ terrain, builds VBOs and a VAO, and renders with indexed or array draws as configured.";
  }

  if (has(text, "instance|instancing|pads|duplicate objects")) {
    return "Instancing renders two launch pads efficiently using per instance transforms to minimise CPU overhead.";
  }

  if (has(text, "rocket|custom model|primitives|cylinder|cone|cube|transform")) {
    return "Custom model a rocket composed of cubes, cylinders, and a cone, merged with a mock anchor for whole object transforms and placed precisely on a pad.";
  }

  if (has(text, "light|lighting|blinn|phong|point light|attenuation|specular|ambient")) {
    return "Lighting uses Blinn Phong with point lights and distance attenuation, combining ambient, diffuse, and specular terms. A known issue was light following the camera, which required uniform setup fixes.";
  }

  if (has(text, "animate|animation|launch|state machine|time|glfwGetTime")) {
    return "Animation uses a state machine to drive lift off, curve to horizontal, and steady flight, with time based interpolation for smooth motion.";
  }

  if (has(text, "performance|profil(e|ing)|timing|gpu|query|timestamps|fps")) {
    return "Performance is measured with OpenGL timestamp queries for sections of the pipeline plus CPU timings. More complex tasks such as textured instancing and the rocket increase GPU time, especially when objects are off camera.";
  }

  if (has(text, "\\bdatasets?\\b|assets|data|textures|images")) {
    return "Assets include the Paarlahti terrain OBJ and orthophoto textures loaded as 2D images. The proposal does not mention HDR environments or PBR textures.";
  }

  if (has(text, "limitation|issue|challenge|bug|todo|future|improve|enhance")) {
    return "Limitations include light uniform handling and performance on software rasterisers. Future work includes mipmaps, shadow mapping, normal mapping, and togglable debug views.";
  }

  if (has(text, "github|code|repo")) {
    return "GitHub 3D Rendering https://github.com/AyeshaRahman2002/ComputerGraphics_3D_Rendering";
  }

  if (has(text, "video|demo|presentation")) {
    return "The proposal does not mention a public video demo.";
  }

  if (has(text, "report|paper|documentation|docs?|pdf")) {
    return "Project report  /GraphicsCW.pdf";
  }

  return "Oops! I missed that. Please ask about objectives, architecture, math, shaders, camera, texturing, instancing, the rocket model, lighting, animation, performance, assets, limitations, or links like GitHub and the report.";
};
/** --------------------------
 * Spacecraft Nav
 * -------------------------- */
const spaceNavResponder = (raw) => {
  const text = raw.trim();
  const has = (t, ...p) => p.some((r) => new RegExp(r, "i").test(t));

  if (has(text, "objective|aim|goal|scope|overview|purpose|summary")) {
    return "Aim develop a robust autonomous navigation and detection stack to recover spacecraft location after an off course event by navigating between module entrances and centres, detecting access signs, finding windows, capturing panoramas, and identifying planets for distance based localisation.";
  }

  if (has(text, "architecture|approach|pipeline|design|system|flow|workflow|stack")) {
    return "Architecture ROS 2 node orchestration with action client goals for nav2, YAML driven target points, a camera subscriber and image pipeline, HSV masks and contours, a LaserScan subscriber, PID based wall following and obstacle avoidance, window detection and alignment, panorama stitching, and CNN based planet recognition followed by geometric measurements.";
  }

  if (has(text, "coordinates|yaml|nav2|action|goal|pose|waypoint|entrance|centre|center")) {
    return "Navigation initialisation reads entrance and centre coordinates from a YAML file, then dispatches nav2 action goals via a sequence of lambdas with callbacks to chain movements and provide feedback. Centres later serve as fallback points during window search.";
  }

  if (has(text, "sign|red|green|entrance|hsv|contour|circularity|threshold")) {
    return "Sign detection uses HSV masks for red and green, then contour area and circularity filters, roughly area greater than 500 and circularity near 1.0. Green permits entry to the centre, while red triggers a scan or a skip to the next entrance.";
  }

  if (has(text, "wall|laser|laserscan|obstacle|pid|follow|avoid|qos|reliable")) {
    return "Wall navigation and avoidance subscribe to LaserScan with RELIABLE QoS and dual PID controllers: lateral kP 0.5 and kD 0.2, and longitudinal kP 0.1, kI 0.001, and kD 0.05. Logic maintains target offsets, backs up and turns to bypass front obstacles, then resumes forward motion.";
  }

  if (has(text, "window|detection|rectangle|white border|black ratio|heuristic|prediction|align|screenshot")) {
    return "Windows are found by rectangle contours plus a white border and a high black interior ratio. Heuristics predict likely wall positions when not visible. The robot then aligns to the window, holds about two metres of standoff, and captures cropped screenshots.";
  }

  if (has(text, "stitch|panorama|blend|overlap|flann|sift")) {
    return "Stitching uses a simple blended overlap method with linear fades instead of FLANN SIFT to prioritise measurement robustness over perfect feature matching on angled views.";
  }

  if (has(text, "planet|detection|classification|cnn|resnet|model|training|accuracy")) {
    return "Planet detection uses a ResNet18 classifier fine tuned for Earth, Moon, Mars, and Mercury. Cropped circular candidates are classified and labelled with window names; testing accuracy is reported around the low nineties depending on data quality.";
  }

  if (has(text, "distance|measurement|focal|sensor|diameter|euclidean|pixels|math|formula")) {
    return "Distances to planets use focal length multiplied by real diameter and image height, divided by planet pixel height and sensor height. Pairwise planet separations use Euclidean distances on panorama coordinates.";
  }

  if (has(text, "performance|testing|simulation|real|limitations|issues|laser|stretch")) {
    return "Testing covered multiple simulated worlds and a real robot. Limitations include unreliable real LiDAR streams and far window screenshots that hurt classification. A proposed remedy is LaserScan Stretching with interpolation, smoothing, and plausibility checks.";
  }

  if (has(text, "dataset|data|images|training|classes")) {
    return "Training data for the ResNet18 model consists of planetary images for four classes Earth, Moon, Mars, and Mercury, with typical ImageNet normalisation and augmentation.";
  }

  if (has(text, "security|ethic|privacy|compliance")) {
    return "There is not detail about security or privacy constraints beyond safe lab usage.";
  }

  if (has(text, "deploy|packag(e|ing)|container|ci|cd")) {
    return "There is not detail about deployment packaging or CI CD pipelines.";
  }

  if (has(text, "github|code|repo|repository")) {
    return "GitHub Space Nav https://github.com/AyeshaRahman2002/PlanetDetection";
  }

  if (has(text, "report|paper|documentation|docs?|pdf")) {
    return "Report Space Nav  /Robotics.pdf";
  }

  if (has(text, "video|demo|presentation|walkthrough|youtube")) {
    return "There is not detail about a public video demo link in the summary.";
  }

  return "Oops! I missed that. Please ask about aims, architecture, coordinates and nav2 actions, sign detection, wall following with PID, window heuristics and alignment, stitching, CNN based planet detection, measurement formulas, testing, limitations, LaserScan Stretching, or links like GitHub and the report. If something was not specified I will say there is not detail about it.";
};

/** --------------------------
 * Bio-Inspired Optimisers bot
 * -------------------------- */
const bioOptResponder = (raw) => {
  const t = raw.trim();
  const has = (s, ...p) => p.some((x) => new RegExp(x, "i").test(s));

  if (has(t, "objective|goal|aim|scope|overview|purpose|why|summary")) {
    return "Aim compare bio inspired optimisers PSO, MPA, and an LM enhanced MPA against Adam on six benchmark functions and on Breast Cancer classification, including direct weight optimisation without backpropagation and an extendable genome to evolve both architecture and weights. :contentReference[oaicite:1]{index=1}";
  }

  if (has(t, "algorithm|pso|mpa|lm[_ -]?impa|adam")) {
    return "Algorithms PSO with swarm based search, MPA using Brownian and Levy motion, LM IMPA a hybrid that seeds with Levenberg Marquardt then explores globally, and Adam as a gradient baseline and a PyTorch Adam upper baseline. :contentReference[oaicite:2]{index=2}";
  }

  if (has(t, "benchmark|functions|sphere|rastrigin|rosenbrock|ackley|griewank|schwefel|listsort")) {
    return "Benchmarks Sphere, Rastrigin, Rosenbrock, Ackley, Griewank, and Schwefel, plus a discrete Hillis style ListSort task to test exploration and generalisation on non differentiable spaces. :contentReference[oaicite:3]{index=3}";
  }

  if (has(t, "dataset|breast|wisconsin|real world|classification|neural network|architecture|genome")) {
    return "Real world task Breast Cancer Wisconsin with a simple feedforward net. We flattened weights to a vector for black box optimisation and designed a genome to evolve hidden layer sizes and weights within bounds, with fixed search dimensionality for comparability. :contentReference[oaicite:4]{index=4}";
  }

  if (has(t, "method|pipeline|protocol|fair|reproduc|population|iteration|dimension|bounds|seed")) {
    return "Protocol 30D search, population 50, iterations 500, equal bounds, and seeds per run, with 10 trials per function, logging fitness per iteration for convergence and variance plots, ensuring a level playing field. :contentReference[oaicite:5]{index=5}";
  }

  if (has(t, "result|finding|insight|performance|convergence|accuracy|fitness|speed|variance")) {
    return "Insights LM IMPA showed the strongest overall performance, especially on deceptive or curved landscapes. PSO converged fastest early but could plateau. MPA was robust on multimodal surfaces like Ackley, and the PyTorch Adam baseline excelled when true gradients were available, highlighting the role of gradient information. :contentReference[oaicite:6]{index=6}";
  }

  if (has(t, "listsort|discrete|combinatorial")) {
    return "On the discrete ListSort task, LM IMPA and MPA reached optimal fitness, while PSO plateaued early, demonstrating differences in exploration and symbolic generalisation without gradients. :contentReference[oaicite:7]{index=7}";
  }

  if (has(t, "limit|limitation|future|next|hyperparam|multi objective|robust|noise|adversarial")) {
    return "Limits benchmarks may not mirror noisy changing real problems, and defaults were used for most hyperparameters. Future work includes tougher datasets, multi objective formulations, and systematic hyperparameter search. :contentReference[oaicite:8]{index=8}";
  }

  if (has(t, "tech|stack|library|tool|python|pytorch|sklearn|matlab|numpy|matplotlib")) {
    return "Tech Python, NumPy, PyTorch, scikit learn, Matplotlib, and MATLAB for some experiments, with a unified runner that executes 10 trial batches and plots convergence. :contentReference[oaicite:9]{index=9}";
  }

  if (has(t, "github|code|repo|repository"))
    return "GitHub https://github.com/AyeshaRahman2002/bio-inspired-optimization";
  if (has(t, "report|paper|documentation|docs?|pdf"))
    return "Project report  /28695d05-1b50-4157-afd5-e71ad83225f4.pdf";
  if (has(t, "video|demo|presentation|walkthrough"))
    return "There is not detail about a public video demo.";

  if (has(t, "deploy|package|cloud|docker|cli|exe|install"))
    return "There is not detail about deployment packaging or cloud setup.";

  return "Oops! I missed that. Please ask about aims, algorithms, benchmarks, dataset, genome architecture, pipeline, results, ListSort insights, limitations, tech stack, or links such as GitHub and the report.";
};

/** --------------------------
 * xv6 Memory Management
 * -------------------------- */
const xv6Responder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|why|summary")) {
    return "Aim implement malloc, free, and rqstMem in xv6 riscv to provide dynamic allocation with a circular free list, coalescing, and on demand heap growth via sbrk.";
  }

  if (has(text, "architecture|approach|design|pipeline|flow")) {
    return "Design uses a circular linked list of free blocks, each with size and next pointers. malloc scans the list first fit style, splits blocks when larger than requested, and returns aligned payloads. free inserts a block back and coalesces with neighbors. rqstMem requests page sized chunks with sbrk, then frees them into the list.";
  }

  if (has(text, "data\\s*structure|list|circular|header|block|metadata")) {
    return "Free list nodes store size and next pointers, arranged in a circular list so traversal can wrap. Coalescing checks predecessor and successor adjacency to reduce fragmentation.";
  }

  if (has(text, "system\\s*call|sbrk|kernel|riscv|xv6")) {
    return "Heap growth uses sbrk to move the program break by whole page units, then wraps the new span into a free block and merges if adjacent.";
  }

  if (has(text, "edge|corner|case|zero|null|double\\s*free|safety")) {
    return "Zero sized requests return null like behavior, and null pointers are ignored in free. Adjacent free blocks are merged to avoid fragmentation. There is not detail about double free detection beyond standard assumptions.";
  }

  if (has(text, "complexity|perf|fragmentation|overhead|trade|limit|limitation")) {
    return "malloc traversal is linear in the number of free blocks and can fragment under adversarial patterns. Coalescing reduces external fragmentation with small metadata overhead. There is not detail about best fit or segregated lists.";
  }

  if (has(text, "testing|validation|unit|catch2")) {
    return "Validation was performed by exercising allocation and free paths and observing correct coalescing and sbrk growth. There is not detail about unit test frameworks for this OS task.";
  }

  if (has(text, "future|improve|next|optimi[sz]e|arena|thread")) {
    return "Future work could add segregated free lists, a best fit strategy, guard patterns, and diagnostics. There is not detail about multi core or thread safe arenas for xv6 userspace.";
  }

  if (has(text, "github|code|repo")) {
    return "GitHub xv6 Memory Management: https://github.com/AyeshaRahman2002/MemoryManagement-C";
  }

  if (has(text, "report|paper|documentation|pdf|docs?")) {
    return "Report xv6 Memory Management: /comp2211report_sc21ar.pdf";
  }

  return "Oops! I missed that. Please ask about objectives, design, data structures, sbrk behavior, edge cases, complexity, limitations, future work, GitHub, or the report.";
};

/** --------------------------
 * AI in Psychological Treatments
 * -------------------------- */
const psychAIResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|aim|overview|summary|scope|purpose")) {
    return "Aim examine how AI supports psychological treatments, focusing on virtual reality exposure therapy and internet delivered CBT, while weighing benefits and risks such as access, fidelity, empathy, and safety.";
  }

  if (has(text, "method|modality|approach|technique|therapy|treatment")) {
    return "Methods include exposure therapy delivered via virtual reality with graded scenarios, and internet delivered CBT programs that provide structured modules, homework, and monitoring. Chatbots and virtual agents assist with psychoeducation and low level support.";
  }

  if (has(text, "virtual\\s*reality|vr|exposure|phobia|ptsd|anxiety")) {
    return "Virtual reality exposure therapy creates controlled simulated environments for graded exposure, such as heights or trauma linked scenes, enabling precise dosage and safe repetition under clinical supervision.";
  }

  if (has(text, "\\bicbt\\b|internet\\s*cbt|online\\s*cbt|digital\\s*cbt")) {
    return "Internet delivered CBT offers structured lessons, exercises, and assessments online, improving reach and consistency for conditions like depression and anxiety while keeping therapist oversight when indicated.";
  }

  if (has(text, "chatbot|virtual agent|robot|conversational|self\\s*help|website")) {
    return "AI chatbots and virtual agents support psychoeducation, mood tracking, and skills rehearsal. They are positioned as adjuncts to care, not replacements for licensed clinicians.";
  }

  if (has(text, "risk|limitation|ethical|privacy|safety|consent|empathy|trust|misdiagnosis")) {
    return "Key risks include limited empathy, potential for incorrect guidance without oversight, privacy and safety concerns, and erosion of the therapeutic alliance. Clinical supervision and governance are recommended.";
  }

  if (has(text, "result|evidence|finding|effectiveness|outcome")) {
    return "Findings highlight growing evidence for VR based exposure and internet delivered CBT improving access and standardisation, while reinforcing that AI complements rather than replaces clinicians.";
  }

  if (has(text, "dataset|data set|code|github|repository")) {
    return "There is not detail about datasets for this literature style project. Code is not central, however a reading link is provided.";
  }

  if (has(text, "report|paper|pdf|document|reference|citation|writeup|essay")) {
    return "Report AI in Psychological Treatments  /AIinPsychologicalTreatements.pdf";
  }

  return "Oops! I missed that. Please ask about aims, modalities, virtual reality exposure therapy, internet delivered CBT, chatbots, evidence, risks, ethics, supervision, or the report. If a topic is not covered I will say there is not detail about it.";
};

/** --------------------------
 * 2D Rendering project
 * -------------------------- */
const twoDResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|purpose|summary")) {
    return "Aim build a fast educational 2D renderer that demonstrates classic computer graphics topics lines, polygons, transforms, clipping, filling, and simple anti aliasing with real time interaction.";
  }

  if (has(text, "architecture|approach|design|pipeline|system|flow")) {
    return "Architecture canvas based rasteriser with modules for line drawing, polygon fill, clipping, transforms, and UI controls. Matrix utilities drive translate, scale, and rotate. A small controller maps keyboard and mouse events to redraw.";
  }

  if (has(text, "algorithm|bresenham|dda|scanline|fill|raster|clipping|sutherland|hodgman")) {
    return "Algorithms Bresenham and DDA for lines, scanline for polygon filling with edge tables and active edges, color interpolation for gradients, and Sutherland Hodgeman for rectangular clipping.";
  }

  if (has(text, "transform|matrix|translation|scaling|rotation|compose")) {
    return "Transforms 3 by 3 homogeneous matrices for translation, scaling, rotation, and composition. Users can chain operations and see live redraws.";
  }

  if (has(text, "anti|alias|smoothing|quality")) {
    return "Anti aliasing basic pixel blending near edges to reduce stair stepping on diagonals. It is lightweight and works in real time.";
  }

  if (has(text, "interaction|ui|mouse|controls")) {
    return "Interaction mouse selection, drag to translate, inputs for rotation angle and scale factors, buttons to toggle fill and clipping, and a reset view.";
  }

  if (has(text, "performance|optim|fps|benchmark")) {
    return "Performance inner loops use integer heavy Bresenham and compact edge tables so complex scenes with many edges remain interactive.";
  }

  if (has(text, "edge case|concave|self|intersect|robust")) {
    return "Edge cases concave polygons are handled by the scanline method with proper parity rules, while self intersecting shapes are warned as undefined in the basic fill model.";
  }

  if (has(text, "future|next|improve|roadmap")) {
    return "Future work add shear and reflection, richer anti aliasing and simple shading, and direct on canvas resize handles.";
  }

  if (has(text, "github|code|repo")) {
    return "GitHub  https://github.com/AyeshaRahman2002/ComputerGraphics-2d-Rendering";
  }

  if (has(text, "video|demo|presentation")) return "There is not detail about a public video demo.";
  if (has(text, "report|paper|documentation|docs?|pdf"))
    return "There is not detail about a public report pdf.";

  return "Oops! I missed that. Please ask about aims, architecture, algorithms, transforms, clipping, filling, anti aliasing, interaction, performance, edge cases, future work, or links such as GitHub.";
};

/** --------------------------
 * arogya Setu vs. COVIDSafe
 * -------------------------- */
const covidAppsResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|purpose|summary")) {
    return "Aim provide a side by side analysis of Aarogya Setu and COVIDSafe covering tech choices, Bluetooth versus GPS, privacy models, adoption, effectiveness, limitations, and practical improvements for future public health apps.";
  }

  if (has(text, "feature|capabilit|function")) {
    return [
      "Aarogya Setu Bluetooth plus GPS, risk status, self assessment, vaccination details, regional statistics, helplines, and multilingual support.",
      "COVIDSafe Bluetooth only, encrypted reference codes, backwards compatibility, text to speech, voluntary onboarding, and proximity alerts.",
    ].join(" ");
  }

  if (has(text, "tech|architecture|bluetooth|gps|location|design|data store|encryption")) {
    return "Technology Aarogya Setu uses Bluetooth and GPS to create proximity and hotspot context, while COVIDSafe uses Bluetooth only with encrypted temporary IDs and a national data store. There is not detail about precise crypto primitives or on device frameworks in the slides.";
  }

  if (has(text, "privacy|policy|consent|mandatory|voluntary|gdpr|security|open source|decentral")) {
    return "Privacy Aarogya Setu raised concerns mandatory use in many settings, GPS location access, initial lack of transparency, and data sharing risks. COVIDSafe emphasised privacy, voluntary opt in, no GPS, open sourced code, and encrypted interactions, though adoption was lower.";
  }

  if (has(text, "adoption|downloads|uptake|efficacy|effectiveness|impact|40%")) {
    return "Adoption Aarogya Setu achieved high uptake aided by compulsory requirements, while COVIDSafe struggled to reach the roughly forty percent threshold commonly cited for strong effectiveness and suffered from update gaps and user uncertainty.";
  }

  if (has(text, "limit|issue|problem|battery|bug|cost|delta|update|failure")) {
    return "Limitations Aarogya Setu concerns include consent, algorithmic accountability, cybersecurity, heat, and battery usage. COVIDSafe issues include users not updating, high weekly running cost, limited features, Bluetooth reliability, and insufficient users to be effective.";
  }

  if (has(text, "statistic|survey|responses|chart|graph")) {
    return "Statistics slides include survey style questions on install rates, experience, and reasons for not installing for both apps. There is not detail about exact numeric tables in the chatbot text, but the deck visuals summarise responses.";
  }

  if (has(text, "compare|comparison|versus|vs|tradeoff|pros|cons")) {
    return "Comparison Aarogya Setu prioritised richer data and control via GPS plus Bluetooth and mandatory use, increasing coverage but heightening privacy risk. COVIDSafe prioritised privacy and accessibility, Bluetooth only and voluntary adoption, but underperformed without critical mass.";
  }

  if (has(text, "improve|solution|future|recommend|next|roadmap")) {
    return "Improvements increase transparency, acknowledge battery use, publish regular updates, address security, strengthen communication for adoption, consider decentralised models and privacy by design, while preserving outbreak analytics where appropriate.";
  }

  if (has(text, "date|launch|released|april|2020")) {
    return "Launch dates Aarogya Setu released 2 April 2020 and COVIDSafe released 26 April 2020.";
  }

  if (has(text, "report|slides?|deck|documentation|pdf|ppt|presentation")) {
    return "Project slides  /AarogyaSetu-vs-COVIDSafe.pptx";
  }
  if (has(text, "github|code|repo|repository")) {
    return "There is not detail about a dedicated public repository beyond the presentation.";
  }
  if (has(text, "video|demo|presentation|walkthrough")) {
    return "There is not detail about a public video demo for this project.";
  }

  return "Oops! I missed that. Please ask about features, technology, privacy policy, adoption, limitations, statistics, comparisons, launch dates, improvements, or slides. If the deck lacks something I will say there is not detail about it.";
};

/** --------------------------
 * Olympic Medal Analysis
 * -------------------------- */
const olympicsResponder = (raw) => {
  const text = raw.trim();

  const has = (t, ...pats) => pats.some((p) => new RegExp(p, "i").test(t));

  if (has(text, "objective|aim|goal|scope|overview|purpose|summary")) {
    return "Aim study medal distributions from 1896 to 2020 and test how different visuals help people understand trends across countries and time. Scope includes interactive filtering and a questionnaire that times and scores user answers.";
  }

  if (has(text, "stack|tech|framework|library|backend|frontend|server|flask|python")) {
    return "Stack Python Flask for the backend with HTML templates. Pandas prepares medal data and Matplotlib generates line, bar, and area charts on demand. There is not detail about React or D3 in the project.";
  }

  if (has(text, "data\\b|dataset|source|years|1896|2020|countries|events|sports")) {
    return "Dataset covers Summer Olympic medals for major countries from 1896 to 2020. Users can select countries and years to render charts dynamically. Some gaps reflect historical non participation or geopolitical changes.";
  }

  if (has(text, "chart|visual|graph|line|bar|area|compare|trend|ui")) {
    return "Visualisations include a line chart for medals over time and an area chart for per country totals. Optional bars are used for focused comparisons. Interactions let users pick countries and generate updated plots.";
  }

  if (has(text, "experiment|questionnaire|study|participants|tim(e|ed)|evaluation|usability|accuracy")) {
    return "Evaluation used a web questionnaire with timed questions tied to the charts. Ten participants completed tasks; response times and correctness were logged to compare how well each chart conveyed trends.";
  }

  if (has(text, "result|finding|accuracy|response|stat(s)?|t\\s*test|conclusion|insight")) {
    return "Overall accuracy was above ninety percent and response times differed between chart types. No strong correlation appeared between taking longer and getting answers more correct. Visuals effectively aided understanding.";
  }

  if (has(text, "host|deploy|pythonanywhere|url|link|website")) {
    return "Hosted on PythonAnywhere for the study sessions. There is not detail about containerisation or CI CD.";
  }

  if (has(text, "privacy|consent|anon|ethic|gdpr")) {
    return "Participants were informed and anonymous; responses were recorded without identities as part of an academic study.";
  }

  if (has(text, "github|code|repo|repository")) {
    return "GitHub Medals https://github.com/AyeshaRahman2002/InfoVis-MedalAnalysis";
  }
  if (has(text, "report|paper|documentation|docs?|pdf")) {
    return "Coursework report  /Cw2_Info_Vis_Group40.pdf";
  }

  if (has(text, "database|sql|postgres|mongodb"))
    return "There is not detail about a database; charts are generated from in memory data frames.";
  if (has(text, "react|vue|svelte|d3|vega|plotly"))
    return "There is not detail about a front end framework or D3; Matplotlib generates the charts server side.";

  return "Oops! I missed that. Please ask about aims, stack, datasets, visualisations, questionnaire design, results, hosting, privacy, or links such as GitHub and the report. If something was not in the report I will say there is not detail about it.";
};

/** --------------------------
 * Lyft System Design (Forage)
 * -------------------------- */
const lyftResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|what|summary")) {
    return "Objective simulate car manufacturing and maintenance with swappable components and clear service rules, showcasing SOLID OOP, composition, and testing.";
  }
  if (has(text, "architecture|design|pattern|factory|class|module|interface")) {
    return "Design CarFactory assembles models from Engine, Battery, and Tires. All parts implement Serviceable.needs_service(). Car delegates to its parts; separation of concerns keeps it extensible.";
  }
  if (has(text, "component|engine|battery|tire|tires|types|models")) {
    return "Components Engines Capulet, Willoughby, and Sternman; Batteries Spindler and Nubbin; Tires Carrigan and Octoprime. Each has its own service thresholds.";
  }
  if (has(text, "stage\\s*4|enhancement|update|tire")) {
    return "Stage 4 introduced tire families Carrigan and Octoprime and broadened unit tests to validate all service rules.";
  }
  if (has(text, "test|unit|pytest|coverage|validate|needs_service")) {
    return "Testing comprehensive unit tests per component and integration at the Car level to ensure accurate needs_service outcomes.";
  }
  if (has(text, "structure|layout|files|tree|where")) {
    return "Structure car_factory.py, car.py, engine/, battery/, tires/, serviceable.py, and test/ modules, with clean separation and easy navigation.";
  }
  if (has(text, "github|code|repo|link")) {
    return "GitHub https://github.com/AyeshaRahman2002/lyft";
  }
  return "Oops! I missed that. Please ask about architecture, components, Stage 4 changes, testing, or the repo.";
};

/** --------------------------
 * GreenMyCloud bot
 * -------------------------- */
const greenMyCloudResponder = (raw) => {
  const text = raw.trim();
  const match = (s, ...p) => p.some((r) => new RegExp(r, "i").test(s));

  if (match(text, "objective|goal|overview|purpose|problem")) {
    return "GreenMyCloud raises awareness of the carbon footprint from personal computing and cloud usage and lets users monitor emissions from smartphones, IoT, and online activity in a simple UI. It models functional and non functional requirements and ships a proof of architecture prototype.";
  }

  if (match(text, "users|audien|who|stakeholder|benefit")) {
    return [
      "Users general customers with IoT devices; finance and bank staff; cryptocurrency and NFT users; stock market participants; environmentalists; large companies such as tech and auto; climate safety organisations; forestry developers; geoengineering stakeholders."
    ].join(" ");
  }

  if (match(text, "feature|function|capabilit|what can it do|requirement")) {
    return [
      "Core features device level emissions in graphs and tables; daily activity input; connect all devices into one view; search emissions of devices you do not own; multi language UI; color blind graph themes; status saved on logout; works across smart devices; encrypted transactions; 7 day trial."
    ].join(" ");
  }

  if (match(text, "scope|platform|web|app|access|where|devices|browser")) {
    return "Scope an application and web based system accessible from smartphones and laptops; includes an in app translator and web search; password protected; product advertising and billing internals are out of scope.";
  }

  if (match(text, "security|privacy|encrypt|trial|login|password")) {
    return "Security and access password protection, status persisted on logout, and encrypted transaction data; the app offers a 7 day trial before fees.";
  }

  if (match(text, "background|context|why|impact|ghg|bitcoin|ai|iot")) {
    return "Background ICT contributes about 2 to 3.9 percent of global greenhouse gases and could rise with AI, IoT, and crypto. Example Bitcoin energy use and per transaction footprint are substantial; the app helps users understand these impacts at the device and usage level.";
  }

  if (match(text, "limitation|constraint|cannot|tradeoff")) {
    return "Limitations no historical results prior to install, relatively heavy local storage, and no guarantee that users will follow suggested greener alternatives.";
  }

  if (match(text, "tech|browser|platform")) {
    return "Target platforms include modern browsers like Chrome, Safari, and Firefox; mobile and laptop form factors are supported.";
  }

  if (match(text, "report|paper|pdf|document|docs?")) {
    return "GreenMyCloud Requirements Specification  /GreenMyCloud.pdf";
  }

  if (match(text, "github|code|repo|repository")) {
    return "GitHub link add if or when public"; // placeholder
  }

  return "Oops! I missed that. Please ask about objectives, users, core features, scope and platforms, security and trial, background context, or limitations. I will cite specifics on request.";
};

const videoEditingResponder = (raw) => {
  const t = (raw || "").trim();
  const ask = (...patterns) => patterns.some((p) => new RegExp(p, "i").test(t));

  // High level purpose and scope
  if (ask("objective|aim|overview|scope|problem|motivation|personas?")) {
    return [
      "Aim deliver a full featured yet approachable C plus plus video editor with fast core edits trim split merge and creative tools while keeping the UI unintimidating.",
      "Personas creators and influencers needing quick turnaround students editing coursework and advanced users who want accurate timeline control.",
      "Design goals frame accuracy responsive scrubbing minimal clicks for common tasks strong accessibility and a modular codebase that is easy to extend.",
      "Non goals for version one heavy collaborative editing and multi machine render farm kept out to keep the core focused and stable."
    ].join(" ");
  }

  // Editing and creative feature set
  if (ask("feature|edit|tools|capab|filter|transition|overlay|text|title|caption|audio|speed|slow|time.?lapse|effect|color|grade|stabil")) {
    return [
      "Core edits frame accurate trim split ripple delete join or merge clip disable and per clip speed slow fast reverse.",
      "Timeline multi track video and audio snap to playhead and markers magnetic mode toggle zoomable timeline markers and in and out points.",
      "Effects stackable clip effects exposure contrast saturation temperature or tint vignette sharpen or blur with live preview and per parameter strength.",
      "Transitions cross fade dip to black or white slide and zoom with adjustable duration and easing.",
      "Overlays and titles lower thirds captions shapes font family weight size line height letter spacing stroke fill shadow and safe area guides.",
      "Audio gain normalize fade in or out pan noise gate multi track mixing with meters and optional music ducking against dialogue.",
      "Speed effects slow motion and time lapse with frame blending constant rate for version one keyframed retime is on the roadmap."
    ].join(" ");
  }

  // UI and UX details
  if (ask("ui|ux|timeline|layout|drag|preview|panel|custom|marker|snapp|zoom|shortcuts?")) {
    return [
      "Workspace media bin timeline inspector and preview monitor panels are resizable and detachable and layouts can be saved or loaded.",
      "Interaction drag and drop from bin to timeline hover scrub in the bin ripple or snap toggles shift drag for fine adjustments double click to open a clip in the source viewer.",
      "Preview one half and one quarter resolution preview options safe area overlay and A B compare for effects.",
      "Usability touches auto scroll timeline on drag ghost previews for transitions and inline durations you can type to edit."
    ].join(" ");
  }

  // Accessibility
  if (ask("accessib|screen ?reader|a11y|caption|subtitle|contrast|keyboard|aria")) {
    return [
      "Screen readers all actionable controls have names roles and states timeline items expose labels and timecodes.",
      "Keyboard full navigation for the media bin and timeline arrow keys tab loops space to play or pause enter to confirm.",
      "Visual accessibility high contrast theme option scalable UI ninety to one hundred thirty percent focus rings and large hit targets.",
      "Captions import SRT or VTT edit timing and text and burn in or mux on export a basic auto caption pipeline is supported through an external step."
    ].join(" ");
  }

  // Architecture and patterns
  if (ask("arch|design|oop|module|component|class|render|io|engine|pattern|undo|redo|command|event")) {
    return [
      "Modules MediaIO decode and encode TimelineCore clips tracks and edits EffectsEngine PreviewRenderer and the UI Shell.",
      "Patterns Command pattern for undo and redo an event bus for UI to core updates and a background job queue for decode encode and effect render.",
      "Data model project to sequences to tracks to clips clips reference media with effect stacks and clip local transform color and audio.",
      "Serialization project saved as a compact JSON with media references and effect parameters media kept external for portability.",
      "Rendering decode to frame cache to effect stack to preview GPU upload for preview when available with a CPU fallback kept simple for portability."
    ].join(" ");
  }

  // Performance strategies
  if (ask("perform|large file|hd|4k|lag|speed|cache|proxy|optimi[sz]e|fps")) {
    return [
      "Responsiveness prefetch around the playhead and maintain a small ring buffer cache for scrubbing.",
      "Proxy workflow optional low resolution proxies for 4K media to keep preview smooth on modest hardware.",
      "Compute effect evaluation short circuits for invisible tracks or segments background render for long transitions and zero copy surfaces where the platform allows.",
      "Budgets target at least thirty FPS preview at half resolution on typical coursework hardware validated with sample 1080p and 4K footage to check memory and IO."
    ].join(" ");
  }

  // Formats import and export
  if (ask("format|codec|container|import|export|render|preset|bitrate|resolution|fps|mp4|mov|avi|h\\.26|vp9|audio")) {
    return [
      "Import common containers like MP4 and MOV H dot 264 and AAC and WAV or MP3 for audio via platform codecs or FFmpeg backed builds.",
      "Export presets for social 1080p at 30 and 1080p at 60 archive quality and lightweight preview with user settable resolution frames per second bitrate and container.",
      "Audio export stereo AAC or WAV loudness normalization option burn in versus sidecar captions selectable."
    ].join(" ");
  }

  // Keyboard shortcuts and workflow
  if (ask("shortcut|hotkey|key ?map|keyboard|workflow|tips|how do I")) {
    return [
      "Keys default Space play or pause J K L shuttle I and O mark in and out S split B ripple delete Command or Control plus Z or Y undo or redo plus or minus zoom M add marker.",
      "Workflow tips mark in and out in the source viewer overwrite or insert to the timeline trim on the timeline then apply transitions and color last.",
      "Safety autosave every sixty seconds and on focus loss with a crash recovery snapshot kept for the last two sessions."
    ].join(" ");
  }

  // Testing and quality
  if (ask("test|user test|iteration|feedback|stability|bug|qa|unit|soak")) {
    return [
      "Quality unit tests for TimelineCore operations split trim merge ripple regression clips for edge frames and soak tests on hour long timelines.",
      "Usability formative tests shaped panel defaults snap behavior and the text tool performance profiling on large media ensured smooth scrubbing.",
      "Continuous integration style local scripts reproduce encode and preview scenarios to keep performance within targets after changes."
    ].join(" ");
  }

  // Roadmap and limitations
  if (ask("limit|future|roadmap|next|not.?yet|missing|planned")) {
    return [
      "Limitations no shared or collaborative editing retime curves keyframed speed are basic and the effect library is intentionally compact.",
      "Roadmap keyframed parameters across effects GPU assisted preview path project history panel LUT support and export presets per platform."
    ].join(" ");
  }

  // Links
  if (ask("github|repo|code")) {
    return "GitHub https://github.com/AyeshaRahman2002/VideoEditingApplication";
  }
  if (ask("video|demo|walkthrough|youtube")) {
    return "Final demo https://youtu.be/fnO9mHOX-lA intermediate sprints are captured in the report.";
  }
  if (ask("report|pdf|document|write.?up|paper")) {
    return "Report /UserInterface.pdf";
  }

  // Fallback
  return "Oops! I missed that. Please ask about aims, features, UI and UX, accessibility, architecture, performance, formats, and export shortcuts and workflow, testing, limitations and roadmap, or links, GitHub, demo, report.";
};

const sportsMgmtResponder = (raw) => {
  const q = raw.trim();
  const ask = (...pats) => pats.some((p) => new RegExp(p, "i").test(q));

  if (ask("objective|aim|overview|scope|problem|motivation")) {
    return [
      "Aim streamline a sports center’s operations with a full stack web app Python and Flask with SQLAlchemy and HTML CSS JS.",
      "Scope memberships user profiles class and program browsing and registration event booking with reminders admin reporting and secure payments simulated gateway.",
      "Motivation reduce manual work and errors while giving members a clean self service experience on desktop and mobile."
    ].join(" ");
  }

  if (ask("feature|capab|module|function|what can it do|class|program|event|booking|cart|wishlist")) {
    return [
      "Core features:",
      "• Auth and profiles signup and login profile edit membership status and history.",
      "• Programs and classes searchable and filterable list with schedule fees capacity and live availability wishlist and cart conflict detection.",
      "• Events calendar view register or unregister capacity tracking waitlist optional.",
      "• Notifications email confirmations reminders and change alerts via Flask Mail and SMTP.",
      "• Admin dashboard CRUD for programs and events user management registration views CSV export and basic analytics.",
      "• Payments simulated checkout linked to user receipts and history."
    ].join("\n");
  }

  if (ask("ui|ux|frontend|layout|bootstrap|responsive")) {
    return [
      "UI and UX Bootstrap plus custom CSS for responsive layouts navbar filters cards and modal dialogs.",
      "Timeline and calendar widgets for events dashboard for a user’s registrations and payments keyboard focus order and ARIA labels for better accessibility."
    ].join(" ");
  }

  if (ask("arch|design|stack|layers|oop|service|controller|blueprint|structure")) {
    return [
      "Architecture Flask blueprints split into auth programs events bookings and admin.",
      "Data layer SQLAlchemy models with relationships Users to Memberships Programs to Sessions Bookings Events eager or lazy loading as needed.",
      "Services mailer availability and seat allocation conflict checker payments stub.",
      "Templates Jinja2 views REST like routes returning HTML or JSON client JS for interactivity."
    ].join(" ");
  }

  if (ask("schema|model|table|relationship|sql|sqlalchemy|er\\b|diagram")) {
    return [
      "Key models User id email pass hash role created at,",
      "Program id name desc fee, Session id program id starts at ends at capacity,",
      "Booking id user id session id status paid created at,",
      "Event id title when at capacity, EventReg id user id event id status.",
      "Indexes on session id and status and on event id and status for fast counts."
    ].join(" ");
  }

  if (ask("auth|login|security|csrf|bcrypt|validate|xss|injection")) {
    return [
      "Security Flask Login for sessions bcrypt for password hashing WTForms and Flask WTF with CSRF tokens input validation and parameterized queries via SQLAlchemy role based access admin versus member rate limited login cookies set HttpOnly and SameSite."
    ].join(" ");
  }

  if (ask("notify|email|reminder|flask-mail|smtp")) {
    return "Notifications Flask Mail with SMTP sender for registration confirmations event reminders cron or APS scheduler and change alerts time or venue.";
  }

  if (ask("payment|checkout|stripe|gateway")) {
    return "Payments simulated gateway layer that records transactions and receipts abstraction allows swapping to Stripe or PayPal later without changing booking flow.";
  }

  if (ask("performance|scal(e|ability)|index|cache|paginate")) {
    return "Performance query pagination for listings selective eager loading for detail pages database indexes on foreign keys and status and lightweight JSON endpoints to keep pages snappy.";
  }

  if (ask("test|testing|unit|integration|coverage|qa|deployment|heroku")) {
    return [
      "Testing unit tests for booking rules seats and conflicts auth flows and mailer stubs integration tests for end to end registration.",
      "Deployment Heroku demo with environment based config for database URL and SMTP credentials."
    ].join(" ");
  }

  if (ask("future|roadmap|next|improve|todo")) {
    return "Roadmap real payment provider waitlist auto promotion attendance QR check in richer reporting and staff roles with granular permissions.";
  }

  if (ask("github|repo|code|source")) {
    return "GitHub https://github.com/AyeshaRahman2002/SportsManagementSystem";
  }

  if (ask("report|pdf|document|docs?")) {
    return "There is not a public report PDF for this one yet; code and the README in the repo cover setup and usage.";
  }

  return "Oops! I missed that. Please ask about aims, features, UI and UX, architecture schema, security, notifications, payments, performance, testing and deploy roadmap or links.";
};

const todoResponder = (raw) => {
  const t = raw.trim();
  const has = (...p) => p.some((r) => new RegExp(r, "i").test(t));

  if (has(t, "objective|aim|overview|problem|motivation|scope")) {
    return "Aim help students and professionals track assessments with a clean fast web app task CRUD status flows search and filters and a responsive UI. Problem scattered deadlines and poor visibility across many course deliverables.";
  }
  if (has(t, "stack|tech|library|framework|backend|frontend|db|sqlite|sqlalchemy|flask")) {
    return "Stack Flask with Jinja2 SQLAlchemy on SQLite Flask Login Flask WTF CSRF bcrypt Frontend HTML5 CSS3 Bootstrap 5 vanilla JS and Fetch deploy ready for Render or Heroku.";
  }
  if (has(t, "feature|capab|crud|task|status|priority|label|search|filter|sort|pagination|real.?time")) {
    return "Features task CRUD fields title description due priority labels status transitions Incomplete In Progress Completed live counters search by text due label priority and status quick actions keyboard shortcuts optimistic UI saves.";
  }
  if (has(t, "auth|login|register|session|security|csrf|hash|bcrypt|roles")) {
    return "Security user register and login via Flask Login bcrypt hashed passwords CSRF on forms per user row scoping input validation and defensive queries to prevent injection.";
  }
  if (has(t, "schema|model|table|entity|erd|db design")) {
    return "Schema User id email pw hash; Task id user id to User title description due date priority status labels json created at updated at completed at with an index on due date status and priority.";
  }
  if (has(t, "api|route|endpoint|rest|json")) {
    return "Key routes GET slash tasks with filters POST slash tasks PATCH slash tasks slash id status or fields DELETE slash tasks slash id server renders HTML with progressive JSON APIs for inline updates.";
  }
  if (has(t, "ux|ui|design|responsive|mobile|accessibility|a11y")) {
    return "UX glassy card layout color blind safe status hues and icons large hit targets focus outlines and ARIA labels mobile layout with a sticky add and search bar.";
  }
  if (has(t, "test|testing|unit|integration|qa|coverage|perf")) {
    return "Testing unit tests for models and validators integration tests for auth and task flows seed data for manual QA and performance checks on list pages with hundreds of tasks.";
  }
  if (has(t, "limit|future|next|roadmap|improve")) {
    return "Roadmap recurring tasks reminders and ICS export Kanban view bulk edit tag suggestions soft delete and undo and WebSocket push for multi device sync.";
  }
  if (has(t, "github|repo|code")) {
    return "GitHub https://github.com/AyeshaRahman2002/Coursework-Management-Application";
  }
  if (has(t, "report|pdf|doc|write.?up")) {
    return "Project notes are in the repository README and commit history.";
  }
  return "Oops! I missed that. Please ask about aims, stack, features, security schema, API, UX testing, roadmap, or the GitHub repo.";
};

const multimodalResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|overview|scope")) {
    return "Objective: design and implement a multi-modal deep learning framework that combines visual recognition and language generation. The system integrates a CNN for image feature extraction with an RNN/transformer-based language model to generate semantically coherent captions, demonstrating expertise in multi-task learning and evaluation.";
  }

  if (has(text, "architecture|design|pipeline")) {
    return "Architecture: CNN backbone (ResNet-style, trained from scratch and with transfer learning) produces high-dimensional feature maps. These are projected into a lower embedding space and fed into an RNN decoder for sequential caption generation. Extended with transformer-driven embeddings to improve semantic alignment. The full pipeline includes preprocessing, CNN training, feature projection, RNN/transformer captioning, and evaluation modules, all built in PyTorch with reproducible workflows.";
  }

  if (has(text, "dataset|tinyimagenet|cifar|data")) {
    return "Datasets: • TinyImageNet30 (13.5k images, 30 classes) for CNN-based image classification. • CIFAR-10 (50k training, 10k test images) for fine-tuning and benchmarking transfer learning. • Curated captioning dataset for training RNN-based language generation. Data split into stratified train/validation/test folds with reproducible random seeds. Applied data augmentation (flips, crops, rotations, normalization) to mitigate overfitting.";
  }

  if (has(text, "training|tuning|regularization|optimizer|hyperparam")) {
    return "Training setup: extensive regularization including dropout, weight decay, and data augmentation. Optimizers: Adam and AdamW with learning rate scheduling and early stopping. Hyperparameter sweeps over learning rate, dropout rate, hidden state size, embedding dimension, and sequence length. Explored frozen vs. fine-tuned CNN backbones to compare transfer learning strategies.";
  }

  if (has(text, "metrics|results|evaluation|roc|confusion")) {
    return "Evaluation: for classification, reported accuracy, precision, recall, F1-score, per-class ROC/PR curves, and confusion matrices. For captioning, generated qualitative samples and assessed fluency, relevance, and semantic correctness. Conducted leaderboard submission (Kaggle) to benchmark against peers. Results highlighted robust CNN classification accuracy and meaningful captions with improved semantic coherence from transformer embeddings.";
  }

  if (has(text, "github|code|repo")) {
    return "No Github link";
  }

  if (has(text, "report|html|pdf|documentation|docs?")) {
    return "No Report";
  }

  return "Oops! I missed that. Please ask about objectives, architecture, datasets, training setup, metrics/results, Kaggle benchmarks, or links to GitHub and reports.";
};

const mlLoopResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|summary")) {
    return [
      "Objective: learn to pick fast loop optimizations per kernel shape to minimize runtime (regret).",
      "Scope: kernels matmul/conv1d/stencil2d; features from problem sizes & schedule params; outputs are optimization choices.",
    ].join(" ");
  }

  if (has(text, "architecture|approach|pipeline|design")) {
    return [
      "Pipeline: collect runtimes → migrate features → train tabular models with regret-aware weighting → LOKO eval per kernel → optional GNN path for structural learning → export headers & markdown report.",
      "Selection: compare ExtraTrees/RandomForest/GBDT/LogReg/MLP and choose by macro-F1 or regret; hybrid guard for low confidence.",
    ].join(" ");
  }

  if (has(text, "models?|algorithms|baselines|ensemble")) {
    return "Models: ExtraTrees, RandomForest, GBDT, Logistic Regression, Torch MLP; GNN for graph-based generalization. Baselines include no-opt and OMP variants; selection uses CV and regret metrics.";
  }

  if (has(text, "dataset|data set|features|runtime")) {
    return "Dataset: ~9k configurations generated by the workflow; features include N/M/K and schedule parameters; labels are best performing choices; metrics include accuracy, F1, regret, and speedup× vs baseline.";
  }

  if (has(text, "results|metrics|performance|speedup|regret|loko")) {
    return [
      "Typical: tabular test acc≈0.84, macro-F1≈0.40; LOKO median speedup× ~6.6 on matmul, ~2.57 on conv1d, regret median=1.0.",
      "GNN: median regret≈1.0 with median speedup×≈3.0; strict means reported in summaries.",
    ].join(" ");
  }

  if (has(text, "mac|openmp|compile|build|setup|brew|omp")) {
    return "macOS build: `brew install libomp`, export OMP flags in Makefile, then `make workflow`. Parallel data collection with `--parallel --jobs 4`.";
  }

  if (has(text, "run|how to|commands|make|usage")) {
    return [
      "Usage: `make workflow` (all steps), `make data`, `make train`, `make loko`, `make gnn`, `make report`.",
      "Artifacts: dataset.csv, report.json/txt, loko.json, gnn_model.pt, gnn_regret_details.csv, generated_schedule.h, report.md.",
    ].join(" ");
  }

  if (has(text, "github|code|repo")) {
    return "GitHub: https://github.com/yourusername/MLLoopOptSelector (replace with your repo URL).";
  }

  if (has(text, "report|readme|docs?")) {
    return [
      "Docs: see README in repo root; generated Markdown summary at /artifacts/report.md after `make report`.",
      // If you imported a PDF: `• Readme (PDF)  /assets/MLLoopOptSelector_Readme.pdf`,
    ].join("\n");
  }

  return "Ask about the objective, pipeline, dataset, models, LOKO results, OpenMP/macOS build, or links to code & reports.";
};

const pfmRiskAIResponder = (raw) => {
  const q = raw.trim();
  const match = (...p) => p.some((r) => new RegExp(r, "i").test(q));

  if (match("objective|overview|goal|scope|summary|why|problem")) {
    return "AgenCAT is ongoing cybersecurity research at KAUST. The core problem: once someone logs into a system, most security tools stop watching them closely. If their account gets compromised after login , through a stolen session, lateral movement, or insider threat , it often goes undetected. AgenCAT aims to fix that by continuously monitoring user behaviour after login and dynamically deciding whether to keep trusting them or step up security.";
  }

  if (match("architecture|design|pipeline|stack|approach|flow|system|how does it work")) {
    return "The system watches user activity in real time after login and builds a behavioural profile for each user. When behaviour starts drifting from the norm , unusual access patterns, moving to new systems, suspicious timing , the system raises the trust level required and can trigger step-up authentication or block the session. It’s designed to work across organisations without sharing raw user data.";
  }

  if (match("dataset|data|lanl|rba|cert|iam|events|logs|tested|evaluated")) {
    return "The system has been tested on large-scale enterprise authentication datasets, including datasets from real penetration testing exercises with verified attack labels. This is important because a lot of prior work in this space uses artificial attack labels, which we found gives a misleading picture of how well the system actually works.";
  }

  if (match("feature|telemetry|signals|what does it look at|behaviour|activity")) {
    return "The system looks at things like login patterns, which machines a user is accessing, what time they’re active, how their behaviour compares to their own history, and signals from process-level activity on the machines they use. The idea is to build a picture of what’s normal for each user and spot when something feels off.";
  }

  if (match("result|metric|performance|accuracy|how well|work")) {
    return "Results are not published yet as the research is ongoing. What we can say is the system meaningfully reduces false alarms for analysts compared to existing approaches, and it holds up when tested against real attack labels , unlike several published baselines which we found fail substantially on real attacks.";
  }

  if (match("digital twin|user profile|personaliz|personalise|per.user|individual")) {
    return "Each user gets their own behavioural profile that updates continuously as they use the system. New users are covered by a general baseline from day one and the system personalises to them quickly over time , so there’s no gap in coverage for new accounts.";
  }

  if (match("federated|privacy|gdpr|data sharing|organisations|cross.org")) {
    return "A key design requirement is that raw user data never leaves the organisation it belongs to. The system is built to work across multiple organisations without centralising sensitive logs, which makes it practical for real enterprise deployments where data sharing across companies isn’t possible.";
  }

  if (match("xai|explain|why|reason|alert|analyst|understand")) {
    return "Every time the system flags something, it provides an explanation of what triggered it , which behaviours looked unusual and why. This is important for security analysts who need to decide whether to act on an alert. They shouldn’t have to trust a black box.";
  }

  if (match("scal|scale|large|enterprise|many users")) {
    return "The system is designed to scale to large enterprise environments without needing specialised hardware. The per-user profiling approach stays efficient regardless of how many users there are.";
  }

  if (match("baseline|prior|comparison|existing|prior work|other systems")) {
    return "One of the key findings of the research is that several published systems in this space report near-perfect results , but only because they test against artificial attack labels. When we reproduced those systems and tested against real attack labels, performance dropped dramatically. AgenCAT is evaluated honestly against real attacks from the start.";
  }

  if (match("github|code|repo|repository")) {
    return "The research code is under active development at KAUST and is not publicly released at this stage.";
  }

  if (match("paper|publication|report|preprint")) {
    return "The research is being prepared for conference submission. Nothing is publicly available yet.";
  }

  return "Ask about what the project does, how it works, how it was tested, the privacy approach, or how it compares to existing work.";
};

/** --------------------------
 * Automated Literature Review & LLM Efficiency Evaluation bot
 * -------------------------- */
const llmResearchResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|motivation|summary")) {
    return [
      "Aim build a CPU centric research assistant that automates literature mining, dense retrieval, RAG, tabular data analysis, and efficiency benchmarking for LLMs on modest hardware.",
      "The platform answers how far small instruction tuned models like MiniLM and FLAN T5 small can be pushed in terms of retrieval, summarisation quality, and latency throughput trade offs on CPU only setups."
    ].join(" ");
  }

  if (has(text, "architecture|design|system|pipeline|modules|stack|overview")) {
    return [
      "Architecture modular Python packages: literature for fetching, embedding, clustering, and summarising papers; rag for dense indices and RAG QA; llm_opt for quantisation, latency, tokens per second, batching, KV cache, and PEFT; data_analysis and surveys for EDA and survey cleaning; reporting for Markdown, PDF, and Excel outputs; plus a Streamlit UI that orchestrates everything via config.yaml and a Makefile.",
      "Everything is designed to be CPU safe, network tolerant with backoff for APIs, and reproducible via a CPU only Docker image."
    ].join(" ");
  }

  if (has(text, "literature|papers?|arxiv|semantic scholar|ingest|fetch|normalise|normalize|cluster|embedding|minilm")) {
    return [
      "Literature pipeline queries arXiv and Semantic Scholar for LLM efficiency related papers, normalises and deduplicates them, then embeds title plus abstract using a MiniLM based encoder.",
      "KMeans and PCA or UMAP are used to cluster and project the corpus, giving topic structure over the papers for downstream summarisation and review."
    ].join(" ");
  }

  if (has(text, "summary|summari[sz]ation|flan|t5|auto review|cluster summary|rouge|bertscore|quality|metrics")) {
    return [
      "Summarisation uses google slash flan t5 small as an encoder decoder backbone to generate paper level and cluster level summaries.",
      "An end to end run achieves ROUGE L around zero point eighteen and BERTScore F1 around zero point eighty six against abstracts, indicating moderate lexical overlap but high semantic similarity for a small CPU friendly model."
    ].join(" ");
  }

  if (has(text, "rag|retrieval|dense|index|faiss|hybrid|tfidf|ndcg|ranking|rerank")) {
    return [
      "RAG module builds a dense index over the embedded literature using MiniLM and either FAISS or a NumPy cosine similarity fallback.",
      "Queries are answered via retrieval augmented generation with FLAN T5 small, and retrieval quality is evaluated with nDCG at 5 around zero point eighty five on LLM efficiency style questions, plus a simple hybrid dense plus TF IDF reranker and optional multi query expansion."
    ].join(" ");
  }

  if (has(text, "efficiency|latency|throughput|tokens per second|batch|batching|profil(e|ing)|quantization|quantisation")) {
    return [
      "Efficiency toolkit benchmarks latency, tokens per second, and batching behaviour for CPU only models under different prompt lengths and batch sizes.",
      "On a sixteen core CPU, FLAN T5 small shows peak tokens per second for medium length prompts and benefits noticeably from batching, trading per request latency for much higher throughput. Quantisation stubs and comparison tables are wired in for future GPU or bits and bytes experiments."
    ].join(" ");
  }

  if (has(text, "kv ?cache|key value|gpt2|micro ?bench|cache")) {
    return [
      "KV cache micro benchmarks with a tiny GPT 2 variant reveal that on short CPU workloads, enabling a KV cache can actually be slower than recomputing attention because cache management overhead dominates, contrasting with common GPU centric intuition.",
      "This underlines that efficiency conclusions must be hardware aware, not blindly imported from GPU benchmarks."
    ].join(" ");
  }

  if (has(text, "peft|lora|adapter|fine ?tuning|train|checkpoint")) {
    return [
      "PEFT experiments integrate LoRA adapters into attention projections of FLAN T5 small with rank eight and alpha sixteen, training on literature pairs of abstract plus title to summary.",
      "The platform supports training, evaluation, and export of merged checkpoints, providing a template for CPU friendly parameter efficient fine tuning workflows."
    ].join(" ");
  }

  if (has(text, "data analysis|eda|csv|survey|likert|cleaning|tabular")) {
    return [
      "Tabular and survey modules provide Arrow safe CSV ingestion, descriptive statistics, clustering, correlation plots, and LLM generated commentary for numeric datasets, plus configurable Likert scale mappings and one hot encoding for multi choice survey fields.",
      "Outputs feed into the final report as both figures and narrative summaries."
    ].join(" ");
  }

  if (has(text, "ui|streamlit|dashboard|interface|tabs|makefile|docker|reproducible|orchestration|config")) {
    return [
      "User interface a Streamlit dashboard with tabs for literature, RAG, data analysis, surveys, PEFT, and efficiency curves, all driven by a central config.yaml.",
      "A Makefile and CPU only Dockerfile wire the platform into reproducible workflows so experiments can be rerun on different CPU servers with the same configuration."
    ].join(" ");
  }

  if (has(text, "result|finding|discussion|limit|limitation|future|roadmap|conclusion")) {
    return [
      "Results show that small instruction tuned models like MiniLM and FLAN T5 small can support meaningful literature review, RAG, and efficiency analysis on CPUs, with decent quality and transparent trade offs between latency and throughput.",
      "Limitations include reliance on relatively small models, a simple RAG pipeline without cross encoder reranking, and illustrative rather than exhaustive efficiency sweeps. Future work includes stronger models, richer RAG, multimodal extensions, and cross hardware comparisons."
    ].join(" ");
  }

  if (has(text, "report|paper|pdf|writeup|documentation|docs?")) {
    return "Research paper A CPU Centric Platform for Literature Mining and LLM Efficiency Studies is available as a PDF linked from this card.";
  }

  if (has(text, "github|code|repo|repository")) {
    return "A public GitHub repository can be linked here once available; for now, the card focuses on the architecture, metrics, and engineering blueprint from the paper.";
  }

  return "Oops! I missed that. Please ask about aims, architecture, literature and summarisation, RAG and retrieval metrics, efficiency benchmarks, KV cache findings, PEFT with LoRA, data and survey analysis, or the Streamlit and Docker based orchestration, or request the research paper link.";
};

/** --------------------------
 * Projects (with categories) + filtered render
 * -------------------------- */
export default function ProjectCards({ selectedCategory = "All", selectedSection = "All" }) {
  const workProjects = [
    {
      section: "Work",
      category: "Security",
      categories: ["Security", "AI/ML"],
      tags: ["Zero Trust", "Federated Learning", "Anomaly Detection", "Digital Twins", "SHAP"],
      suggestions: ["Give me a summary", "How does the architecture work?", "What are digital twins?", "How is privacy preserved?", "How does the XAI work?", "How does it compare to prior work?"],
      image: trustAIPic,
      title: "AgenCAT: Agentic Continuous Adaptive Trust for Post-Login Identity Assurance (KAUST)",
      descriptionBullets: pfmRiskAIBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [],
      getResponse: pfmRiskAIResponder,
    },
    {
      section: "Work",
      category: "AI/ML",
      tags: ["Python", "ML", "Simulator", "Desktop App", "Predictive Analytics"],
      image: poultryPic,
      title: "Smart Poultry Farm Management Desktop (AI + Simulator)",
      descriptionBullets: poultryBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [],
      getResponse: poultryResponder,
    },
    {
      section: "Work",
      category: "Finance",
      tags: ["Python", "Web Scraping", "Excel", "GUI", "Financial Modeling"],
      image: hotelProjectPic,
      title: "Financial Modeling: Hotel Price Data Scraping Tool",
      descriptionBullets: hotelBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [{ name: "Project Proposal", url: hotelProposal }],
      getResponse: hotelResponder,
    },
    {
      section: "Work",
      category: "Finance",
      tags: ["Python", "Playwright", "Web Scraping", "Excel", "Financial Modeling"],
      image: flightsProjectPic,
      title: "Financial Modeling: Flights Price Data Scraping Tool",
      descriptionBullets: flightsBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [{ name: "Project Proposal", url: flightsProposal }],
      getResponse: flightsResponder,
    },
  ];

  const researchProjects = [
    {
      section: "Research",
      category: "AI/ML",
      tags: ["RAG", "FAISS", "FLAN-T5", "LoRA", "Streamlit", "BERTScore"],
      suggestions: ["Give me a summary", "How does the RAG pipeline work?", "What models were used?", "What were the results?", "How does LoRA fine-tuning work?", "Where's the report?"],
      image: llmResearchPic,
      title: "Automated Literature Review and LLM Efficiency Evaluation",
      descriptionBullets: llmResearchBullets,
      githubLink: "https://github.com/AyeshaRahman2002/LLM-research-assistant",
      videoLink: "",
      reportLinks: [{ name: "Research Paper", url: llmResearchPaper }],
      getResponse: llmResearchResponder,
    },
    {
      section: "Research",
      category: "Systems",
      categories: ["Systems", "AI/ML"],
      tags: ["GNN", "ExtraTrees", "Compiler", "OpenMP", "SHAP", "PyTorch"],
      suggestions: ["Give me a summary", "What loop optimisations does it select?", "How does the GNN work?", "What were the speedup results?", "How does LOKO evaluation work?", "Show me the GitHub"],
      image: mlLoopPic,
      title: "Machine-Learning-Driven Loop Optimization Selector for Compiler Auto-Tuning",
      descriptionBullets: mlLoopBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [],
      getResponse: mlLoopResponder,
    },
    {
      section: "Research",
      category: "Graphics",
      categories: ["Graphics", "AI/ML"],
      tags: ["NeRF", "Vision-Language", "Agentic AI", "3D Reconstruction", "Digital Preservation"],
      suggestions: ["Give me a summary", "How does NeRF work?", "What do Vision-Language models do here?", "How does the agentic pipeline work?"],
      image: nerfPic,
      title: "Neural Reconstruction of Heritage Artifacts (NeRF + Vision-Language + Agentic AI)",
      descriptionBullets: nerfBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [],
      getResponse: nerfResponder,
    },
    {
      section: "Research",
      category: "AI/ML",
      tags: ["BDI Agents", "AI Planning", "Multi-Agent", "Simulation", "Emergent Behaviour"],
      suggestions: ["Give me a summary", "What is BDI architecture?", "How does AI planning work here?", "What emergent behaviours were studied?", "What is the CPU simulator for?"],
      image: simMindPic,
      title: "SimMind: Cognitive Multi-Agent Simulation Framework (AI Planning + Agents + CPU Simulator)",
      descriptionBullets: simMindBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [],
      getResponse: simMindResponder,
    },
  ];

  const uniProjects = [
    {
      section: "Uni",
      category: "Finance",
      categories: ["Finance", "AI/ML"],
      tags: ["N-BEATSx", "LSTM", "SARIMAX", "PyTorch", "Time Series"],
      image: inflationProjectPic,
      title: "Inflation Forecasting with Machine Learning Models",
      descriptionBullets: inflationBullets,
      githubLink: "https://github.com/AyeshaRahman2002/Inflation-Forecasting-Group-Project",
      videoLink: "https://youtu.be/Dtd82dyeasE",
      reportLinks: [
        { name: "Group Report", url: inflationGroupReport },
        { name: "Individual Report", url: inflationIndividualReport },
      ],
      getResponse: inflationResponder,
    },
    {
      section: "Uni",
      category: "Health",
      categories: ["Health", "AI/ML"],
      tags: ["LSTM", "Random Forest", "NLP", "Eye Tracking", "AWS"],
      image: digitalHealthPic,
      title: "Digital Health AI for Identifying Autism Spectrum Disorder",
      descriptionBullets: asdBullets,
      githubLink: "https://github.com/AyeshaRahman2002/Digital-Health-ASD",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: digitalHealthReport }],
      getResponse: asdResponder,
    },
    {
      section: "Uni",
      category: "Finance",
      categories: ["Finance", "AI/ML"],
      tags: ["NLP", "SVM", "Word2Vec", "Sentiment Analysis", "Classification"],
      image: sentimentProjectPic,
      title: "Creating a Classification Model Using Online Sentiment to Determine Stock Price",
      descriptionBullets: sentimentBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: dataMiningReport }],
      getResponse: sentimentResponder,
    },
    {
      section: "Uni",
      category: "AI/ML",
      tags: ["CNN", "RNN", "PyTorch", "Image Captioning", "Transfer Learning"],
      image: multimodalPic,
      title: "Multi-Modal CNN-RNN Framework for Visual Recognition and Image Captioning",
      descriptionBullets: multimodalBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [],
      getResponse: multimodalResponder,
    },
    {
      section: "Uni",
      category: "Graphics",
      tags: ["OpenGL", "GLSL", "C++", "Blinn-Phong", "Instancing"],
      image: renderingProjectPic,
      title: "Interactive 3D Rendering Application",
      descriptionBullets: renderingBullets,
      githubLink: "https://github.com/AyeshaRahman2002/ComputerGraphics_3D_Rendering",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: graphicsReport }],
      getResponse: renderingResponder,
    },
    {
      section: "Uni",
      category: "Robotics",
      categories: ["Robotics", "AI/ML"],
      tags: ["ROS 2", "ResNet18", "PID Control", "Computer Vision", "Python"],
      image: spaceNavPic,
      title: "Autonomous Navigation and Detection System for Spacecraft",
      descriptionBullets: spaceNavBullets,
      githubLink: "https://github.com/AyeshaRahman2002/PlanetDetection",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: roboticsReport }],
      getResponse: spaceNavResponder,
    },
    {
      section: "Uni",
      category: "AI/ML",
      tags: ["PSO", "Marine Predators", "Neural Networks", "Metaheuristics", "Python"],
      image: bioOptPic,
      title: "Comparative Analysis of Bio-Inspired Optimisation for Neural Network Training",
      descriptionBullets: bioOptBullets,
      githubLink: "https://github.com/AyeshaRahman2002/bio-inspired-optimization",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: bioOptReport }],
      getResponse: bioOptResponder,
    },
    {
      section: "Uni",
      category: "Systems",
      tags: ["C", "RISC-V", "OS", "Memory Management", "xv6"],
      image: xv6ProjectPic,
      title: "xv6 Memory Management: malloc, free and rqstMem",
      descriptionBullets: xv6Bullets,
      githubLink: "https://github.com/AyeshaRahman2002/MemoryManagement-C",
      videoLink: "",
      reportLinks: [{ name: "Coursework Report", url: xv6Report }],
      getResponse: xv6Responder,
    },
    {
      section: "Uni",
      category: "Health",
      categories: ["Health", "AI/ML"],
      tags: ["Research Paper", "CBT", "VR Therapy", "NLP", "Chatbots"],
      image: psychAIProjectPic,
      title: "Use of AI in Psychological Treatments",
      descriptionBullets: psychAIBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: psychAIReport }],
      getResponse: psychAIResponder,
    },
    {
      section: "Uni",
      category: "Graphics",
      tags: ["C++", "OpenGL", "Rasterisation", "Clipping", "Transformations"],
      image: twoDRenderPic,
      title: "2D Rendering Application (Computer Graphics)",
      descriptionBullets: twoDBullets,
      githubLink: "https://github.com/AyeshaRahman2002/ComputerGraphics-2d-Rendering",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: twoDReport }],
      getResponse: twoDResponder,
    },
    {
      section: "Uni",
      category: "HCI",
      tags: ["UX Research", "Comparative Study", "Privacy", "Contact Tracing"],
      image: covidAppsPic,
      title: "Aarogya Setu vs. COVIDSafe: Comparative Analysis",
      descriptionBullets: covidAppsBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [{ name: "Project Slides", url: covidSlides }],
      getResponse: covidAppsResponder,
    },
    {
      section: "Uni",
      category: "HCI",
      tags: ["Flask", "Data Visualisation", "D3.js", "User Study", "Python"],
      image: medalsProjectPic,
      title: "Olympic Medal Analysis Using Data Visualisations",
      descriptionBullets: medalsBullets,
      githubLink: "https://github.com/AyeshaRahman2002/InfoVis-MedalAnalysis",
      videoLink: "",
      reportLinks: [{ name: "Report", url: infoVisReport }],
      getResponse: olympicsResponder,
    },
    {
      section: "Uni",
      category: "Systems",
      tags: ["Carbon Tracking", "IoT", "Multi-device", "Sustainability", "Web App"],
      image: greenMyCloudPic,
      title: "GreenMyCloud: Carbon Footprint Monitoring",
      descriptionBullets: greenMyCloudBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [{ name: "Report", url: greenMyCloudReport }],
      getResponse: greenMyCloudResponder,
    },
    {
      section: "Uni",
      category: "HCI",
      tags: ["C++", "UI/UX", "Group Project", "Accessibility", "Real-time Preview"],
      image: videoEditingPic,
      title: "Video Editing Application (C++ UI Group Project)",
      descriptionBullets: videoEditingBullets,
      githubLink: "https://github.com/AyeshaRahman2002/VideoEditingApplication",
      videoLink: "https://youtu.be/fnO9mHOX-lA",
      reportLinks: [{ name: "UI Report", url: uiReport }],
      getResponse: videoEditingResponder,
    },
    {
      section: "Uni",
      category: "Systems",
      tags: ["Flask", "SQLAlchemy", "Python", "Auth", "Email Notifications"],
      image: sportsMgmtPic,
      title: "Sports Management Web Application",
      descriptionBullets: sportsMgmtBullets,
      githubLink: "https://github.com/AyeshaRahman2002/SportsManagementSystem",
      videoLink: "",
      reportLinks: [],
      getResponse: sportsMgmtResponder,
    },
    {
      section: "Uni",
      category: "HCI",
      tags: ["Flask", "SQLite", "Bootstrap", "Auth", "CSRF Protection"],
      image: todoProjectPic,
      title: "Assessment To-Do List (Flask + SQLite)",
      descriptionBullets: todoBullets,
      githubLink: "https://github.com/AyeshaRahman2002/Coursework-Management-Application",
      videoLink: "",
      reportLinks: [],
      getResponse: todoResponder,
    },
  ];

  const virtualProjects = [
    {
      section: "Virtual",
      category: "Systems",
      tags: ["Python", "OOP", "Factory Pattern", "Unit Testing", "Forage"],
      image: lyftProjectPic,
      title: "Lyft Back-End Engineering System Design (Forage)",
      descriptionBullets: lyftBullets,
      githubLink: "https://github.com/AyeshaRahman2002/lyft",
      videoLink: "",
      reportLinks: [],
      getResponse: lyftResponder,
    },
  ];

  const allProjects = [...workProjects, ...researchProjects, ...uniProjects, ...virtualProjects];

  const SECTIONS = [
    { key: "Work", label: "Work Projects", projects: workProjects },
    { key: "Research", label: "Research Projects", projects: researchProjects },
    { key: "Uni", label: "University Projects", projects: uniProjects },
    { key: "Virtual", label: "Virtual Experience", projects: virtualProjects },
  ];

  const sectionHeadStyle = {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    fontWeight: 800,
    color: "#f0f0f8",
    marginBottom: "1rem",
    paddingBottom: "0.4rem",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    letterSpacing: "-0.01em",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "16px",
    width: "100%",
    maxWidth: "1240px",
    margin: "0 auto",
  };

  const gridResponsiveCSS = `
    @media (min-width: 560px) { .proj-grid { grid-template-columns: repeat(2, 1fr) !important; } }
    @media (min-width: 860px) { .proj-grid { grid-template-columns: repeat(3, 1fr) !important; } }
    @media (min-width: 1180px) { .proj-grid { grid-template-columns: repeat(4, 1fr) !important; } }
  `;

  if (selectedCategory === "All" && selectedSection === "All") {
    return (
      <>
        <style>{gridResponsiveCSS}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", width: "100%" }}>
          {SECTIONS.map(({ key, label, projects }) => (
            <div key={key} style={{ width: "100%", maxWidth: "1240px", margin: "0 auto" }}>
              <h2 style={sectionHeadStyle}>{label}</h2>
              <div className="proj-grid" style={gridStyle}>
                {projects.map((p) => (
                  <ProjectCard key={p.title} {...p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  const visible = allProjects.filter(
    (p) =>
      (selectedCategory === "All" || (p.categories ?? [p.category]).includes(selectedCategory)) &&
      (selectedSection === "All" || p.section === selectedSection)
  );

  return (
    <>
      <style>{gridResponsiveCSS}</style>
      <div className="proj-grid" style={gridStyle}>
        {visible.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
        {visible.length === 0 && (
          <div style={{ opacity: 0.6, fontWeight: 600, gridColumn: "1/-1" }}>No projects in this filter yet.</div>
        )}
      </div>
    </>
  );
}
