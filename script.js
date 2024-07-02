document.addEventListener('DOMContentLoaded', function () {
    // Display current time in UTC
    function updateTime() {
        const utcTimeElement = document.getElementById('utcTime');
        const now = new Date();
        utcTimeElement.textContent = now.toUTCString();
    }

    // Display current day of the week
    function updateDay() {
        const currentDayElement = document.getElementById('currentDay');
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        currentDayElement.textContent = days[now.getUTCDay()];
    }

    updateTime();
    updateDay();
    setInterval(updateTime, 1000); // Update time every second
});
