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
