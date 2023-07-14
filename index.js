import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use('/users',userRoutes);
// set route
app.get('/', (req,res) => {
    console.log('[TEST]!');
    
    res.send('Homepage')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});