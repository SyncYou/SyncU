import design from "/signUp-imgs/Design.svg";
import engineer from "/signUp-imgs/Engineer.svg";
import product from "/signUp-imgs/Product.svg";
import marketing from "/signUp-imgs/Marketing.svg";

import design2 from "/signUp-imgs/Design2.svg";
import engineer2 from "/signUp-imgs/Engineer2.svg";
import product2 from "/signUp-imgs/Product2.svg";
import marketing2 from "/signUp-imgs/Marketing2.svg";

export const Niches = [
  {
    id: 1,
    stack: "Design",
    image: [{ img: design, fill: design2 }],
    areas: [
      { area: "Graphics design" },
      { area: " Motion design" },
      { area: "Brand design" },
      { area: "Product design" },
    ],
  },
  {
    id: 2,
    stack: "Engineering",
    image: [{ img: engineer, fill: engineer2 }],
    areas: [
      { area: "Frontend Development" },
      { area: "Backend Development" },
      { area: "DevOps Engineering" },
      { area: "Machine Learning Engineering" },
    ],
  },
  {
    id: 3,
    stack: "Product",
    image: [{ img: product, fill: product2 }],
    areas: [
      { area: "Product Management" },
      { area: "Product Analytics" },
      { area: "User Research" },
      { area: "Product Operations" },
    ],
  },
  {
    id: 4,
    stack: "Marketing",
    image: [{ img: marketing, fill: marketing2 }],
    areas: [
      { area: "Digital Marketing" },
      { area: "Content Marketing" },
      { area: "SEO Marketing" },
      { area: "Social Media Marketing" },
    ],
  },
];
