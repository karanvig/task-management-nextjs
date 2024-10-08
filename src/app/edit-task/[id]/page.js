"use client";
import { useRouter } from "next/navigation";
import { useTasks } from "../../context/TaskContext";
import { useEffect, useState } from "react";
import { getLocationByIP } from "../../../../utils/locationAPI";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function EditTaskPage({ params }) {
  const { id } = params;
  const { tasks, updateTask } = useTasks();
  const [task, setTask] = useState(null);
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);
  const router = useRouter();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY, // Replace with your actual API key
  });

  useEffect(() => {
    const taskToEdit = tasks.find(task => task.id === parseInt(id));
    if (taskToEdit) {
      setTask(taskToEdit);
      fetchLocationData(); // Fetch location data based on IP address
    } else {
      router.push('/'); // Redirect if task not found
    }
  }, [id, tasks, router]);

  const fetchLocationData = async () => {
    try {
      const locationData = await getLocationByIP();
      setLocation(locationData);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocation({});
      setError("Unable to fetch location data.");
    }
  };

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    if (task) {
      updateTask({ ...task, city: location.city, location });
      router.push('/');
    }
  };

  if (!task) return <p>Loading...</p>;

  return (
    <div className="p-6 text-black dark:text-white bg-white dark:bg-black shadow-md rounded-lg mt-6 w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
      <div className="mb-4">
        <label className="block">Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="border text-black rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block">Description:</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="border text-black rounded p-2 w-full"
        />
      </div>
      {location.city && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Location Details:</h3>
          <p>City: {location.city}</p>
          <p>Region: {location.region}</p>
          <p>Country: {location.country}</p>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>

          {isLoaded && (
            <div className="mt-4">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '300px' }}
                center={{ lat: location.latitude, lng: location.longitude }}
                zoom={12}
              >
                <Marker position={{ lat: location.latitude, lng: location.longitude }} />
              </GoogleMap>
            </div>
          )}
        </div>
      )}
      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
}
