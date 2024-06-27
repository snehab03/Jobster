# Jobster

Jobster is a web application designed and developed to help users keep track of their job applications. The application offers features to manage job details and user profiles, with a robust backend built using Express.js and a NoSQL database.

## Features

- **User Profile Management**: Users can create, read, update, and delete their profile details.
- **Job Application Tracking**: Users can add, view, update, and delete job application details.
- **Authentication**: JWT-based authentication for secure user sessions.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: NoSQL with Mongoose ORM
- **Authentication**: JSON Web Tokens (JWT)


## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/snehab03/jobster.git

2. **Install dependencies:
   ```bash
   cd jobster
   npm install
3. Run the application:
    ```bash
    npm start
## Backend API
The backend API is built using Express.js and includes the following endpoints:
###User Profile Endpoints
- GET /api/profile
- POST /api/profile
- PUT /api/profile/:id
- DELETE /api/profile/:id
### Job Application Endpoints:
- GET /api/jobs
- POST /api/jobs
- PUT /api/jobs/:id
- DELETE /api/jobs/:id

## Contributions
Contributions are welcome! Please fork this repository and submit pull requests.

