// context/TaskContext.js
"use client";
import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete the documentation", description: "Update the project documentation.", city: "" },
    { id: 2, title: "Review pull requests", description: "Review and merge open pull requests.", city: "" },
    { id: 3, title: "Update the project roadmap", description: "Plan the next quarter's milestones.", city: "" },
  ]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask) => setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
