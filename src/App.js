//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//My Components
import NavigationMenu from "./components/navigationMenu/navigationMenu.js";
import Main from "./components/main/main.js";
function App() {
  return (
    <div className="App bg-complementary">
      <Router>
        <NavigationMenu />
        <Container>
          <Switch>
            <Route path="/home">
              <Main />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
