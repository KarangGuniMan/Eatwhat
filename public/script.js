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
      image: "Tianxin.jpg"
  },
  {
      name: "Makanan Bollywood Restaurant",
      details: "Indian food • B1 Adelphi • Tasty Briyani and Teh Tarik, beware food coma after",
      price: "~$10",
      image: "Makanan.jpg"
  },
  {
      name: "TSUI WAH - Clarke Quay Central",
      details: "HK style Cha Chan Teng • L1 CQ Central • HK Milk Tea and tasty Egg Tarts",
      price: "$10-20",
      image: "eggtart.jpg"
  },
  {
      name: "Fangko",
      details: "Indonesian style Cafe • Hong Kong St • Indomee with super spice levels",
      price: "$8-15",
      image: "fangko.jpg"
  },
  {
      name: "Co Chung Boat Quay",
      details: "Vietnamese • Circular Road • Great Banh Mi & Pho",
      price: "$10-20",
      image: "cochung.jpg"
  },
  {
      name: "Tendon Kohaku",
      details: "Japanese • B1 CQ Central • Tasty Tendon",
      price: "~$20",
      image: "Tendon.JPG"
  },
  {
      name: "Astons",
      details: "Western • Level 3 CQ Central • Popular chain",
      price: "$10-20",
      image: "aston.jpg"
  },
  {
      name: "Mincheng Bibimbap",
      details: "Korean Chinese fusion • L1 Funan • Affordable and Good Bibimbap, don't eat the cold noodles",
      price: "$7-15",
      image: "mincheng.jpg"
  },
  {
      name: "Stuff'd",
      details: "Mexican-Turkish fusion • B1 Funan • Quick Kebabs and bowls",
      price: "$8-12",
      image: "stuffd.jpg"
  },
  {
      name: "Sukiya",
      details: "Japanese • B1 Funan • Filling Don bowls",
      price: "$7-15",
      image: "sukiya.jpg"
  },
  {
      name: "Guzman y Gomez",
      details: "Mexican • B1 Funan • Taco Time",
      price: "$8-15",
      image: "GYG.jpg"
  },
  {
      name: "New Station Rice Bar",
      details: "Local Rice Dishes • L3 Fortune Centre • Salted Egg Chicken Rice",
      price: "$5-10",
      image: "newstation.jpg"
  },
  {
      name: "Han Pan",
      details: "Korean • Circular Road • Korean set meals",
      price: "$10-15",
      image: "hanpan.jpg"
  },
  {
      name: "109 Yong Tau Foo",
      details: "Yong Tau Foo • Circular Road • Great tasting and Good Price",
      price: "$5-10",
      image: "YTF.jpg"
  },
  {
      name: "Ramen Dining Keisuke Tokyo",
      details: "Japanese • B1 Capitol Singapore • is Ramen",
      price: "$10-20",
      image: "ramen.jpg"
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