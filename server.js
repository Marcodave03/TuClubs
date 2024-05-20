import mongoose from 'mongoose';
import express from 'express';
import Club from './models/Club.js';
import bodyParser from 'body-parser';
import cors from 'cors';

app.get('/', (req, res) => {
  res.send('Welcome to the Club API!');
});


// Setup express app
const app = express();

// Use middleware
app.use(cors());
app.use(bodyParser.json());  // Enable JSON body parsing for express

const MONGO_URI = 'mongodb+srv://ferdinandnat:V8PFYPez3n7aFGvb@tuclubs-1.d7l0c4k.mongodb.net/?retryWrites=true&w=majority&appName=tuclubs-1';
mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 20000  // Increase server selection timeout to 20000ms (20 seconds)
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});


// Get all clubs
app.get('/api/clubs', async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new club
app.post('/api/clubs', async (req, res) => {
  const { title, description, tags, imageKey } = req.body;
  const club = new Club({ title, description, tags, imageKey });
  
  try {
    const newClub = await club.save();
    res.status(201).json(newClub);  // Send back the created club and status 201 (Created)
  } catch (err) {
    res.status(400).json({ message: err.message });  // 400 Bad Request if something goes wrong
  }
});

// Update a club
app.put('/api/clubs/:id', async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    // Update the club fields if provided in the request
    if (req.body.title) club.title = req.body.title;
    if (req.body.description) club.description = req.body.description;
    if (req.body.tags) club.tags = req.body.tags;
    if (req.body.imageKey) club.imageKey = req.body.imageKey;

    const updatedClub = await club.save();
    res.json(updatedClub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a club
app.delete('/api/clubs/:id', async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    await club.remove();
    res.json({ message: "Deleted Club" });  // Confirm deletion
  } catch (err) {
    res.status(500).json({ message: err.message });  // Server error if deletion fails
  }
});

// Define the port to run the server on
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
