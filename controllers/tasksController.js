const Task = require("../models/Task");

const getUserTasks = async (req, res) => {
    const { id } = req.params;

    try {
        const tasks = await Task.find({ userId: id });
        if (!tasks) return res.sendStatus(404);
        return res.status(200).json({
            data: tasks,
        });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

const getTask = async () => {
    const { id } = req.params;

    try {
        const task = await Task.findOne({ id: id });
        if (!task) return res.status(404).json({ message: "No task found" });
        return res.status(201).json({
            data: task,
        });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

const createTask = async () => {
    
}

module.exports = { getUserTasks, getTask };
