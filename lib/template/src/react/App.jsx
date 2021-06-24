import React from 'react'
import { render } from 'react-dom'
<%_ if (isNeedRouter) { _%>
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
<%_ } _%>
<%_ if (isNeedStore) { _%>
import { Provider } from 'react-redux'
import { store } from './app/store'
<%_ } _%>
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: 'hello world',
    }
  }

  render() {
    return (
      <%_ if (isNeedRouter) { _%>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              唐某人的hello world
            </Route>
            <Route path="/">
              <HelloWorld msg={this.state.msg} />
            </Route>
          </Switch>
        </div>
      </Router>
      <%_ } else { _%>
      <div>
        <HelloWorld msg={this.state.msg} />
      </div>
      <%_ } _%>
    )
  }
}

render(
  <%_ if (isNeedStore) { _%>
  <Provider store={store}>
    <App />
  </Provider>,
  <%_ } else { _%>
  <App />,
  <%_ } _%>
  document.getElementById('app'),
)
