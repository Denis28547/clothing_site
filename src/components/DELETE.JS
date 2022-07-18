const a = {
  hats: [
    {
      id: 1,
      price: 25,
      imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      name: "Brown Brim",
    },
    {
      imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      name: "Blue Beanie",
      id: 2,
      price: 18,
    },
    {
      imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      price: 35,
      name: "Brown Cowboy",
      id: 3,
    },
  ],

  jackets: [
    {
      imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
      id: 18,
      price: 125,
      name: "Black Jean Shearling",
    },
    {
      price: 90,
      id: 19,
      name: "Blue Jean Jacket",
      imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
    },
    {
      name: "Grey Jean Jacket",
      imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
      id: 20,
      price: 90,
    },
    {
      id: 21,
      imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
      price: 165,
      name: "Brown Shearling",
    },
    {
      price: 185,
      id: 22,
      name: "Tan Trench",
      imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
    },
  ],
};
let u = [];
const zalupa = Object.keys(a).map((categoryName) => {
  a[categoryName].map((each) => u.push(each));
});
// console.log(u);
const zalupa2 = u
  .filter((_, index) => index < 4)
  .map((product) => console.log(product));

// console.log(zalupa2);
