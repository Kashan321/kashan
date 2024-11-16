import ev_img from '../assets/Images/ev.png'
import auth_mern from '../assets/Images/Mern_JWT-Cr3Uauvl.png'
import weather from '../assets/Images/Weather.png'
import GPT from '../assets/Images/openAi.jpeg'
import Dashboard from '../assets/Images/DASHBOARD.avif'
import project_img from '../assets/Images/projects.png'
import restify from '../assets/Images/easy-restify.png'
export const projects = [
    {
        id: 1,
        title: 'EV CHARGING STATION FINDER',
        description: 'Description for EV Charging.',
        LongDescription: 'The EV Charging Station Finder app is a React Native mobile application designed to help users easily locate electric vehicle (EV) charging stations. By leveraging Firebase for real-time data storage and user authentication, Clerk for secure user management, and Google APIs such as Places, AutoComplete, and Maps, the app provides an intuitive interface for searching nearby charging stations, viewing station details, and navigating to them. Users can search for stations based on their location, get real-time availability, and even receive directions, making it an essential tool for EV owners.',
        image: ev_img,
        technologies: ['React Native', 'Expo', 'Tailwind CSS', 'Shadcn UI', 'Animations'],
        githubLink: 'https://github.com/Kashan321/EV-Charging-Station-Finder-FYP.git'
    },
    {
        id: 2,
        title: 'Easy Restify NPM Package',
        description: 'Description for easy-restify npm package',
        LongDescription: 'easy-restify is a simple and efficient npm package designed to streamline the process of setting up RESTful APIs with minimal configuration. Built on top of the popular Restify framework, this package allows developers to quickly create and manage routes, handle requests, and integrate middleware without the need for complex setups. easy-restify aims to simplify API development, offering a lightweight solution for building scalable and performant REST APIs while maintaining flexibility and ease of use. Ideal for projects that require quick deployment and clean, organized code.',
        image: restify,
        technologies: ['JavaScript', 'Node.js', 'Express', 'Mongoose', 'swagger', 'joi'],
        githubLink: 'https://github.com/Kashan321/easy-restify.git'
    },
    {
        id: 3,
        title: 'Authentication in MERN',
        description: 'Description for Authentication in MERN',
        LongDescription: 'The Full Stack Authentication project is a MERN (MongoDB, Express, React, Node.js) stack application that provides secure user authentication. The app uses Node.js and Express for building the backend API, MongoDB for storing user data, and React for creating a dynamic frontend. It features user registration, login, and token-based authentication with JWT (JSON Web Tokens) for secure access. The project includes role-based access control and encrypted passwords using bcrypt, ensuring a secure and efficient user authentication system.',
        image: auth_mern,
        technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Express', 'Mongoose'],
        githubLink: 'https://github.com/Kashan321/MERN-STACK.git'
    },
    {
        id: 4,
        title: 'Professional Weather App in REACT',
        description: 'Description for  Weather App in REACT',
        LongDescription: 'The Weather App is a React-based application that allows users to view real-time weather information for any location. It fetches data from a weather API (such as OpenWeatherMap) and displays key details like temperature, humidity, wind speed, and weather conditions. Users can search for cities, view forecasts, and switch between different units (Celsius/Fahrenheit). The app features a clean, responsive design with dynamic backgrounds based on weather conditions, providing an intuitive and user-friendly experience.',
        image: weather,
        technologies: ['JavaScript', 'Node.js', 'React', 'Tailwind'],
        githubLink: 'https://github.com/Kashan321/weatherApp.git'
    },
    {
        id: 5,
        title: 'Trained CHAT-GPT Model',
        description: 'Description for Chat-GPT Model',
        LongDescription: 'The Trained Chat-GPT Model for React and React Native is a machine learning model fine-tuned specifically to assist with React and React Native development. It can help developers by providing code suggestions, answering technical questions, debugging issues, and offering best practices for building modern web and mobile applications. This model is trained on extensive React and React Native documentation, community resources, and real-world coding examples, making it a valuable tool for both beginners and experienced developers. It supports various topics, including component architecture, state management, hooks, navigation, and performance optimization.',
        image: GPT,
        technologies: ['JavaScript', 'React', 'React Native', 'Open Source', 'Git/Hub/Lab'],
        githubLink: 'https://github.com/Kashan321'
    },
    {
        id: 6,
        title: 'Frontend Dashboard Projects',
        description: 'Description for Dashboard Project',
        LongDescription: 'The Dashboard Project is a dynamic web application built with React that provides an interactive and visually appealing user interface for managing and displaying key data. It offers real-time analytics, charts, and summaries of various metrics, such as sales, user activity, or other performance indicators. Using React component-based architecture, this dashboard features responsive design, ensuring a seamless experience across devices. The project leverages state management techniques like React Context or Redux to handle and display data efficiently. With intuitive navigation and customizable widgets, users can personalize their views and interact with the data for deeper insights',
        image: Dashboard,
        technologies: ['JavaScript', 'React', 'React Native', 'Tailwind', 'Material-UI', 'React-Charts'],
        githubLink: 'https://github.com/Kashan321'
    },
    {
        id: 7,
        title: 'More Than 15+ Projects',
        description: 'Description for Project',
        LongDescription: 'I have deployed and created over 15+ full-stack and front-end projects, showcasing a wide range of technologies and solutions. These projects span various domains, from interactive web applications to complex dashboards, and are built using modern frameworks like React, Node.js, and Express. You can explore these open-source projects on my GitHub, where I share my work, code, and contributions to the developer community. Feel free to check it out for inspiration or collaboration!',
        image: project_img,
        technologies: ['JavaScript', 'React', 'React Native', 'Tailwind', 'Material-UI', 'React-Charts'],
        githubLink: 'https://github.com/Kashan321'
    }
];
