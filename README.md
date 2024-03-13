# Movie Rating Application (Backend)

## Objective
This project aims to create a RESTful API for a movie rating application that allows users to browse movies, rate them, and write reviews.

## Tech Stack
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Features and Endpoints

### User Authentication
- **Register**: `POST /api/users/register` - Registers a new user.
- **Login**: `POST /api/users/login` - Authenticates a user and returns a JWT.

### Movies
- **Add Movie**: `POST /api/movies` - Adds a new movie.
- **Update Movie**: `PUT /api/movies/:id` - Updates an existing movie.
- **Delete Movie**: `DELETE /api/movies/:id` - Deletes a movie.
- **Get Movie Details**: `GET /api/movies/:id` - Retrieves movie details.
- **List Movies**: `GET /api/movies` - Lists all movies with filtering options.

### Ratings and Reviews
- **Rate and Review Movie**: `POST /api/movies/:id/reviews` - Posts a rating and review.
- **Update Review**: `PUT /api/movies/:movieId/reviews/:reviewId` - Updates a review.
- **Delete Review**: `DELETE /api/movies/:movieId/reviews/:reviewId` - Deletes a review.
- **List Reviews**: `GET /api/movies/:id/reviews` - Retrieves all reviews for a movie.
- **Movie Average Rating**: `GET /api/movies/:id/averageRating` - Returns the average rating.

## Installation

To set up the Movie Rating Application on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running:
`npm install` or `yarn`
4. Once the installation is complete, start the application by running:
`npm start` or `yarn start`


Make sure you have Node.js and MongoDB installed on your system before proceeding with the above steps.
