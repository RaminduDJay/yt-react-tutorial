const fname = "Nanduni";
const lname = "Jayasinghe";

//create object
const myObj = {
  fname: `${fname}`,
  lname: `${lname}`,
  city: "Colombo",
};

function Main(props) {

    console.log(props)
  //object destructuring
  const { city } = myObj;
  return (
    <div>
      This is the main component
      <h5>{myObj.fname + " " + myObj.lname}</h5>
      <h6>{city}</h6>
    </div>
  );
}

export default Main;
