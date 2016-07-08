import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

const app = function() {

    var getCurrentYear = function() {
        var d = new Date ()
        return d.getFullYear()
    }


    const TimeView = React.createClass ({

        getInitialState: function() {
            return {
                date: getCurrentYear(),
                clickedButton: ''
            }
        },

        _reverseTime: function() {
            this.state.clickedButton = 'behind'
            this.state.date -=1
            this.setState ({
                date: this.state.date,
                clickedButton: this.state.clickedButton
            })
        },

        _forwardTime: function() {
            this.state.clickedButton = 'ahead'
            this.state.date +=1
            this.setState ({
                date: this.state.date,
                clickedButton: this.state.clickedButton
            })
        },

        _decrease: function() {
            this.past = setInterval(this._reverseTime, 1000)
        },

        _increase: function() {
            this.future = setInterval(this._increaseTime, 1000)
        },

        _stop: function() {
            this.state.clickedButton = 'stop'
                this.setState ({
                    clickedButton: this.state.clickedButton
                })
                clearInterval(this.future)
                clearInterval(this.past)
        },

        render: function() {
            console.log(this._increase)
            var behindButton =''
            var aheadButton = ''
            var randomButton = ''
            var stopButton = ''

            if(this.state.clickedButton === 'behind') {
                behindButton = 'behind'
            }
            else if (this.state.clickedButton === 'ahead') {
                aheadButton = 'ahead'
            }
            else if (this.state.clickedButton === 'stop') {
                aheadButton = 'stop'
            }

            return (
            <div className = 'appContainer'>
                <div className = 'header'>Time Machine</div>
                <div className = 'machine'>
                    <div className = 'machineHeader'>Choose your time traveling adventure!</div>
                    <div className = 'year'>{this.state.date}</div>
                    <button className = 'back' id = {this.behindButton} onClick = {this._decrease}>Back</button>
                    <button className = 'stop' id = {this.stopButton} onClick = {this._stop}>I'm here!</button>
                    <button className = 'forward' id = {this.aheadButton} onClick = {this._increase}>Forward</button>
                </div>
            </div>
              )
        }

    })

    ReactDOM.render(<TimeView />, document.querySelector('.container'))
}

app()