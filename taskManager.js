//universal user input
const readline = require('readline');
const Que = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//declare list
let id=1;
const tasks = new Map();

//List tasks
function listTasks(){
    console.log("\nYour Tasks:");
    tasks.forEach((task, key ) =>{
        console.log(`${key}. ${task}`);
    });

    menu();
}

//add task
function addTask() {
    Que.question("Enter new task name:",(name) =>{
        const formatted =`[ ] ${name}`;
        tasks.set(id, formatted);
        console.log("✅ Task added!")
        id++;
        menu();
    })
}

//delete task
function deleteTask() {
    Que.question("Enter the task number to delete: ", (inputId) => {
        const key = Number(inputId);
        tasks.delete(key);
        console.log("Task deleted!");

        menu();
    });
}

//start menu
function menu(){
console.log("Welcome to Task manager! \n");
console.log("1.List tasks");
console.log("2.Add new task");
console.log("3.Mark task as complete");
console.log("4.Delete task");
console.log("5.Exit\n");

Que.question("Enter your choice:",(num) =>{
    if(num == 1){
        listTasks()
    }
    else if(num==2){
       addTask()
    }
    else if(num==3){

    }
    else if(num==4){
       deleteTask()
    }
    else if(num==5){}
    })
}


menu();
