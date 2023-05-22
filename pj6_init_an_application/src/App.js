import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

function App() {
  const [todos, setTodos] = useState();

  const bearer_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5Yzg5MTA3LTY4NzQtNGViOS1hMWZkLWVmMjRjMzkyMTY5ZSIsImlhdCI6MTY4NDcyNDQwMCwiZXhwIjoxNjg0NzI1MDAwfQ.8mwIIPGFr-3BiqwYoXR5OBxhIaDCLyWxk9fc0gX1HJM";
  useEffect(() => {
    const config = {
      headers: {
        Authorization: bearer_token,
      },
    };

    instance
      .post("/signin", {
        username: "Admin",
        password: "Admin",
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    instance
      .get("/todos", config)
      .then(function (response) {
        // handle success
        console.log("response", response);
        console.log("getTodo", response.data.data);
        const getTodos = response.data.data;
        setTodos(getTodos);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {todos?.map((item, index) => (
        <div key={index}>
          <h3>Name: {item.todo}</h3>
          <p>Completed: {item.completed ? "Done" : "Not yet"}</p>
          <p>userId: {item.userId}</p>
          <p>prioritize: {item.prioritize}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
