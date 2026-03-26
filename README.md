# UrbanAlert

UrbanAlert is a real-time urban incident reporting and management platform built with Node.js and Express. It enables users to report, track, and respond to incidents in urban areas efficiently.

## Installation

1. Clone the repository:
git clone <git@github.com:s0rr4/UrbanAlert4790HD.git>
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
- `POST /api/createReports` - Create new report
