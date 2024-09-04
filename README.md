# Employee Connect Web Portal

## About

Our web portal provides various features such as company news, HR policies, an interactive calendar, announcements, AI Chatbot, a music player, and more. It was developed as part of a company hackathon to showcase a dynamic and user-friendly interface for employees to connect with each other in order to grow together.

An abstract overview of our portal:

- Landing page 
  - Announcements
  - Calendar with company and user specific holidays
  - Company News
- HR Policies page
- AI Chatbot
- Register/Login page
- User Dashboard page
- HR Query page
- Job Portal page
- Social Media page
- Music Player



## Tech Stack

- MongoDB
- Express
- React
- Node.js
- Flask


## Installation Guide

 ### Prerequisites
 1\. `Node.js and npm:`  Ensure that you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/en/download/package-manager).
 
 2\. `Visual Studio Code (VS Code):`  Install VS Code from [code.visualstudio.com](https://code.visualstudio.com/download) for editing and running the project.

 3\. `MongoDB and MongoDB Compass:` Ensure that you have MongoDB and MongoDB Compass installed on your machine. You can download them from [MongoDB](https://www.mongodb.com/docs/manual/installation/) & [MongoDB Compass](https://www.mongodb.com/docs/compass/current/install/)

<br />

 ### Setup Instructions

 1\. **Download the files from Git Hub and open in VS Code**
 
 2\. **Navigate to the Project Directory**: `cd company-web-portal`
 
 3\.  **Install Dependencies**:
- Frontend
  - cd into the folder and execute `npm install`
- Backend
  - cd into the folder and execute `npm install`
- Data Base
  - create `EmployeeConnect` database from MongoDB Compass
- Flask
  - execute `pip install Flask` to install Flask

<br />

 ## Run the project
 
  1\.  **Run flask server** : `python chatbot.py`  
       (if necessary, paste the screenshot)
       
  2\.  **Run backend server** : `npm start`

  3\.  **Run frontend server** : open new terminal and execute `npm run dev`

  4\.  **Open MongoDB Compass and connect to default connection string** : Optional - to observe records in database <br />
       (if necessary, paste the screenshot)

  5\.  **Running the Project** : Open your browser and navigate to local host to see the application in action
  
<br />

**Troubleshooting**

-   Ensure all dependencies are correctly installed by running *npm install*.
-   If the project doesn't start, check for any missing files or incorrect paths in your import statements.
-   If there are issues with React Router, ensure you are using compatible versions and correctly defined routes.



**Note**

-   For demo purposes, local images and sample data are used.
-   The project uses React, React Router for routing, and CSS for styling.
