













// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserFunction from "./UserFunction";
// import UserContext from "../utils/UserContext";

class About extends Component {
  constructor() {
    super();

    //console.log("Parent Constructor");
  }
// componentDidMount() {
//   //console.log("Parent Component Did Mount");
// }

render() {
  //console.log("Parent Render");

  return (
    <div className="item-center ml-96">
      <h1>About Class Component</h1>
    
       
      <h2>This is Namaste React Web Series</h2>
      <UserClass/>
    </div>
  );
}
}

export default About;
