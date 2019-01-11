import React, { Component } from 'react'
import * as socketIOClient from 'socket.io-client'
import axios from 'axios';

// Making the App component
class App extends Component {
  constructor() {
    super()

    this.state = {
      endpoint: "http://localhost:5050/", // this is where we are connecting to with sockets
      color: 'white'
        ///

      };
    }

    // sending sockets
    send = () => {
      this.socket = socketIOClient(this.state.endpoint,
        {
          secure: true,
          rejectUnauthorized: false,
        });
      console.log('send: ', this.state.color);
      axios.get(`${this.state.endpoint}api?color=${this.state.color}`)
      .then(res => {
        this.socket.on('change color', (col) => {
          console.log('listen: ', col);
          return(
            document.body.style.backgroundColor = col
          );
        })
      })
    }

    // adding the function
    setColor = (color) => {
      this.setState({ color })
    }

    ///

    render() {
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
