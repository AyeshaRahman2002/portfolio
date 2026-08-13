export const PROJECT_IMAGE_BY_TITLE: Record<string, string> = {
  'Digital Health AI for Autism Spectrum Disorder': 'digital_health_project.jpg',
  'Multi-Modal CNN-RNN Visual Recognition & Captioning': 'multimodal_project.jpg',
  'Autonomous Navigation & Detection for Spacecraft': 'space_nav_project.jpg',
  'Bio-Inspired Optimisation for Neural Network Training': 'bio_opt_project.jpg',
  'xv6 Memory Management (malloc, free, rqstMem)': 'xv6_project.jpg',
  'Interactive 3D Rendering Application': 'rendering_project.jpg',
  '2D Rendering Application': '2d_render_project.jpg',
  'Sentiment-to-Stock Movement Classification': 'sentiment_stock_project.jpg',
  'Olympic Medal Data Visualisation': 'medals_project.jpg',
  'GreenMyCloud: Carbon Footprint Monitoring': 'greenmycloud_project.jpg',
  'Video Editing Application': 'video_editing_project.jpg',
  'Sports Management Web Application': 'sports_mgmt_project.jpg',
  'Assessment To-Do Application': 'assessment_todo_project.jpg',
  'Aarogya Setu vs. COVIDSafe: Comparative Analysis': 'covid_apps_project.jpg',
  'Use of AI in Psychological Treatments': 'psych_ai_project.jpg',
  'Lyft Back-End Engineering (Forage)': 'lyft_project.jpg',
  'Smart Poultry Farm Management': 'bio_opt_project.jpg',
  'Hotel Price Data Scraping Tool': 'hotel_project.jpg',
  'Flights Price Data Scraping Tool': 'flights_project.jpg',
};

export const projectImage = (title: string) =>
  `/projects/archive/${PROJECT_IMAGE_BY_TITLE[title] ?? 'mlloopoptselector.jpg'}`;
