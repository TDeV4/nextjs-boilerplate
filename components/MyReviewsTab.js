import { Button } from "react-bootstrap";
import styles from "../app/page.module.css";
import CreateReview from "./CreateReview";
import React, { Component, useState } from "react";

const DUMMY_COURSE_DATA = [
  {
    courseID: 591,
    courseName: "Introduction to Software Development",
  },
  {
    courseID: 592,
    courseName: "Mathematical Foundations of Computer Science",
  },
  {
    courseID: 593,
    courseName: "Introduction to Computer Systems",
  },
  {
    courseID: 594,
    courseName: "Data Structures and Software Design",
  },
];

const DUMMY_PROF_DATA = [
  {
    courseID: 591,
    professor: "Brandon Krakowsky",
  },
  {
    courseID: 592,
    professor: "Val Tannen",
  },
  {
    courseID: 593,
    professor: "Tom Farmer",
  },
  {
    courseID: 594,
    professor: "Nan Zheng",
  },
  {
    courseID: 594,
    professor: "Raphael Rubin",
  },
];

export default function MyReviewsTab() {
  const [createReviewIsOpen, setCreateReviewIsOpen] = useState(false);

  function createReview() {
    setCreateReviewIsOpen(true);
  }

  return (
    <div>
      <h1>My Reviews</h1>
      <CreateReview courseData={DUMMY_COURSE_DATA} profData={DUMMY_PROF_DATA} />
    </div>
  );
}
