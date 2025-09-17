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

/** --------------------------
 * Small helper
 * -------------------------- */
const has = (text, ...patterns) =>
  patterns.some((p) => new RegExp(p, "i").test(text));

/** --------------------------
 * Inflation project
 * -------------------------- */
const inflationBullets = [
  "Developed a forecasting system to predict US inflation PCE Index using deep learning models such as N-BEATSx, NHITS, GRU, LSTM, SARIMAX, and ARDL.",
  "Responsible for the design implementation and evaluation of the N-BEATS model family (N-BEATS, N-BEATSx, N-HiTS) using Fourier lag and momentum based exogenous features.",
  "Conducted detailed model validation applied data preprocessing techniques and used PyTorch based forecasting pipelines to achieve low error metrics.",
  "Collaborated in a seven member team to assess model performance across multiple horizons and compare with multiple statistical machine learning and deep learning models.",
];

/** --------------------------
 * ASD project
 * -------------------------- */
const asdBullets = [
  "Built an AI driven digital health app for diagnosing and tracking Autism Spectrum Disorder in adults",
  "Integrated standard autistic traits questionnaires and an NLP tool using transformer based sentiment and intent analysis for real time social feedback",
  "Developed a notes tracking model with text preprocessing embeddings and a bidirectional LSTM to analyse written reflections with cross validation",
  "Created an eye tracking classifier using gaze and pupil features with a Random Forest achieving about 77 percent accuracy and 0 point 81 AUC",
];

/** --------------------------
 * Sentiment Stock projects
 * -------------------------- */
const sentimentBullets = [
  "Built a sentiment driven stock movement classifier that fuses online text with historical price changes around product release windows",
  "Collected and labelled social content from sources such as Amazon Walmart and Twitter using filtered scraping APIs quality checks and weak supervision",
  "Engineered a text pipeline with tokenisation case normalisation negation tagging stopword and emoji handling and word embedding features",
  "Trained and compared classifiers including Logistic Regression Linear SVM Random Forest Naive Bayes and J48 with stratified cross validation",
  "Aggregated post level polarity with popularity weights to form a daily sentiment index linked to pre and post release return deltas for movement prediction",
];

/** --------------------------
 * Hotel Price Scraper
 * -------------------------- */
const hotelBullets = [
  "Built a Python tool to scrape hotel room prices room types availability and breakfast options into structured Excel outputs for equity research",
  "Automated parsing with city specific Excel inputs for URLs and HTML classes producing clean tabular datasets",
  "Implemented a GUI for city selection directories days to scrape and real time status updates with logging and error handling",
  "Ensured ethical scraping with robots dot txt compliance request throttling and safeguards against misuse",
];

/** --------------------------
 * Flights Price Scraper
 * -------------------------- */
const flightsBullets = [
  "Built a Python tool to scrape Google Flights prices schedules airlines stops and durations into structured Excel for analysts",
  "Used Playwright for navigation and LexborHTMLParser for parsing with tkinter popups to choose trip type and enter cities and dates",
  "Organised functions for page navigation parsing and saving with logging and a simple lock file plus directory chooser and day range options",
  "Emphasised legality and limits with responsible request rates respect for site terms and documented risks like site changes and blocking",
];

/** --------------------------
 * 3D Rendering project
 * -------------------------- */
const renderingBullets = [
  "Implemented matrix and vector math with Catch2 tests for reliability",
  "Built a shader based OpenGL pipeline to load and render an OBJ terrain with a first person camera",
  "Added orthophoto texturing instancing for launch pads and a custom rocket model with transformations",
  "Implemented Blinn Phong lighting and a multi phase rocket launch animation with performance timing",
];

/** --------------------------
 * Spacecraft Nav project
 * -------------------------- */
const spaceNavBullets = [
  "Built an autonomous ROS 2 system to navigate spacecraft modules detect signs and avoid obstacles with LaserScan and PID control",
  "Detected windows with HSV masks contour checks white border and black ratio then aligned captured and stitched panoramas",
  "Classified planets with a ResNet18 based model and computed distances and inter planet separations from stitched views",
  "Tested across simulated and real robot runs and proposed LaserScan Stretching to mitigate unreliable LiDAR streams",
];

/** --------------------------
 * Bio-Inspired Optimisers project
 * -------------------------- */
const bioOptBullets = [
  "Compared PSO MPA and an LM enhanced MPA against Adam on classic benchmarks and a real dataset",
  "Optimised neural network weights directly without backpropagation with a genome that can also evolve architecture",
  "Built a unified Python benchmarking pipeline with fixed dimensions population and iterations for fair tests",
  "Observed strong hybrid performance faster PSO starts and MPA strength on multimodal rugged landscapes",
];

/** --------------------------
 * xv6 Memory Management
 * -------------------------- */
const xv6Bullets = [
  "Implemented malloc and free in xv6 riscv using a circular free list with coalescing",
  "Added rqstMem to extend the heap via sbrk with page sized increments and safety checks",
  "Handled edge cases such as zero sized requests null pointers and adjacent block merges",
  "Documented design tradeoffs complexity and kernel level memory behaviors in the report",
];

/** --------------------------
 * AI in Psychological Treatments
 * -------------------------- */
const psychAIBullets = [
  "Explores clinical uses of AI such as virtual reality exposure therapy and internet delivered CBT for depression and anxiety",
  "Covers practical tools including self help sites virtual agents and chatbots with examples of controlled exposure scenarios",
  "Discusses risks limited empathy over reliance and the need for clinician supervision plus compliance and ethics",
  "Concludes that AI complements therapists to widen access and improve consistency when applied responsibly",
];

/** --------------------------
 * 2D Rendering project
 * -------------------------- */
const twoDBullets = [
  "Built an interactive renderer with Bresenham and DDA line drawing scanline polygon filling and Sutherland Hodgeman clipping",
  "Implemented translation scaling and rotation using matrix math with mouse selection live controls and simple anti aliasing",
  "Handled concave polygons color interpolation and gradient fills with careful edge cases and robust rasterisation",
  "Optimised inner loops for real time drawing and validated correctness on varied shapes with repeated transforms",
];

/** --------------------------
 * Aarogya Setu vs. COVIDSafe
 * -------------------------- */
const covidAppsBullets = [
  "Compared Indian Aarogya Setu and Australian COVIDSafe contact tracing apps their features privacy models adoption and outcomes",
  "Aarogya Setu combined Bluetooth and GPS with risk status vaccination info self assessment and regional statistics with mandatory use in many contexts",
  "COVIDSafe used Bluetooth only with voluntary opt in encrypted codes and stronger accessibility focus but struggled to reach critical mass",
  "Evaluated tradeoffs privacy versus functionality limitations costs update cadence and proposed improvements like transparency decentralisation and frequent updates",
];

/** --------------------------
 * Olympic Medal Analysis
 * -------------------------- */
const medalsBullets = [
  "Analysed Summer Olympic medals from 1896 to 2020 with Flask powered, on demand charts",
  "Built interactive line, bar and area visuals to compare countries across eras and events",
  "Ran a questionnaire study with timed tasks to evaluate how visuals aid comprehension",
  "Handled data quirks and gaps while keeping the UI simple and participant friendly",
];

/** --------------------------
 * Lyft System Design (Forage)
 * -------------------------- */
const lyftBullets = [
    "Built a modular car serviceability simulator using OOP: engines, batteries, and tires composed into multiple car models.",
    "Implemented Factory pattern (CarFactory) to assemble models by mixing Capulet/Willoughby/Sternman engines, Spindler/Nubbin batteries, and Carrigan/Octoprime tires.",
    "Each component follows a Serviceable interface with needs_service() rules; Car delegates to its parts for accurate overall status.",
    "Stage 4 added tire types and expanded unit tests to cover all components and service criteria end-to-end.",
];

/** --------------------------
 * GreenMyCloud project
 * -------------------------- */
const greenMyCloudBullets = [
    "Monitors carbon footprint across smartphone, IoT, cloud and general online usage; presents device-level emissions via graphs and tables.", 
    "Lets users input daily online activity; aggregates daily and yearly emissions; you can even check devices you don’t own before buying.",
    "Multi-device view: connect all your devices to one account; multiple languages and color-blind-friendly graph themes.",
    "Security & access: password protection, status saved on logout, encrypted transactions, 7-day trial, works on phones and laptops.",
    "Known limits: no pre-installation history, heavier local storage footprint, cannot force users to follow suggested alternatives."
];

/** --------------------------
 * Video editing app
 * -------------------------- */
const videoEditingBullets = [
    "C++ desktop editor with trim, split, merge, frame-by-frame stepping and multi-track timeline.",
    "Creative tools: filters, transitions, overlays, text/titles with font, size and color controls; slow-motion and time-lapse; multiple audio tracks.",
    "UI/UX: drag-and-drop media, real-time preview, customizable panels and layouts; designed to stay lightweight and responsive for large files.",
    "Accessibility: screen-reader labels, keyboard shortcuts, large hit-targets, and seamless caption creation/attachment.",
    "Engineering: modular OOP architecture (separate rendering, IO, timeline, effects); iterative user testing for stability and performance."
];

/** --------------------------
 * Sports Management app
 * -------------------------- */
const sportsMgmtBullets = [
    "Built a Python + Flask + SQLAlchemy web app to run a sports center: memberships, classes, events, bookings and notifications.",
    "Implemented secure auth with Flask-Login, bcrypt password hashing, CSRF protection and validated forms.",
    "Dynamic program & class registration with real-time seat availability, conflict checks, wishlist/cart and checkout.",
    "Event calendar with email reminders via Flask-Mail; admin dashboard for CRUD on programs/events, user reports and CSV exports."
];

/** --------------------------
 * Assessment to do list app
 * -------------------------- */
const todoBullets = [
    "Web-based assessment/task manager built with Flask, SQLAlchemy (SQLite), HTML/CSS/JS; responsive UI with Bootstrap 5.",
    "Create, edit, delete tasks with fields: title, description, due date, priority, labels; per-user lists via Flask-Login auth.",
    "Statuses and real-time flows: Incomplete → In-Progress → Completed with instant UI updates and optimistic saves.",
    "Powerful search and filters by text, due window, priority, label, and status; keyboard shortcuts for quick entry.",
    "Secure sessions, CSRF protection, hashed passwords (bcrypt), input validation; clear audit of changes and activity.",
];
  
