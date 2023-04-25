import "./App.css";
import { useState } from "react";

import Greeting from "./components/Greeting";
import Main from "./layout/Main";

const user = {
  name: "ali",
  email: "ali@veli.com",
  age: 19,
};

const { name, age, email } = user; // destructuring

const userArr = ["ali", "ali@eveli.com", 19];

const [firstItem, secondItem, ageItem] = userArr;

// hook - kanca
// rerender
// state güncellendiğinde
let counterLet = 0;

function App() {
  // stateler
  const greeting = "Merhaba React!";

  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState();
  const [name, setName] = useState("Ali");

  // functions!

  console.log("App componenti rerender edildi, counter: ", counter);

  // lifecycle eventları

  return (
    <Main />
    // <div>
    //   <Greeting
    //     userName={name}
    //     userEmail={"ali@ali.com"}
    //     userAge={age}
    //     setUserAge={setAge}
    //   />
    //   <div>
    //     <h1> Counter: {counter}</h1>
    //     <button
    //       onClick={function () {
    //         setCounter(counter + 1);
    //         console.log("counter: ", counter);
    //       }}
    //     >
    //       increase
    //     </button>
    //     {counter > 0 && (
    //       <button
    //         onClick={() => {
    //           setCounter(counter - 1);
    //         }}
    //       >
    //         decrease
    //       </button>
    //     )}
    //   </div>
    //   <div>
    //     <h1> Counter Let: {counterLet}</h1>
    //     <button
    //       onClick={() => {
    //         counterLet++;
    //         console.log("counterLet : ", counterLet);
    //       }}
    //     >
    //       increase
    //     </button>
    //     <button
    //       onClick={() => {
    //         counterLet--;
    //         console.log("counterLet : ", counterLet);
    //       }}
    //     >
    //       decrease
    //     </button>
    //   </div>
    // </div>
  );
}

export default App;
