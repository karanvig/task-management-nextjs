"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import TaskManager from "./Component/TaskManager"; // Import the TaskManager component
import RecentTask from "./Component/RecentTask"; // Import RecentTasks component
import AccountStats from "./Component/AccountStats"; // Import TaskCount component

export default function AuthComponent() {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white">
      {/* Header Section */}
      <header className="w-full p-4  shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Welcome, {session ? session.user.name : 'Guest'}
        </h1>
        {session ? (
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Sign in
          </button>
        )}
      </header>

      {/* Main Content Section */}
      <main className="p-6 max-w-6xl mx-auto mt-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg space-y-6">
        {session ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RecentTask /> {/* Display recent tasks */}
              <AccountStats/> {/* Display total number of tasks */}
            </div>
            <TaskManager /> {/* Display task manager */}
          </>
        ) : (
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Not signed in</p>
            <button
              onClick={() => signIn()}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Sign in
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
