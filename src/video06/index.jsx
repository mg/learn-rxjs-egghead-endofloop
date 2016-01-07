// https://egghead.io/lessons/javascript-introducing-the-observable
import React from 'react'
import { Observable } from 'rx'

export default class Video06 extends React.Component {
  render() {
    return (
      <div>
        <h2>Video 6</h2>
        <button ref={dom => this.button= dom}>Click me</button>
      </div>
    )
  }

  componentDidMount() {
    let clicks= Observable.fromEvent(this.button, 'click')
    let subscription= clicks.forEach(
      ev => {
        alert('clicked')
        subscription.dispose()
      },
      err => console.log('ERROR!', err),
      () => console.log('done')
    )
  }
}
