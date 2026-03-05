// Script to display the current date and time in UTC
function displayCurrentDateTime() {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toISOString().replace('T', ' ').substring(0, 19);
    console.log(`Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): ${formattedDateTime}`);
}

displayCurrentDateTime();