# Nutmeg Kingdom README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Nutmeg Kingdom** is a gardening web app for Nutmeggers (people that live in Connecticut or elsewhere in zone 7a) to track the dates of when to plant specific plants year round. 


<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

The **Nutmeg Kingdom** MVP will track dates across all 4 seasons for different plants and show users when is the best time to plant. Users will be able to add new plants with their optimal plant dates to the database. Users will be able to create an account and add plants to the database to be able to edit them later if needed. 

<br>

### Goals

- _Frontend built with React, backend with Rails_
- _Full CRUD_
- _Responsively styled with Flexbox to look great on desktop and mobile_
- _Able to add user generated data to the database including a picture upload_

<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications._ |
|   React Router   | _React Router is a collection of navigational components that compose declaratively with your application._ |
|   React Axios    | _Axios Component for React with child function callback. This is intended to allow in render async requests._ |
|      Rails       | _Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages._ |
|      BCrypt      | _bcrypt() is a sophisticated and secure hash algorithm designed by The OpenBSD project for hashing passwords. The bcrypt Ruby gem provides a simple wrapper for safely handling passwords._ |
|       JWT        | _JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key._ |



<br>

### Client (Front End)

#### Wireframes

[Wireframe Link] (https://whimsical.com/nutmeg-kingdom-CNQS7fWUSfm4dHhSmUyf9N)



#### Component Tree


[Component Tree Link](https://drive.google.com/file/d/1cm7x-TCS2Qkl83hPmmE6FVL7CJK3mW7v/view?usp=sharing)

#### Component Architecture



``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Navbar
      |__ Plants
      |__ Form
      |__ Home
      |__ Layout
      |__ MainContainer
      |__ Login
      |__ Register
      |__ Create
      |__ Edit
      |__ Delete
      |__ Seasons
      |__ Button
|__ services/

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Rails backend       |    H     |     5 hrs      |     2 hrs     |     TBD     |
| React frontend      |    H     |     5 hrs      |     1 hrs     |     TBD     |
| Form builds         |    M     |     6 hrs      |     1 hrs     |     TBD     |
| Authentication      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Cloudinary upload   |    H     |     5 hrs      |     1 hrs     |     TBD     |
| Flexbox             |    H     |     8 hrs      |     1 hrs     |     TBD     |
| CSS                 |    H     |     10 hrs     |     1 hrs     |     TBD     |
| TOTAL               |          |     42 hrs     |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://drive.google.com/file/d/1JNVQ_Q59qJQ-z3QAf5jI6sOleq3iwC2Q/view?usp=sharing)
<br>

***

## Post-MVP

> User can add plants to a garden portfolio and save what plants they want to grow for the year

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
