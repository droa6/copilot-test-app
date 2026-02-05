# copilot-test-app

A basic React application with Node.js backend featuring login authentication and a dashboard with data visualizations.

## Features

- Login page with authentication (default credentials: admin/admin)
- Protected dashboard with data visualizations using Recharts
- Mock data for revenue, orders, and user statistics
- Responsive design

## Project Structure

```
copilot-test-app/
├── server/          # Node.js backend
│   ├── index.js     # Express server with API endpoints
│   └── package.json
└── client/          # React frontend
    ├── src/
    │   ├── Login.js       # Login component
    │   ├── Dashboard.js   # Dashboard component with charts
    │   └── App.js         # Main app with routing
    └── package.json
```

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/droa6/copilot-test-app.git
cd copilot-test-app
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. (Optional) Configure environment variables:
```bash
# Copy the example env file
cp .env.example .env
# Edit .env to change admin credentials if needed
```

4. Install client dependencies:
```bash
cd ../client
npm install
```

## Running the Application

You need to run both the backend server and frontend client.

### Start the Backend Server

In one terminal:
```bash
cd server
npm start
```

The server will run on http://localhost:5000

### Start the Frontend Client

In another terminal:
```bash
cd client
npm start
```

The React app will run on http://localhost:3000

## Usage

1. Open your browser and navigate to http://localhost:3000
2. You'll see the login page
3. Enter credentials:
   - Username: `admin`
   - Password: `admin`
4. After successful login, you'll be redirected to the dashboard
5. The dashboard displays:
   - Key statistics (Total Revenue, Orders, Active Users, Growth)
   - Monthly Revenue line chart
   - Monthly Orders bar chart
   - User Distribution pie chart
   - Revenue vs Orders comparison chart

## API Endpoints

- `POST /api/login` - Authenticate user
- `GET /api/dashboard-data` - Fetch dashboard mock data

## Technologies Used

### Backend
- Node.js
- Express.js
- CORS
- Body-parser

### Frontend
- React
- React Router DOM (for navigation)
- Recharts (for data visualization)
- CSS3 (for styling)