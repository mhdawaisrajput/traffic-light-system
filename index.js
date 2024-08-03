#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.inverse("You are Wellcome in Traffic Light System Made By : Muhammad Awais"));
let situation = true;
while (situation) {
    let trafficLight = await inquirer.prompt([
        {
            name: "colors",
            message: "Please, Select Your Traffic Light Color.!",
            type: "list",
            choices: ["Red", "Yellow", "Green", "Leave"],
        },
    ]);
    if (trafficLight.colors === "Red") {
        console.log(chalk.red("Stop right here.!"));
    }
    else if (trafficLight.colors === "Yellow") {
        console.log(chalk.yellow("Prepare your vehicle.!"));
    }
    else if (trafficLight.colors === "Green") {
        console.log(chalk.green("You can leave now.!"));
    }
    else {
        console.log(chalk.bgBlack("Leaving...!"));
        situation = false;
    }
}
