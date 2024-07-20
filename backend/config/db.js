import mongoose from "mongoose";
import {ENV_VARS} from "./envVariables.js";

export async function connectDB() {
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log('MongoDB connected to ' + conn.connection.host + ' on ' + conn.connection.port + ' port');
    } catch (error) {
        console.error('MongoDB connection failed');
        process.exit(1);
    }
}