// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

import Logo from "./Logo";
import People from "./People";
import AddEvent from "./AddEvent";

import "../styles/appStyle.css";
import { useState } from "react";

const staticPeople = [
  {
    name: "محمدرضا آقاشیری",
    ID: "1234567890",
    image: require("../images/profile/mehraboon-squoosh.jpg"),
    account: -850000,
  },
  {
    name: "محمدحسین جلالی‌منش",
    ID: "9876543210",
    image: require("../images/profile/mohammad-squoosh.jpg"),
    account: 1200000,
  },
  {
    name: "محمود وزیرزاده",
    ID: "2468135790",
    image: require("../images/profile/mahmood-squoosh.jpg"),
    account: -350000,
  },
  {
    name: "علیرضا طغرلی",
    ID: "0987654321",
    image: require("../images/profile/alireza-squoosh.jpg"),
    account: 0,
  },
  {
    name: "محمد حسنی",
    ID: "4440081525",
    image: require("../images/profile/mohammad-hassani.jpg"),
    account: 0,
  },
];

function App() {
  const [people, setPeople] = useState(staticPeople);

  return (
    <section className="pache-noome">
      <Logo />
      <People people={people} />
      <AddEvent people={people} setPeople={setPeople} />
    </section>
  );
}

export default App;
