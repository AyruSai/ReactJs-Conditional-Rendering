import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  // 1st type
  //  Using an If..Else statement for Conditional Rendering
  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button type="button">Logout</button>
  //     }
  //     return <button type="button">Login</button>
  //   }

  render() {
    // 2nd type
    //   Using Element Variables for Conditional Rendering
    // const {isLoggedIn} = this.state
    // let authButton
    // if (isLoggedIn === true) {
    //   authButton = <button type="button">Logout</button>
    // } else {
    //   authButton = <button type="button">Login</button>
    // }

    // 3rd type
    // Using Ternary Operator for Conditional Rendering
    // const {isLoggedIn} = this.state

    // 4th type
    // Using Logical && Operator
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hi" />
        {/* 
        1st type
        Using an If..Else statement for Conditional Rendering
        {this.renderAuthButton()} 
        */}
        {/* 
        2nd type
        Using Element Variables for Conditional Rendering
        {authButton} 
        */}
        {/* 
        3rd type
        Using Ternary Operator for Conditional Rendering
        {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">Login</button>
        )} */}
        {/* 
        3rd type 
        To show nothing we use "null" 
        {isLoggedIn ? <button type="button">Logout</button> : null}
        */}
        {/* 
        4th type
        Using Logical && Operator 
        */}
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App
