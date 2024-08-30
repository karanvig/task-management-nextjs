"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import TaskManager from "./Component/TaskManager" // Import the TaskManager component

export default function AuthComponent() {
  const { data: session } = useSession()

  return (
    <div className=" bg-white dark:bg-black min-h-screen">
      {/* Header Section */}
      <header className="w-full p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome {session ? session.user.name : 'Guest'}</h1>
        {session && (
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign out
          </button>
        )}
      </header>

      {/* Main Content Section */}
      <main className="p-6 shadow-md rounded-lg mt-6 w-11/12 max-w-md">
        {session ? (
          <TaskManager /> // Use the TaskManager component here
        ) : (
          <>
            <p className="text-lg font-semibold mb-4">Not signed in</p>
            <button
              onClick={() => signIn()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sign in
            </button>
          </>
        )}
      </main>
    </div>
  )
}