/** --------------------------
 * Project-specific responders
 * -------------------------- */

// Inflation Forecasting bot
const inflationResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview")) {
    return [
      "Objective build a rigorous multi horizon system to forecast US PCEPI with leakage safe preprocessing fair walk forward evaluation and model families spanning classical ML and deep learning.",
      "Scope horizons 1 3 6 12 months diagnostics with ACF and PACF and Ljung Box and selection of exogenous via Granger cross correlation and cointegration.",
    ].join(" ");
  }

  if (has(text, "architecture|approach|pipeline|design")) {
    return [
      "Architecture ingestion from FRED and other public sources then frequency harmonisation feature engineering lags rolling statistics Fourier seasonality momentum calendar encodings then leakage safe scaling then per horizon training with walk forward splits then inverse transforms metrics and DM tests.",
      "Model families ARDL VARccf VARcointegration ARIMA SARIMA ARIMAX SARIMAX Random Forest XGBoost MARS RNN GRU LSTM TCN TFT TiDE N BEATSx N HiTS.",
    ].join(" ");
  }

  if (has(text, "\\bmodel(s)?\\b|algorithms|baselines|ensemble")) {
    return "Models compared ARDL VARccf VARcointegration ARIMA SARIMA ARIMAX SARIMAX Random Forest XGBoost MARS and deep learning RNN GRU LSTM TCN TFT TiDE N BEATSx N HiTS. N HiTS ranked best overall across 1 3 6 12 months.";
  }

  if (has(text, "dataset|data set|data source|source|fred|pcepi")) {
    return "Dataset target PCEPI monthly and exogenous macro indicators from FRED and other sources. Daily and weekly data aggregated to monthly quarterly linearly interpolated missing handled via interpolation or removal stationarity checks and strict leakage prevention.";
  }

  if (has(text, "preprocess|feature|engineering|scaling|standardize|minmax|robust|log|fourier|seasonal|calendar")) {
    return "Preprocessing and features log scaling z score or robust scaling Fourier seasonal terms lagged PCEPI up to 12 months rolling mean standard deviation skewness kurtosis momentum month and year encodings aligned historical versus future exogenous inputs for multi step forecasting.";
  }

  if (has(text, "granger|cointegration|acf|pacf|ljung|diagnostics")) {
    return "Diagnostics Granger causality Johansen cointegration ACF and PACF and Ljung Box Q test to shape variable inclusion and lag choices.";
  }

  if (has(text, "train|training|hyperparam|config|optimizer|dropout|lookback|window|neuralforecast|pytorch|darts")) {
    return "Training setup NeuralForecast for N HiTS and N BEATSx with per horizon models SMAPE loss Adam learning rate around 3e minus 4 dropout around 0 point 3 input window around 96 months and early stopping on rolling validation within the PyTorch ecosystem.";
  }

  if (has(text, "results|metrics|performance|error|rmse|mae|r2|diebold|dm|significant")) {
    return [
      "Results N HiTS achieved the lowest MAE and RMSE and the best R squared and beat the naive baseline via the Diebold Mariano test with HLN correction.",
      "Group findings N HiTS significant across all horizons and VAR variants competitive by 12 months.",
    ].join(" ");
  }

  if (has(text, "horizon|forecast|prediction|long range|short term")) {
    return "Horizon behaviour N HiTS stable across 1 to 12 months SARIMAX strong at 1 to 3 months VAR improves by 12 months and recurrent nets prone to overfit at 6 to 12 months.";
  }

  if (has(text, "interpret|explain|shap|insight|limitations|compute")) {
    return "Interpretability and limits N HiTS trades interpretability for accuracy and is compute heavier and requires careful scaling and exogenous alignment while large shocks remain challenging.";
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

  return "Oops! I missed that. Please ask about objectives, architecture, datasets, preprocessing, diagnostics, training setup, horizons metrics, DM testing results, limitations or links GitHub video reports.";
};

/** --------------------------
 * Digital Health ASD bot
 * -------------------------- */
const asdResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|problem|motivation")) {
    return "Aim deliver an adult focused ASD self screening and tracking app that blends validated questionnaires NLP based social interaction analysis notes tracking and an eye tracking module with secure deployment and accessible UI so users can prepare for clinical conversations and understand their patterns over time.";
  }

  if (has(text, "architecture|approach|pipeline|design|system|stack|flow")) {
    return "Architecture React frontend on AWS CloudFront and EC2 served via HTTPS talking to a Flask API with SQLite via SQLAlchemy. Modules include questionnaires AQ AQ10 CAT Q RAADS R an NLP social interaction coach a notes tracking BiLSTM model and an eye tracking classifier. Shared auth and consent middleware CORS policies logging and a lightweight rules based helper for in app guidance.";
  }

  if (has(text, "questionnaire|aq\\b|aq10|cat\\s*q|raads|raads\\s*r|screen(er|ing)|cut ?off|score|scoring")) {
    return "Questionnaires AQ and AQ10 for rapid screening CAT Q to assess camouflaging behaviours and RAADS R for adult assessment. Scores are normalised against published cutoffs and combined into plain language feedback with next step suggestions. The app explains what each band means and emphasises that it is not a diagnostic tool.";
  }

  if (has(text, "nlp|language|text|sentiment|intent|transformer|bert|distilbert|hugging(face)?|coaching|dialog|chat")) {
    return "NLP social interaction transformer based sentiment and intent analysis plus keyword and synonym checks in a short roleplay game. The system produces real time coaching style feedback for clarity reciprocity and emotional tone and logs anonymised aggregates for trend tracking. Uses a small inference API backed by pretrained transformers.";
  }

  if (has(text, "notes|journal|lstm|rnn|embedding|glove|bi\\s*lstm|cross[ -]?validation|k[ -]?fold|early\\s*stopp?ing")) {
    return "Notes tracking text preprocessing tokenisation and word embeddings feed a bidirectional LSTM trained with k fold cross validation and early stopping. Output is a calibrated score and short explanation to help users reflect on weekly patterns while minimising overfitting.";
  }

  if (has(text, "eye\\s*tracking|gaze|pupil|camera|random\\s*forest|rf|auc|roc|accuracy|precision|recall|f1|grid\\s*search|feature(s)?")) {
    return "Eye tracking feature engineering on gaze and pupil time series then a Random Forest tuned with grid search and cross validation. Achieved about 77 percent accuracy and around 0 point 81 ROC AUC with stronger recall on the non autistic class and a plan to address class imbalance via class weights or resampling.";
  }

  if (has(text, "\\bdatasets?\\b|data set|data source|corpus|collection|participant")) {
    return "Dataset anonymised adult screening records from validated questionnaires combined with curated or synthetic text prompts and a subset of eye tracking samples. Sampling balanced age and gender with class aware stratification for training. No personally identifiable data stored and all records anonymised.";
  }

  if (has(text, "metrics|evaluation|results|confusion|roc|precision|recall|f1|calibration|explain|explainability|lime|shap")) {
    return "Evaluation confusion matrices ROC and precision recall curves macro averages and calibration checks. For text models explanations are provided via lightweight perturbation based methods so users get short human readable rationales aligned to questionnaire benchmarks.";
  }

  if (has(text, "security|privacy|consent|ethic|gdpr|cors|encrypt|https|policy|pii")) {
    return "Security and ethics explicit informed consent academic use disclaimer encrypted credentials CORS and HTTPS enforced minimal PII storage opt out and data deletion pathways. The tool is positioned as educational self screening that complements rather than replaces clinical diagnosis.";
  }

  if (has(text, "ui|accessibility|design|contrast|font|feedback|ux|wcag|readability|layout")) {
    return "UI and accessibility larger readable typography clear contrast reduced cognitive load with progressive disclosure and adult oriented copy. Iterative feedback led to image left and text right layouts simple wording and short interactions that work well on mobile.";
  }

  if (has(text, "stakeholder|nhs|clinician|doctor|user|age|adults|18|30|triage")) {
    return "Stakeholders adult users often underdiagnosed especially women and clinicians who benefit from clearer pre visit summaries. The app supports faster triage and better conversations by bundling questionnaire bands notes summaries and interaction feedback.";
  }

  if (has(text, "risk|mitigation|ops|load|testing|deployment|ci|cd|cloudfront|ec2|logging|monitoring|observability")) {
    return "Ops and risk agile sprints for the shared platform and a focused track for the ASD app. Load tested API endpoints monitored error rates documented known integration gaps and prepared CI CD hooks for frontend and backend. CloudFront caching and EC2 hosting with HTTPS and strict headers.";
  }

  if (has(text, "future|improve|next|class weight|imbalance|data collection|on device|edge|calibration|fairness|bias")) {
    return "Future work improve eye tracking class balance via class weights or resampling expand real world datasets enhance calibration fairness checks add on device inference for NLP and complete end to end AWS integration with automated rollout and rollback.";
  }

  if (has(text, "github|code|repo|repository")) {
    return "GitHub ASD https://github.com/AyeshaRahman2002/Digital-Health-ASD";
  }

  if (has(text, "video|demo|presentation|walkthrough")) {
    return "Video ASD link will be added in the repository readme if a public walkthrough is published otherwise a private demo is available on request.";
  }

  if (has(text, "report|paper|documentation|docs?|pdf")) {
    return "Report ASD  /Digital_Health_ASD_Report.pdf with full details on architecture datasets methods evaluation security and deployment.";
  }

  return "Oops! I missed that. Please ask about aims, architecture, questionnaires, NLP, social coaching notes, tracking eye, tracking results, evaluation, security, accessibility, stakeholders, operations, roadmap or links such as GitHub and the report.";
};

/** --------------------------
 * Sentiment Stock bot  refined responses
 * -------------------------- */
const sentimentResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|hypothesis|problem|motivation")) {
    return "Aim classify stock movement around product release windows using an online sentiment index from social reviews and tweets combined with historical returns. Hypothesis positive sentiment anticipates upward moves and negative sentiment anticipates declines.";
  }

  if (has(text, "architecture|approach|pipeline|design|system|flow|framework")) {
    return "Pipeline collection from Amazon Walmart and Twitter through filtered scraping and APIs followed by human assisted labelling cleaning tokenisation case normalisation negation tagging stopword and emoji handling embedding feature build then classifier training. Post level polarity is aggregated with popularity weights into a daily sentiment index which is linked to pre and post release return deltas for a movement classifier.";
  }

  if (has(text, "\\bdatasets?\\b|dataset|corpus|collection|source|sketchengine|api|twitter")) {
    return "Dataset social text gathered via platform APIs and tools such as SketchEngine with filters to remove adverts and non opinion posts. Posts are labelled into positive negative and neutral and paired with basic popularity signals such as likes or helpful votes. The workflow is designed to scale from pilot samples to several hundred posts per product.";
  }

  if (has(text, "preprocess|clean|token|negation|stop ?words|emoji|embedding|word2vec|tfidf|feature")) {
    return "Preprocessing and features tokenisation case normalisation regex clean up negation tagging using word NOT style markers removal of frequent uninformative terms and emojis. Features include averaged Word2Vec vectors and TF IDF vectors to represent each post for classification.";
  }

  if (has(text, "\\bmodel(s)?\\b|classifier|logistic|svm|random forest|naive bayes|j48|lr")) {
    return "Models logistic regression linear SVM random forest Naive Bayes and J48 are compared for sentiment and movement prediction. Training uses stratified cross validation with regularisation and calibrated probabilities where applicable.";
  }

  if (has(text, "metric|metrics|evaluation|accuracy|precision|recall|f1|auc|confusion|k ?fold|cross")) {
    return "Evaluation accuracy precision recall and F1 at post level with confusion matrices and stratified k fold cross validation. For movement classification accuracy and class balance are reported with threshold tuning to handle asymmetric costs.";
  }

  if (has(text, "aggregate|index|weight|polarity|daily|time|link|combine|stock|return")) {
    return "Aggregation and linkage per post polarity mapped to plus one minus one or zero and multiplied by popularity weights then normalised into a daily sentiment index. The index is aligned to event windows and regressed against before and after returns to label up or down classes for the movement model.";
  }

  if (has(text, "limitation|risk|issue|imbalance|overfit|future|improve|scal(e|ing)")) {
    return "Limits and next steps increase neutral examples address class imbalance with reweighting or resampling expand sources to finance news and forums adopt transformer embeddings for richer context and run broader out of sample backtests across multiple tickers.";
  }

  if (has(text, "github|code|repo|repository")) {
    return "GitHub Sentiment repository will be linked if made public.";
  }

  if (has(text, "report|paper|documentation|docs?|pdf")) {
    return "Report Sentiment  /DataMiningProjectReport.pdf which covers methodology datasets preprocessing analysis and results.";
  }

  return "Oops! I missed that. Please ask about aims pipeline, datasets, preprocessing, embeddings, models, metrics, aggregation to price movement, limitations and future work or documents such as the report.";
};

/** --------------------------
 * Hotel Scraper
 * -------------------------- */
const hotelResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|aim|scope|overview|purpose")) {
    return "Aim build an automated Python tool to extract hotel room prices room types and breakfast availability for analysts with outputs in structured Excel over chosen date ranges and cities. Scope includes multi site scraping dynamic day count user chosen city and legality awareness.";
  }

  if (has(text, "architecture|approach|pipeline|design|system|flow|workflow")) {
    return "Architecture Excel driven configuration of target URLs and HTML classes then crawl and parse with BeautifulSoup then assemble records into a tabular dataset and export to Excel. User prompts select city input file output folder and number of days. Lock file and logging wrap the run for safety.";
  }

  if (has(text, "stack|tech|library|imports|dependencies|tools")) {
    return "Stack Python with BeautifulSoup pandas datetime tkinter logging os and time. There is not detail about Selenium or proxy rotation in the proposal.";
  }

  if (has(text, "function|functions|api|endpoints|helpers|methods")) {
    return "Key functions create and remove a scraping lock file show popup dialogs read url city workbooks scrape hotel data into a shared dict and save results to Excel. Main orchestrates prompts file selection and multi day loops.";
  }

  if (has(text, "\\bdatasets?\\b|data set|sources?|urls?|excel|workbook")) {
    return "Dataset is assembled from hotel booking pages whose URLs and CSS classes are read from a city specific Excel file. Output is an Excel workbook with date hotel room type breakfast field and price for each day. City selection drives which url file is used.";
  }

  if (has(text, "schema|columns|fields|features|table|output|excel")) {
    return "Core columns include date run booking date hotel name address rating room type breakfast yes or no and price. Output filename follows start date dash city for easy traceability.";
  }

  if (has(text, "gui|ui|popup|prompt|interface|app|exe|installer")) {
    return "User experience uses tkinter popups to choose city input and output locations and the number of days to scrape. Later iterations target a simple GUI and distributable executable so analysts can run without Python setup.";
  }

  if (has(text, "iteration|version|evolution|improve|enhance|changes")) {
    return "Iterations progressed from CSV to Excel output added dynamic URL and class loading from Excel introduced day range selection lock file directory choosers logging standardized filenames improved prompts and error handling and planned a GUI installer for analyst friendly use.";
  }

  if (has(text, "legal|legality|ethic|robots|terms|gdpr|policy|compliance|law")) {
    return "Legality and ethics emphasized respecting robots dot txt avoiding heavy load with controlled request rates using only public information and acknowledging site terms. The document outlines grey areas and why careful compliant use is required.";
  }

  if (has(text, "throttle|rate|delay|sleep|request|frequency|overload|retry")) {
    return "Responsible scraping uses time based delays to avoid overloading sites and to remain within acceptable request frequencies.";
  }

  if (has(text, "error|exception|fail|retry|logging|log|robust")) {
    return "Robustness includes a lock file to prevent concurrent runs logged status and clearer prompts to help analysts recover from bad inputs or site changes.";
  }

  if (has(text, "visual|plot|chart|matplotlib|model|predict|forecast|ml")) {
    return "There is not detail about Matplotlib visuals or downstream machine learning models in the proposal although future GUI visualisations are mentioned.";
  }

  if (has(text, "deploy|package|exe|installer|distribution|shipping")) {
    return "Packaging plan converts the script into an executable with a simple installer so analysts can run the app without Python. There is not detail about cloud deploys.";
  }

  if (has(text, "limit|limitation|risk|issue|captcha|ip|blocking|anti|change")) {
    return "Limits include site structure changes anti scraping defenses captchas IP blocking variable data availability legal constraints and accuracy risks. Ethical frequency and compliance are stressed.";
  }

  if (has(text, "report|paper|documentation|docs?|pdf")) {
    return "Report (Hotel Scraper): /ProjectProposal-Hotels.pdf";
  }

  if (has(text, "github|code|repo|repository")) return "There is not detail about a public GitHub repository in the proposal.";
  if (has(text, "video|demo|presentation")) return "There is not detail about a public video demo in the proposal.";

  return "Oops! I missed that. Please ask about aims architecture imports functions datasets fields GUI and iterations legality throttling error handling limitations deployment or documents. If a topic is not in the proposal I will say there is not detail about it.";
};

/** --------------------------
 * Flights Scraper
 * -------------------------- */
const flightsResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|aim|scope|overview|purpose")) {
    return "Aim build an automated Python tool to extract Google Flights prices and details for one way and round trip journeys and export a clean Excel table for analysis. Scope is Google Flights only with user chosen cities dates and trip type.";
  }

  if (has(text, "architecture|approach|pipeline|design|system|flow|workflow")) {
    return "Architecture Playwright drives a headful Chromium session to the Google Flights results page then LexborHTMLParser parses categories and rows into a dict which is normalised to a pandas DataFrame and saved to Excel. Tkinter popups collect inputs and a log file records actions.";
  }

  if (has(text, "stack|tech|library|imports|dependencies|tools|parser|browser")) {
    return "Stack Python Playwright LexborHTMLParser pandas tkinter logging json time. There is not detail about selenium requests aiohttp or proxy rotation.";
  }

  if (has(text, "function|functions|helpers|methods|api")) {
    return "Key functions get_trip_type popup chooser get_user_input form fields get_page Playwright navigation scrape_google_flights parser extraction run orchestration to build DataFrames and save to Excel plus a simple log_action and a lock file pattern.";
  }

  if (has(text, "dataset|data set|source|columns|schema|fields|excel|output")) {
    return "Output Excel with structured rows per flight including category company price price type departure and arrival times duration stops and where available emissions fields. Filenames use departure date and origin for traceability.";
  }

  if (has(text, "ui|interface|popup|prompt|input|chooser|directory")) {
    return "UI uses tkinter popups to choose trip type one way or round trip collect cities and dates optionally pick an output directory and number of days to scrape and shows success or error messages.";
  }

  if (has(text, "iteration|version|evolution|improve|enhance")) {
    return "Iterations added one way support better error popups directory selection dynamic day ranges and enriched round trip columns for origin destination and dates.";
  }

  if (has(text, "error|exception|robust|logging|retry|validation")) {
    return "Robustness via try except blocks user friendly message boxes a simple lock file to avoid concurrent runs and a text log of actions to aid debugging.";
  }

  if (has(text, "legal|legality|ethic|robots|tos|terms|policy|compliance")) {
    return "Legality and ethics respect site terms scrape only public information and keep request frequency reasonable acknowledging grey areas and the risk of blocking.";
  }

  if (has(text, "limit|limitation|risk|captcha|ip|blocking|dynamic|javascript|maintenance")) {
    return "Limits include layout changes heavy JavaScript dynamic content rate limits IP blocking data gaps accuracy issues and ongoing maintenance to keep selectors current.";
  }

  if (has(text, "storage|database|sql|sqlite|visual|chart|matplotlib|seaborn")) {
    return "There is not detail about a database or plots in the proposal the tool outputs Excel tables for analysts.";
  }

  if (has(text, "async|performance|concurrency|scalability")) {
    return "There is not detail about asynchronous scraping or multi session concurrency in the proposal.";
  }

  if (has(text, "deploy|package|exe|installer|cloud")) {
    return "There is not detail about packaging to an executable or cloud deployment in the proposal.";
  }

  if (has(text, "github|code|repo|repository")) return "There is not detail about a public GitHub repository.";
  if (has(text, "video|demo|presentation")) return "There is not detail about a public video demo.";
  if (has(text, "report|paper|documentation|docs?|pdf")) return "Report Flights  /ProjectProposal-Flights.pdf";

  return "Oops! I missed that. Please ask about aims architecture libraries functions fields UI iterations legality limitations robustness or documents. If it is not in the proposal I will say there is not detail about it.";
};

