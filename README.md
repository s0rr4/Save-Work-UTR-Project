# Save Work

Save Work is a workplace complaint management platform built with Node.js and Express. It allows employees to submit complaints within a work environment, where each report is automatically prioritized based on the role or authority level of the person submitting it, ensuring that the most critical issues are addressed first.

## Installation

1. Clone the repository:
git clone <git@github.com:s0rr4/Save-Work-UTR-Project.git>
cd UrbanAlert4790HD

2. Install dependencies:
- express - `npm install express`
- mongoose - `npm install mongoose`
- jsonwebtoken - `npm install jsonwebtoken`
- bcryptjs - `npm install bcryptjs`
- dotenv - `npm install dotenv`
- supabase - `npm install @supabase/supabase-js`
- mongodb - `npm install mongodb`

3. Configure environment variables:
Create a `.env` file in the root directory:
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
PORT=3000

4. Run the project
- node index.js

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **JWT** - JSON Web Token authentication

## Main Endpoints

### Authentication Routes
- `POST /api/usuario/register` - User registration
- `POST /api/usuario/login` - User login

### Reports Routes
- `GET /api/getAllReports` - Get all reports
- `GET /api/getReport/{id}` - Get one specific report
- `POST /api/createReports` - Create new report
- `PUT /api/updateReport/{id}` - Update one specific report
- `DELETE /api/deleteReport/{id}` - Delete one specific report
