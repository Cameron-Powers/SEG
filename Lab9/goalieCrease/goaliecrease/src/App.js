import React, { Component } from 'react';
import ManageApp from './manageApp'

class App extends Component {
    render(){
        return (
            <div className="App">
                <div class="middle">
                    <img src={require('./images/logo.png')} alt="Site logo"/> 
                    <div class="middleButtons">
                        <ManageApp /> 
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
