import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

const app = function() {

    var _getCurrentYear = function() {
        var d = new Date ()
        return d.getFullYear()
    }


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

        _reverseTime: function() {
            this.state.clickedButton = 'ahead'
            this.state.year +=1
            this.setState ({
                date: this.state.date,
                clickedButton: this.state.clickedButton
            })
        },

        _forwardTime: function() {
            this.state.clickedButton = 'behind'
            this.state.year -=1
            this.setState ({
                date: this.state.date,
                clickedButton: this.state.clickedButton
            })
        },

        _stop: function() {
            this.state.clickedButton = 'ahead'
                this.setState ({
                    clickedButton: this.state.clickedButton
                })
                clearInterval(this.future)
                clearInterval(this.past)
        },

        _decrease: function() {
            this.future = setInterval(this._forwardTime, 500)
        },

        _increase: function() {
            this.future = setInterval(this._reverseTime, 500)
        },

        render: function() {

            var behindButton =''
            var aheadButton = ''
            var randomButton = ''
            var stopButton = ''

            if(this.state.activeButton === 'behind') {
                behindButton = 'behind'
            }
            else if (this.state.activeButton === 'ahead') {
                aheadButton = 'ahead'
            }
            else if (this.state.activeButton === 'stop') {
                aheadButton = 'stop'
            }
            else if (this.state.activeButton === 'random') {
                randomButton = 'random'
            }

            return (
            <div className = 'appContainer'>
                <div className = 'header'>Time Machine</div>
                <div className = 'machine'>
                    <div className = 'machineHeader'>Choose your time traveling adventure!</div>
                    <div className = 'year'>{this.state.date}</div>
                    <button className = 'back' onClick = {this._reverseTime}>Back</button>
                    <button className = 'random'>Random</button>
                    <button className = 'stop'>I'm here!</button>
                    <button className = 'forward' onClick = {this._forwardTime}>Forward</button>
                </div>
            </div>
              )
        }

    })

    ReactDOM.render(<TimeView date = {new Date()} />, document.querySelector('.container'))
}

app()