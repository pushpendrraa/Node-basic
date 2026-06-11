const express = require("express");
const notemodel = require("./models/notes.models");

const app = express();

app.use(express.json());


// CREATE NOTE
app.post("/notes", async (req, res) => {
    try {
        const data = req.body;

        const note = await notemodel.create({
            title: data.title,
            description: data.description
        });

        res.status(201).json({
            message: "Note created",
            note
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});


// GET ALL NOTES
app.get("/notes", async (req, res) => {
    try {
        const notes = await notemodel.find();

        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});


// GET SINGLE NOTE
app.get("/notes/:id", async (req, res) => {
    try {
        const note = await notemodel.findById(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});


// UPDATE NOTE
app.put("/notes/:id", async (req, res) => {
    try {
        const updatedNote = await notemodel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note updated",
            updatedNote
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});


// DELETE NOTE
app.delete("/notes/:id", async (req, res) => {
    try {
        const deletedNote = await notemodel.findByIdAndDelete(req.params.id);

        if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note deleted"
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = app;