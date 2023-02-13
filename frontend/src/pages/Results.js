let equal = [];
let not_eqaul = [];

const getUsers = async () => {
  const res = await fetch("http://localhost:5000/result");
  const users = await res.json();

  /* console.log(users["equal"]);
  console.log(users["not_eqaul"]); */

  equal.push(users["equal"]);
  not_eqaul.push(users["not_eqaul"]);

  // console.log(equal[0][0]);

  console.log("Equal Ids: ");
  for (let i = 0; i < equal[0].length; i++) {
    console.log(equal[0][i]);
  }

  console.log("Not Equal Ids: ");
  for (let i = 0; i < not_eqaul[0].length; i++) {
    console.log(not_eqaul[0][i]);
  }
};

getUsers();

const Results = () => {
  return (
    <>
      <div>Results Page</div>
    </>
  );
};

export default Results;
