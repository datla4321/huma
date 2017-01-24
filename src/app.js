import 'stylesheets/base'

//import React from 'react'
import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import Container from 'javascripts/container'

class App extends Component {
    render(){
        return (
            <div>
                <Container />
            </div>    
        );
    }
}

//ReactDOM.render(<App />, document.getElementById('app'))

ReactDOM.render(<Container />, document.querySelector('#main'))
