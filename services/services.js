const axios = require("axios");
const Assignment = require("../models/Assignment");
const Course = require("../models/Course");
const { getApiKey, getApiUrl } = require("../config/env");
const readline = require("readline");

const apiKey = getApiKey();
const API_URL = getApiUrl();

const headers = {
    Authorization: `Bearer ${apiKey}`
};

async function getCourses() {

    try {
        console.log(API_URL+'/V1/courses');
        const response = await axios.get(API_URL+'/V1/courses', { headers });

        const data = response.data;

        const retrievedCourses = Course.listFromJSON(data)

        return retrievedCourses;

    } catch (error) {

        console.error("GET Error:", error.message);

    }

}

async function getAssignment() {

    const selectedCourse = selectCourse();    

    try {

        const response = await axios.get(`${API_URL+"/V1/"+selectedCourse+"/assignments"}`, { headers });

        const data = response.data;

        const retrievedCourses = Assignment.fromJSON

        return retrievedCourses;

    } catch (error) {

        console.error("GET Error:", error.message);

    }

}

function selectCourse(courseList) {
    return new Promise((resolve) => {

        console.log("\nSelect a course:");

        courseList.forEach((course, index) => {
            console.log(`${index + 1}. ${course.name} (ID: ${course.id})`);
        });

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("\nEnter the number of the course: ", (answer) => {

            const index = parseInt(answer, 10) - 1;

            if (isNaN(index) || index < 0 || index >= courseList.length) {
                console.log("Invalid selection. Try again.");
                rl.close();
                resolve(null);
                return;
            }

            const selectedCourse = courseList[index];

            rl.close();
            resolve(selectedCourse.id);
        });
    });
}


module.exports = {
    getCourses,
    getAssignment
};