/** --------------------------
 * 3D Rendering
 * -------------------------- */
const renderingResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|summary")) {
    return "Objective create an interactive OpenGL application that renders a terrain OBJ with a first person camera and demonstrates texturing instancing custom modelling lighting animation and performance measurement.";
  }

  if (has(text, "architecture|pipeline|design|system|approach|flow")) {
    return "Pipeline initialise OpenGL via GLFW and GLAD then load shaders then load the Wavefront OBJ into VBOs and VAOs compute projection and view matrices and render with a Blinn Phong shaded pass. Optional passes add textures instanced pads rocket model and timestamp queries for performance.";
  }

  if (has(text, "stack|tech|library|dependencies|tools|framework")) {
    return "Stack modern OpenGL with GLFW GLAD C plus plus Catch2 for tests and a simple math vmlib. There is not detail about Vulkan or DirectX.";
  }

  if (has(text, "math|matrix|vector|mat44|projection|rotation|translation")) {
    return "Math implemented mat4 times mat4 and mat4 times vec4 rotation translation and perspective projection helpers fully validated with Catch2 against known values.";
  }

  if (has(text, "camera|navigation|input|wsad|mouse|first person|fps")) {
    return "Camera first person style with WSAD for movement mouse for look and speed modifiers on Shift and Control plus bounds to prevent exiting the scene.";
  }

  if (has(text, "shader|vertex|fragment|glsl|lighting pass")) {
    return "Shaders a vertex shader transforms positions and forwards attributes while a fragment shader performs Blinn Phong lighting with ambient diffuse specular plus optional texture sampling.";
  }

  if (has(text, "texture|texturing|orthophoto|uv|coordinates|mapping|mip")) {
    return "Texturing orthophotos mapped using OBJ UVs with GL texture parameters and linear filtering. Future work includes mipmapping to improve distance detail.";
  }

  if (has(text, "obj|mesh|loader|terrain|model data|vbo|vao")) {
    return "Mesh loading parses a Wavefront OBJ terrain builds VBOs and a VAO and renders with indexed or array draws as configured.";
  }

  if (has(text, "instance|instancing|pads|duplicate objects")) {
    return "Instancing renders two launch pads efficiently using per instance transforms to minimise CPU overhead.";
  }

  if (has(text, "rocket|custom model|primitives|cylinder|cone|cube|transform")) {
    return "Custom model a rocket composed of cubes cylinders and a cone merged with a mock anchor for whole object transforms and placed precisely on a pad.";
  }

  if (has(text, "light|lighting|blinn|phong|point light|attenuation|specular|ambient")) {
    return "Lighting Blinn Phong with point lights and distance attenuation combining ambient diffuse and specular terms. A known issue was light following the camera which required uniform setup fixes.";
  }

  if (has(text, "animate|animation|launch|state machine|time|glfwGetTime")) {
    return "Animation a state machine drives lift off curve to horizontal and steady flight using time based interpolation for smooth motion.";
  }

  if (has(text, "performance|profil(e|ing)|timing|gpu|query|timestamps|fps")) {
    return "Performance measured with OpenGL timestamp queries for sections of the pipeline plus CPU timings. More complex tasks such as textured instancing and the rocket increase GPU time especially when objects are off camera.";
  }

  if (has(text, "\\bdatasets?\\b|assets|data|textures|images")) {
    return "Assets include the Paarlahti terrain OBJ and orthophoto textures loaded as 2D images. There is not detail about HDR environments or PBR textures.";
  }

  if (has(text, "limitation|issue|challenge|bug|todo|future|improve|enhance")) {
    return "Limitations include light uniform handling and performance on software rasterisers. Future work mipmaps shadow mapping normal mapping and togglable debug views.";
  }

  if (has(text, "github|code|repo")) {
    return "GitHub 3D Rendering https://github.com/AyeshaRahman2002/ComputerGraphics_3D_Rendering";
  }

  if (has(text, "video|demo|presentation")) {
    return "There is not detail about a public video demo.";
  }

  if (has(text, "report|paper|documentation|docs?|pdf")) {
    return "Project report  /GraphicsCW.pdf";
  }

  return "Oops! I missed that. Please ask about objectives architecture math shaders camera texturing instancing the rocket model lighting animation performance assets limitations or links like GitHub and the report.";
};

/** --------------------------
 * Spacecraft Nav
 * -------------------------- */
const spaceNavResponder = (raw) => {
  const text = raw.trim();
  const has = (t, ...p) => p.some((r) => new RegExp(r, "i").test(t));

  if (has(text, "objective|aim|goal|scope|overview|purpose")) {
    return "Aim develop a robust autonomous navigation and detection stack to recover spacecraft location after an off course event by navigating between module entrances and centres detecting access signs finding windows capturing panoramas and identifying planets for distance based localisation.";
  }

  if (has(text, "architecture|approach|pipeline|design|system|flow|workflow|stack")) {
    return "Architecture ROS 2 node orchestration with action client goals for nav2 YAML driven target points camera subscriber image pipeline HSV masks and contours LaserScan subscriber PID based wall follow and obstacle avoidance window detection and alignment panorama stitching and CNN based planet recognition followed by geometric measurements.";
  }

  if (has(text, "coordinates|yaml|nav2|action|goal|pose|waypoint|entrance|centre|center")) {
    return "Navigation initialisation reads entrance and centre coordinates from a YAML file then dispatches nav2 action goals via a sequence of lambdas with callbacks to chain movements and provide feedback. Centres later serve as fallback points during window search.";
  }

  if (has(text, "sign|red|green|entrance|hsv|contour|circularity|threshold")) {
    return "Sign detection uses HSV masks for red and green then contour area and circularity filters roughly area greater than 500 and circularity near 1.0. Green permits entry to centre while red triggers scan or skip to the next entrance.";
  }

  if (has(text, "wall|laser|laserscan|obstacle|pid|follow|avoid|qos|reliable")) {
    return "Wall navigation and avoidance subscribe to LaserScan with RELIABLE QoS and dual PID controllers lateral kP 0.5 kD 0.2 and longitudinal kP 0.1 kI 0.001 kD 0.05. Logic maintains target offsets, backs up and turns to bypass front obstacles, then resumes forward motion.";
  }

  if (has(text, "window|detection|rectangle|white border|black ratio|heuristic|prediction|align|screenshot")) {
    return "Windows are found by rectangle contours plus white border and high black interior ratio. Heuristics predict likely wall positions when not visible. The robot then aligns to the window, holds about two metres standoff, and captures cropped screenshots.";
  }

  if (has(text, "stitch|panorama|blend|overlap|flann|sift")) {
    return "Stitching uses a simple blended overlap method with linear fades instead of FLANN SIFT to prioritise measurement robustness over perfect feature matching on angled views.";
  }

  if (has(text, "planet|detection|classification|cnn|resnet|model|training|accuracy")) {
    return "Planet detection uses a ResNet18 classifier fine tuned for Earth Moon Mars and Mercury. Cropped circular candidates are classified and labelled with window names; testing accuracy reported around the low nineties depending on data quality.";
  }

  if (has(text, "distance|measurement|focal|sensor|diameter|euclidean|pixels|math|formula")) {
    return "Distances to planets use focal length multiplied by real diameter and image height divided by planet pixel height and sensor height; pairwise planet separations use Euclidean distances on panorama coordinates.";
  }

  if (has(text, "performance|testing|simulation|real|limitations|issues|laser|stretch")) {
    return "Testing covered multiple simulated worlds and a real robot. Limitations include unreliable real LiDAR streams and far window screenshots hurting classification. A proposed remedy is LaserScan Stretching with interpolation smoothing and plausibility checks.";
  }

  if (has(text, "dataset|data|images|training|classes")) {
    return "Training data for the ResNet18 model consists of planetary images for four classes Earth Moon Mars and Mercury with typical ImageNet normalisation and augmentation.";
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

  return "Ask about aims architecture coordinates and nav2 actions sign detection wall following with PID window heuristics alignment stitching CNN based planet detection measurement formulas testing limitations LaserScan Stretching or links like GitHub and the report. If something was not specified I will say there is not detail about it.";
};

/** --------------------------
 * Bio-Inspired Optimisers bot
 * -------------------------- */
const bioOptResponder = (raw) => {
  const t = raw.trim();
  const has = (s, ...p) => p.some((x) => new RegExp(x, "i").test(s));

  if (has(t, "objective|goal|aim|scope|overview|purpose|why")) {
    return "Aim compare bio inspired optimisers PSO MPA and an LM enhanced MPA against Adam on six benchmark functions and on Breast Cancer classification, including direct weight optimisation without backpropagation and an extendable genome to evolve both architecture and weights. :contentReference[oaicite:1]{index=1}";
  }

  if (has(t, "algorithm|pso|mpa|lm[_ -]?impa|adam")) {
    return "Algorithms PSO swarm based search MPA using Brownian and Levy motion LM IMPA hybrid that seeds with Levenberg Marquardt then explores globally and Adam as a gradient baseline and a PyTorch Adam upper baseline. :contentReference[oaicite:2]{index=2}";
  }

  if (has(t, "benchmark|functions|sphere|rastrigin|rosenbrock|ackley|griewank|schwefel|listsort")) {
    return "Benchmarks Sphere Rastrigin Rosenbrock Ackley Griewank and Schwefel plus a discrete Hillis style ListSort task to test exploration and generalisation on non differentiable spaces. :contentReference[oaicite:3]{index=3}";
  }

  if (has(t, "dataset|breast|wisconsin|real world|classification|neural network|architecture|genome")) {
    return "Real world task Breast Cancer Wisconsin with a simple feedforward net. We flattened weights to a vector for black box optimisation and designed a genome to evolve hidden layer sizes and weights within bounds with fixed search dimensionality for comparability. :contentReference[oaicite:4]{index=4}";
  }

  if (has(t, "method|pipeline|protocol|fair|reproduc|population|iteration|dimension|bounds|seed")) {
    return "Protocol 30D search population 50 iterations 500 equal bounds and seeds per run with 10 trials per function logging fitness per iteration for convergence and variance plots ensuring a level playing field. :contentReference[oaicite:5]{index=5}";
  }

  if (has(t, "result|finding|insight|performance|convergence|accuracy|fitness|speed|variance")) {
    return "Insights LM IMPA showed strongest overall especially on deceptive or curved landscapes PSO converged fastest early but could plateau MPA was robust on multimodal surfaces like Ackley and the PyTorch Adam baseline excelled when true gradients were available highlighting the role of gradient information. :contentReference[oaicite:6]{index=6}";
  }

  if (has(t, "listsort|discrete|combinatorial")) {
    return "On the discrete ListSort task LM IMPA and MPA reached optimal fitness while PSO plateaued early demonstrating differences in exploration and symbolic generalisation without gradients. :contentReference[oaicite:7]{index=7}";
  }

  if (has(t, "limit|limitation|future|next|hyperparam|multi objective|robust|noise|adversarial")) {
    return "Limits benchmarks may not mirror noisy changing real problems and defaults were used for most hyperparameters. Future work includes tougher datasets multi objective formulations and systematic hyperparameter search. :contentReference[oaicite:8]{index=8}";
  }

  if (has(t, "tech|stack|library|tool|python|pytorch|sklearn|matlab|numpy|matplotlib")) {
    return "Tech Python NumPy PyTorch scikit learn Matplotlib and MATLAB for some experiments with a unified runner that executes 10 trial batches and plots convergence. :contentReference[oaicite:9]{index=9}";
  }

  if (has(t, "github|code|repo|repository"))
    return "GitHub https://github.com/AyeshaRahman2002/bio-inspired-optimization";
  if (has(t, "report|paper|documentation|docs?|pdf"))
    return "Project report  /28695d05-1b50-4157-afd5-e71ad83225f4.pdf";
  if (has(t, "video|demo|presentation|walkthrough"))
    return "There is not detail about a public video demo.";

  if (has(t, "deploy|package|cloud|docker|cli|exe|install"))
    return "There is not detail about deployment packaging or cloud setup.";

  return "Ask about aims algorithms benchmarks dataset genome architecture pipeline results ListSort insights limitations tech stack or links such as GitHub and the report.";
};

/** --------------------------
 * xv6 Memory Management
 * -------------------------- */
const xv6Responder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|why")) {
    return "Aim implement malloc free and rqstMem in xv6 riscv to provide dynamic allocation with a circular free list coalescing and on demand heap growth via sbrk.";
  }

  if (has(text, "architecture|approach|design|pipeline|flow")) {
    return "Design uses a circular linked list of free blocks each with size and next pointers. malloc scans the list first fit style splits blocks when larger than requested and returns aligned payloads. free inserts a block back and coalesces with neighbors. rqstMem requests page sized chunks with sbrk then frees them into the list.";
  }

  if (has(text, "data\\s*structure|list|circular|header|block|metadata")) {
    return "Free list nodes store size and next pointers arranged in a circular list so traversal can wrap. Coalescing checks predecessor and successor adjacency to reduce fragmentation.";
  }

  if (has(text, "system\\s*call|sbrk|kernel|riscv|xv6")) {
    return "Heap growth uses sbrk to move the program break by whole page units then wraps the new span into a free block and merges if adjacent.";
  }

  if (has(text, "edge|corner|case|zero|null|double\\s*free|safety")) {
    return "Zero sized requests return null like behavior and null pointers are ignored in free. Adjacent free blocks are merged to avoid fragmentation. There is not detail about double free detection beyond standard assumptions.";
  }

  if (has(text, "complexity|perf|fragmentation|overhead|trade|limit|limitation")) {
    return "malloc traversal is linear in number of free blocks and can fragment under adversarial patterns. Coalescing reduces external fragmentation with small metadata overhead. There is not detail about best fit or segregated lists.";
  }

  if (has(text, "testing|validation|unit|catch2")) {
    return "Validation was performed by exercising allocation and free paths and observing correct coalescing and sbrk growth. There is not detail about unit test frameworks for this OS task.";
  }

  if (has(text, "future|improve|next|optimi[sz]e|arena|thread")) {
    return "Future work could add segregated free lists best fit strategy guard patterns and diagnostics. There is not detail about multi core or thread safe arenas for xv6 userspace.";
  }

  if (has(text, "github|code|repo")) {
    return "GitHub xv6 Memory Management: https://github.com/AyeshaRahman2002/MemoryManagement-C";
  }

  if (has(text, "report|paper|documentation|pdf|docs?")) {
    return "Report xv6 Memory Management: /comp2211report_sc21ar.pdf";
  }

  return "Ask about objectives design data structures sbrk behavior edge cases complexity limitations future work GitHub or the report.";
};

