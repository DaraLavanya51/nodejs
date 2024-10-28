
//CRUD

const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const User = require('./models/userModel');

const dotenv = require('dotenv');

dotenv.config();
 
mongoose.connect(process.env.URI, 
    { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});
 
app.use(express.json());
 
 
// CREATE Operation - Insert a new user into the database
app.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body;
 
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and Email are required' });
        }
 
        const newUser = new User({ name, email });
 
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ message: 'Error creating user', error: err.message || err });
    }
});
 
// READ Operation - Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err });
    }
});
 
// READ Operation - Get a user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId); // Fetch user by ID
 
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user', error: err });
    }
});
 
// DELETE Operation - Delete a user by ID
app.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
 
        if (deletedUser) {
            res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err });
    }
});
 
// UPDATE Operation - Update a user by ID
app.put('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
 
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
 
        if (updatedUser) {
            res.status(200).json({ message: 'User updated successfully', user: updatedUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating user', error: err });
    }
});
 
const PORT = 3000;
http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 