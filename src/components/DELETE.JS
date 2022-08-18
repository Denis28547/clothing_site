let a = {
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
// let u = [];
// const zalupa = Object.keys(a).map((categoryName) => {
//   a[categoryName].map((each) => u.push(each));
// });
// const zalupa2 = u
//   .filter((_, index) => index < 4)
//   .map((product) => console.log(product));

const b = {
  jackets: [
    // {
    //   imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    //   id: 18,
    //   price: 125,
    //   name: "Black Jean Shearling",
    // },
    // {
    //   price: 90,
    //   id: 19,
    //   name: "Blue Jean Jacket",
    //   imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
    // },
    // {
    //   name: "Grey Jean Jacket",
    //   imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
    //   id: 20,
    //   price: 90,
    // },
    // {
    //   id: 21,
    //   imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
    //   price: 165,
    //   name: "Brown Shearling",
    // },
    {
      price: 165,
      id: 22,
      name: "Tan Trench",
      imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
    },
  ],
};
// console.log(a);
// a = { ...a, ...b };
// console.log(a);

let d = [
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
];

let e = {
  imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
  name: "Blue Beanie",
  id: 2,
  price: 18,
};

let h = {
  imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
  price: 35,
  name: "Brown Cowboy",
  id: 3,
};

let c = {};

title = "bibba";
title2 = "bibba2";
title3 = "bibba3";
c[title] = d;
c[title2] = e;
c[title3] = h;
// console.log(c[title3]);

const arr = [1, 2, 3, 4, 1, 1, 3, 2, 9, 9];

function withoutRepeat(array) {
  const uniqueVal = [];
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const currentEl = array[i];
    if (!(currentEl in obj)) {
      obj[currentEl] = 1;
    } else {
      obj[currentEl] += 1;
    }
  }

  const keys = Object.keys(obj);
  // console.log(obj);
  keys.forEach((key) => {
    if (obj[key] === 1) {
      uniqueVal.push(key);
    }
  });
}

withoutRepeat(arr);

const obj1 = {
  firstThing: {
    id: 1,
    boop: "yes",
  },
  secondThing: {
    id: 2,
    boop: "no",
  },
};

obj1["thirdThing"] = { id: 3, boop: "no" };

// console.table(obj1);

const tryReduceArr = [
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
];

const arrWithKeys = tryReduceArr.reduce((acc, currentValue) => {
  // console.log(currentValue);
  const reducerObj = {};
  reducerObj[currentValue.name] = currentValue;
  return { ...acc, ...reducerObj };
}, {});

// console.table(arrWithKeys);

const allPrice = () => {
  const arrKeys = Object.keys(arrWithKeys);
  let fullPrice = 0;

  arrKeys.forEach((key) => {
    fullPrice += arrWithKeys[key].price;
  });

  for (let i = 0; i < arrKeys.length; i++) {
    fullPrice += arrWithKeys[arrKeys[i]].price;
  }

  return fullPrice / 2;
};

// allPrice();
// console.log(allPrice());

// const baa = {};
// let caa;

// baa.b = 1;
// caa = baa;
// caa.b = 2;

// console.log(caa);
// console.log(baa);

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
console.log(BUTTON_TYPE_CLASSES["google"]);
