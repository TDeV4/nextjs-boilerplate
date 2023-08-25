# Project Title

MCIT Community Hub

## Overview

This is a web platform for students to access MCIT information, course information and student reviews, and engage in discussion with peers.

### Project summary

There is currently a lack of organized information and discourse for students to navigate their MCIT experience. MCIT Community Hub provides that opportunity to fill in the gaps. This web application is a one stop platform for students to not only leave and read reviews for courses that they have or plan to take but also engage in a discussion with individuals by leaving comments on reviews. The platform also includes commonly used resources and the links to each resource for ease of reference. Because a user creates a profile upon login, students can also see the anonymous profile for each review to help with their course planning process.

Include the link to your Devpost project page here: [Devpost](https://...)

### Authors

- **Aditya Garg** - AdiG1123 – adigarg@seas.upenn.edu – [GitHub](https://github.com/AdiG1123)
- **Tanner DeVore** - TDeV4 – devoret@seas.upenn.edu – [GitHub](https://github.com/TDeV4)
- **Alex Quan** - alexquan – alexquan@seas.upenn.edu – [GitHub](https://github.com/alexq-prog)

## Usage

This section walks a prospective user through the process of installing and running the project on their local machine. The more detailed and the more accurate, the better. User-friendly instructions will entice prospective users (including judges) to engage more deeply with your project, which could improve your hackathon score.

### Prerequisites

What prerequisites must be installed in order to run your project, and how do you install them?

There are no prerequisites that must be installed to run the project as you can visit the following URL to directly access and sign-in to the website. Please use Google Chrome to login to the site.

https://mcitcommunityhub.vercel.app/login

### Installation

Give a step-by-step rundown of how to **install** your project.

As mentioned previously, you can directly access the website using the above link. However, if you would like to view the code, you can also run the project locally using your current computer by following the steps below.

First, you will need to clone these two repositories from GitHub. The first link is the back-end, and the second link is the front-end.
https://github.com/AdiG1123/MCITCommunityHub
https://github.com/TDeV4/nextjs-boilerplate

```
git clone https://github.com/TDeV4/nextjs-boilerplate.git
git clone https://github.com/AdiG1123/MCITCommunityHub.git
```

Then open a source-code editor like Visual Studio Code to open and open two windows in Visual Studio Code. Open both workspaces in two separate windows.

Next, open a new terminal in both windows, and you can run any dependencies by using the following command in each terminal.

```
npm install
```

Next, for front-end, run the development server using the following command in a terminal:

```
npm run dev
```

For the back-end, run the development server using the following command in a terminal:

```
npm start
```

Lastly, open [http://localhost:3000](http://localhost:3000) with your browser to see the result, or you can visit the following URL and sign-in with a seas.upenn.edu email address. Please make sure you are on Google Chrome.

https://mcitcommunityhub.vercel.app/login

### Deployment

Give a step-by-step rundown of how to **use** your project. Including screenshots in this section can be highly effective for highlighting specific features of your project.

Step 1: First, open Google Chrome, copy and paste the following link to your browser, and press enter.
https://mcitcommunityhub.vercel.app/login

Step 2: Next, click sign-in, and you will need to sign-in with a seas.upenn.edu email address in order to access the site.

Step 3: Navigate the site, and below is additional information on each page.

There is a tool bar at the top of each page where the user can navigate to different pages. We have 4 pages that are currently live as follows:

- Home: Shows the user's profile, reviews, and course planning schedule
- Courses: Shows a list of all courses with course stats on average rating, average workload, and average difficulty compiled from all reviews
- General Resources: Shows and provides a link to most commmonly used MCIT resources, development tools, documentation/reference material, and collaboration tools
- Feedback: Shows a form where the user can provide feedback on MCIT Community Hub

The user can also create a course review, edit his/her existing review, delete review by accessing their home page. The user can also access an individual course page by clicking into a course in the Courses page. From there, they can also create a review.

From the individual course page, the user can also see all the reviews that were left by other users and click into the anonymous profile of the user to see a few details of the user like their industry, classes taken, and whether or not they are a part time or full time student.

Lastly, the user can also use the course planning tool to drag and drop courses into the semester they desire to take that course. This allows the user to be able to see their schedule until their graduation date.

## Additional information

### Tools used

Which frameworks, libraries, or other tools did you use to create your project?

- [Next.js](https://nextjs.org/) - Web framework used
- [NextAuth.js](https://next-auth.js.org/) - Open-source authentication solution used
- [Vercel](https://vercel.com/) - Used to deploy web application
- [React.js](https://react.dev/) - Used library to build user interface
- [React-Bootstrap](https://react-bootstrap.netlify.app) - Used ready-made templates for building the front-end
- [PostgreSQL](https://www.postgresql.org/) - Database management system used to store data
- [SQL](https://www.w3schools.com/sql/) - Lanaugage used to query the database
- [JavaScript](https://www.javascript.com/) - Language used in the front-end to create dynamic functionality on the web
- [CSS](https://www.w3schools.com/css/) - Language used in the front-end to style web pages
- [HTML](https://www.w3schools.com/html/) - Language used in the front-end to create website
- [Python](https://www.python.org/)- Language used to populate the database in the back-end
- [GitHub](https://github.com/) - Used code hosting platform for version control and collaboration
- [Docker](https://www.docker.com/) - Used initially to deploy application in sandbox
- [Supabase](https://supabase.com/) - Used database
- [Render](https://render.com/) - Used for APIs
- [Express-NodeJS](https://expressjs.com/) - Used framework for back-end
- [OAuth](https://developers.google.com/identity/protocols/oauth2) - Used to access Google APIs for authentication to the website
- [Postman](https://www.postman.com/) - Used to test the APIs and input data

### Acknowledgments

Use anyone else's code? Inspired by a particular project? List / link here.

- [MCITCentral] (https://github.com/mcitcentral/mcitcentral)

### License

N/A - We do not have a need for a license at this time.

### Known Bugs

Below are a couple of known bugs that we plan to fix in the next version of the project.

- We have a timer to logout the user when the user's access token expires. This timer becomes inaccurate if you are switching between the different pages frequently.
- THe login and Google authentication does not work if you are using Firefox.
