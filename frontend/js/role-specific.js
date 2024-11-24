document.addEventListener("DOMContentLoaded", function () {
    const role = "admin"; // Set this dynamically based on user login

    if (role === "admin") {
        console.log("Admin dashboard loaded.");
    } else if (role === "user") {
        console.log("User dashboard loaded.");
    }
});
