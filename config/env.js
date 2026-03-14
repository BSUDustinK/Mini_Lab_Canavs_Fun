const dotenv = require("dotenv");

dotenv.config();

function getApiKey() {

    if (!process.env.CANVAS_API_TOKEN) {
        throw new Error("CANVAS_API_TOKEN missing in .env file");
    }

    return process.env.CANVAS_API_TOKEN;
}

function getApiUrl() {

    if (!process.env.API_URL) {
        throw new Error("API_URL missing in .env file");
    }

    return process.env.API_URL;
}

module.exports = {
    getApiKey,
    getApiUrl
};