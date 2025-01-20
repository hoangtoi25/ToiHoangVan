import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './config';
import resourceRoutes from './routes/resourceRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/resources', resourceRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});