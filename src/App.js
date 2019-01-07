import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

// Making the App component
class App extends Component {
  constructor() {
    super()

    this.state = {
      endpoint: "http://localhost:5050", // this is where we are connecting to with sockets
      color: 'white'
        ///

      };
    }

    // sending sockets
    send = () => {
      const socket = socketIOClient(this.state.endpoint);
      socket.emit('change color', this.state.color) // change 'red' to this.state.color
    }

    ///

    // adding the function
    setColor = (color) => {
      this.setState({ color })
    }

    ///

    render() {
      // testing for socket connections

      const socket = socketIOClient(this.state.endpoint);
      socket.on('change color', (col) => {
        document.body.style.backgroundColor = col
      })

      return (
        <div style={{ textAlign: "center" }}>
          <button onClick={() => this.send() }>Change Color</button>

          <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
          <button id="red" onClick={() => this.setColor('red')}>Red</button>
          <button id="yellow" onClick={() => this.setColor('yellow')}>yellow</button>
        <button id="green" onClick={() => this.setColor('green')}>green</button>

        </div>
      )
    }
  }
  export default App;
