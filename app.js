const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes')
const app = express();
const port = 3000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB()
// Routes

app.use("/api/auth",authRoutes)

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});