
let name = "Irfan Rajput";
let c = 5+2;
let car_obj = {name:'corola',color:'white'}
let x = 10;
function User() {
  return (
    <div className="App">
        <h1>{name} {c} {car_obj.name}</h1>
        <h2>{(x>50) ? "Yes" : "NO"}</h2>
    </div>
  );
}

export default User;
