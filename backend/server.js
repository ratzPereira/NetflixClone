import express from 'express';

import authRoutes from './routes/auth.route.js';
import {ENV_VARS} from "./config/envVariables.js";
import {connectDB} from "./config/db.js";


const app = express();


app.use("/api/v1/auth", authRoutes);


app.listen(ENV_VARS.PORT, () => {
    console.log('Server running on port ' + ENV_VARS.PORT);
    connectDB()
});
