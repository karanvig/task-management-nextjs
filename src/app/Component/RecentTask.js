// components/RecentTasks.js
"use client";
import { useTasks } from "../context/TaskContext";

export default function RecentTask() {
  const { tasks } = useTasks();
  
  // Sort tasks by date and get the two most recent ones
  const recentTasks = [...tasks]
    .sort((a, b) => b.id - a.id)
    .slice(0, 2);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Recent Tasks</h2>
      <ul className="space-y-4">
        {recentTasks.length > 0 ? (
          recentTasks.map((task) => (
            <li key={task.id} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">City: {task.city}</p>
            </li>
          ))
        ) : (
          <p>No recent tasks available.</p>
        )}
      </ul>
    </div>
  );
}
