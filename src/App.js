import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container className="nav-container">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={ logo }
              height="30"
              className="d-inline-block align-top"
            />
            <span className="header-title">Iridium</span>
          </Navbar.Brand>
          <Nav className="me-auto nav-links">
            <Nav.Link className="nav-link" id="about">About</Nav.Link>
            <Nav.Link className="nav-link" id="iris">Iris</Nav.Link>
            <Nav.Link className="nav-link" id="team">Team</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="App-body">
        <div id="about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div id="iris">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div id="team">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      {/* <footer>
        This is the footer. 
      </footer> */}
    </div>
  );
}

export default App;
