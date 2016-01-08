// https://egghead.io/lessons/javascript-simple-drag-and-drop-with-observables
import React from 'react'
import { Observable } from 'rx'

export default class Video08 extends React.Component {
  render() {
    return (
      <div>
        <h2>Video 8</h2>
        <div style={styles.parent} ref={e => this.parent= e}>
          <div style={{...styles.widget, left: this.state.left, top: this.state.top}} ref={e => this.widget= e}>
            Drag me
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const parentBounds= this.parent.getBoundingClientRect()

    let mouseDowns= Observable.fromEvent(this.widget, 'mousedown')
    let parentMouseMoves= Observable.fromEvent(this.parent, 'mousemove')
    let parentMouseUps= Observable.fromEvent(this.parent, 'mouseup')

    // for each mouse down event
    // return all following mouse move events
    // until the first mouse up event
    let drags=
      mouseDowns
        .map(() => parentMouseMoves.takeUntil(parentMouseUps))
        .concatAll()
        .map(ev => { return { left:ev.clientX, top: ev.clientY}})

    this.dragSubscription=
      drags.forEach(
        ({left, top}) => {
          this.setState({
            left: left - parentBounds.left,
            top: top - parentBounds.top,
          })
        }
      )
  }

  componentDidUnmount() {
    this.dragSubscription.dispose()
  }

  state= {left: 0, top: 0}
}

const styles= {
  parent: {
    position: 'relative',
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },

  widget: {
    position: 'absolute',
    width: 80,
    height: 20,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    cursor: '-webkit-grab',
  },
}