/** --------------------------
 * AI in Psychological Treatments
 * -------------------------- */
const psychAIResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|aim|overview|summary|scope|purpose")) {
    return "Aim examine how AI supports psychological treatments focusing on virtual reality exposure therapy and internet delivered CBT while weighing benefits and risks such as access fidelity empathy and safety.";
  }

  if (has(text, "method|modality|approach|technique|therapy|treatment")) {
    return "Methods include exposure therapy delivered via virtual reality with graded scenarios and internet delivered CBT programs that provide structured modules homework and monitoring. Chatbots and virtual agents assist with psychoeducation and low level support.";
  }

  if (has(text, "virtual\\s*reality|vr|exposure|phobia|ptsd|anxiety")) {
    return "Virtual reality exposure therapy creates controlled simulated environments for graded exposure such as heights or trauma linked scenes enabling precise dosage and safe repetition under clinical supervision.";
  }

  if (has(text, "\\bicbt\\b|internet\\s*cbt|online\\s*cbt|digital\\s*cbt")) {
    return "Internet delivered CBT offers structured lessons exercises and assessments online improving reach and consistency for conditions like depression and anxiety while keeping therapist oversight when indicated.";
  }

  if (has(text, "chatbot|virtual agent|robot|conversational|self\\s*help|website")) {
    return "AI chatbots and virtual agents support psychoeducation mood tracking and skills rehearsal. They are positioned as adjuncts to care not replacements for licensed clinicians.";
  }

  if (has(text, "risk|limitation|ethical|privacy|safety|consent|empathy|trust|misdiagnosis")) {
    return "Key risks include limited empathy potential for incorrect guidance without oversight privacy and safety concerns and erosion of the therapeutic alliance. Clinical supervision and governance are recommended.";
  }

  if (has(text, "result|evidence|finding|effectiveness|outcome")) {
    return "Findings highlight increasing evidence for VR based exposure and internet delivered CBT improving access and standardization while reinforcing that AI complements rather than replaces clinicians.";
  }

  if (has(text, "dataset|data set|code|github|repository")) {
    return "There is not detail about datasets for this literature style project. Code is not central however a reading link is provided.";
  }

  if (has(text, "report|paper|pdf|document|reference|citation|writeup|essay")) {
    return "Report AI in Psychological Treatments  /AIinPsychologicalTreatements.pdf";
  }

  return "Ask about aims modalities virtual reality exposure therapy internet delivered CBT chatbots evidence risks ethics supervision or the report. If a topic is not covered I will say there is not detail about it.";
};

/** --------------------------
 * 2D Rendering project
 * -------------------------- */
const twoDResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|purpose")) {
    return "Aim build a fast educational 2D renderer that demonstrates classic computer graphics topics lines polygons transforms clipping filling and simple anti aliasing with real time interaction.";
  }

  if (has(text, "architecture|approach|design|pipeline|system|flow")) {
    return "Architecture canvas based rasteriser with modules for line drawing polygon fill clipping transforms and UI controls. Matrix utilities drive translate scale rotate. A small controller maps keyboard and mouse events to redraw.";
  }

  if (has(text, "algorithm|bresenham|dda|scanline|fill|raster|clipping|sutherland|hodgman")) {
    return "Algorithms Bresenham and DDA for lines scanline for polygon filling with edge tables and active edges color interpolation for gradients and Sutherland Hodgeman for rectangular clipping.";
  }

  if (has(text, "transform|matrix|translation|scaling|rotation|compose")) {
    return "Transforms 3 by 3 homogeneous matrices for translation scaling rotation and composition. Users can chain operations and see live redraws.";
  }

  if (has(text, "anti|alias|smoothing|quality")) {
    return "Anti aliasing basic pixel blending near edges to reduce stair stepping on diagonals. It is lightweight and works in real time.";
  }

  if (has(text, "interaction|ui|mouse|controls")) {
    return "Interaction mouse selection drag to translate inputs for rotation angle and scale factors buttons to toggle fill and clipping and a reset view.";
  }

  if (has(text, "performance|optim|fps|benchmark")) {
    return "Performance inner loops use integer heavy Bresenham and compact edge tables so complex scenes with many edges remain interactive.";
  }

  if (has(text, "edge case|concave|self|intersect|robust")) {
    return "Edge cases concave polygons are handled by the scanline method with proper parity rules while self intersecting shapes are warned as undefined in the basic fill model.";
  }

  if (has(text, "future|next|improve|roadmap")) {
    return "Future work add shear and reflection richer anti aliasing and simple shading and direct on canvas resize handles.";
  }

  if (has(text, "github|code|repo")) {
    return "GitHub  https://github.com/AyeshaRahman2002/ComputerGraphics-2d-Rendering";
  }

  if (has(text, "video|demo|presentation")) return "There is not detail about a public video demo.";
  if (has(text, "report|paper|documentation|docs?|pdf"))
    return "There is not detail about a public report pdf.";

  return "Ask about aims architecture algorithms transforms clipping filling anti aliasing interaction performance edge cases future work or links such as GitHub.";
};

/** --------------------------
 * arogya Setu vs. COVIDSafe
 * -------------------------- */
