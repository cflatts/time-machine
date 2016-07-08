import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

const app = function() {


    const TimeView = React.createClass ({

        getInitialState: function() {
            return {
                date: _getCurrentYear(),
                clickedButton: ''
            }
        },

        componentWillMount: function() {
            Backbone.Events.on('goBack', () => {
                this.setState ({
                    date: this.props.date + 1
                })
            })
        },

        _reverseTime: function(evt) {
            // Backbone.Events.trigger('goBack')
            return (this.props.date.getFullYear()) - 1
        },

        _forwardTime: function () {
            this.state.clickedButton = 'ahead'
            this.state.year +=1
            this.setState ({
                date: this.state.date,
                clickedButton: this.state.clickedButton
            })
        },

        _getCurrentYear: function() {
            return this.props.date.getFullYear()

        },

        render: function() {
            return (
            <div className = 'appContainer'>
                <div className = 'header'>Time Machine</div>
                <div className = 'machine'>
                    <div className = 'machineHeader'>Choose your time traveling adventure!</div>
                    <div className = 'year'>{this._getCurrentYear()}</div>
                    <button className = 'back' onClick = {this._reverseTime}>Back</button>
                    <button className = 'random'>Random</button>
                    <button className = 'forward' onClick = {this._forwardTime}>Forward</button>
                </div>
            </div>
              )
        }

    })

    ReactDOM.render(<TimeView date = {new Date()} />, document.querySelector('.container'))
}

app()