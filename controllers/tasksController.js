const Task = require("../models/Task");

const getUserTasks = (req, res) => {
    const { id } = req.params;
    const tasks = Task.find({ userId: id });
    if (!tasks) return res.sendStatus(404);
    res.json({
        data: tasks,
    });
};

const getTask = () => {
    const { id } = req.params;
    const task = Task.findOne({ id: id });
    if (!task) return res.sendStatus(404);
    res.status(201).json({
        data: task,
    });
};

module.exports = { getUserTasks, getTask };
