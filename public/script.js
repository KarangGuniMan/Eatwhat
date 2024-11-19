const restaurants = [
  {
      name: "800 Bowls",
      details: "Noodles, Dumplings • B1 Capitol • Din Tai Fung Noodles on a budget",
      price: "~$10",
      image: "800 Bowls.jpg"
  },
  {
      name: "King Grouper Fish Soup",
      details: "Teochew style fish Soup • B1 Capitol • OL Lunch",
      price: "~$10",
      image: "King Grouper.PNG"
  },
  {
      name: "MacDonalds",
      details: "Macs • L1 Funan • Are you lovin it?",
      price: "$5-10",
      image: "Macs.png"
  },
  {
      name: "Funan B2 Cai Fan",
      details: "Multiple Options • B2 Funan • Guess you can eat other things at food court if you want too",
      price: "Under $8",
      image: "Funancaifan.jpeg"
  },
  {
      name: "Soi 47",
      details: "Thai Food • L3 CQ Central • Affordable and nice Thai Food",
      price: "$10-20",
      image: "soi47.jpg"
  },
  {
      name: "Tian Xin Wanton Noodle",
      details: "Local Noodles, Wanton Mee, Lor Mee, Laksa • L2 Adelphi • Tasty and cheap, long queue",
      price: "under $8",
      image: "tianxin.jpg"
  },
  {
      name: "Makanan Bollywood Restaurant",
      details: "Indian food • B1 Adelphi • Tasty Briyani and Teh Tarik, beware food coma after",
      price: "~$10",
      image: "Makanan.jpg"
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
      details: "Mexican-Turkish fusion • B1 Funan • Quick Kebabs and bowls",
      price: "$8-12",
      image: "stuffd.jpg"
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