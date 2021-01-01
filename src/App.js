import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import UserForm from "./screens/UserForm"
import Submit from "./screens/Submit"
import history from "./components/history"

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={UserForm} exact />
        <Route path="/Submit" component={Submit} />
      </Switch>
    </Router>
  )
}

export default App
