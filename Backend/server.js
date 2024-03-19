const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
];

// GET /tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: Date.now(), // Use a unique identifier for each task
    title,
    completed: false,
  };
  tasks = [...tasks, newTask]; // Create a new array with the new task
  res.status(201).json(newTask);
});

// PUT /tasks/:id
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  const updatedTask = { id: parseInt(id), title, completed };
  tasks = [...tasks.slice(0, taskIndex), updatedTask, ...tasks.slice(taskIndex + 1)]; // Create a new array with the updated task
  res.json(updatedTask);
});

// DELETE /tasks/:id
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  const deletedTask = tasks[taskIndex];
  tasks = [...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)]; // Create a new array without the deleted task
  res.json(deletedTask);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});