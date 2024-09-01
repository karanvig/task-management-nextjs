// utils/ipApi.js
export async function getLocationByIP() {
  const apiKey = process.env.NEXT_PUBLIC_LOCATION_API_KEY; 
  const response = await fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${apiKey}`);

  if (!response.ok) {
    throw new Error('Unable to fetch location data');
  }

  const data = await response.json();

  // Extract location information
  const location = data;

  return {
    city: location.city.name,
    region: location.state.name,
    country: location.country.name,
    latitude: location.location.latitude,
    longitude: location.location.longitude
  };
}
