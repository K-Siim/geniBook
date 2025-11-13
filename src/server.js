import express from 'express';
import bookRoutes from './routes/book.routes.js'


const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/v1',bookRoutes);


app.get('/', (req, res) => {
  res.send('Hello, Negros!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





