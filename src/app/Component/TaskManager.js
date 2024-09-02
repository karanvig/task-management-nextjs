"use client";
import { useRouter } from "next/navigation";
import { useTasks } from "../context/TaskContext";

export default function TaskManager() {
  const { tasks, deleteTask } = useTasks();
  const router = useRouter();

  const handleEdit = (id) => {
    router.push(`/edit-task/${id}`);
  };

  const handleAddTask = () => {
    router.push('/add-task');
  };

  return (
    <div className="text-black dark:text-white bg-gray-100 dark:bg-gray-900">
      <button
        onClick={handleAddTask}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
      >
        Add New Task
      </button>
      <ul className="list-disc pl-5 space-y-2">
        {tasks.map(task => (
          <li key={task.id}>
            <h3 className="font-semibold">{task.title}</h3>
            <p>{task.description}</p>
            <p>City: {task.city}</p>
            <button
              onClick={() => handleEdit(task.id)}
              className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
