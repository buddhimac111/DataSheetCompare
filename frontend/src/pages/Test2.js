import NavBar from "../components/NavBar";
import React, { useEffect, useState } from "react";

const Test2 = () => {
  const [equalId, setEqualId] = useState([]);
  const [notEqualId, setnotEqualId] = useState([]);

  const fetchData = async () => {
    await fetch("http://localhost:5000/test2")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.equal);
        // console.log(data.not_eqaul);
        setEqualId(data.equal);
        setnotEqualId(data.not_eqaul);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <div>
        <ul>
          {equalId &&
            equalId.length > 0 &&
            equalId.map((equalIdObj, index) => (
              <li key={equalIdObj}>{equalIdObj}</li>
            ))}
        </ul>
        <hr />
        <ul>
          {notEqualId &&
            notEqualId.length > 0 &&
            notEqualId.map((notEqualIdObj, index) => (
              <li key={notEqualIdObj}>{notEqualIdObj}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Test2;
