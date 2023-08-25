# Project Title

MCIT Community Hub

## Overview

This is a platform for students to access MCIT information, course reviews and information, and engage in discussion with peers.

### Project summary

There is currently a lack of organized information and discourse for students to navigate their MCIT experience. MCIT Community Hub provides that opportunity to fill in the gaps. This web application is a one stop platform for students to not only leave and read reviews for courses that they have or plan to take but also engage in a discussion with individuals by leaving comments on reviews. The platform also includes commonly used resources and the links to each resource for ease of reference.

Include the link to your Devpost project page here: [Devpost](https://...)

### Authors

- **Aditya Garg** - AdiG1123 – adigarg@seas.upenn.edu – [GitHub](https://github.com/AdiG1123)
- **Tanner DeVore** - TDeV4 – devoret@seas.upenn.edu – [GitHub](https://github.com/TDeV4)
- **Alex Quan** - alexquan – alexquan@seas.upenn.edu – [GitHub](https://github.com/alexq-prog)

## Usage

This section walks a prospective user through the process of installing and running the project on their local machine. The more detailed and the more accurate, the better. User-friendly instructions will entice prospective users (including judges) to engage more deeply with your project, which could improve your hackathon score.

### Prerequisites

What prerequisites must be installed in order to run your project, and how do you install them?

```
Provide code samples in this fenced code block.
```

### Installation

Give a step-by-step rundown of how to **install** your project.

First, you will need to clone the repository from GitHub.

```
Provide code samples in this fenced code block.
```

Then open a source-code editor like Visual Studio Code to open and run the workspace.

Next, open a new terminal, and you can run any dependencies by using the following command in the terminal:

```
npm install
```

Next, run the development server using the following command in a terminal:

```
npm run dev
```

Lastly, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment

Give a step-by-step rundown of how to **use** your project. Including screenshots in this section can be highly effective for highlighting specific features of your project.

Step 1: There is a tool bar at the top of each page where the user can navigate to different pages.
We have 4 pages that are currently live as follow:
Home - Shows the user's profile, reviews, and course planning schedule
Courses - Shows a list of all courses with course stats on average rating, average workload, and average difficulty compiled from all reviews
General Resources - Shows and provides a link to most commmonly used MCIT resources, development tools, documentation/reference material, and collaboration tools
Feedback - Shows a form where the user can provide feedback on MCIT Community Hub

```
Provide code samples in this fenced code block.
```

Step 2: The user can also create a course review, edit his/her existing review, delete review by accessing their home page. The user can also access an individual course page by clicking into a course in the Courses page. From there, they can also create a review.

From the individual course page, the user can also see all the reviews that were left by other users and click into the anonymous profile of the user to see a few details of the user like their industry, classes taken, and whether or not they are a part time or full time student.

```
Provide code samples in this fenced code block.
```

Step 3: Lastly, the user can also use the course planning tool to drag and drop courses into the semester they desire to take that course. This allows the user to be able to see their schedule until their graduation date.

```
Provide code samples in this fenced code block.
```

## Additional information

### Tools used

Which frameworks, libraries, or other tools did you use to create your project?

- [Next.js](https://nextjs.org/) - Web framework used
- [NextAuth.js](https://next-auth.js.org/) - Open-source authentication solution used

### Acknowledgments

Use anyone else's code? Inspired by a particular project? List / link here.

- [MCITCentral] (https://github.com/mcitcentral/mcitcentral)

### License

If desired, add a section for your license. Reference sites like https://choosealicense.com can help you choose which license meets your needs.

_For example:_

> This package is licensed under the GNU General Public License v3.0 (<a href="https://choosealicense.com/licenses/gpl-3.0/" target="_blank">GPL-3</a>).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
