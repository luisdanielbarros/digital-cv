//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//My Components
import NavigationMenu from "./components/navigation/navigationMenu.js";
import Profile from "./components/main/profile.js";
import Next from "./components/main/next.js";

function App() {
  return (
    <div className="App bg-complementary">
      <Router>
        <NavigationMenu />
        <Container fluid>
          <Switch>
            <Route path="/home">
              <Profile />
            </Route>
            <Route path="/next">
              <Next />
            </Route>
            <Route path="/">
              <Profile />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
