import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/crude-server-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });  
        console.log('MongoDB connected.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};