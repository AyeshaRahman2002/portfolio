// Function to display the modal with project details
function showDetails(projectId) {
    const modal = document.getElementById("project-details");
    const modalText = document.getElementById("modal-text");

    // Add project-specific details here
    if (projectId === "ai-analysis") {
        modalText.innerHTML = `
            <h2>AI-Based Stock Market Sentiment Analysis</h2>
            <p>
                This tool analyzes sentiment data from social media and customer reviews to predict stock market trends. 
                Developed using Python, WEKA, and sentiment analysis techniques, this project helps investors make data-driven decisions.
            </p>
            <ul>
                <li>Technology: Python, WEKA</li>
                <li>Focus: Stock Market, Sentiment Analysis, Data Science</li>
            </ul>
        `;
    } else if (projectId === "xv6-memory") {
        modalText.innerHTML = `
            <h2>xv6 Memory Management</h2>
            <p>
                This project involved implementing memory management functions like malloc() and free() in xv6. 
                The goal was to understand low-level memory allocation and improve system performance through efficient memory management.
            </p>
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
            <h2>Health AI Prototype for Identifying Autism in Adults</h2>
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
    } else if (projectId === "ai-analysis") {
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
