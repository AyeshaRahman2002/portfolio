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
        `;
    } else if (projectId === "todo-app") {
        modalText.innerHTML = `
            <h2>Assessment To-Do List Application</h2>
            <p>
                A web application built using Flask for managing assessment tasks. The app allows users to add, delete, and search for tasks, 
                providing a simple and intuitive interface for students to track their work.
            </p>
            <ul>
                <li>Technology: Flask, HTML5, CSS3</li>
                <li>Focus: Task Management, Web Development</li>
            </ul>
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
