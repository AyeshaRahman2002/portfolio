// Add custom styles for download buttons
const style = document.createElement('style');
style.innerHTML = `
    .download-btn {
        background-color: white;
        border: 2px solid white;
        color: black; /* Text color for contrast */
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .download-btn:hover {
        background-color: transparent; /* On hover, make the background transparent */
        color: white; /* Change text color to white on hover */
        border-color: white; /* Keep the white border */
    }
`;
document.head.appendChild(style);

// Function to display the modal with project details
function showDetails(projectId) {
    const modal = document.getElementById("project-details");
    const modalText = document.getElementById("modal-text");

    // Add project-specific details here
    if (projectId === "ai-analysis") {
        modalText.innerHTML = `
            <h2>Creating a Classification Model Using Online Sentiment to Determine Stock Price</h2>
            <p>The group project aimed to develop a robust sentiment analysis-based classification model to predict stock price movements. The project explored the intersection of Artificial Intelligence, Natural Language Processing (NLP), and financial market analysis, focusing on the ability of sentiment data to forecast stock price trends. This project utilized large-scale, unstructured data from social platforms such as Amazon and Twitter, emphasizing the influence of customer reviews and public opinion on market performance.</p>
            <p>The technical challenge in this project involved handling and processing vast amounts of raw sentiment data, which is inherently unstructured. The team tackled this issue using advanced techniques such as tokenization, sentiment polarity extraction, and NLP-based feature engineering to clean and structure the data for further analysis. This process ensured that the sentiment data was in a usable form, ready for machine learning applications.</p>
            <p>Once the data was preprocessed, the sentiment analysis model was trained using various machine learning algorithms, particularly focusing on classification accuracy and model performance. The team experimented with different classification techniques, including logistic regression, random forest classifiers, and support vector machines (SVM) to determine the best approach for predicting stock price changes. The performance of each model was evaluated using metrics such as precision, recall, F1-score, and overall accuracy, ensuring the reliability of the predictions.</p>
            <p>A key innovation in this project was the integration of sentiment data with traditional financial forecasting models. By combining sentiment analysis with historical stock price data, the team was able to enhance the model's predictive power. The project demonstrated that sentiment, especially as captured from large public platforms, could serve as a valuable leading indicator for stock price movements. For instance, a surge in positive reviews or discussions about a product on Amazon or Twitter might correspond with an increase in the company's stock price, while negative sentiment could indicate a forthcoming drop.</p>
            <p>Additionally, the project addressed the challenge of overfitting in machine learning models, particularly when working with large datasets. The team employed techniques such as cross-validation and regularization to improve the model’s generalization ability and to ensure that it would perform well on unseen data.</p>
            <p>This project is a testament to the power of data-driven decision-making in finance, showcasing how modern AI techniques like sentiment analysis can be applied to predict market trends. The project not only highlighted technical expertise in data analysis, machine learning, and NLP but also underscored the practical relevance of using sentiment as a predictive tool in financial markets. With the rise of social media and online reviews influencing public perception, the ability to harness this data provides a competitive edge in investment strategies. The success of this project positions it as a significant contribution to the field of AI in finance, offering a novel approach to stock market prediction through the lens of sentiment analysis.</p>
            <a href="files/DataMiningProjectReport.pdf" download="DataMiningProjectReport.pdf" class="download-btn">Download Project Report</a>
        `;
    } else if (projectId === "xv6-memory") {
        modalText.innerHTML = `
            <h2>xv6 Memory Management</h2>
            <p>In this project for COMP2211: Operating Systems, I implemented memory management functions for the xv6-riscv operating system, specifically focusing on the malloc() and free() operations. The xv6 operating system, designed as a teaching tool, provided a robust platform to understand how memory allocation works within an operating system's kernel.</p>
            <p>The malloc() function I implemented dynamically allocates memory using the concept of circular linked lists. The function checks if the requested size is valid and assigns memory using a circular linked list structure, where the last node links back to the first node. This structure allowed efficient memory allocation and management, particularly useful in minimizing wasted space and optimizing memory use.</p>
            <p>I also created the free() function, which deallocates memory blocks previously assigned by malloc(). This function checks for null pointers and properly handles memory release by merging adjacent free blocks, thus preventing fragmentation.</p>
            <p>A key feature of my implementation was the rqstMem() function, which requests additional memory from the operating system when required. The function employs the system call sbrk(), adjusting the program's data space and dynamically increasing the memory when needed. This efficient management ensures that memory is only expanded when absolutely necessary, minimizing system overhead.</p>
            <p>Throughout this project, I deepened my understanding of how memory management works in low-level systems programming. I gained valuable experience in debugging complex C programs, learned to manage dynamic memory efficiently, and enhanced my understanding of how operating systems handle memory allocation and deallocation at the kernel level. This project not only strengthened my skills in C programming but also gave me hands-on exposure to core operating system concepts.</p>
            <a href="files/comp2211report_sc21ar.pdf" download="comp2211report_sc21ar.pdf" class="download-btn">Download Project Report</a>
            <button onclick="window.location.href='https://github.com/AyeshaRahman2002/MemoryManagement-C';">View on GitHub</button>

        `;
    } else if (projectId === "todo-app") {
        modalText.innerHTML = `
            <h2>Assessment To-Do List Application</h2>
            <p>During my recent group project, we developed a web-based assessment task management system that allowed users to efficiently create, update, and track their tasks. As part of the project, I took a lead role in both the backend and frontend development, ensuring seamless integration between user interfaces and the core logic of the application. This project, built with Flask (Python), SQLite, and HTML/CSS, aimed to simplify task management for students and professionals alike by providing an intuitive platform for tracking assessment deadlines and progress.</p>
            <p>The system was designed to help users manage various assessments by categorizing tasks into completed, in-progress, and incomplete statuses. With features like real-time task updates, user authentication, and a powerful search function, the system provided an efficient way for users to track their progress and manage deadlines.</p>
            <p>Key Features:</p>
            <ul>
                <li><strong>Task Creation and Management:</strong>We developed an easy-to-use interface that allowed users to create tasks, specifying essential details like the task name, description, due date, and priority. Each task was categorized based on its status, offering users a clear view of what they needed to focus on.</li>
                <li><strong>Task Status Tracking:</strong>The system provided real-time task updates, enabling users to move tasks through various stages (incomplete, in-progress, completed). Each update was reflected immediately in the database, ensuring an accurate and up-to-date task list.</li>
                <li><strong>User Authentication:</strong>As part of the security measures, we implemented a user authentication system where each user could register and log in to manage their personalized task list. This feature ensured that tasks were securely stored and accessible only by their respective users.</li> 
                <li><strong>Responsive Frontend:</strong>The frontend was built using HTML5, CSS3, and JavaScript to ensure a responsive design that worked smoothly across different devices, from desktops to mobile phones. The goal was to create an intuitive and visually appealing interface that users would find easy to navigate.</li> 
                <li><strong>Backend and Database:</strong>On the backend, we utilized Flask to handle the application logic and SQLAlchemy for database management. The tasks and user information were stored securely in an SQLite database, allowing for efficient data handling and quick retrieval of task-related information.</li> 
                <li><strong>Search Functionality:</strong>One of the key highlights of this project was the search feature, which allowed users to find specific tasks based on their name, description, or due date. This functionality made it easy for users with multiple tasks to quickly locate and prioritize their work.</li> 
                <li><strong>Data Management and Efficiency:</strong>Throughout the project, I worked on optimizing the data storage and retrieval processes, ensuring the app performed efficiently even as the number of users and tasks grew.</li> 
            </ul>
            <p>Achievements:</p>
            <ul>
                <li><strong>Streamlining User Experience:</strong> By focusing on user-friendly design principles, we were able to develop a system that made task management simple and effective. I worked closely on the user interface to ensure that task creation, updates, and tracking could be done with minimal clicks and maximum clarity.</li> 
                <li><strong>Optimized Data Handling:</strong> Through the use of SQLAlchemy, we optimized the handling of task and user data, making sure that the application scaled well as more users and tasks were added. This also ensured data consistency and security, which were critical to the project’s success.</li> 
                <li><strong>Collaboration with Frontend and Backend:</strong> A key achievement of the project was the seamless collaboration between the frontend and backend components. I played a crucial role in ensuring that the backend logic (e.g., task creation, status updates) integrated smoothly with the frontend interface, delivering a consistent user experience.</li> 
                <li><strong>Search Feature Efficiency:</strong> The search feature allowed users to find tasks quickly, which became one of the most appreciated elements of the system. It empowered users to manage their workload more effectively, especially when dealing with a large number of assessments.</li> 
                <li><strong>Real-Time Task Updates:</strong> The ability to change task statuses in real-time without needing to refresh the page significantly improved the app’s efficiency. I implemented this feature to ensure users always had an up-to-date view of their task progress.</li> 
                <li><strong>Successful Group Collaboration:</strong> Working closely with my team, we successfully divided responsibilities to tackle the various challenges of the project. I focused on the database management, backend logic, and integration, while other members handled different aspects, like design and testing.</li> 
            </ul>
            <p>This project taught me valuable lessons in both backend database management and frontend development, as well as how to optimize web applications for real-time performance and security. It was an enriching experience that allowed me to merge both technical skills and collaborative project management, resulting in a robust, user-friendly platform for assessment management.</p>
            <button onclick="window.location.href='https://github.com/AyeshaRahman2002/Coursework-Management-Application';">View on GitHub</button>
        `;
    } else if (projectId === "health-ai-autism") {
        modalText.innerHTML = `
            <h2>Development and Implementation of a Digital Health AI Prototype for Identifying Autism Spectrum Disorder in Adults</h2>
            <p>This project explored the development and implementation of an AI-based digital health prototype for diagnosing Autism Spectrum Disorder (ASD) in adults. The project aimed to fill the gap in diagnostic tools that typically focus on children, using machine learning to analyze eye movements, textual input, and social interactions. The application features several modules, including eye-tracking analysis, a machine-learning-based note-tracking system, and a natural language processing (NLP) game that simulates social scenarios.</p>
            <ul>
                <li>Uses AI techniques like eye-movement tracking and sentiment analysis to assist in ASD diagnosis.</li>
                <li>Focuses on gender differences in diagnosis, especially addressing the challenges women face in being diagnosed with ASD.</li>
                <li>Designed with ethical considerations, such as reducing bias in the AI model and ensuring data privacy.</li>
            </ul>
            <p>The system integrates multiple diagnostic questionnaires (AQ, AQ-10, CAT-Q, and RAADS-R) to provide comprehensive feedback, offering users insights into their behaviors relative to ASD traits. This allows users to reflect on their experiences and possibly seek professional diagnosis based on the results.</p>
            <p>The prototype was developed in two phases: the first focusing on improving an existing application framework and the second involving research and the creation of the AI models for ASD detection. The project demonstrated the potential of AI in healthcare, emphasizing adaptability and continuous improvement as diagnostic needs evolve.</p>
            <p>Key outcomes include successful model training for eye movement and note tracking, high levels of accuracy, and user engagement with the prototype's interactive tools. While the prototype has limitations, such as the need for further refinement and expansion, it represents a significant step toward improving adult ASD diagnosis using AI technologies.</p>
            <p>Future work includes collaborating with healthcare professionals to refine the system and improving eye-tracking accuracy.</p>
            <a href="https://github.com/AyeshaRahman2002/larks" class="download-btn">View on GitHub</a>
            <a href="files/Desertation.pdf" download="Dessertation.pdf" class="download-btn">Download Dissertation Report</a>
        `;
    } else if (projectId === "autonomous-navigation") {
        modalText.innerHTML = `
            <h2>Autonomous Navigation and Detection System for Spacecraft</h2>
            <p>This project aimed to develop a robust autonomous navigation system for spacecraft, specifically addressing the challenge of determining a spacecraft's precise location after being knocked off course by an explosion. The system employs various AI techniques, laser scanning, and machine learning to ensure successful navigation and location detection.</p>
            <p>Key components of the system include:</p>
            <ul>
                <li><strong>Navigation Initialization:</strong> The robotic unit starts by receiving predefined target coordinates (entrances and centers of spacecraft modules) to autonomously move between points. ROS 2's action framework allows the system to handle real-time movement adjustments.</li>
                <li><strong>Red and Green Sign Detection:</strong> The robot uses image processing techniques to detect red and green signs at entrances. A green sign allows entry to a module, while a red sign prompts the robot to avoid the room. The sign detection is achieved using HSV masks and contour detection.</li>
                <li><strong>Wall Navigation and Obstacle Avoidance:</strong> The robot uses LaserScan data to detect walls and obstacles. PID controllers ensure the robot maintains a consistent distance from walls while navigating safely. This feature was thoroughly tested in various simulated environments to confirm its reliability.</li>
                <li><strong>Window Detection and Heuristic Prediction:</strong> Heuristic methods are employed to predict the possible locations of windows within a room. The robot checks for rectangular shapes with specific characteristics (e.g., a white border and a predominantly black interior) to identify windows. Once a window is detected, the robot aligns itself to the window and captures screenshots for further analysis.</li>
                <li><strong>Screenshot and Image Stitching:</strong> The robot takes multiple screenshots of the detected windows and stitches them together into a panorama. This panorama is then analyzed to detect celestial bodies such as Earth, Moon, Mars, and Mercury.</li>
                <li><strong>Planet Detection and Distance Measurement:</strong> Using machine learning models (ResNet18), the system detects planets within the panorama and measures their distances based on the size and positions of the planets in the images. A custom heuristic method ensures accurate distance calculations between detected planets.</li>
                <li><strong>Testing and Validation:</strong> The system was tested in both simulated and real-world environments. Simple navigation and heuristic grid navigation were tested, revealing the system's robustness in dynamic environments. However, issues with LaserScan data in real-world scenarios led to the proposal of "LaserScan Stretching" to improve data consistency.</li>
            </ul>
            <p>This comprehensive system offers precise spacecraft navigation, robust obstacle avoidance, and accurate planetary detection and measurement capabilities, making it suitable for autonomous missions in challenging space environments.</p>
            <p>This project was done as group project for an assignment based at University of Leeds.</p>
            <button onclick="window.location.href='https://github.com/AyeshaRahman2002/PlanetDetection-Robotics';">View on GitHub</button>
            <a href="files/Robotics.pdf" download="Robotics.pdf" class="download-btn">Download Robotics Project Report</a>
        `;
    } else if (projectId === "3d-rendering") {
        modalText.innerHTML = `
            <h2>Interactive 3D Rendering Application</h2>
            <p>The project begins with implementing essential matrix and vector functions, such as matrix-matrix and matrix-vector multiplication, which are critical for transformations in 3D space. These functions were tested rigorously using the Catch2 testing framework to verify the correctness of mathematical operations, ensuring accurate rendering in later stages.</p>
            <p>The 3D rendering pipeline was initiated by loading a Wavefront OBJ file representing the terrain mesh. This involved setting up OpenGL using GLFW for window management and GLAD for function loading. Shaders were employed to handle vertex transformations and fragment coloring, with a simple vertex shader to transform model coordinates into screen space and a fragment shader for basic shading. The camera system allowed users to navigate the scene using keyboard inputs (WSAD keys for movement) and mouse input for view control, simulating a first-person perspective.</p>
            <p>Following the basic rendering setup, texture mapping was applied to the terrain. Orthophotos were used as textures, which required configuring vertex buffer objects (VBOs) and vertex array objects (VAOs) to include texture coordinates. The fragment shader was modified to sample textures correctly and map them onto the terrain surface. Initial challenges included incorrect texture application, which was resolved through adjustments to the texture sampling and proper handling of texture coordinates.</p>
            <p>Instancing was introduced to efficiently render multiple objects, specifically two launch pads placed at predefined locations on the terrain. Instancing reduced the overhead of rendering duplicate objects and allowed the placement of these pads with minimal performance impact. Textures were also applied to these objects to enhance visual realism.</p>
            <p>A custom 3D rocket model was constructed using basic primitives (cubes, cylinders, and cones) combined with translation, rotation, and scaling transformations. The model was assembled by merging individual components into a cohesive object, then positioned atop one of the launch pads. This custom model demonstrated advanced OpenGL transformations and object creation techniques.</p>
            <p>Lighting was incorporated using the Blinn-Phong shading model, which simulates ambient, diffuse, and specular reflections from light sources. This was further enhanced by adding point lights with distance attenuation, ensuring realistic light behavior as the camera moved through the scene. Debugging was necessary to resolve issues with light sources following the camera, which led to adjustments in light positioning and behavior.</p>
            <p>The rocket model was then animated to simulate a launch sequence. Using a state machine, the animation progressed through phases, including vertical lift-off, transition to horizontal flight, and continuous movement. This was implemented using time-based animation functions, ensuring smooth transitions between different phases of the rocket’s motion.</p>
            <p>Performance measurements were taken to evaluate the GPU’s handling of various tasks, including terrain rendering, instancing, and custom model rendering. The analysis showed a significant increase in rendering time for more complex tasks, particularly when adding textures and custom models. The performance data also indicated that camera positioning had a noticeable impact on frame rates, with rendering times increasing as the camera moved further from the main objects of interest.</p>
            <p>Overall, the coursework successfully demonstrated advanced 3D rendering techniques in OpenGL, integrating various components such as matrix transformations, lighting, animation, and performance optimization. The project’s culmination in a dynamic, interactive 3D scene reflects a deep understanding of modern graphics programming and the complexities of real-time rendering systems.</p>
            <button onclick="window.location.href='https://github.com/AyeshaRahman2002/ComputerGraphics_3D_Rendering';">View on GitHub</button>
            <a href="files/GraphicsCW.pdf" download="GraphicsCW.pdf" class="download-btn">Download Project Report</a>
        `;
    } else if (projectId === "predictive-modeling") {
        modalText.innerHTML = `
            <h2>Predictive Modeling for Health Data Analysis</h2>
            <p>In this project, I applied advanced machine learning techniques to analyze and predict patterns from a provided dataset. The task involved working with both clean and corrupted data, which required implementing data preprocessing strategies to handle missing values, outliers, and inconsistencies.</p>
            <p>Key steps in the project included:</p>
            <ul>
                <li><strong>Data Cleaning and Preprocessing:</strong> I worked with both clean and corrupted datasets, applying techniques to normalize the data, impute missing values, and remove noise. This step was crucial to ensure the model’s input data was optimized for performance.</li>
                <li><strong>Feature Engineering:</strong>I utilized feature selection methods to reduce dimensionality, identifying key variables that had the greatest influence on the target predictions.</li>
                <li><strong>Model Training and Evaluation:</strong> I trained machine learning models using the provided Training_data.csv and Training_data_targets.csv. Various algorithms were experimented with, including decision trees, random forests, and support vector machines (SVM). I evaluated the models based on accuracy, precision, recall, and F1 scores to ensure reliable predictions.</li>
                <li><strong>Handling Corrupted Data:</strong> I implemented custom strategies to deal with the corrupted data file, corrupted_data.npy, which involved reconstructing lost data points and re-evaluating model performance after correction.</li>
                <li><strong>Final Output and Model Optimization:</strong> After extensive tuning and cross-validation, I was able to achieve high performance on the cleaned dataset, demonstrating robust prediction accuracy. The assignment highlighted my ability to preprocess large datasets, apply machine learning models, and analyze the outcomes critically.</li>
            </ul>
            <p>This project underscored my proficiency in Python, data analysis, and machine learning libraries such as NumPy and Scikit-learn.</p>
        `;
    } else if (projectId === "decision-tree") {
        modalText.innerHTML = `
            <h2>Decision Tree Learning and Pruning Algorithms</h2>
            <p>This coursework aimed to assess understanding of decision tree learning and pruning algorithms. It involved adapting provided code to implement decision tree methods, utilizing datasets to learn and evaluate decision trees for predicting outcomes.</p>
            <p>Key steps in the project included:</p>
            <ul>
                <li><strong>Learning a Decision Tree:</strong> Implemented the learn_tennis_tree function to create a decision tree model predicting the variable "Play" from the tennis dataset. Utilized the DataSet object to load and manage the dataset.</li>
                <li><strong>Testing the Decision Tree:</strong> Developed the test_tennis_tree function to evaluate the model's performance by calculating the error ratio using training and test data splits. Employed a 80/20 training/testing strategy to validate the model's accuracy.</li>
                <li><strong>Generating Synthetic Data:</strong> Completed tasks to generate synthetic datasets using SyntheticRestaurant methods. Learned decision trees from these datasets while analyzing performance as training set sizes increased.</li>
                <li><strong>Pruning the Decision Tree:</strong> Implemented the pruning process to enhance the model's performance by removing nodes created from overfitting. Utilized statistical methods to evaluate the need for pruning based on the p-value.</li>
                <li><strong>Statistical Evaluation:</strong> Completed various statistical functions, including deviation and evaluate, to assess the tree's effectiveness and the necessity for pruning.</li>
            </ul>
            <p>This coursework provided hands-on experience in implementing and refining decision tree algorithms, enhancing skills in data analysis, model evaluation, and statistical techniques in machine learning.</p>
        `;
    } else if (projectId === "ai-psychological-treatments") {
        modalText.innerHTML = `
            <h2>Use of AI in Psychological Treatments</h2>
            <p>This project explores how Artificial Intelligence (AI) is increasingly being applied to psychological treatments, providing both opportunities and challenges. The paper focuses on key AI-based methodologies, particularly Virtual Reality Therapy and Internet-delivered Cognitive Behavioral Therapy (iCBT), as modern tools aiding psychological treatment.</p>
            <p>AI's integration in clinical psychology is already visible in several forms, such as self-help websites, AI-powered chatbots for mental health support, and Virtual Reality (VR)-based therapy for exposure treatments. Virtual Reality Therapy creates immersive, realistic experiences that allow patients to confront fears in controlled environments, making it especially useful for treating anxiety disorders, phobias, and PTSD. For example, a patient with a fear of heights can experience simulations of such scenarios to gradually reduce their fear through exposure. This method effectively bridges the gap between traditional therapy and the technological world.</p>
            <p>Another key innovation, Internet-delivered Cognitive Behavioral Therapy (iCBT), provides accessible, affordable, and high-fidelity treatment for patients with conditions like depression. This method eliminates geographical barriers and can reach a larger audience, offering personalized therapeutic experiences through AI algorithms.</p>
            <p>However, the application of AI in psychological treatments raises certain ethical and practical concerns. AI systems lack emotional intelligence and the therapeutic connection between a patient and therapist. Additionally, some AI applications risk prescribing incorrect treatment if not supervised, posing risks in situations that require human intuition and flexibility. The connection between patients and therapists, which is essential for trust and therapeutic success, may be diminished as patients rely on technology.</p>
            <p>Despite these risks, the paper concludes that AI will continue to play a pivotal role in enhancing psychological treatments. The evolving nature of AI technologies like virtual reality and AI-driven behavioral analysis will offer more opportunities for psychologists to treat patients more effectively. As AI continues to improve, it holds the potential to complement traditional therapeutic methods and make mental health care more accessible to wider populations.</p>
            <a href="files/AIinPsychologicalTreatements.pdf" download="AIinPsychologicalTreatements.pdf" class="download-btn">Download Project Report</a>
        `;
    } else if (projectId === "video-editing") {
        modalText.innerHTML = `
            <h2>Video Editing Application - User Interface Group Project</h2>
            <p>The Video Editing Application was a comprehensive group project developed in C++ with the aim of building a fully functional video editing tool that catered to a broad spectrum of users, from professional content creators to casual users. The project was focused on creating an intuitive and user-friendly interface while delivering advanced video editing features that allowed users to manipulate video clips, add effects, and manage timelines with ease.</p>
            <p>At the core of the application, the team implemented essential video editing functionalities, such as trimming, merging, and splitting video clips. These basic functions were designed with efficiency in mind, allowing users to quickly perform edits without excessive computational overhead. The app was also equipped with features like frame-by-frame navigation, which enabled precise editing, a critical requirement for professional users. One of the key focuses was ensuring that the tool was lightweight, fast, and capable of handling large video files without significant lag or performance degradation.</p>
            <p>As the project progressed, additional advanced features were incorporated, including the ability to apply filters, transition effects, and overlays to video clips. The team added support for text overlays, which allowed users to add captions, titles, and other textual elements, and the ability to adjust font styles, sizes, and colors for greater customization. Moreover, slow-motion and time-lapse effects were implemented, which significantly enhanced the creative potential of the application. These features were designed to appeal to influencers and casual users looking to create dynamic social media content.</p>
            <p>The user interface (UI) was a key component of the project, and the team worked diligently to ensure that it was both aesthetically pleasing and easy to navigate. The UI included a timeline-based editor that allowed users to drag and drop video clips, rearrange them, and apply effects in real time. The design of the UI was based on feedback from initial user testing, which emphasized the importance of simplicity for non-technical users while still offering powerful features for experienced editors. As a result, the team incorporated customizable layouts, allowing users to adjust the workspace to suit their editing style.</p>
            <p>One of the standout aspects of the project was the inclusion of accessibility features. The group prioritized inclusivity by designing the application to be accessible to users with visual or auditory impairments. For example, screen readers were supported for navigating the app’s interface, and video captions could be generated and added seamlessly, ensuring that the app could be used by a wide audience. Additionally, the app supported multiple audio tracks, allowing users to edit sound and video synchronously, which was especially important for creating polished final products.</p>
            <p>From a technical perspective, the project made extensive use of object-oriented programming (OOP) principles, which helped to modularize the different components of the video editor. This approach made it easier to integrate new features as the project evolved and allowed team members to work on different aspects of the application simultaneously without causing conflicts. The team used C++ libraries to handle video rendering and file management efficiently, ensuring that the application could process high-definition video files smoothly.</p>
            <p>Testing played a critical role in the development process. The team conducted several rounds of testing to ensure the application was stable and free from bugs. User feedback was gathered at multiple stages of the project, which helped guide improvements in both functionality and design. The final version of the application was thoroughly tested for performance, particularly with large video files, and it met the team’s benchmarks for speed and reliability.</p>
            <p>Overall, the Video Editing Application project was a successful demonstration of the team's ability to collaborate effectively and apply C++ programming skills to solve real-world problems. The project highlighted the team's capacity for developing a complex application that combined technical precision with user-focused design. By delivering an editing tool that was both powerful and accessible, the group demonstrated their commitment to creating software that meets the needs of diverse users, and their final product stands as a testament to their proficiency in software development and design.</p>
            <button onclick="window.location.href='https://github.com/AyeshaRahman2002/VideoEditingApplication';">View on GitHub</button>
            <a href="files/UserInterface.pdf" download="UserInterface.pdf" class="download-btn">Download Project Report</a>
        `;
    } else if (projectId === "sports-management") {
        modalText.innerHTML = `
            <h2>ports Management Web Application</h2>
            <p>In this group project, we developed a comprehensive Sports Management System designed to streamline the operations of a sports center using Python, Flask, and SQL for the backend, and HTML, CSS, and JavaScript for the frontend. The aim of the system was to create a user-friendly platform that could manage memberships, program registrations, event bookings, and general communication between the sports center and its users. This project was undertaken as part of our coursework, and I took on the role of leading the team in both the conceptualization and the technical implementation phases.</p>
            <p><strong>Key Features and Functionality:</strong></p>
            <ul>
                <li><strong>User Authentication and Profile Management:</strong> One of the core features of the system was the user authentication module, where users could sign up, log in, and manage their profiles. We used Flask-Login to handle user sessions securely, and all sensitive information such as passwords were encrypted using hashing algorithms for added security. The user profile management system allowed users to update their personal information, view their memberships, and manage their program registrations.</li>
                <li><strong>Program and Class Registration:</strong> A significant aspect of the system was the ability for users to browse and register for various sports programs and classes. The system displayed a dynamic list of available programs, complete with descriptions, schedules, and fees. Users could filter programs based on their interests and add them to their wishlist or directly to their cart for registration. I worked on the backend logic to ensure that when a user registered for a class, the system updated availability in real-time and handled any conflicts in scheduling.</li>
                <li><strong>Event Management and Notifications:</strong> In addition to program management, the system featured an event management module, where users could view upcoming events and register to attend them. The event calendar was dynamically updated based on inputs from the sports center administrators. The system sent automated email notifications to users for event reminders and changes. This feature was implemented using Flask-Mail, and I was responsible for setting up the email notification system that used SMTP to send confirmation emails and event reminders to the users.</li>
                <li><strong>Backend and Database Design:</strong> On the backend, we designed a relational database using SQLAlchemy, where all the user information, program details, event data, and bookings were stored. I played a significant role in designing the database schema, ensuring that it was optimized for performance and scalability. The database was structured to efficiently handle relationships between users, programs, and bookings, ensuring that users could easily access and modify their information without any delays. We also implemented various queries to fetch data in real-time for the frontend.</li>
                <li><strong>Admin Panel for Management:</strong> A separate admin dashboard was developed to allow sports center administrators to manage the entire system. This included adding or removing programs, updating event information, viewing user registrations, and managing accounts. I worked closely on the logic for admin privileges and developed the functionality that allowed the admin to view reports on program registrations and user participation over time. The admin panel also had the functionality to export data for offline records.</li>
                <li><strong>Frontend Development and UI/UX Design:</strong> The frontend of the system was built with a focus on providing a smooth and intuitive user experience. I contributed to the design and development of the HTML/CSS/JavaScript elements to ensure a responsive and interactive UI. We used Bootstrap to speed up the design process and ensure the system was fully responsive across different devices. The UI included features like a navbar, drop-down menus, and interactive cards for the programs and events. Additionally, users could view their registration history and manage their bookings in a visually appealing dashboard.</li>
                <li><strong>Booking and Payment Processing:</strong> Another essential feature was the booking and payment system. Users could add classes or events to their cart and proceed to checkout. I implemented a simulated payment processing system, which would handle the user’s payments through a secure gateway. The payment system was linked with the user’s profile, allowing them to view past payments and transactions.</li>
                <li><strong>Security Measures:</strong> Security was a high priority in this project. I worked on implementing secure routes for user authentication, ensured that the CSRF (Cross-Site Request Forgery) tokens were active to protect forms, and used input validation to prevent SQL injection and other vulnerabilities. Sensitive information, such as passwords, was hashed using bcrypt, and secure user sessions were managed using Flask-Login.</li>
                <li><strong>Testing and Deployment:</strong> After the development phase, we conducted extensive testing to ensure that the system was stable, secure, and free of bugs. This involved unit testing for the backend logic, especially for program registration and booking functionalities, as well as integration testing to ensure the frontend and backend systems worked together seamlessly. Finally, the system was deployed on a Heroku server, where it was accessible for demonstration and feedback.</li>
            </ul>
            <p><strong>Group Collaboration and Contribution:</strong></p>
            <p>This was a highly collaborative project where each member of the group contributed to different aspects of the system. I took a leadership role, managing tasks, ensuring timely completion, and making sure that everyone in the team was on track. My main contributions included the design and implementation of the backend architecture, database management, security features, and the Python logic for user authentication and class registrations. Throughout the project, I also facilitated communication between team members and played a crucial role in the successful delivery of the final product.</p>
            <p><strong>Project Outcome and Reflection:</strong></p>
            <p>The Sports Management System was well-received, and we successfully demonstrated the system’s capabilities, highlighting its practical applications for managing a sports center's operations. The project not only improved my technical skills in Python and Flask but also honed my ability to manage group projects effectively, particularly in a collaborative setting where multiple technologies and frameworks were in use.</p>
            <p>This project was a valuable learning experience, blending backend development, frontend design, and database management to create a fully functional and scalable system. It demonstrated the importance of security, user experience, and efficient data handling in building robust web applications.</p>
            <button onclick="window.location.href='https://github.com/AyeshaRahman2002/SportsManagementSystem';">View on GitHub</button>
        `;
    } else if (projectId === "hotel-proposal") {
        modalText.innerHTML = `
            <h2>Financial Modeling Hotel Price Data Scraping Tool</h2>
            <p>The "Hotel Price Data Scraping Tool" was one of the key projects I undertook during my internship at UTI Mutual Fund, aimed at streamlining and automating the collection of hotel room price data. The overarching goal was to assist the equity research team in gaining real-time and historical insights into hotel pricing trends, room availability, and overall market dynamics within the hospitality sector. By creating a Python-based web scraping tool, I not only enhanced the speed and accuracy of the data collection process but also improved the quality of the analysis by providing detailed and structured datasets that were crucial for making informed investment decisions in the hotel industry.</p>
            <p><strong>Project Objectives and Challenges:</strong></p>
            <p>The primary objective was to build an automated tool that could extract a wide array of data points from hotel booking websites such as Booking.com and Expedia. These data points included room types (standard, deluxe, suite), price per night, breakfast inclusion, refund policies, and the impact of different seasonal and event-driven price fluctuations. The tool needed to be flexible enough to allow users to select various filters, such as city, check-in and check-out dates, and room preferences, thus enabling the equity research team to perform customized analyses based on specific regions and timeframes.</p>
            <p>One of the key challenges was ensuring that the tool adhered to legal and ethical web scraping guidelines. While developing the scraper, I had to ensure that it followed the robots.txt files of the target websites and did not overload their servers with requests. To solve this, I implemented request throttling using the time module in Python to control the frequency of requests, ensuring responsible usage.</p>
            <p><strong>Technical Implementation:</strong></p>
            <p>The tool was developed using Python and leveraged several libraries that formed the backbone of the scraping and data processing mechanism. The primary libraries used were:</p>
            <ul>
                <li><strong>BeautifulSoup:</strong> For parsing HTML content and extracting the relevant data points such as room prices, room descriptions, and additional details like breakfast availability.</li>
                <li><strong>Selenium:</strong> As many hotel booking platforms dynamically load content using JavaScript, I employed Selenium to interact with the web pages and trigger necessary events like scrolling and clicking buttons to fully load the data. This was crucial for scraping platforms like Booking.com, where a simple HTML parser wouldn’t be sufficient.</li>
                <li><strong>Requests:</strong> This was used for sending HTTP requests to retrieve the HTML content when direct scraping was possible without needing JavaScript interaction.</li>
                <li><strong>Pandas:</strong> For structuring the scraped data into an organized DataFrame format, allowing for easy manipulation, filtering, and export into Excel or CSV files for further analysis by the team.</li>
                <li><strong>Matplotlib:</strong> To generate preliminary visualizations of the price trends, which were particularly helpful for quick presentations and reports.</li>
            </ul>
            <p><strong>Features and Workflow:</strong></p>
            <p>The scraping tool offered the following features:</p>
            <ul>
                <li><strong>Dynamic URL Handling:</strong> The tool was designed to allow users to input custom URLs based on the hotel and location of interest. It dynamically adjusted based on user-selected filters such as check-in/check-out dates, room types, and additional amenities like breakfast or parking.</li>
                <li><strong>Data Extraction:</strong> The tool extracted a comprehensive list of hotel room prices along with other relevant data such as room type, availability, cancellation policies, and any special deals or discounts. For each query, it returned the data in a structured format, including:</li>
                <ul>
                    <li><strong>Room Type:</strong> Standard, Deluxe, Suite, etc.</li>
                    <li><strong>Price per Night:</strong> Displayed with or without taxes, and optionally inclusive of any discounts.</li>
                    <li><strong>Occupancy Rate:</strong> Based on the availability of rooms for the given dates, the scraper could infer occupancy trends, which could be useful for further predictive modeling.</li>
                    <li><strong>Breakfast and Refund Options:</strong> Data on whether breakfast was included or if the booking was refundable, both of which impact the overall value proposition of a booking.</li>
                </ul>
                <li><strong>Automated Data Refresh:</strong> The tool had an option to automatically refresh data at user-defined intervals, making it possible to capture real-time fluctuations in room prices due to changes in demand, seasonality, or special events.</li>
                <li><strong>Error Handling and Logging:</strong> The tool implemented robust error handling mechanisms using try-except blocks to ensure that any failures in scraping (due to website changes, network issues, etc.) were logged in a dedicated log file. This helped to maintain continuous operation and allowed me to troubleshoot issues without interrupting the data collection process.</li>
                <li><strong>Throttling and Proxy Support:</strong> To avoid being flagged by websites for scraping too aggressively, I incorporated request throttling and randomized delays between successive requests. I also added proxy server support to distribute requests across multiple IP addresses, further reducing the likelihood of being blocked by the target websites.</li>
                <li><strong>Output and Visualization:</strong> Once the data was scraped, it was organized into a clean and structured format using Pandas DataFrames. The results were exported as Excel files, which made it easy for the equity research team to integrate the data into their existing financial models. Additionally, I incorporated basic data visualization using Matplotlib, allowing the team to instantly generate graphs showing price trends over time for specific hotels or room types.</li>
            </ul>
            <p><strong>Key Achievements and Contributions:</strong></p>
            <ul>
                <li><strong>Increased Efficiency:</strong> Prior to the development of the tool, data collection was a manual process that involved checking hotel websites individually, copying the data into spreadsheets, and analyzing it manually. The Python scraper reduced the time required for data collection by over 70%, enabling the team to focus on high-level analysis rather than data entry.</li>
                <li><strong>Customized Data for Financial Analysis:</strong> The data collected by the tool allowed the equity research team to identify pricing trends and seasonal patterns in the hotel industry, making it easier to predict future revenue streams for the companies they were analyzing. This data was particularly valuable when integrated with the team’s financial models for hotel industry stocks, improving the accuracy of their revenue forecasts.</li>
                <li><strong>Scalability:</strong> The flexible design of the tool made it easy to extend to other hotel booking websites beyond Booking.com. By simply adjusting the scraper's target URLs and modifying the HTML parsing rules, the tool could be adapted to gather data from other platforms like Expedia and Agoda, broadening the scope of data collection.</li>
                <li><strong>Presenting to Senior Management:</strong> The success of the tool culminated in a presentation to senior management at UTI, where I demonstrated how the tool worked, the types of data it collected, and its impact on the research team’s workflow. The presentation was well-received, and the tool was adopted as part of the team’s regular data collection processes.</li>
                <li><strong>Future Scope:</strong> One of the suggested next steps for the project was to enhance the predictive power of the tool by integrating the scraped data with machine learning models that could forecast future room prices based on historical data, economic indicators, and real-time events (such as holidays or conferences). This would further support the team’s efforts to make data-driven investment decisions.</li>
            </ul>
            <p><strong>Personal Growth:</strong></p>
            <p>This project was a defining moment in my internship as it allowed me to blend my computer science expertise with real-world finance applications. It honed my skills in Python, data scraping, and data visualization, while also giving me a deeper understanding of how data-driven tools can significantly impact financial research and decision-making. Furthermore, I gained invaluable experience working with a diverse team of analysts and presenting technical solutions to non-technical stakeholders.</p>
            <p>The "Hotel Price Data Scraping Tool" project exemplifies the intersection of finance and technology, demonstrating how modern computational tools can elevate traditional financial analysis methods. The ability to gather real-time data, analyze trends, and provide actionable insights had a tangible impact on UTI Mutual Fund’s approach to hotel industry investments, showcasing the value of automation and technology in finance.</p>
            <a href="files/ProjectProposal-Hotels.pdf" download="ProjectProposal-Hotels.pdf" class="download-btn">Download Project Proposal</a>
        `;
    } else if (projectId === "flight-proposal") {
        modalText.innerHTML = `
            <h2>Financial Modeling Flights Price Data Scraping Tool</h2>
            <p>This project, developed as part of my internship at UTI Mutual Fund, focused on the automation of flight data collection through web scraping using Python. The goal was to create a sophisticated tool capable of retrieving large datasets from Google Flights based on user-defined parameters such as travel dates, locations, and preferences. The tool provided crucial insights for analysts by streamlining the data acquisition process, replacing manual efforts with an automated solution that integrated seamlessly into the team's workflow.</p>
    
            <h3>Technical Aspects and Implementation:</h3>
            <ul>
                <li><strong>User Input and Interface:</strong> The system was designed with a user-friendly interface that allowed for input of multiple parameters, such as trip type, departure and arrival locations, dates, and flight preferences (non-stop flights only).</li>
                <li><strong>Web Scraping Engine:</strong> Utilized Playwright for browser automation and LexborHTMLParser for large-scale HTML parsing to scrape flight data, including real-time prices, schedules, flight numbers, and layover durations.</li>
                <li><strong>Advanced Data Processing:</strong> After scraping the data, it was cleaned and structured using Pandas, ensuring each row represented a distinct flight with columns for price, airline, and more, ready for export into Excel or CSV formats for further analysis.</li>
                <li><strong>Error Handling and Data Validation:</strong> Implemented robust error-handling mechanisms to manage network issues, changes in Google Flights HTML structure, and data validation checks for accuracy and consistency.</li>
                <li><strong>Scalability and Performance Optimization:</strong> Asynchronous programming was used to handle multiple scraping sessions concurrently, optimizing the tool for both short-term and long-term travel plans.</li>
                <li><strong>Ethical Scraping and Compliance:</strong> Adhered to Google Flights’ terms of service by limiting scraping to publicly available data, avoiding excessive requests, and respecting the platform's data protection policies.</li>
                <li><strong>Data Storage and Visualization:</strong> Stored scraped data in a SQLite database, allowing easy querying and visualization using Matplotlib and Seaborn to analyze flight price trends over time.</li>
            </ul>
    
            <h3>Predictive Insights and Future Enhancements:</h3>
            <p>The flight data collected by this tool could be integrated into market analysis models to inform investment strategies in the travel and tourism sectors. By analyzing flight pricing trends, occupancy rates, and travel patterns, the tool supported predictive modeling for future market behavior. Future enhancements could include adding machine learning algorithms to predict flight price trends, expanding the tool to scrape hotel booking data, and integrating APIs for real-time flight tracking.</p>
    
            <h3>Achievements and Impact:</h3>
            <ul>
                <li><strong>Increased Efficiency:</strong> Manual data collection efforts were reduced by over 60%, enabling analysts to focus on high-level financial analysis and decision-making.</li>
                <li><strong>Predictive Insights:</strong> The data collected was used for predictive modeling in hospitality and airline sectors, providing UTI Mutual Fund with a competitive edge in identifying investment opportunities.</li>
                <li><strong>Scalability:</strong> The tool’s design allowed it to be extended to multiple platforms like Expedia and Agoda, making it highly adaptable for various data collection needs.</li>
                <li><strong>Impact on Team Workflow:</strong> The project improved the workflow of the equity research team by integrating real-time data collection into their analysis models, leading to more accurate investment strategies.</li>
            </ul>
    
            <p>This project demonstrated advanced web scraping techniques and their application in finance, while showcasing the potential of integrating data science into financial workflows. It provided invaluable insights into travel-related investments, significantly impacting the equity research team’s analysis capabilities.</p>
    
            <a href="files/ProjectProposal-Flights.pdf" download="ProjectProposal-Flights.pdf" class="download-btn">Download Project Proposal</a>
        `;
    } else if (projectId === "greenmycloud") {
        modalText.innerHTML = `
            <h2>GreenMyCloud: A Sustainable Cloud Computing Initiative</h2>
            <p>GreenMyCloud is a project designed to address the rising environmental concerns associated with cloud computing and data centers. As cloud usage continues to grow exponentially, so does the energy demand and carbon footprint associated with maintaining large-scale data centers. The primary goal of GreenMyCloud is to implement sustainable practices in cloud infrastructure to reduce its overall environmental impact.</p>
            <p><strong>Problem Statement:</strong> Cloud computing, while enabling innovation and scalability for businesses, poses significant environmental challenges. Data centers, which house vast amounts of servers and networking equipment, consume substantial amounts of electricity. A large portion of this electricity comes from non-renewable energy sources, leading to increased carbon emissions. Additionally, data centers require cooling systems to maintain optimal server temperatures, further contributing to energy consumption.</p>
            <p>The industry faces a critical challenge: how can we sustain the benefits of cloud technology while mitigating its environmental impact? The GreenMyCloud project is a response to this challenge, seeking to introduce green energy practices and optimize data center operations to make cloud computing more sustainable.</p>
            <p><strong>Objectives:</strong> GreenMyCloud is focused on achieving several core objectives:</p>
            <ul>
                <li>Reducing Energy Consumption: Optimizing the energy efficiency of data centers through the use of better hardware, more efficient cooling systems, and advanced software that can manage server loads more effectively.</li>
                <li>Transitioning to Renewable Energy Sources: Promoting the adoption of renewable energy, such as solar, wind, or hydroelectric power, to meet the energy needs of cloud service providers.</li>
                <li>Implementing Carbon Offset Strategies: Encouraging cloud providers to invest in carbon offset projects, such as reforestation or renewable energy credits, to neutralize their carbon emissions.</li>
                <li>Developing Eco-Friendly Cloud Services: Offering users eco-friendly options, such as "green" cloud plans that are powered exclusively by renewable energy sources.</li>
            </ul>
            <p><strong>Key Components of GreenMyCloud:</strong></p>
            <ul>
                <li><strong>Energy-Efficient Data Centers:</strong> GreenMyCloud encourages the use of energy-efficient hardware and smart cooling systems that can reduce energy consumption. This includes the development of intelligent management software that can allocate server resources based on demand, ensuring that idle servers are powered down or put into low-power states. Additionally, server load balancing helps distribute the computing demand evenly, reducing the need for extra servers and thus saving energy.</li>
                <li><strong>Renewable Energy Integration:</strong> One of the project's primary goals is to ensure that cloud providers make a gradual shift from traditional energy sources to renewable ones. This involves working with energy providers to facilitate the deployment of solar panels and wind turbines on data center campuses, thereby reducing dependence on fossil fuels.</li>
                <li><strong>Carbon Footprint Monitoring:</strong> GreenMyCloud also introduces monitoring tools that track the carbon footprint of cloud services in real-time. This transparency allows users and businesses to make informed decisions about the environmental impact of their cloud usage. By providing detailed reports on energy consumption, carbon emissions, and sustainability efforts, GreenMyCloud helps users take responsibility for their digital actions.</li>
                <li><strong>Carbon Offsetting Initiatives:</strong> To compensate for unavoidable emissions, GreenMyCloud partners with carbon offset programs. This ensures that cloud providers can neutralize their environmental impact by investing in projects like reforestation, carbon capture technologies, and renewable energy farms.</li>
                <li><strong>Green Cloud Packages:</strong> GreenMyCloud offers eco-conscious businesses the option to choose "green" cloud packages, which guarantee that the cloud services they use are powered entirely by renewable energy. These packages are marketed toward businesses that prioritize sustainability as part of their corporate social responsibility efforts.</li>
                <li><strong>Data Center Cooling Innovations:</strong> Since cooling accounts for a significant portion of data center energy usage, GreenMyCloud focuses on innovating new cooling techniques, such as liquid cooling, which uses less energy than traditional air-based cooling systems. Other methods include the use of natural cooling, where data centers are located in colder regions to reduce the need for artificial cooling systems.</li>
                <li><strong>Edge Computing:</strong> Edge computing is another solution promoted by GreenMyCloud. By processing data closer to the source, edge computing reduces the energy required to transmit large amounts of data across long distances to centralized data centers. This approach not only saves energy but also improves latency and reduces bandwidth usage.</li>
            </ul>
            <p><strong>Implementation Strategy:</strong> GreenMyCloud's implementation is based on a multi-phase strategy designed to gradually introduce sustainability measures across cloud infrastructure:</p>
            <ul>
                <li><strong>Phase 1: Pilot Projects:</strong> GreenMyCloud starts with pilot projects that assess the viability of using renewable energy and energy-efficient practices in small-scale data centers. The results of these pilots guide further action.</li>
                <li><strong>Phase 2: Industry Collaboration:</strong> GreenMyCloud collaborates with leading cloud providers like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud to adopt greener practices. This phase involves sharing research and best practices to encourage industry-wide change.</li>
                <li><strong>Phase 3: Public Awareness and Incentives:</strong> GreenMyCloud launches an awareness campaign to promote the importance of sustainable cloud computing. Incentives, such as tax breaks or subsidies, are introduced for companies that transition to green cloud services.</li>
                <li><strong>Phase 4: Full-Scale Rollout:</strong> GreenMyCloud is scaled to large data centers, with full integration of renewable energy sources, advanced cooling technologies, and edge computing.</li>
            </ul>
            <p><strong>Challenges and Future Outlook:</strong> While GreenMyCloud aims to revolutionize cloud sustainability, there are several challenges to be addressed. These include the high cost of renewable energy infrastructure, the technical limitations of current energy storage solutions, and the need for more robust cooling innovations. However, the future of GreenMyCloud looks promising as more businesses and consumers demand sustainable solutions.</p>
            <p><strong>Conclusion:</strong> GreenMyCloud represents a forward-thinking initiative that addresses the environmental challenges posed by cloud computing. By focusing on energy efficiency, renewable energy integration, carbon footprint monitoring, and innovative cooling solutions, the project sets the stage for a future where cloud services and sustainability can coexist. As the cloud computing industry continues to expand, initiatives like GreenMyCloud are crucial in ensuring that technological progress does not come at the cost of the environment.</p>
            <a href="files/GreenMyCloud.pdf" download="GreenMyCloud.pdf" class="download-btn">Download GreenMyCloud Project Report</a>
        `;
    } else if (projectId === "AarogyaSetu-vs-COVIDSafe") {
        modalText.innerHTML = `
            <h2>Aarogya Setu vs. COVIDSafe Project Analysis</h2>
            <p>The project titled "Aarogya Setu vs COVIDSafe" provides an in-depth comparative analysis of two government-endorsed contact tracing applications developed in response to the COVID-19 pandemic: Aarogya Setu from India and COVIDSafe from Australia. Both applications were launched in April 2020 with the aim of mitigating the spread of the virus by identifying, alerting, and guiding users who had come into contact with an infected person, primarily through the use of Bluetooth technology. However, Aarogya Setu also utilized GPS tracking, which introduced additional functionality and raised more privacy concerns than its Australian counterpart.</p>
            
            <p><strong>Key Features of Aarogya Setu and COVIDSafe:</strong> Aarogya Setu combines Bluetooth and GPS tracking to detect the proximity of users to each other and logs interactions between users. It provides real-time information regarding the COVID-19 status in the vicinity, tracks health status, and offers updates on vaccination slots, symptom checkers, and risk assessments. The app also acted as a self-assessment tool and became compulsory for millions of Indians, as it was required for travel, access to public places, and certain work environments.</p>
    
            <p>COVIDSafe relies solely on Bluetooth proximity data to track close contacts. The app logs encrypted data about user interactions and requires manual verification if a user tests positive. COVIDSafe was voluntary and aimed to protect user privacy by not using location tracking (no GPS). It provided notifications to users if they had come in contact with an infected person within the past 21 days. However, the app faced challenges in gaining widespread adoption, resulting in limitations in its effectiveness.</p>
    
            <p><strong>Technical Comparison:</strong> The project examines the technical implementation of both apps, noting the trade-offs between privacy and functionality. Aarogya Setu’s GPS tracking allowed for more detailed data on user movement and regional hotspots, giving users and government authorities a more comprehensive view of the pandemic’s spread. However, this raised serious privacy concerns due to the app’s broad access to personal data, particularly as it was mandatory in many circumstances.</p>
    
            <p>COVIDSafe, on the other hand, opted for a privacy-first approach by excluding location data and solely using Bluetooth for proximity detection. While this was a positive step in ensuring user privacy, the lack of GPS data limited its ability to provide real-time localized data, and the app's voluntary nature meant it struggled to reach a critical mass of users required for effective contact tracing.</p>
    
            <p><strong>Privacy Concerns:</strong> Aarogya Setu’s mandatory nature, combined with the use of GPS tracking, stirred debates about data privacy, security, and potential misuse of personal information. While the app provided detailed infection mapping and robust tracking, it was criticized for not being open-source during the initial phases, limiting transparency.</p>
    
            <p>COVIDSafe, by design, was more focused on user privacy, encrypting data, and using decentralized storage. It adopted a voluntary opt-in model that respected individual choice, but this approach, combined with a lower adoption rate, significantly reduced its efficacy in tracking COVID-19 infections and controlling the pandemic spread.</p>
    
            <p><strong>Adoption and Efficacy:</strong> Aarogya Setu had a significantly higher adoption rate, partly because of its mandatory usage policy in public spaces, workplaces, and for travel in India. However, this raised ethical concerns about forcing a population to use technology that collected sensitive personal information.</p>
    
            <p>Conversely, COVIDSafe faced several challenges in achieving widespread adoption due to its voluntary nature. Australia’s decentralized health system, combined with privacy-first policies, meant that many citizens were reluctant to install the app. Technical issues, like Bluetooth connectivity failures and battery drainage, also contributed to the app's limited success. Moreover, its dependency on manual input from health officials and users slowed down its ability to quickly identify and isolate cases.</p>
    
            <p><strong>Limitations and Future Outlook:</strong> Both apps had significant limitations in ensuring optimal performance. Aarogya Setu’s GPS reliance made it more resource-heavy and prone to privacy breaches, which could dissuade user trust. Meanwhile, COVIDSafe’s reliance on voluntary adoption and Bluetooth-only tracking rendered it less effective in identifying close contacts in a timely manner, especially in cases where individuals failed to manually report symptoms or test results.</p>
    
            <p>The project concludes by highlighting potential improvements that could be made to both applications. It suggests that future iterations of such apps should focus on balancing privacy with functionality, possibly by adopting a decentralized model that gives users more control over their data, while still allowing health authorities to monitor outbreaks effectively.</p>
    
            <p>In the end, the project demonstrates how Aarogya Setu and COVIDSafe represented two distinct approaches to public health technology—one prioritizing comprehensive data collection and compulsory usage, and the other emphasizing privacy and voluntary participation. Both approaches had their merits and challenges, but neither emerged as a definitive solution to pandemic management through digital contact tracing.</p>
        `;
    } else if (projectId === "Lyft-System-Design") {
        modalText.innerHTML = `
            <h2>Lyft System Design Forage Project</h2>
            <p>The Lyft System Design project is a comprehensive software system that simulates the functionality of car manufacturing and maintenance. This project applies object-oriented programming principles and modular design to create a flexible and scalable system that can handle different car models with varying components such as engines, batteries, and tires. Each stage of the project builds on the previous one, adding more complexity and features to create a complete simulation of car serviceability.</p>
            
            <h3>Key Components</h3>
            <p>The main components of the system include engines, batteries, and tires, which are assembled to form different car models. Each component has its own service criteria, making the system highly modular and extensible.</p>
            <ul>
                <li><strong>Engines:</strong> Capulet, Willoughby, and Sternman Engines.</li>
                <li><strong>Batteries:</strong> Spindler and Nubbin Batteries.</li>
                <li><strong>Tires:</strong> Carrigan and Octoprime Tires (added in Stage 4).</li>
            </ul>

            <h3>System Architecture</h3>
            <p>The system follows an object-oriented design with a clear separation of concerns between components. Here's how the system is structured:</p>
            <ul>
                <li><strong>Car Factory:</strong> The factory pattern is used to create different car models. The CarFactory class is responsible for assembling cars by combining engines, batteries, and tires based on the model.</li>
                <li><strong>Car Class:</strong> This is the core of the system that integrates various components—engine, battery, and tires—and determines when the car needs servicing.</li>
                <li><strong>Serviceable Interface:</strong> Ensures that each component implements the <code>needs_service()</code> method, which determines if the component needs maintenance.</li>
            </ul>

            <h3>Stage 4 Enhancements</h3>
            <ul>
                <li><strong>Tires:</strong> Two types of tires (Carrigan and Octoprime) were introduced in Stage 4 to expand the car model's serviceability.</li>
                <li><strong>Expanded Testing:</strong> Unit tests were significantly expanded to cover all the components (engines, batteries, and tires) ensuring accurate serviceability checks.</li>
            </ul>

            <h3>Project Structure</h3>
            <pre>
            .
            ├── car_factory.py        # Factory for creating car models
            ├── car.py                # Car class that integrates engine, battery, and tires
            ├── engine/               # Different engine classes (Capulet, Sternman, Willoughby)
            ├── battery/              # Battery classes (Spindler, Nubbin)
            ├── tires/                # Tire classes (Carrigan, Octoprime)
            ├── test/                 # Unit tests for engines, batteries, and tires
            └── serviceable.py        # Serviceable interface for components
            </pre>

            <h3>How It Works</h3>
            <p>The <strong>CarFactory</strong> class is the entry point for creating cars. Depending on the model, it assembles a car with different combinations of engines, batteries, and tires. The car's <code>needs_service()</code> method checks whether any component requires servicing based on its specific conditions.</p>

            <h3>Key Features</h3>
            <ul>
                <li><strong>Modularity:</strong> Each component (engine, battery, tire) can be independently swapped or modified, making the system highly extensible.</li>
                <li><strong>Factory Design Pattern:</strong> Simplifies the creation of different car models and ensures that components are correctly assembled.</li>
                <li><strong>Unit Testing:</strong> The project includes comprehensive unit tests that cover every component, ensuring that the system behaves as expected.</li>
            </ul>

            <h3>Testing</h3>
            <p>The project includes extensive unit testing to verify that each component of the car works correctly. These tests ensure that:</p>
            <ul>
                <li>Engines, batteries, and tires are correctly serviced based on their respective conditions.</li>
                <li>The car's overall service status is accurate, based on the service status of its individual components.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>The Lyft System Design project is a comprehensive, modular, and well-structured simulation of a car manufacturing and servicing system. Each stage builds on the previous one, adding new components and expanding the system’s capabilities. The final stage (Stage 4) introduces tire components and further enhances the system’s testing, making it a robust and extensible solution for simulating car serviceability.</p>

            <p>This project demonstrates a strong understanding of object-oriented design, modularity, and software testing, making it a valuable asset for any portfolio.</p>

            <a href="https://github.com/AyeshaRahman2002/lyft" class="download-btn">View on GitHub</a>
        `;
    } else if (projectId === "olympic-medal-analysis") {
        modalText.innerHTML = `
            <h2>Olympic Medal Analysis Using Data Visualizations</h2>
            <p>The Olympic Medal Analysis project focuses on examining historical Olympic medal data from 1896 to 2020. The project’s primary objective was to analyze medal distributions across countries and over time using a combination of visual techniques and data analysis methodologies. The goal was to evaluate the effectiveness of different visualization techniques in communicating complex historical data and trends.</p>
    
            <p><strong>Project Objectives:</strong></p>
            <ul>
                <li>To analyze Olympic medal counts from 1896 to 2020, highlighting trends and patterns across countries.</li>
                <li>To evaluate how visual representations (line charts, bar charts, and area charts) improve data comprehension and user engagement.</li>
                <li>To test participant understanding of Olympic medal trends using various interactive visualizations.</li>
            </ul>
    
            <p><strong>Technical Approach:</strong></p>
            <p>The analysis was performed using Python's Flask framework for backend development, while Matplotlib was used to generate dynamic visualizations. These visualizations provided clear insights into medal distributions and how certain countries performed across different eras of Olympic history. The project relied on a combination of line graphs, bar charts, and area charts to depict changes over time.</p>
    
            <p>The system allowed users to interact with the data, select specific countries, and view their respective medal counts across different years. The backend handled requests for customized visualizations, and the system dynamically generated charts based on user inputs.</p>
    
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Historical medal analysis across multiple Olympic Games from 1896 to 2020.</li>
                <li>Use of data visualizations to compare countries' performances over time, with filters for specific sports or events.</li>
                <li>Evaluation of different visualization techniques to present complex data effectively.</li>
            </ul>
    
            <p><strong>Challenges and Learnings:</strong></p>
            <p>The project’s major challenge was ensuring that the visualizations communicated complex historical data clearly and concisely. While developing the analysis, we explored various methods to handle data anomalies and incomplete datasets. This project helped enhance my understanding of data visualization techniques and reinforced the importance of clear, interpretable visuals in conveying complex information effectively.</p>
    
            <p><strong>Outcome:</strong></p>
            <p>The analysis provided valuable insights into the evolution of Olympic medal distributions, particularly noting which countries consistently performed well. Furthermore, the interactive visualizations were highly effective in helping participants understand data trends. The project concluded that dynamic, interactive visualizations could significantly improve users' comprehension of historical datasets, particularly for non-expert audiences.</p>
    
            <a href="files/Cw2_Info_Vis_Group40.pdf" download="Cw2_Info_Vis_Group40.pdf" class="download-btn">Download Project Report</a>
            <button onclick="window.location.href='https://github.com/AyeshaRahman2002/InfoVis-MedalAnalysis';">View on GitHub</button>
        `;
    } else if (projectId === "2d-rendering") {
        modalText.innerHTML = `
            <h2>2D Rendering Application - Computer Graphics</h2>
            <p>This project focuses on the development of a 2D rendering application that highlights key concepts in computer graphics, specifically in the area of geometric shape rendering and transformations. The main objectives of the project were to render 2D objects using line-drawing algorithms, implement transformations (such as scaling, rotation, and translation), and fill shapes with color using advanced rasterization techniques.</p>
    
            <h3>Line Drawing Algorithms</h3>
            <p>The project implements fundamental line-drawing algorithms such as Bresenham's Line Algorithm and the Digital Differential Analyzer (DDA) algorithm. These algorithms ensure efficient and accurate rendering of lines on a pixel grid. Bresenham's algorithm, in particular, was chosen for its speed and precision, minimizing the use of floating-point operations. This ensures that lines drawn on the screen appear smooth and continuous, even for large or steep line segments. The DDA algorithm was also used to compare the performance and visual outcomes of different approaches to line rendering.</p>
    
            <h3>Geometric Transformations</h3>
            <p>To manipulate 2D objects dynamically, the project implemented basic geometric transformations, including translation, scaling, and rotation. These operations were applied using matrix multiplication techniques. The transformations allow users to interact with the shapes by changing their position, size, and orientation in the 2D space. The project explored both uniform and non-uniform scaling, ensuring that objects maintain their aspect ratio when desired or stretch dynamically based on input.</p>
    
            <h3>Shape Filling and Rasterization</h3>
            <p>In addition to drawing shapes, the application employs scanline algorithms for filling polygons and other geometric forms. The scanline algorithm was used to fill shapes with solid or interpolated colors, depending on the desired effect. By interpolating color values across the surface of the shape, the application can produce visually appealing gradients, giving depth to the 2D objects. The project carefully handles edge cases, such as concave polygons and self-intersecting shapes, ensuring that the rasterization is robust and accurate.</p>
    
            <h3>Polygon Clipping and Windowing</h3>
            <p>The project also includes polygon clipping, where objects that extend beyond a defined viewing window are truncated to fit within the visible area. The Sutherland-Hodgman algorithm was used to efficiently clip polygons against a rectangular clipping boundary. This feature is particularly useful for creating complex scenes where not all objects are fully visible within the viewport.</p>
    
            <h3>User Interaction and Controls</h3>
            <p>The application provides an interactive interface, allowing users to manipulate the 2D shapes in real-time. Users can input translation vectors, scaling factors, and rotation angles to see the immediate effect of these transformations on the rendered objects. Additionally, the application supports mouse-based selection and transformation, enhancing the usability and interactivity of the tool.</p>
    
            <h3>Anti-Aliasing and Smoothing</h3>
            <p>To improve the visual quality of the rendered shapes, the project incorporates basic anti-aliasing techniques. By smoothing jagged edges on diagonal or curved lines, the application produces more aesthetically pleasing images. The anti-aliasing algorithm works by blending the colors of edge pixels with their neighbors, reducing the stark contrast that typically causes aliasing artifacts.</p>
    
            <h3>Performance and Optimization</h3>
            <p>Performance was a key consideration throughout the development process. The project optimized the line-drawing and filling algorithms to minimize computational overhead, ensuring that even complex scenes with multiple objects and transformations could be rendered in real-time. Additionally, the application efficiently manages memory usage by dynamically allocating space for pixel buffers only when necessary, reducing the overall resource footprint.</p>
    
            <h3>Testing and Validation</h3>
            <p>Extensive testing was conducted to validate the accuracy of the rendering algorithms. The application was tested on a variety of shapes and transformations, including regular polygons, concave shapes, and complex overlapping objects. Special attention was given to ensuring that transformations such as rotation preserved the integrity of the shapes, even when applied repeatedly.</p>
    
            <h3>Future Improvements</h3>
            <p>While the project successfully implements the core features of 2D rendering, there are several areas for future improvement. Potential enhancements include adding support for advanced shading techniques, integrating additional anti-aliasing algorithms, and expanding the transformation capabilities to include shear and reflection operations. Additionally, the application could be extended to support more complex user interactions, such as dragging and resizing objects directly on the canvas.</p>
    
            <p>This project demonstrates a solid understanding of fundamental computer graphics concepts, from line drawing and shape rendering to geometric transformations and rasterization. The efficient implementation of these techniques allows the application to handle real-time rendering of complex 2D scenes with minimal computational overhead.</p>
    
            <a href="files/RenderingProjectReport.pdf" download="RenderingProjectReport.pdf" class="download-btn">Download Project Report</a>
            <button onclick="window.location.href='https://github.com/AyeshaRahman2002/ComputerGraphics-2d-Rendering';">View on GitHub</button>
        `;
    } else if (projectId === "ml-coursework") {
        modalText.innerHTML = `
            <h2>Machine Learning Coursework - Predictive Modeling for Data Analysis</h2>
            <p>This project, undertaken as part of my COMP3611 coursework, involved applying machine learning techniques to predict outcomes from provided training data. The core objective was to build a predictive model that could accurately classify data from a structured dataset while handling both clean and corrupted data formats.</p>
            
            <p><strong>Data Preprocessing:</strong> The project began with data cleaning and preprocessing steps. I handled the corrupted data file <code>corrupted_data.npy</code>, which involved identifying and managing missing or inconsistent data. Using Python libraries such as NumPy and Pandas, I cleaned the dataset to prepare it for effective model training.</p>
            
            <p><strong>Feature Extraction and Engineering:</strong> Once the data was cleaned, feature engineering techniques were applied to extract important variables from the dataset. These features helped to improve model accuracy by selecting the most relevant information for predictions.</p>
            
            <p><strong>Model Training:</strong> Various machine learning algorithms were employed for classification, including decision trees, support vector machines (SVM), and random forests. The models were trained using the cleaned dataset from <code>Training_data.csv</code>, with corresponding target values from <code>Training_data_targets.csv</code>. Each model's performance was evaluated using accuracy, precision, recall, and F1 scores to identify the most effective algorithm for the given task.</p>
            
            <p><strong>Handling Corrupted Data:</strong> A unique aspect of this project was dealing with corrupted data files. I developed strategies to reconstruct lost data points from the <code>corrupted_data.npy</code> file and re-trained the model with this modified data to test how well it could generalize despite missing information.</p>
            
            <p><strong>Model Evaluation and Tuning:</strong> After initial model training, hyperparameter tuning was conducted to optimize performance. Cross-validation techniques were employed to ensure that the model would generalize well on unseen data. The best-performing model achieved a high accuracy score on the clean dataset, showcasing robust predictive capabilities.</p>
            
            <p>This coursework demonstrated my ability to apply machine learning techniques to solve real-world problems. It involved hands-on experience in data cleaning, feature engineering, model training, and evaluation. The final model was able to provide valuable predictions despite the challenges presented by the corrupted data.</p>
            
            <a href="files/COMP3611_Assessment.ipynb" download="COMP3611_Assessment.ipynb" class="download-btn">Download Project Report</a>
            <button onclick="window.location.href='https://github.com/AyeshaRahman2002/ML-CW1';">View on GitHub</button>
        `;
    }  else if (projectId === "logical-representation") {
        modalText.innerHTML = `
            <h2>Logical Representation and Proof Using Prover9</h2>
            <p>This project was part of the COMP5450M module on Knowledge Representation and Reasoning. It involved encoding reasoning problems into propositional and first-order logic (FOL) and validating them using the Prover9 automated theorem prover.</p>
            
            <p><strong>The Commuter Problem:</strong> This scenario focused on travel modes and weather conditions. The logical encoding captured relationships such as:
            - "Rain implies no skateboarding."
            - "Being outside in the rain without a helmet leads to wet hair."
            The objective was to prove that a person would be splashed by cars unless traveling by taxi.</p>
            
            <p><strong>Sunny Farm Problem:</strong> This problem required detailed FOL representations of a farm with animals like lambs and weasels. Key aspects included:
            - "No carnivores live at Sunny Farm."
            - "Lambs are animals that do not eat other animals."
            - "Every gentle animal helps every other gentle animal."
            The goal was to demonstrate the presence of a contented lamb at the farm through logical deductions.</p>
            
            <p><strong>Key Skills Demonstrated:</strong></p>
            <ul>
                <li>Translation of English statements into logical formulae.</li>
                <li>Use of propositional and first-order logic for formal reasoning.</li>
                <li>Automated theorem proving with Prover9 to verify logical consistency and derive proofs.</li>
            </ul>
            
            <p>This project enhanced my understanding of formal logic, reasoning, and theorem proving, which are critical in AI and computational logic. The work showcased the ability to model complex real-world scenarios using formal representations and validate them using computational tools.</p>
        `;
    } else if (projectId === "logical-kb-project") {
        modalText.innerHTML = `
            <h2>Knowledge Base and Logical Reasoning System</h2>
            <p>This project, part of the COMP5450M module on Knowledge Representation and Reasoning, involved creating a Prolog-based Knowledge Base (KB) and reasoning system. The KB was structured to encode and infer complex relationships within defined domains, such as animals, habitats, governance, and conservation, using logical rules and inference mechanisms.</p>
            
            <p><strong>River Crossing Problem:</strong> This scenario focused on modeling the classic problem where a farmer must transport a wolf, a goat, and a cabbage across a river. Logical encoding captured constraints and actions like:
            - "The wolf cannot be left alone with the goat."
            - "The goat cannot be left alone with the cabbage."
            The objective was to encode all constraints and infer a sequence of safe actions to complete the crossing.</p>
            
            <p><strong>Zookeeper's Knowledge Base:</strong> This scenario modeled relationships in a zoo environment involving predators, prey, zookeepers, and conservation authorities. Key aspects included:
            - "Predators must be relocated if they threaten prey in the same zoo."
            - "Zookeepers must alert authorities about risks to prey."
            - "Conservation plans must be initiated for at-risk prey."
            The goal was to infer emergency measures, resource allocations, and safety evaluations based on the KB's logical rules.</p>
            
            <p><strong>Key Skills Demonstrated:</strong></p>
            <ul>
                <li>Encoding complex real-world scenarios into a structured Knowledge Base using Prolog.</li>
                <li>Designing and implementing logical inference mechanisms with multi-depth reasoning.</li>
                <li>Utilizing logical operators, predicates, and negation for automated reasoning and consistency checks.</li>
            </ul>
            
            <p>This project deepened my understanding of knowledge representation, logical reasoning, and automated inference systems. It highlighted the power of logic-based frameworks in solving structured reasoning problems and modeling real-world domains.</p>
        `;
    } else if (projectId === "data-science-cw") {
        modalText.innerHTML = `
            <h2>Advanced Predictive Modeling in Data Science</h2>
            <p>This coursework focused on developing predictive models using advanced machine learning techniques to analyze large-scale structured datasets. The project required preprocessing raw data, handling corrupted files, and building robust machine learning models to extract meaningful insights.</p>
    
            <h3>Project Breakdown:</h3>
            <ul>
                <li><strong>Data Preprocessing:</strong> Cleaned and structured datasets by handling missing values, normalizing data, and performing feature engineering to optimize input variables.</li>
                <li><strong>Corrupted Data Handling:</strong> Developed robust strategies to deal with missing or inconsistent data from the provided corrupted_data.npy file.</li>
                <li><strong>Machine Learning Model Development:</strong> Implemented various models, including Random Forest, Decision Trees, and Support Vector Machines (SVM), evaluating performance using accuracy, precision, recall, and F1-score.</li>
                <li><strong>Hyperparameter Optimization:</strong> Fine-tuned models using cross-validation techniques to enhance prediction accuracy and minimize overfitting.</li>
                <li><strong>Final Model Evaluation:</strong> Compared multiple models to select the best-performing one for deployment.</li>
            </ul>
    
            <p>The project provided hands-on experience in handling real-world datasets and building predictive systems using Python libraries such as NumPy, Pandas, Scikit-learn, and Matplotlib.</p>
    
            <a href="files/DataScienceCoursework.pdf" download="DataScienceCoursework.pdf" class="download-btn">Download Project Report</a>
            <button onclick="window.location.href='https://github.com/AyeshaRahman2002/DataScienceProject';">View on GitHub</button>
        `;
    } else if (projectId === "krr-assignment1") {
        modalText.innerHTML = `
            <h2>Logical Representation & Theorem Proving</h2>
            <p>This project, completed as part of my Knowledge Representation and Reasoning module, involved encoding real-world problems into propositional and first-order logic and proving statements using the Prover9 theorem prover.</p>
    
            <h3>Project Highlights:</h3>
            <ul>
                <li><strong>Formalizing Logical Statements:</strong> Translated natural language problems into propositional and first-order logic.</li>
                <li><strong>Using Prover9 for Automated Theorem Proving:</strong> Validated logical consistency and derived conclusions using formal reasoning techniques.</li>
                <li><strong>Scenario-Based Reasoning:</strong> Applied logical reasoning to real-world problems, such as a commuting scenario where different travel methods affect outcomes.</li>
                <li><strong>Inference and Justification:</strong> Demonstrated proofs for logical assertions and tested various logical constraints.</li>
            </ul>
    
            <p>The project provided deep insights into formal logic, automated reasoning, and the application of theorem proving in artificial intelligence.</p>
    
            <a href="files/KRR_Assignment1.pdf" download="KRR_Assignment1.pdf" class="download-btn">Download Assignment Report</a>
        `;
    } else if (projectId === "krr-assignment2") {
        modalText.innerHTML = `
            <h2>Knowledge Base & Automated Logical Reasoning</h2>
            <p>This project involved developing a structured knowledge base (KB) in Prolog to model logical relationships and infer solutions through automated reasoning.</p>
    
            <h3>Key Features:</h3>
            <ul>
                <li><strong>Encoding Knowledge in Prolog:</strong> Designed a structured knowledge base for real-world reasoning problems.</li>
                <li><strong>Inference and Logical Queries:</strong> Implemented logical inference mechanisms to answer complex queries.</li>
                <li><strong>Reasoning Scenarios:</strong> Modeled knowledge domains, such as habitat classification, conservation decisions, and food chain analysis.</li>
                <li><strong>Testing Logical Consistency:</strong> Used Prolog's backward chaining to verify reasoning paths and validate the correctness of logical assertions.</li>
            </ul>
    
            <p>The project demonstrated practical applications of logic-based AI techniques in automated reasoning systems.</p>
    
            <a href="files/KRR_Assignment2.pdf" download="KRR_Assignment2.pdf" class="download-btn">Download Assignment Report</a>
        `;
    } else if (projectId === "cw2-advanced-software-eng") {
        modalText.innerHTML = `
            <h2>Software Engineering for Large-Scale Systems</h2>
            <p>This project focused on the design, development, and implementation of a scalable software system following software engineering best practices.</p>
    
            <h3>Project Components:</h3>
            <ul>
                <li><strong>Software Design Principles:</strong> Applied object-oriented design patterns and architectural best practices.</li>
                <li><strong>Agile Development Methodology:</strong> Followed Agile and Scrum frameworks to iteratively develop and refine the system.</li>
                <li><strong>Code Refactoring & Optimization:</strong> Enhanced software maintainability through modular code and performance tuning.</li>
                <li><strong>Scalability & Performance Testing:</strong> Evaluated system efficiency under high-load conditions using stress testing techniques.</li>
                <li><strong>Security & Data Protection:</strong> Implemented authentication mechanisms and data encryption for user privacy.</li>
            </ul>
    
            <p>The project provided hands-on experience in designing large-scale software systems, adhering to modern software engineering principles.</p>
    
            <a href="files/AdvancedSoftwareEngineering.pdf" download="AdvancedSoftwareEngineering.pdf" class="download-btn">Download Project Report</a>
            <button onclick="window.location.href='https://github.com/AyeshaRahman2002/AdvancedSoftwareEngineering';">View on GitHub</button>
        `;
    }

    modal.style.display = "block";
}

// Function to close the modal
function closeDetails() {
    const modal = document.getElementById("project-details");
    modal.style.display = "none";
}

// Add mouse movement effect to work cards for 3D hover
const workCards = document.querySelectorAll('.work-card');

workCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let rect = card.getBoundingClientRect();
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.querySelector('.work-card-inner').style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.work-card-inner').style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});

// Function to toggle the navigation menu
function toggleMenu() {
    const navList = document.getElementById("nav-list");
    navList.classList.toggle("active");
}