const covidAppsResponder = (raw) => {
  const text = raw.trim();

  if (has(text, "objective|goal|scope|overview|aim|purpose")) {
    return "Aim provide a side by side analysis of Aarogya Setu and COVIDSafe covering tech choices Bluetooth versus GPS privacy models adoption effectiveness limitations and practical improvements for future public health apps.";
  }

  if (has(text, "feature|capabilit|function")) {
    return [
      "Aarogya Setu Bluetooth plus GPS risk status self assessment vaccination details regional statistics helplines and multilingual support.",
      "COVIDSafe Bluetooth only encrypted reference codes backwards compatibility text to speech voluntary onboarding and proximity alerts.",
    ].join(" ");
  }

  if (has(text, "tech|architecture|bluetooth|gps|location|design|data store|encryption")) {
    return "Technology Aarogya Setu uses Bluetooth and GPS to create proximity and hotspot context while COVIDSafe uses Bluetooth only with encrypted temporary IDs and a national data store. There is not detail about precise crypto primitives or on device frameworks in the slides.";
  }

  if (has(text, "privacy|policy|consent|mandatory|voluntary|gdpr|security|open source|decentral")) {
    return "Privacy Aarogya Setu raised concerns mandatory use in many settings GPS location access initial lack of transparency and data sharing risks. COVIDSafe emphasised privacy voluntary opt in no GPS open sourced code and encrypted interactions though adoption was lower.";
  }

  if (has(text, "adoption|downloads|uptake|efficacy|effectiveness|impact|40%")) {
    return "Adoption Aarogya Setu achieved high uptake aided by compulsory requirements while COVIDSafe struggled to reach the roughly forty percent threshold commonly cited for strong effectiveness and suffered from update gaps and user uncertainty.";
  }

  if (has(text, "limit|issue|problem|battery|bug|cost|delta|update|failure")) {
    return "Limitations Aarogya Setu concerns include consent algorithmic accountability cybersecurity heat and battery usage. COVIDSafe issues include users not updating high weekly running cost limited features Bluetooth reliability and insufficient users to be effective.";
  }

  if (has(text, "statistic|survey|responses|chart|graph")) {
    return "Statistics slides include survey style questions on install rates experience and reasons for not installing for both apps. There is not detail about exact numeric tables in the chatbot text but the deck visuals summarise responses.";
  }

  if (has(text, "compare|comparison|versus|vs|tradeoff|pros|cons")) {
    return "Comparison Aarogya Setu prioritised richer data and control via GPS plus Bluetooth and mandatory use increasing coverage but heightening privacy risk. COVIDSafe prioritised privacy and accessibility Bluetooth only voluntary adoption but underperformed without critical mass.";
  }

  if (has(text, "improve|solution|future|recommend|next|roadmap")) {
    return "Improvements increase transparency acknowledge battery use publish regular updates address security strengthen comms for adoption consider decentralised models and privacy by design while preserving outbreak analytics where appropriate.";
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

  return "Ask about features technology privacy policy adoption limitations statistics comparisons launch dates improvements or slides. If the deck lacks something I will say there is not detail about it.";
};

/** --------------------------
 * Olympic Medal Analysis
 * -------------------------- */
const olympicsResponder = (raw) => {
  const text = raw.trim();

  const has = (t, ...pats) => pats.some((p) => new RegExp(p, "i").test(t));

  if (has(text, "objective|aim|goal|scope|overview|purpose")) {
    return "Aim study medal distributions from 1896 to 2020 and test how different visuals help people understand trends across countries and time. Scope includes interactive filtering and a questionnaire that times and scores user answers.";
  }

  if (has(text, "stack|tech|framework|library|backend|frontend|server|flask|python")) {
    return "Stack Python Flask for the backend with HTML templates. Pandas prepares medal data and Matplotlib generates line, bar and area charts on demand. There is not detail about React or D3 in the project.";
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

  return "Ask about aims stack datasets visualisations questionnaire design results hosting privacy or links such as GitHub and the report. If something was not in the report I will say there is not detail about it.";
};

/** --------------------------
 * Lyft System Design (Forage)
 * -------------------------- */

const lyftResponder = (raw) => {
    const text = raw.trim();
  
    if (has(text, "objective|goal|scope|overview|aim|what")) {
      return "Objective: simulate car manufacturing & maintenance with swappable components and clear service rules, showcasing SOLID OOP, composition, and testing.";
    }
    if (has(text, "architecture|design|pattern|factory|class|module|interface")) {
      return "Design: CarFactory assembles models from Engine, Battery, Tires. All parts implement Serviceable.needs_service(). Car delegates to parts; separation of concerns keeps it extensible.";
    }
    if (has(text, "component|engine|battery|tire|tires|types|models")) {
      return "Components: Engines (Capulet, Willoughby, Sternman), Batteries (Spindler, Nubbin), Tires (Carrigan, Octoprime). Each has its own service thresholds.";
    }
    if (has(text, "stage\\s*4|enhancement|update|tire")) {
      return "Stage 4: introduced tire families (Carrigan, Octoprime) and broadened unit tests to validate all service rules.";
    }
    if (has(text, "test|unit|pytest|coverage|validate|needs_service")) {
      return "Testing: comprehensive unit tests per component and integration at the Car level to ensure accurate needs_service outcomes.";
    }
    if (has(text, "structure|layout|files|tree|where")) {
      return "Structure: car_factory.py, car.py, engine/, battery/, tires/, serviceable.py, and test/ modules—clean separation and easy navigation.";
    }
    if (has(text, "github|code|repo|link")) {
      return "GitHub: https://github.com/AyeshaRahman2002/lyft";
    }
    return "Ask about architecture, components, Stage 4 changes, testing, or the repo.";
};

/** --------------------------
 * GreenMyCloud bot
 * -------------------------- */
const greenMyCloudResponder = (raw) => {
    const text = raw.trim();
    const match = (s, ...p) => p.some((r) => new RegExp(r, "i").test(s));
  
    if (match(text, "objective|goal|overview|purpose|problem")) {
      return "GreenMyCloud raises awareness of the carbon footprint from personal computing and cloud usage and lets users monitor emissions from smartphones/IoT/online activity in a simple UI. It models functional + non-functional requirements and ships a proof-of-architecture prototype.";
    }
  
    if (match(text, "users|audien|who|stakeholder|benefit")) {
      return [
        "Users: general customers with IoT devices; finance/bank staff; cryptocurrency/NFT users; stock-market participants; environmentalists; large companies (e.g., tech/auto); climate-safety orgs; forestry developers; geoengineering stakeholders."
      ].join(" ");
    }
  
    if (match(text, "feature|function|capabilit|what can it do|requirement")) {
      return [
        "Core features: device-level emissions in graphs/tables; daily activity input; connect all devices into one view; search emissions of devices you don’t own; multi-language UI; color-blind graph themes; status saved on logout; works across smart devices; encrypted transactions; 7-day trial."
      ].join(" ");
    }
  
    if (match(text, "scope|platform|web|app|access|where|devices|browser")) {
      return "Scope: an application/web-based system accessible from smartphones and laptops; includes an in-app translator and web search; password protected; product advertising/billing internals are out of scope.";
    }
  
    if (match(text, "security|privacy|encrypt|trial|login|password")) {
      return "Security & access: password protection, status persisted on logout, and encrypted transaction data; app offers a 7-day trial before fees.";
    }
  
    if (match(text, "background|context|why|impact|ghg|bitcoin|ai|iot")) {
      return "Background: ICT contributes ~2–3.9% of global GHGs and could rise with AI/IoT/crypto. Example: Bitcoin energy use and per-transaction footprint are substantial; the app helps users understand these impacts at the device/usage level.";
    }
  
    if (match(text, "limitation|constraint|cannot|tradeoff")) {
      return "Limitations: no historical results prior to install; relatively heavy local storage; cannot ensure users follow suggested greener alternatives.";
    }
  
    if (match(text, "tech|browser|platform")) {
      return "Target platforms include modern browsers like Chrome, Safari and Firefox; mobile + laptop form factors are supported.";
    }
  
    if (match(text, "report|paper|pdf|document|docs?")) {
      return "GreenMyCloud Requirements Specification  /GreenMyCloud.pdf";
    }
  
    if (match(text, "github|code|repo|repository")) {
      return "GitHub link: (add if/when public)"; // placeholder
    }
  
    return "Ask about objectives, users, core features, scope & platforms, security/trial, background context, or limitations. I’ll cite specifics on request.";
};

const videoEditingResponder = (raw) => {
    const t = (raw || "").trim();
    const ask = (...patterns) => patterns.some((p) => new RegExp(p, "i").test(t));
  
    // High-level purpose & scope
    if (ask("objective|aim|overview|scope|problem|motivation|personas?")) {
      return [
        "Aim: deliver a full-featured yet approachable C++ video editor with fast core edits (trim/split/merge) and creative tools, while keeping the UI unintimidating.",
        "Personas: creators/influencers needing quick turnaround; students editing coursework; and advanced users who want accurate timeline control.",
        "Design goals: frame accuracy, responsive scrubbing, minimal clicks for common tasks, strong accessibility, and a modular codebase that’s easy to extend.",
        "Non-goals for v1: heavy collaborative editing and multi-machine render farm (kept out to keep the core focused and stable)."
      ].join(" ");
    }
  
    // Editing and creative feature set
    if (ask("feature|edit|tools|capab|filter|transition|overlay|text|title|caption|audio|speed|slow|time.?lapse|effect|color|grade|stabil")) {
      return [
        "Core edits: frame-accurate trim, split, ripple delete, join/merge, clip disable, and per-clip speed (slow/fast, reverse).",
        "Timeline: multi-track video/audio, snap-to-playhead/markers, magnetic mode toggle, zoomable timeline, markers and in/out points.",
        "Effects: stackable clip effects (exposure, contrast, saturation, temperature/tint, vignette, sharpen/blur) with live preview; per-parameter strength.",
        "Transitions: cross-fade, dip-to-black/white, slide, and zoom; adjustable duration and easing.",
        "Overlays & titles: lower-thirds, captions, shapes; font family/weight/size/line-height/letter-spacing; stroke/fill/shadow; safe-area guides.",
        "Audio: gain, normalize, fade in/out, pan, noise-gate; multi-track mixing with meters; optional music-ducking against dialogue.",
        "Speed effects: slow-motion and time-lapse with frame blending; constant-rate for v1 (keyframed retime is on the roadmap)."
      ].join(" ");
    }
  
    // UI & UX details
    if (ask("ui|ux|timeline|layout|drag|preview|panel|custom|marker|snapp|zoom|shortcuts?")) {
      return [
        "Workspace: media bin, timeline, inspector, and preview monitor; panels are resizable/detachable and layouts can be saved/loaded.",
        "Interaction: drag-and-drop from bin → timeline; hover scrub in the bin; ripple/snap toggles; shift-drag for fine adjustments; double-click to open clip in source viewer.",
        "Preview: 1/2 and 1/4 resolution preview options, safe-area overlay, and A/B compare for effects.",
        "Usability touches: auto-scroll timeline on drag, ghost previews for transitions, and inline durations you can type to edit."
      ].join(" ");
    }
  
    // Accessibility
    if (ask("accessib|screen ?reader|a11y|caption|subtitle|contrast|keyboard|aria")) {
      return [
        "Screen readers: all actionable controls have names/roles/states; timeline items expose labels and timecodes.",
        "Keyboard: full navigation for media bin and timeline (arrow keys, tab loops, space to play/pause, enter to confirm).",
        "Visual accessibility: high-contrast theme option, scalable UI (90–130%), focus rings, and large hit-targets.",
        "Captions: import SRT/VTT, edit timing/text, and burn-in or mux on export; basic auto-caption pipeline is supported through an external step."
      ].join(" ");
    }
  
    // Architecture & patterns
    if (ask("arch|design|oop|module|component|class|render|io|engine|pattern|undo|redo|command|event")) {
      return [
        "Modules: MediaIO (decode/encode), TimelineCore (clips/tracks/edits), EffectsEngine, PreviewRenderer, UI Shell.",
        "Patterns: Command pattern for undo/redo; an event bus for UI↔core updates; background job queue for decode/encode/effect render.",
        "Data model: project → sequence(s) → tracks → clips; clips reference media with effect stacks and clip-local transform/color/audio.",
        "Serialization: project saved as a compact JSON with media refs and effect params; media kept external for portability.",
        "Rendering: decode → frame cache → effect stack → preview; GPU upload for preview when available, CPU fallback kept simple for portability."
      ].join(" ");
    }
  
    // Performance strategies
    if (ask("perform|large file|hd|4k|lag|speed|cache|proxy|optimi[sz]e|fps")) {
      return [
        "Responsiveness: prefetch around the playhead and maintain a small ring-buffer cache for scrubbing.",
        "Proxy workflow: optional low-res proxies for 4K media to keep preview smooth on modest hardware.",
        "Compute: effect evaluation short-circuits for invisible tracks/segments; background render for long transitions; zero-copy surfaces where the platform allows.",
        "Budgets: target ≥30 FPS preview at half-res on typical coursework hardware; edited with sample 1080p/4K footage to validate memory and IO."
      ].join(" ");
    }
  
    // Formats, import & export
    if (ask("format|codec|container|import|export|render|preset|bitrate|resolution|fps|mp4|mov|avi|h\\.26|vp9|audio")) {
      return [
        "Import: common containers like MP4/MOV (H.264/AAC) and WAV/MP3 for audio—via platform codecs or FFmpeg-backed builds.",
        "Export: presets for social (1080p@30, 1080p@60), archive-quality, and lightweight preview; user-settable resolution, fps, bitrate, and container.",
        "Audio export: stereo AAC or WAV; loudness normalization option; burn-in vs sidecar captions selectable."
      ].join(" ");
    }
  
    // Keyboard shortcuts & workflow
    if (ask("shortcut|hotkey|key ?map|keyboard|workflow|tips|how do I")) {
      return [
        "Keys (default): Space = play/pause; J/K/L = shuttle; I/O = mark in/out; S = split; B = ripple delete; Cmd/Ctrl+Z/Y = undo/redo; +/- = zoom; M = add marker.",
        "Workflow tips: mark in/out in the source viewer, overwrite/insert to timeline, trim on the timeline, then apply transitions and color last.",
        "Safety: autosave every 60s and on focus loss; crash-recovery snapshot kept for the last two sessions."
      ].join(" ");
    }
  
    // Testing & quality
    if (ask("test|user test|iteration|feedback|stability|bug|qa|unit|soak")) {
      return [
        "Quality: unit tests for TimelineCore ops (split/trim/merge/ripple), regression clips for edge-frames, and soak tests on hour-long timelines.",
        "Usability: formative tests shaped panel defaults, snap behavior, and text tool; performance profiling on large media ensured smooth scrubbing.",
        "CI-style local scripts repro encode/preview scenarios to keep performance within targets after changes."
      ].join(" ");
    }
  
    // Roadmap & limitations
    if (ask("limit|future|roadmap|next|not.?yet|missing|planned")) {
      return [
        "Limitations: no shared/collab editing; retime curves (keyframed speed) are basic; effect library is intentionally compact.",
        "Roadmap: keyframed parameters across effects, GPU-assisted preview path, project history panel, LUT support, and export presets per platform."
      ].join(" ");
    }
  
    // Links
    if (ask("github|repo|code")) {
      return "GitHub: https://github.com/AyeshaRahman2002/VideoEditingApplication";
    }
    if (ask("video|demo|walkthrough|youtube")) {
      return "Final demo: https://youtu.be/fnO9mHOX-lA  (intermediate sprints are captured in the report).";
    }
    if (ask("report|pdf|document|write.?up|paper")) {
      return "Report: /UserInterface.pdf";
    }
  
    // Fallback
    return "Ask about aims, features, UI/UX, accessibility, architecture, performance, formats & export, shortcuts/workflow, testing, limitations/roadmap, or links (GitHub, demo, report).";
};

const sportsMgmtResponder = (raw) => {
    const q = raw.trim();
    const ask = (...pats) => pats.some((p) => new RegExp(p, "i").test(q));
  
    if (ask("objective|aim|overview|scope|problem|motivation")) {
      return [
        "Aim: streamline a sports center’s operations with a full-stack web app (Python/Flask + SQLAlchemy + HTML/CSS/JS).",
        "Scope: memberships, user profiles, class/program browsing and registration, event booking with reminders, admin reporting, and secure payments (simulated gateway).",
        "Motivation: reduce manual work and errors while giving members a clean self-service experience on desktop and mobile."
      ].join(" ");
    }
  
    if (ask("feature|capab|module|function|what can it do|class|program|event|booking|cart|wishlist")) {
      return [
        "Core features:",
        "• Auth & profiles: signup/login, profile edit, membership status, history.",
        "• Programs/classes: searchable/filterable list with schedule, fees, capacity and live availability; wishlist and cart; conflict detection.",
        "• Events: calendar view, register/unregister, capacity tracking, waitlist (optional).",
        "• Notifications: email confirmations, reminders and change alerts via Flask-Mail/SMTP.",
        "• Admin dashboard: CRUD for programs/events, user management, registration views, CSV export and basic analytics.",
        "• Payments: simulated checkout linked to user receipts/history."
      ].join("\n");
    }
  
    if (ask("ui|ux|frontend|layout|bootstrap|responsive")) {
      return [
        "UI/UX: Bootstrap + custom CSS for responsive layouts; navbar, filters, cards, modal dialogs.",
        "Timeline/calendar widgets for events; dashboard for a user’s registrations and payments; keyboard focus order and ARIA labels for better accessibility."
      ].join(" ");
    }
  
    if (ask("arch|design|stack|layers|oop|service|controller|blueprint|structure")) {
      return [
        "Architecture: Flask blueprints split into auth, programs, events, bookings, admin.",
        "Data layer: SQLAlchemy models with relationships Users↔Memberships, Programs↔Sessions, Bookings, Events; eager/lazy loading as needed.",
        "Services: mailer, availability/seat allocation, conflict checker, payments (stub).",
        "Templates: Jinja2 views; REST-like routes returning HTML/JSON; client JS for interactivity."
      ].join(" ");
    }
  
    if (ask("schema|model|table|relationship|sql|sqlalchemy|er\\b|diagram")) {
      return [
        "Key models: User(id, email, pass_hash, role, created_at),",
        "Program(id, name, desc, fee), Session(id, program_id, starts_at, ends_at, capacity),",
        "Booking(id, user_id, session_id, status, paid, created_at),",
        "Event(id, title, when_at, capacity), EventReg(id, user_id, event_id, status).",
        "Indexes on (session_id, status) and (event_id, status) for fast counts."
      ].join(" ");
    }
  
    if (ask("auth|login|security|csrf|bcrypt|validate|xss|injection")) {
      return [
        "Security: Flask-Login for sessions; bcrypt for password hashing; WTForms/Flask-WTF with CSRF tokens; input validation & parameterized queries via SQLAlchemy; role-based access (admin vs member); rate-limited login; cookies set HttpOnly/SameSite."
      ].join(" ");
    }
  
    if (ask("notify|email|reminder|flask-mail|smtp")) {
      return "Notifications: Flask-Mail + SMTP sender for registration confirmations, event reminders (cron/APS scheduler), and change alerts (time/venue).";
    }
  
    if (ask("payment|checkout|stripe|gateway")) {
      return "Payments: simulated gateway layer that records transactions and receipts; abstraction allows swapping to Stripe/PayPal later without changing booking flow.";
    }
  
    if (ask("performance|scal(e|ability)|index|cache|paginate")) {
      return "Performance: query pagination for listings, selective eager loading for detail pages, DB indexes on foreign keys/status, and lightweight JSON endpoints to keep pages snappy.";
    }
  
    if (ask("test|testing|unit|integration|coverage|qa|deployment|heroku")) {
      return [
        "Testing: unit tests for booking rules (seats/conflicts), auth flows, mailer stubs; integration tests for end-to-end registration.",
        "Deployment: Heroku demo with env-based config for DB URL and SMTP credentials."
      ].join(" ");
    }
  
    if (ask("future|roadmap|next|improve|todo")) {
      return "Roadmap: real payment provider, waitlist auto-promotion, attendance QR check-in, richer reporting, and staff roles with granular permissions.";
    }
  
    if (ask("github|repo|code|source")) {
      return "GitHub: https://github.com/AyeshaRahman2002/SportsManagementSystem";
    }
  
    if (ask("report|pdf|document|docs?")) {
      return "There isn’t a public report PDF for this one yet; code and README in the repo cover setup and usage.";
    }
  
    return "Ask about aims, features, UI/UX, architecture, schema, security, notifications, payments, performance, testing/deploy, roadmap, or links.";
};

const todoResponder = (raw) => {
    const t = raw.trim();
    const has = (...p) => p.some((r) => new RegExp(r, "i").test(t));
  
    if (has(t, "objective|aim|overview|problem|motivation|scope")) {
      return "Aim: help students/professionals track assessments with a clean, fast web app—task CRUD, status flows, search/filters, and responsive UI. Problem: scattered deadlines and poor visibility across many courses deliverables.";
    }
    if (has(t, "stack|tech|library|framework|backend|frontend|db|sqlite|sqlalchemy|flask")) {
      return "Stack: Flask + Jinja2, SQLAlchemy on SQLite, Flask-Login, Flask-WTF (CSRF), bcrypt; Frontend: HTML5/CSS3/Bootstrap 5, vanilla JS/Fetch; deploy-ready for Render/Heroku.";
    }
    if (has(t, "feature|capab|crud|task|status|priority|label|search|filter|sort|pagination|real.?time")) {
      return "Features: task CRUD; fields—title, description, due, priority, labels; status transitions (Incomplete/In-Progress/Completed); live counters; search by text/due/label/priority/status; quick actions; keyboard shortcuts; optimistic UI saves.";
    }
    if (has(t, "auth|login|register|session|security|csrf|hash|bcrypt|roles")) {
      return "Security: user register/login via Flask-Login; bcrypt-hashed passwords; CSRF on forms; per-user row scoping; input validation; defensive queries to prevent injection.";
    }
    if (has(t, "schema|model|table|entity|erd|db design")) {
      return "Schema: User( id, email, pw_hash ); Task( id, user_id→User, title, description, due_date, priority, status, labels_json, created_at, updated_at, completed_at INDEX(due_date, status, priority) ).";
    }
    if (has(t, "api|route|endpoint|rest|json")) {
      return "Key routes: GET /tasks?filters…, POST /tasks, PATCH /tasks/:id (status/fields), DELETE /tasks/:id; server renders HTML with progressive JSON APIs for inline updates.";
    }
    if (has(t, "ux|ui|design|responsive|mobile|accessibility|a11y")) {
      return "UX: glassy card layout; color-blind-safe status hues + icons; large hit targets; focus outlines & ARIA labels; mobile layout with sticky add/search bar.";
    }
    if (has(t, "test|testing|unit|integration|qa|coverage|perf")) {
      return "Testing: unit tests for models/validators; integration tests for auth and task flows; seed data for manual QA; perf checks on list pages with hundreds of tasks.";
    }
    if (has(t, "limit|future|next|roadmap|improve")) {
      return "Roadmap: recurring tasks, reminders/ICS export, Kanban view, bulk edit, tag suggestions, soft delete/undo, WebSocket push for multi-device sync.";
    }
    if (has(t, "github|repo|code")) {
      return "GitHub: https://github.com/AyeshaRahman2002/Coursework-Management-Application";
    }
    if (has(t, "report|pdf|doc|write.?up")) {
      return "Project notes are in the repository README and commit history.";
    }
    return "Ask about aims, stack, features, security, schema, API, UX, testing, roadmap, or the GitHub repo.";
};

/** --------------------------
 * Projects (with categories) + filtered render
 * -------------------------- */
export default function ProjectCards({ selectedCategory = "All" }) {
  const projects = [
    {
      category: "Finance",
      image: inflationProjectPic,
      title: "Inflation Forecasting with Machine Learning Models",
      descriptionBullets: inflationBullets,
      githubLink:
        "https://github.com/AyeshaRahman2002/Inflation-Forecasting-Group-Project",
      videoLink: "https://youtu.be/Dtd82dyeasE",
      reportLinks: [
        {
          name: "Group Report",
          url: "/Inflation_Forecasting_with_Machine_Learning_Models__Group_Report.pdf",
        },
        {
          name: "Individual Report",
          url: "/Inflation_Forecasting_with_Machine_Learning_Models__Individual_Report.pdf",
        },
      ],
      getResponse: inflationResponder,
    },
    {
      category: "Health",
      image: digitalHealthPic,
      title: "Digital Health AI for Identifying Autism Spectrum Disorder",
      descriptionBullets: asdBullets,
      githubLink: "https://github.com/AyeshaRahman2002/Digital-Health-ASD",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: "/Digital_Health_ASD_Report.pdf" }],
      getResponse: asdResponder,
    },
    {
      category: "Finance",
      image: sentimentProjectPic,
      title:
        "Creating a Classification Model Using Online Sentiment to Determine Stock Price",
      descriptionBullets: sentimentBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: "/DataMiningProjectReport.pdf" }],
      getResponse: sentimentResponder,
    },
    {
      category: "Finance",
      image: hotelProjectPic,
      title: "Financial Modeling - Hotel Price Data Scraping Tool",
      descriptionBullets: hotelBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [{ name: "Project Proposal", url: "/ProjectProposal-Hotels.pdf" }],
      getResponse: hotelResponder,
    },
    {
      category: "Finance",
      image: flightsProjectPic,
      title: "Financial Modeling - Flights Price Data Scraping Tool",
      descriptionBullets: flightsBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [{ name: "Project Proposal", url: "/ProjectProposal-Flights.pdf" }],
      getResponse: flightsResponder,
    },
    {
      category: "Graphics",
      image: renderingProjectPic,
      title: "Interactive 3D Rendering Application",
      descriptionBullets: renderingBullets,
      githubLink:
        "https://github.com/AyeshaRahman2002/ComputerGraphics_3D_Rendering",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: "/GraphicsCW.pdf" }],
      getResponse: renderingResponder,
    },
    {
      category: "Robotics",
      image: spaceNavPic,
      title: "Autonomous Navigation and Detection System for Spacecraft",
      descriptionBullets: spaceNavBullets,
      githubLink: "https://github.com/AyeshaRahman2002/PlanetDetection",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: "/Robotics.pdf" }],
      getResponse: spaceNavResponder,
    },
    {
      category: "AI/ML",
      image: bioOptPic,
      title: "Comparative Analysis of Bio Inspired Optimisation for NN Training",
      descriptionBullets: bioOptBullets,
      githubLink: "https://github.com/AyeshaRahman2002/bio-inspired-optimization",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: "/bio-inspired-cw2-report.pdf" }],
      getResponse: bioOptResponder,
    },
    {
      category: "Systems",
      image: xv6ProjectPic,
      title: "xv6 Memory Management - malloc free and rqstMem",
      descriptionBullets: xv6Bullets,
      githubLink: "https://github.com/AyeshaRahman2002/MemoryManagement-C",
      videoLink: "",
      reportLinks: [{ name: "Coursework Report", url: "/xv6MemoryManagement.pdf" }],
      getResponse: xv6Responder,
    },
    {
      category: "Health",
      image: psychAIProjectPic,
      title: "Use of AI in Psychological Treatments",
      descriptionBullets: psychAIBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: "/AIinPsychologicalTreatements.pdf" }],
      getResponse: psychAIResponder,
    },
    {
      category: "Graphics",
      image: twoDRenderPic,
      title: "2D Rendering Application - Computer Graphics",
      descriptionBullets: twoDBullets,
      githubLink:
        "https://github.com/AyeshaRahman2002/ComputerGraphics-2d-Rendering",
      videoLink: "",
      reportLinks: [{ name: "Project Report", url: "/RenderingProjectReport.pdf" }],
      getResponse: twoDResponder,
    },
    {
      category: "HCI",
      image: covidAppsPic,
      title: "Aarogya Setu vs. COVIDSafe — Comparative Analysis",
      descriptionBullets: covidAppsBullets,
      githubLink: "",
      videoLink: "",
      reportLinks: [
        { name: "Project Slides", url: "/AarogyaSetu-vs-COVIDSafe.pptx" },
      ],
      getResponse: covidAppsResponder,
    },
    {
      category: "HCI",
      image: medalsProjectPic,
      title: "Olympic Medal Analysis Using Data Visualisations",
      descriptionBullets: medalsBullets,
      githubLink: "https://github.com/AyeshaRahman2002/InfoVis-MedalAnalysis",
      videoLink: "",
      reportLinks: [{ name: "Report", url: "/Info_Vis.pdf" }],
      getResponse: olympicsResponder,
    },
    {
        category: "Systems",
        image: lyftProjectPic,
        title: "Lyft System Design - Forage Project",
        descriptionBullets: lyftBullets,
        githubLink: "https://github.com/AyeshaRahman2002/lyft",
        videoLink: "",
        reportLinks: [],
        getResponse: lyftResponder,
    },
    {
        category: "Systems",
        image: greenMyCloudPic,
        title: "GreenMyCloud - Carbon Footprint Monitoring App",
        descriptionBullets: greenMyCloudBullets,
        githubLink: "",
        videoLink: "",
        reportLinks: [{ name: "Report", url: "/GreenMyCloud.pdf" }],
        getResponse: greenMyCloudResponder,
    },
    {
        category: "HCI",
        image: videoEditingPic,
        title: "Video Editing Application - C++ UI Group Project",
        descriptionBullets: videoEditingBullets,
        githubLink: "https://github.com/AyeshaRahman2002/VideoEditingApplication",
        videoLink: "https://youtu.be/fnO9mHOX-lA",
        reportLinks: [{ name: "UI Report", url: "/UserInterface.pdf" }],
        getResponse: videoEditingResponder,
    },

    {
        category: "Systems",
        image: sportsMgmtPic,
        title: "Sports Management Web Application",
        descriptionBullets: sportsMgmtBullets,
        githubLink: "https://github.com/AyeshaRahman2002/SportsManagementSystem",
        videoLink: "",
        reportLinks: [],
        getResponse: sportsMgmtResponder,
    },

    {
        category: "HCI",
        image: todoProjectPic,
        title: "Assessment To-Do List (Flask + SQLite)",
        descriptionBullets: todoBullets,
        githubLink: "https://github.com/AyeshaRahman2002/Coursework-Management-Application",
        videoLink: "",
        reportLinks: [],
        getResponse: todoResponder,
    },
  ];

  const visible =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        width: "100%",
      }}
    >
      {visible.map((p) => (
        <div key={p.title} style={{ width: "100%" }}>
          {/* optional badge */}
          <div
            style={{
              margin: "0 0 .4rem .4rem",
              fontSize: 12,
              fontWeight: 700,
              opacity: 0.7,
            }}
          >
            {p.category}
          </div>
          <ProjectCard {...p} />
        </div>
      ))}

      {visible.length === 0 && (
        <div style={{ opacity: 0.6, fontWeight: 600 }}>
          No projects in this category yet.
        </div>
      )}
    </div>
  );
}
