import "./App.css";
// import Counter from "./components/counter/Counter.component";
// import AgeCalculator from "./components/AgeCalculator/AgeCalculator.component";

import Avatar from "./components/avatar/Avatar.component";

function App() {
  const userInfo = {
    username: "Abhijeet Mehetre",
    age: 24,
    email: "abhijeetmehetre2808@gmail.com",
    birthDate: "28 Aug 1997",
  };
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <AgeCalculator /> */}
      {<Avatar userInformation={userInfo} />}
    </div>
  );
}

export default App;
