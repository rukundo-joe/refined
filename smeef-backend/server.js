const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../../../smeef-backend/config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Smeef API!');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
