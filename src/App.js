import logo from "./logo.svg";
import "./App.css";
import Person from "./Kayla-Person.jpg";
import arrdown from "./arrow-down.png";
import { useState } from "react";
function App() {
  const [searched, setSearched] = useState("");
  const employeees = [
    {
      name: "Johnson Wood",
      designation: "Frontend Developer",
      email: "wdggdg@example.com",
    },
    { name: "John Doe", designation: "Team Lead", email: "wdggdg@example.com" },
    {
      name: "Fakhar Naveed",
      designation: "UI/UX Designer",
      email: "wdggdg@example.com",
    },
    {
      name: "Alex Mode",
      designation: "Software Engineer",
      email: "wdggdg@example.com",
    },
    {
      name: "Johnson Wood",
      designation: "Frontend Developer",
      email: "wdggdg@example.com",
    },
    {
      name: "John Doe",
      designation: "Frontend Developer",
      email: "wdggdg@example.com",
    },
  ];
  const searchedemp = employeees.filter((employee) =>
    employee.name.toLowerCase().includes(searched.toLowerCase())
  );
  return (
    <div className="App">
      <header>
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
        />
        <div className="user-profile">
          <img src={Person} alt="" />
          <span className="roboto-regular ">
            Fakhar Naveed{" "}
            <img
              src={arrdown}
              alt=""
              style={{ height: 20, width: 20, justifyContent: "center" }}
            />
          </span>
        </div>
      </header>
      <main>
        <div className="filters">
          <div id="emp">
            <h2 style={{ margin: 0 }}>Employees</h2>
          </div>
          <div id="btn">
            <button className="buttons">All</button>
            <button className="buttons">Active</button>
            <button className="buttons">Inactive</button>
          </div>
        </div>
        <div className="employeecards">
          {searchedemp.map((items, index) => (
            <div key={index} className="card">
              <div className="cardcontent">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <img
                    src={Person}
                    style={{ height: 40, width: 40, borderRadius: "50%" }}
                    alt=""
                  />
                  <span>
                    <h3 className="roboto-bold" style={{ marginLeft: 10 }}>
                      {items.name}
                    </h3>
                  </span>
                </div>
                <p className="roboto-regular" style={{ marginLeft: 50 }}>
                  {items.designation}
                </p>
                <p
                  className="roboto-regular"
                  style={{ marginLeft: 50, marginTop: 20 }}
                >
                  <span className="roboto-thin">email: </span>
                  {items.email}
                </p>
                <div className="empbtn">
                  <button className="roboto-light" id="blockbtn">
                    Block
                  </button>
                  <button className="roboto-light" id="detailsbtn">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

