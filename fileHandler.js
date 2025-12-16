/*
2. Create the fileHandler.js Module:
○ Use the fs (File System) built-in module to define and export the
following functions:
1. saveTasks(filePath, tasks): Writes the tasks to a file in JSON
format.
2. loadTasks(filePath): Reads and parses the tasks from the file.
If the file doesn’t exist, return an empty array.
*/

const fs = require("fs");

function saveTasks(filePath, tasks){
    //JSON.stringify() → turns JS array into JSON text
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), "utf-8");
}
function loadTasks(filePath){
    if(!fs.existsSync(filePath)){
           return [];
    }
  const data = fs.readFileSync(filePath, "utf-8");
  //JSON.parse() → turns JSON into a JS array
  return JSON.parse(data);
}

module.exports = { saveTasks, loadTasks };

