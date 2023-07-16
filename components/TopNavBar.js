import React from 'react';
import Image from 'next/image';
import styles from '../app/page.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

export default function TopNavBar() {
  return (
      <div className={styles.description}>
      <div>
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
            <img
              src="/MCIT_Central_Logo_White_Text.png"
              height={150}
              width={150}
              alt="MCIT Central Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/resources" className="nav-link link-light">General Resources</Nav.Link>
            <Nav.Link href="/courses"className="nav-link link-light">Courses</Nav.Link>
            <Nav.Link href="/mcitconnect"className="nav-link link-light">MCITConnect</Nav.Link>
            <Nav.Link href="/feedback"className="nav-link link-light">Feedback</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
        <div className={styles.profile}>
          <Link
            href="/myProfile"
            target="_self"
            rel="noopener noreferrer"
          >
            <Image
              src="/profile.svg"
              alt="Profile"
              height={40}
              width={40}
              priority
            />
          </Link>
        </div>
      </div>
  );
}
