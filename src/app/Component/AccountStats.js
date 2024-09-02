// components/TaskCount.js
"use client";
import { useTasks } from "../context/TaskContext";

export default function AccountStats() {
  const { tasks } = useTasks();

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Total Tasks</h2>
      <p className="text-2xl font-bold">{tasks.length}</p>
    </div>
  );
}
