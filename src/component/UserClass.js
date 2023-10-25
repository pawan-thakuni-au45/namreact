

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        // name: "Dummy",
        // location: "Default",
      },
    };
    //console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child Component Did Mount");
    // Api call

    const data = await fetch("https://api.github.com/users/pawan-thakuni-au45");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

  console.log(json);
}

componentDidUpdate(){
    //console.log("this is did mount")
}

componentWillUnmount() {
  //console.log("Component Will Unmount");
}

render() {
  console.log(this.props.name + "Child Render");

  const { name, followers
    , avatar_url } = this.state.userInfo;
  return (
    <div className="user-card">
      <img className="w-80" src={avatar_url} />
      <h2 className="font-bold">Name: {name}</h2>
      

      <h3>follower: {followers
      }</h3>
       
      
      <h4 className="font-bold">you can access my github through given link below</h4><a href="https://github.com/pawan-thakuni-au45/namreact"  target="_blank" className="bg-red" >Link text</a>
    </div>
  );
}
}

export default UserClass;