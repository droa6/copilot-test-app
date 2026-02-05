const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default credentials
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'admin';

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        username: username
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

// Mock data endpoint for dashboard
app.get('/api/dashboard-data', (req, res) => {
  const mockData = {
    sales: [
      { month: 'Jan', revenue: 4000, orders: 240 },
      { month: 'Feb', revenue: 3000, orders: 139 },
      { month: 'Mar', revenue: 2000, orders: 980 },
      { month: 'Apr', revenue: 2780, orders: 390 },
      { month: 'May', revenue: 1890, orders: 480 },
      { month: 'Jun', revenue: 2390, orders: 380 }
    ],
    users: [
      { name: 'Active Users', value: 400 },
      { name: 'Inactive Users', value: 100 }
    ],
    stats: {
      totalRevenue: 16060,
      totalOrders: 2609,
      activeUsers: 400,
      growth: 12.5
    }
  };

  res.json(mockData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
