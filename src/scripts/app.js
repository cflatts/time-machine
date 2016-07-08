import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

const app = function() {

    const TimeView = React.createClass ({

        getInitialState: function() {
            return {
                date: this.props.date
            }
        },

        componentWillMount: function() {
            Backbone.Events.on('goBack', () => {
                this.setState ({
                    date: this.props.date + 1
                })
            })
        },

        render: function() {
            return (
            <div className = 'appContainer'>
                <Header />
                <MachineView date ={this.state.date} />
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

        _reverseTime: function(evt) {
            // Backbone.Events.trigger('goBack')
            {this._getCurrentYear} +1
        },

        _forwardTime: function () {
            return (this.props.date.getFullYear()) + 1
        },

        _getCurrentYear: function() {
            var currentYear = this.props.date.getFullYear()
            return currentYear
        },

        render: function () {
            console.log(this._forwardTime())
            return (
                <div className = 'machine'>
                    <div className = 'machineHeader'>Choose your time traveling adventure!</div>
                    <div className = 'year'>{this._getCurrentYear()}</div>
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