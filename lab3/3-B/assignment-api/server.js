// server.js - Node.js + Express + MongoDB CRUD API

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/assignmentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB Error:', err));

// Assignment Schema
const assignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

const Assignment = mongoose.model('Assignment', assignmentSchema);

// ===== CRUD OPERATIONS =====

// 1. CREATE - Add new assignment
app.post('/api/assignments', async (req, res) => {
    try {
        const assignment = new Assignment(req.body);
        await assignment.save();
        res.status(201).json({
            message: 'Assignment created successfully',
            data: assignment
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 2. READ - Get all assignments
app.get('/api/assignments', async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json({
            count: assignments.length,
            data: assignments
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 3. READ - Get single assignment by ID
app.get('/api/assignments/:id', async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }
        res.status(200).json({ data: assignment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 4. UPDATE - Update assignment
app.put('/api/assignments/:id', async (req, res) => {
    try {
        const assignment = await Assignment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }
        res.status(200).json({
            message: 'Assignment updated successfully',
            data: assignment
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 5. DELETE - Delete assignment
app.delete('/api/assignments/:id', async (req, res) => {
    try {
        const assignment = await Assignment.findByIdAndDelete(req.params.id);
        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }
        res.status(200).json({
            message: 'Assignment deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});