import React from "react";
import Image from "next/image";
import styles from "../app/topNavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SessionExpiryNotification from "./SessionExpiration";

export default function TopNavBar() {
  
  const { data: session } = useSession();
  const [tokenExpiring, setTokenExpiring] = useState(false);
  const [showNotification, setShowNotification] = useState(false); // State to control notification visibility
  const [showCountdown, setShowCountdown] = useState(false); // State for countdown display
  const [countdown, setCountdown] = useState(10); // Initial countdown value

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let tokenExpirationTimer;
    if (session?.expires) {
      const expirationTime = session.expires * 1000; // Convert to milliseconds
      const currentTime = new Date().getTime();

      const timeUntilExpiration = expirationTime - currentTime;
      if (timeUntilExpiration > 0) {
        tokenExpirationTimer = setTimeout(() => {
          setTokenExpiring(true);
          setShowNotification(true);
          setShowCountdown(true); // Show countdown when notification appears
        }, timeUntilExpiration - 10000); // Show warning 10 seconds before expiration
      }
    }

    return () => {
      clearTimeout(tokenExpirationTimer);
    };
  }, [session]);

  const handleCloseNotification = () => {
    setShowNotification(false);
    //setShowCountdown(false); // Hide countdown when notification is closed
  };

  useEffect(() => {
    // Load countdown value from localStorage if available
    const storedCountdown = localStorage.getItem("countdown");
    if (storedCountdown) {
      setCountdown(parseInt(storedCountdown, 10));
      setShowCountdown(true);
    }

    let countdownTimer;

    if (showCountdown && countdown > 0) {
      countdownTimer = setInterval(() => {
        setCountdown((prevCountdown) => {
          const newCountdown = prevCountdown - 1;
          // Store the new countdown value in localStorage
          localStorage.setItem("countdown", newCountdown.toString());

          // Redirect when countdown reaches 0
          if (newCountdown === 0) {
            setShowCountdown(false);
            localStorage.removeItem("countdown");
            window.location.reload();
          }
          return newCountdown;
        });
      }, 1000);
    }
    
    return () => {
      clearInterval(countdownTimer);
    };
  }, [showCountdown, countdown]);

  return (
    <div className="description">
      <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="/MCIT_Central_Logo_White_Text.png"
                height={100}
                width={100}
                alt="MCIT Central Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" className="nav-link link-light">
                  Home
                </Nav.Link>
                <Nav.Link href="/courses" className="nav-link link-light">
                  Courses
                </Nav.Link>
                <Nav.Link href="/resources" className="nav-link link-light">
                  General Resources
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
      {showCountdown && (
            <span className="notification">
              Sign out in {countdown} seconds
            </span>
          )}
      <div>
        <SessionExpiryNotification
        show={showNotification}
        onClose={handleCloseNotification}
        />
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
