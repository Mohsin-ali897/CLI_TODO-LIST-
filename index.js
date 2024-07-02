import chalk from 'chalk';
import inquirer from 'inquirer';
console.log(chalk.magenta.bold("\n \tWelcome to To-Do Application\n"));
let TodoList = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green.bold("Please enter Your Task")
        }
    ]);
    TodoList.push(addTask.task);
    console.log(`${addTask.task} task added in Todo list`);
    let AddmoreTak = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.green.bold("Do You Want to Add more Task"),
            default: "false"
        }
    ]);
    condition = AddmoreTak.addmore;
}
console.log(chalk.yellow.bold("Your Updated Todo list is"), TodoList);
