// app/add-task/page.js
"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { getLocationByIP } from "../../../utils/locationAPI";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function AddTaskPage() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY, // Ensure to add your API key here
  });

  useEffect(() => {
    const fetchInitialLocation = async () => {
      setLoading(true);
      try {
        const locationData = await getLocationByIP();
        setLocation(locationData);
        setError(null);
      } catch (error) {
        console.error("Error fetching location data:", error);
        setLocation({});
        setError("Unable to fetch location data.");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialLocation();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "description") setDescription(value);
  };

  const handleSave = () => {
    if (title && description) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        city: location.city || "",
        location,
      };
      addTask(newTask);
      router.push('/');
    }
  };

  return (
    <div className="p-6 text-black dark:text-white bg-white dark:bg-black shadow-md rounded-lg mt-6 w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
      <div className="mb-4">
        <label className="block">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className="border text-black rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block">Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
          className="border text-black rounded p-2 w-full"
        />
      </div>
      {loading && <p className="text-blue-500">Fetching location data...</p>}
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
        disabled={loading || !title || !description}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        Save
      </button>
    </div>
  );
}
