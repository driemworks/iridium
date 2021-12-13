  import logo from './logo.svg';
import './App.css';

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Nav, Navbar, Container, Card, Button }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar bg="none" variant="dark">
        <Container className="nav-container">
          <Navbar.Brand href="/" className="brand-container">
            <img
              alt=""
              src={ "/owl.png" }
              height="30"
              className="d-inline-block align-top header-image"
            />
            <span className="header-title">Iridium</span>
          </Navbar.Brand>
          <Nav className="me-auto nav-links">
            <Nav.Link className="nav-link" id="docs" href="https://iridium-labs.github.io">Docs</Nav.Link>
            {/* <Nav.Link className="nav-link" id="about">About</Nav.Link>
            <Nav.Link className="nav-link" id="team">Team</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <div className="App-body">
        <div className="call-to-action">
          <div className="text-array">
            <span id="iridium-title">
              IRIS
            </span>
            <span id="iridium-tagline">
              A next-generation decentralized storage network
            </span>
            <div className="bzutton-container">
              <Button variant="outline-primary" className="btn" href="https://github.com/iridium-labs">Visit us on Github</Button>{' '}
              <Button variant="outline-primary" className="btn" href="https://iridium-labs.github.io">Read the Docs</Button>{' '}
            </div>
          </div>
        </div>
        <div className="about">
          <p style={{fontSize: '30px'}}>
            Iris is <b>infrastructure</b> for web 3.0. 
          </p>
          <p style={{width: '50%'}}>
            Built with Substrate and IPFS, Iris provides a decentralized storage layer that can be used by parachains and smart contracts to monetize storage and access to content.
          </p>
        </div>
      </div>
      <div>
        More content coming soon ;)
      </div>
      <footer className="footer">
        <span>
          Built by <a href="https://github.com/iridium-labs">Iridium</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
 