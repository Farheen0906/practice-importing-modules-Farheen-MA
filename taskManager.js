/*
1. Create the taskManager.js Module:
○ Define and export the following functions:
1. addTask(tasks, task): Adds a new task to the task list.
2. listTasks(tasks): Logs all tasks to the console.
*/

function addTask(tasks, task){
     tasks.push(task);
     console.log(`Task "${task}" added!`);
}
function listTasks(tasks){
    console.log("Task List:");
    for(let i=0;i<tasks.length;i++){
    console.log(`${i+1} ${tasks[i]}`);
    }
}

module.exports = { addTask, listTasks};
