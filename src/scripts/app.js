import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

const app = function() {

    const TimeView = React.createClass ({

        getInitialState: function () {
            date: this.props.date.getFullYear()
        },

        render: function() {
            // console.log(this.props.date.getFullYear())
            return (
            <div className = 'appContainer'>
                <Header />
                <MachineView />
            </div>
              )
        }

    })

    const Header = React.createClass ({
        render: function () {
            return (
                <div className = 'header'>Time Machine</div>
                )
        }
    })

    const MachineView = React.createClass ({

        _reverseTime: function() {
            alert("You're going back in time!")
        },

        _forwardTime: function () {
            alert("You're going forward in time!")
        },

        render: function () {
            return (
                <div className = 'machine'>
                    <div className = 'machineHeader'>Choose your time traveling adventure!</div>
                    <div className = 'year'>2016</div>
                    <button className = 'back' onClick = {this._reverseTime}>Back</button>
                    <button className = 'random'>Random</button>
                    <button className = 'forward' onClick = {this._forwardTime}>Forward</button>
                </div>
                )
        }
    })

    ReactDOM.render(<TimeView date = {new Date()} />, document.querySelector('.container'))
}

app()