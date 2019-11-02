import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  // onSearch = () => {
  //   this.setState({
  //     size: userIput
  //   })

  // }

  render() {
    return (
      <div>
        {/* does nothing except update the URL bar in the browser */}
        <Link to="/about">GO TO ABOUT</Link>
        {/* <a href="/about">CLICK HERE</a> <=== wrong, because page reload ! */}
        <div>
          <h3>Welcome to my portfolio page! My name is</h3>
          <h1>Ana</h1>
          <p>and I'm Web Developer!</p>
        </div>
      </div>
    )
  }
}

export default Home;