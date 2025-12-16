/*
3. Use the Modules in app.js:
○ Import the custom modules (taskManager.js and fileHandler.js)
and the path built-in module.
○ Implement the following functionality:
1. Load existing tasks from a file named tasks.json.
2. Add new tasks to the list.
3. List all tasks.
4. Save the updated task list back to the file.
Requirements
● Use require to import all modules.
● Test the program by adding, listing, and saving tasks.
*/


const path = require("path");
const taskManager = require("./taskManager");
const fileHandler = require("./fileHandler");

// Define file path for tasks.json
//Combines path parts correctly for any operating system
// path.join(../taskmanager, "tasks.json"); ->> ../taskmanager/tasks.json 
const filePath = path.join(__dirname, "tasks.json");

// 1. Load existing tasks
let tasks = fileHandler.loadTasks(filePath);

// 2. Add new tasks
taskManager.addTask(tasks, "Finish coding assignment");
taskManager.addTask(tasks, "Review pull requests");
taskManager.addTask(tasks, "Study Node.js modules");

// 3. List all tasks
taskManager.listTasks(tasks);

// 4. Save tasks back to the file
fileHandler.saveTasks(filePath, tasks);
console.log("Tasks saved succesfully");