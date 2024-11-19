const express = require('express');
const { Client } = require('@googlemaps/google-maps-services-js');

const app = express();
const port = process.env.PORT || 3000;

// Replace with your own Google Maps API key
const GOOGLE_MAPS_API_KEY = 'AIzaSyDCbG0F_cH2jGp_PltrZgcCe_K-gtEAOco';

// Create a new Google Maps client
const googleMapsClient = new Client({});

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

app.get('/',function(req,res) {
  res.sendFile('index.html');
});

// Endpoint to get a nearby restaurant recommendation
app.get('/api/recommendation', async (req, res) => {
  try {
    // Get the user's location from the request
    const { latitude, longitude } = req.query;

    // Use the Google Maps Places API to find nearby restaurants
    const response = await googleMapsClient.nearbySearch({
      params: {
        location: { lat: latitude, lng: longitude },
        radius: 5000,
        type: 'restaurant',
        key: GOOGLE_MAPS_API_KEY,
      },
    });

    // Select a random restaurant from the response
    const randomIndex = Math.floor(Math.random() * response.data.results.length);
    const selectedRestaurant = response.data.results[randomIndex];

    // Prepare the restaurant recommendation response
    const recommendation = {
      name: selectedRestaurant.name,
      rating: selectedRestaurant.rating,
      address: selectedRestaurant.vicinity,
    };

    res.json(recommendation);
  } catch (error) {
    console.error('Error finding nearby restaurants:', error);
    res.status(500).json({ error: 'Error finding nearby restaurants' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});