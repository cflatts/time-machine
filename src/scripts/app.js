import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

import TimeView from './TimeView.js'

const app = function() {

    const TimeModel = Backbone.Model.extend ({
        defaults: {
            time: 'current'
        }
    })

    const TimeCollection = Backbone.Collection.extend({
        model: TimeModel
    })

    ReactDOM.render(<TimeView year = {new Date} timeColl = {new TimeCollection()} />, document.querySelector('.container'))
}

app()