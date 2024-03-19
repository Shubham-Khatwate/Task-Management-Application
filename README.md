# Task Management Application

A full-stack application built with Node.js, Express.js, and React.js for managing tasks. Users can add, edit, delete, and mark tasks as completed through a visually appealing and responsive user interface.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Contributing](#contributing)

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Responsive and visually appealing user interface
- Animations and transitions for better user experience

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 12.x)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Getting Started

Follow these steps to set up and run the application:

1. **Clone the repository**
<br>git clone https://github.com/Shubham-Khatwate/Task-Management-Application.git

2. **Navigate to the project directory**
<br>Task-Management-Application

3. **Install server dependencies**
<br>cd Backend
<br>npm install

4. **Start the server**
<br>npm start

The server should now be running on `http://localhost:5000`.

5. **Install client dependencies**

In a new terminal window/tab, navigate back to the project directory and install the client dependencies:
<br>cd ..\Frontend\task-management-client
<br>npm install

6. **Start the React development server**
<br>npm start

The application should now be running at `http://localhost:3000`.

## Usage

- **Add a new task**: Enter the task title in the input field and click the "Add Task" button.
- **Edit a task**: Click the "Edit" button next to the task, make the desired changes, and click "Save".
- **Mark a task as completed**: Click the "Complete" button next to the task. If the task is already completed, the button will display "Undo".
- **Delete a task**: Click the "Delete" button next to the task.

## Technologies Used

- **Backend**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
- **Frontend**
  - [React.js](https://reactjs.org/)
  - [Axios](https://axios-http.com/)
  - [Bootstrap](https://getbootstrap.com/)
  - [Animate.css](https://animate.style/)

## Project Structure

### Backend

The backend is built with Node.js and Express.js, and it provides an API for CRUD operations on tasks. The server code is located in the `Backend/server.js` file, and it uses an in-memory data store for tasks.

### Frontend

The frontend is built with React.js and uses the following structure:<br>
frontend/task-management-client/<br>
├── node_modules/<br>
├── public/<br>
│   ├── index.html<br>
│   └── ...<br>
├── src/<br>
│   ├── components/<br>
│   │   ├── TaskForm.js<br>
│   │   ├── TaskItem.js<br>
│   │   └── TaskList.js<br>
│   ├── App.js<br>
│   ├── index.css<br>
│   ├── index.js<br>
│   └── ...<br>
├── package.json<br>
└── ...<br>

The `components/` directory contains reusable React components, such as `TaskForm`, `TaskItem`, and `TaskList`. The main application logic is in `App.js`, and the entry point is `index.js`.

The frontend utilizes Bootstrap for styling and layout, and Animate.css for animations and transitions. The application is responsive and adapts to different screen sizes and devices.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-new-feature`
3. Make the necessary changes and commit them: `git commit -am 'Add my new feature'`
4. Push your changes to your fork: `git push origin my-new-feature`
5. Create a new Pull Request on the original repository.
