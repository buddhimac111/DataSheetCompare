import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ScrollUpBtn from "../components/ScrollUpBtn";
import { useEffect, useState } from "react";
// let equal = [];
// let not_eqaul = [];

// const getUsers = async () => {
//   const res = await fetch("http://localhost:5000/result");
//   const users = await res.json();

//   /* console.log(users["equal"]);
//   console.log(users["not_eqaul"]); */

//   equal.push(users["equal"]);
//   not_eqaul.push(users["not_eqaul"]);

//   // console.log(equal[0][0]);

//   console.log("Equal Ids: ");
//   for (let i = 0; i < equal[0].length; i++) {
//     console.log(equal[0][i]);
//   }

//   console.log("Not Equal Ids: ");
//   for (let i = 0; i < not_eqaul[0].length; i++) {
//     console.log(not_eqaul[0][i]);
//   }
// };

// getUsers();

// fetch("http://localhost:5000/result", {})
//   .then((response) => response.json())
//   .then((response) => {
//     // console.log(response["equal"][0]);
//     // console.log(response["not_eqaul"]);

//     const temp = [];
//     temp.push(response["equal"]);

//     for (let i = 0; i < temp[0].length; i++) {
//       equal.push(temp[0][i]);
//     }
//   });

// const Result = () => {
//   state = { equal: [], not_eqaul: [] };
//   getData = async () =>
//     await fetch("http://localhost:5000/test2", {})
//       .then((response) => response.json())
//       .then((response) => {
//         // console.log(response["equal"][0]);
//         // console.log(response["not_eqaul"]);
//         const temp = [];
//         temp.push(response["equal"]);

//         const temp1 = [];
//         temp1.push(response["not_eqaul"]);

//         let tempEqual = [];
//         for (let i = 0; i < temp[0].length; i++) {
//           tempEqual.push(temp[0][i]);
//           console.log(temp[0][i]);
//           // document.write("<div>" + temp[0][i] + "</div>");
//           // this.setState({ equal: tempEqual });
//         }

//         let tempNotEqual = [];
//         for (let i = 0; i < temp1[0].length; i++) {
//           tempNotEqual.push(temp1[0][i]);
//           console.log(temp1[0][i]);
//         }

//         this.setState({ equal: tempEqual, not_eqaul: tempNotEqual });
//       });
//   componentDidMount() {
//     this.getData();
//   }
//   render() {
//     return (
//       <>
//       <NavBar />
      // <div className="d-flex h-100">
      //   <div className="w-100 p-4" id="matchBox">
      //     <h2 className="pb-3">Matching IDs</h2><hr />
      //     {/* {this.state.equal.map((data) => {
      //       return <div key={data}><li className="pb-2">{data}</li></div>;
      //     })} */}
      //   </div>

      //   <div className=" w-100 p-4" id="unMatchBox">
      //   <h2 className="pb-3">Unmatching IDs</h2><hr />
      //     {/* {this.state.not_eqaul.map((data) => {
      //       return <div key={data}><li className="pb-2">{data}</li></div>;
      //     })} */}
      //   </div>
      // </div>
//       <ScrollUpBtn />
//       </>
//     );
//   }
// }

// export default Result;


const Result = () => {
  const [equalId, setEqualId] = useState([]);
  const [notEqualId, setnotEqualId] = useState([]);

  const fetchData = async () => {
    await fetch("http://localhost:5000/getresult")
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
      <div className="d-flex h-100">
        <div className="w-100 p-4" id="matchBox">
          <h2 className="pb-3">Matching IDs</h2><hr />
          {equalId &&
            equalId.length > 0 &&
            equalId.map((equalIdObj, index) => (
              <li key={equalIdObj}>{equalIdObj}</li>
            ))}
        </div>

        <div className=" w-100 p-4" id="unMatchBox">
        <h2 className="pb-3">Unmatching IDs</h2><hr />
        {notEqualId &&
            notEqualId.length > 0 &&
            notEqualId.map((notEqualIdObj, index) => (
              <li key={notEqualIdObj}>{notEqualIdObj}</li>
            ))}
        </div>
      </div>
      <ScrollUpBtn />
    </>
  );
};

export default Result;