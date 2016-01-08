// https://egghead.io/lessons/javascript-using-the-map-method-with-observable
import React from 'react'
import { Observable } from 'rx'

export default class Video07 extends React.Component {
  render() {
    return (
      <div>
        <h2>Video 7</h2>
        <button ref={dom => this.button= dom}>Click me</button>
      </div>
    )
  }

  componentDidMount() {
    let clicks= Observable.fromEvent(this.button, 'click')
    let points= clicks.map(e => { return {x: e.clientX, y: e.clientY}})

    let subscription= points.forEach(
      point => {
        alert(`clicked: ${JSON.stringify(point)}`)
        subscription.dispose()
      },
      err => console.log('ERROR!', err),
      () => console.log('done')
    )
  }
}
