const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

// Express now has a built in body-parser which is used below
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Server is up and running'));

app.use('/api/users', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
