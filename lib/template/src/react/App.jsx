import React from 'react'
import { render } from 'react-dom'
import HelloWorld from './components/HelloWorld'
<% if (isNeedStore) { %>
import { Provider } from 'react-redux'
import store from './app/store'
<% } %>

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: 'hello world',
    }
  }

  render() {
    return (
      <div>
        <HelloWorld msg={this.state.msg} />
      </div>
    )
  }
}

render(
  <% if (isNeedStore) { %>
  <Provider store={store}><App /></Provider>,
  <% } else { %>
  <App />,
  <% } %>
  document.getElementById('app')
)
