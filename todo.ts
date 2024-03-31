#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//todos array
//function
//operations
let todos : string []=["onion", "potato", "tomato","capsicum", "carrot"];

async function createTodo  (todos:string[ 
]){
    do{
        let ans = await inquirer.prompt(
            {
            type: "list",
            message: "Select An Operation",
            name: "select",
            choices:["add", "Update", "View", "Delete"],  
        })
        if (ans.select == "add") 
        {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item to Todo",
                name: "todo",
            });
            todos.push(addTodo.todo)
            console.log(todos);
        }
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Select An Item For Update",
                name: "todo",
                choices:todos.map(item => item),
            })
            let addTodo = await inquirer.prompt(
                {
                    type: "input",
                    message: "add item to Todo",
                    name: "todo",
            });
            let newTodo = todos.filter (val => val !== updateTodo.todo);
            todos = [...newTodo,addTodo.todo];
            console.log(todos)
        }
        if(ans.select == "View") {
            console.log(todos)
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Select An Item For Update",
                name: "todo",
                choices:todos.map(item => item)
            })
            let newTodos = todos.filter (val => val !== deleteTodo.todo)
            todos = [...newTodos]
            console.log(todos)
        }
    }
    while(true)

}
createTodo(todos)