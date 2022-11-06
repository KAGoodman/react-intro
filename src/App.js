import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

const peopleArr = [
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "black",
  },
  {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "Brown",
  },
  {
    firstName: "Millard",
    lastName: "Fillmoore",
    age: 50,
    hairColor: "Brown",
  },
  {
    firstName: "Maria",
    lastName: "Smith",
    age: 62,
    hairColor: "Brown",
  },
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <PersonCard
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.age}
          hairColor={personObj.hairColor}
        />
      ))}
    </div>
  );
}

export default App;