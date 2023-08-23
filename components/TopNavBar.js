import React from "react";
import Image from "next/image";
import styles from "../app/topNavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function TopNavBar() {
  return (
    <div className="description">
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
                <Nav.Link href="/" className="nav-link link-light">
                  Home
                </Nav.Link>
                <Nav.Link href="/resources" className="nav-link link-light">
                  General Resources
                </Nav.Link>
                <Nav.Link href="/courses" className="nav-link link-light">
                  Courses
                </Nav.Link>
                <Nav.Link href="/mcitconnect" className="nav-link link-light">
                  MCITConnect
                </Nav.Link>
                <Nav.Link href="/feedback" className="nav-link link-light">
                  Feedback
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className={styles.profile}>
        <Link href="/login" target="_self" rel="noopener noreferrer">
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
