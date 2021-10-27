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
            <Nav.Link className="nav-link" id="about">About</Nav.Link>
            <Nav.Link className="nav-link" id="iris">Iris</Nav.Link>
            <Nav.Link className="nav-link" id="team">Team</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="App-body">
        <div className="call-to-action">
          <div className="text-array">
            <span id="iridium-title">
              Iridium
            </span>
            <span id="iridium-tagline">
              Building the future of decentralized storage
            </span>
            <Button variant="outline-primary" className="btn" href="https://github.com/iridium-labs">Visit us on Github</Button>{' '}
          </div>
        </div>
        <div className="about">
          {/* TODO */}
          Under Construction
        </div>
        <div className="iris">
          {/* TODO */}
        </div>
        <div className="team">
          <span className="section-title">
            Team
          </span>
          <div className="cards-container">
            <Card className="card">
              <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/17711620?v=4/100px180" />
              <Card.Body>
                <Card.Title>Tony Riemer</Card.Title>
                <Card.Text>
                  <span>
                    Founder and Lead Engineer
                  </span>
                </Card.Text>
                <div className="icon-container">
                  <a id="git-icon" href="https://github.com/driemworks">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                  </a>
                  <a href="https://github.com/driemworks">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                  </a>
                  <a href="https://github.com/driemworks">
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                  </a>
                </div>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/22081838?v=4/100px180" />
              <Card.Body>
                <Card.Title>Atoshem Ghebrehiwet</Card.Title>
                <Card.Text>
                  <span>
                    Software Engineer
                  </span>
                </Card.Text>
                <div className="icon-container">
                <a id="git-icon" href="https://github.com/driemworks">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                  </a>
                  <a href="https://github.com/driemworks">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                  </a>
                  <a href="https://github.com/driemworks">
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <footer className="footer">
        <span>
          Built by <a>Iridium</a> @ 2021
        </span>
      </footer>
    </div>
  );
}

export default App;
