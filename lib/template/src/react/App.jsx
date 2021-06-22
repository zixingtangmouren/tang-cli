import React from 'react'
import { render } from 'react-dom'
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: 'hello world',
    }
  }

  render() {
    return <div><HelloWorld msg={this.state.msg} /></div>
  }
}

render(
  <App />,
  document.getElementById('app')
)