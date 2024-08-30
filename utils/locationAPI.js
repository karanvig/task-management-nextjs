// utils/ipApi.js
export async function getLocationByCity(city) {
    const response = await fetch(`http://ip-api.com/json/?city=${encodeURIComponent(city)}`);
    
    if (!response.ok) {
      throw new Error('Unable to fetch location data');
    }
  
    const data = await response.json();
    if (data.status === 'fail') {
      throw new Error(data.message || 'Failed to retrieve location');
    }
  
    return {
      city: data.city,
      region: data.regionName,
      country: data.country,
      latitude: data.lat,
      longitude: data.lon
    };
  }
  