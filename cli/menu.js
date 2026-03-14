const readline = require("readline");
const Assignment = require("../models/Assignment");
const Course = require("../models/Course");

const {
    getAssignment,
    createAssignment,
    updateAssignment,
    patchAssignment,
    deleteAssignment,
    getCourses
} = require("../services/services");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question) {

    return new Promise(resolve => rl.question(question, resolve));

}

async function startMenu() {

    while (true) {

        console.log("\n===== Assignment CLI =====");
        console.log("1 - List your Assignments");
        console.log("2 - List your Courses");
        console.log("6 - Exit");

        const choice = await prompt("Select option: ");

        switch (choice) {

            case "1":
                retrievedAssignment = new Assignment(await getAssignment());
                //retrievedAssignment = await getAssignment();
                retrievedAssignment.display();
                break;

            case "2":
                retrieveCourse = new Course(await getCourses());
                //retrieveCourse = await getAssignment();
                retrieveCourse.display();
                break;

            case "3":
                rl.close();
                return;

            default:
                console.log("Invalid option.");
        }

    }

}

module.exports = startMenu;