const restaurants = [
  {
      name: "800 Bowls",
      details: "Noodles, Dumplings • B1 Capitol • Din Tai Fung Noodles on a budget",
      price: "~$10",
      image: "800 Bowls.jpg"
  },
  {
      name: "La Scala Ristorante",
      details: "Italian • 1 Coleman Street • Authentic pasta and pizza",
      price: "$20-30",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Peninsula Plaza Food Court",
      details: "Local food court • 111 North Bridge Road • Myanmar and local dishes",
      price: "$5-10",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Flaming Don",
      details: "Japanese fusion • B2 Funan • Flame-grilled rice bowls",
      price: "$8-15",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Yolé",
      details: "Healthy bowls & salads • B2 Funan • Fresh ingredients",
      price: "$12-18",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Wheat Baumkuchen",
      details: "Healthy Asian fusion • B1 Peninsula Plaza • Popular grain bowls",
      price: "$10-15",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Capitol Singapore Food Hall",
      details: "Food court • B2 Capitol Singapore • Various cuisines",
      price: "$6-15",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Citrus By The Pool",
      details: "Western cafe • #05-00 YMCA • Pool view dining",
      price: "$15-25",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Twelve Cupcakes",
      details: "Light bites & sandwiches • B1 Funan • Fresh pastries",
      price: "$8-12",
      image: "/api/placeholder/600/400"
  },
  {
      name: "The Providore",
      details: "Cafe • #01-02 Raffles City • Sandwiches and salads",
      price: "$15-25",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Subway",
      details: "Sandwiches • B1 Peninsula Plaza • Custom subs",
      price: "$7-12",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Hai Di Lao",
      details: "Hotpot • #04-01 Clarke Quay Central • Popular chain",
      price: "$25-40",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Waa Cow!",
      details: "Japanese fusion • #02-315 Funan • Premium beef bowls",
      price: "$15-25",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Stuff'd",
      details: "Mexican-Turkish fusion • B1 Funan • Quick healthy options",
      price: "$8-12",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Supreme Ramen",
      details: "Japanese • #02-316 Funan • Authentic ramen",
      price: "$12-18",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Green Dot",
      details: "Vegetarian • B1 Peninsula Plaza • Asian fusion",
      price: "$8-15",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Ya Kun Kaya Toast",
      details: "Local breakfast • B1 Funan • Singapore classic",
      price: "$5-10",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Hangry",
      details: "Western • #02-317 Funan • Burgers and pasta",
      price: "$15-20",
      image: "/api/placeholder/600/400"
  },
  {
      name: "Sumo Salad",
      details: "Healthy options • B1 Raffles City • Fresh salads",
      price: "$10-15",
      image: "/api/placeholder/600/400"
  },
  {
      name: "South Union Park",
      details: "Cafe • #01-02 Capitol Singapore • Western cuisine",
      price: "$18-25",
      image: "/api/placeholder/600/400"
  }
];

function getRandomRestaurant() {
  const result = document.getElementById('result');
  const nameElement = document.getElementById('restaurant-name');
  const detailsElement = document.getElementById('restaurant-details');
  const priceElement = document.getElementById('price-range');
  const imageElement = document.getElementById('restaurant-image');
  
  // Add animation by hiding first
  result.classList.add('hidden');
  
  setTimeout(() => {
      const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
      nameElement.textContent = randomRestaurant.name;
      detailsElement.textContent = randomRestaurant.details;
      priceElement.textContent = `Price range: ${randomRestaurant.price}`;
      imageElement.src = randomRestaurant.image;
      result.classList.remove('hidden');
      result.classList.add('fade-in');
  }, 200);
}