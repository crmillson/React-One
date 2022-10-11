import React from 'react'
import TimestampFormatter from './TimestampFormatter'

const cityTimeZones = [
    ['New York', 'America/New_York'],
    ['Denver', 'America/Denver'],
    ['Phoenix', 'America/Phoenix'],
    ['Los Angeles', 'America/Los_Angeles']
]

export default class GalvanizeTimes extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            timeZone: 'America/New_York'
        }
    }
    //TODO: implement setTimeZone
    setTimeZone () {
    }

    render() {
        const clickableCities = cityTimeZones.map(cityTZ => {
            return (
                <a  key={cityTZ[0]}
                    id={cityTZ[0]}
                    onClick={() => this.setTimeZone(cityTZ[1])}>
                    {cityTZ[0]}
                </a>
            )
        })

        return (
            <div>
                <h1>Click on a city to see what time it is</h1>
                {clickableCities}
                {/* TODO: render TimestampFormatter component*/}
            </div>
        )
    }
}