import React, { Component } from "react";
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

class Res extends Component {
  state = { equal: [], not_eqaul: [] };
  getData = async () =>
    await fetch("http://localhost:5000/result", {})
      .then((response) => response.json())
      .then((response) => {
        // console.log(response["equal"][0]);
        // console.log(response["not_eqaul"]);
        const temp = [];
        temp.push(response["equal"]);

        const temp1 = [];
        temp1.push(response["not_eqaul"]);

        let tempEqual = [];
        for (let i = 0; i < temp[0].length; i++) {
          tempEqual.push(temp[0][i]);
          console.log(temp[0][i]);
          // document.write("<div>" + temp[0][i] + "</div>");
          // this.setState({ equal: tempEqual });
        }

        let tempNotEqual = [];
        for (let i = 0; i < temp1[0].length; i++) {
          tempNotEqual.push(temp1[0][i]);
          console.log(temp1[0][i]);
        }

        this.setState({ equal: tempEqual, not_eqaul: tempNotEqual });
      });
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <div>Equal Data</div>
        <div>
          {this.state.equal.map((data) => {
            return <div key={data}>{data}</div>;
          })}
        </div>
        <div>Not Equal Data</div>
        <div>
          {this.state.not_eqaul.map((data) => {
            return <div key={data}>{data}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Res;
