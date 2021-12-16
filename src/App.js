  import logo from './logo.svg';
import './App.css';

import { faGithub, faMedium, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
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
            <div className="button-container">
              <Button variant="outline-primary" className="btn" href="https://github.com/iridium-labs">Visit us on Github</Button>{' '}
              <Button variant="outline-primary" className="btn" href="https://iridium-labs.github.io">Read the Docs</Button>{' '}
            </div>
          </div>
          <div className='fa-icons'>
          <a href="https://github.com/iridium-labs">
            <FontAwesomeIcon icon={faGithub} id='fa-icon' />
          </a>

          <a href="https://discord.gg/e8dMetu5yZ">
            <FontAwesomeIcon icon={faDiscord} id='fa-icon' />
          </a>

          <a href="https://medium.com/iridium">
            <FontAwesomeIcon icon={faMedium} id='fa-icon' />
          </a>

          <a href="https://twitter.com/Iridium_labs">
            <FontAwesomeIcon icon={faTwitter} id='fa-icon' />
          </a>
        </div>
        </div>
        <div className="about">
          <div className="info-container">
            <p style={{fontSize: '30px'}}>
              Iris is <b>infrastructure</b> for web 3.0. 
            </p>
            <p>
              Built with Substrate and IPFS, Iris provides a decentralized storage layer that can be used by parachains and smart contracts to monetize storage and access to content.
            </p>
            <p>
              Iris treats owned data as a unique <b>asset class</b>, backed by some initial owner-defined value in our token, the OBOL. Access to content is provisioned and managed by minting assets from this class and asset ownership is synonymous with access to the underlying content.
            </p>
          </div>
          <div className="demo-container"> 
            <p style={{fontSize: '30px'}}>
              Demo
            </p>
            <p>
              The steps to run Iris node and UI is outlined in chapter two of our documentation.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ATxOtEnFmTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
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
 