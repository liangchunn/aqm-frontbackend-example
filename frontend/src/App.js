import React, { Component } from 'react';

const server = 'http://localhost:8081/';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    requestBackend = () => {
        // fetch from the backend (be sure that express is running in another terminal)
        fetch(server, {
            method: 'get'
        }).then((response) => {
            // transfer the results into json
            response.json()
              .then((data) => {
                  // update the state of this component. this will trigger a re-render.
                  this.setState({
                    data
                  })
              })
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
        <button onClick={this.requestBackend}>Request Data</button>
        <br/>
        <code>{JSON.stringify(this.state.data, null, 2)}</code>
      </div>
        );
    }
}

export default App;