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
