import mongoose from 'mongoose';

export  const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: 'MediCare',
    }).then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    }).catch((error) => {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    });
}