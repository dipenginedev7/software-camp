// Function to handle form submission for route search
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const startPoint = event.target[0].value;
    const endPoint = event.target[1].value;

    if (startPoint && endPoint) {
        displayRoutes(startPoint, endPoint);
    } else {
        alert('Please enter both start and end points.');
    }
});

function displayRoutes(start, end) {
    // Simulated route options
    const routes = [
        { name: "Fastest Route", details: "Congestion: Low, ETA: 20 mins" },
        { name: "Second Fastest Route", details: "Congestion: Moderate, ETA: 25 mins" }
    ];

    const routesSection = document.querySelector('.routes-section .route-options');
    routesSection.innerHTML = ''; // Clear previous routes

    routes.forEach(route => {
        const routeDiv = document.createElement('div');
        routeDiv.className = 'route';
        routeDiv.innerHTML = `<h3>${route.name}</h3><p>${route.details}</p>`;
        routesSection.appendChild(routeDiv);
    });
}

// Simulate real-time notifications
setInterval(function() {
    const notifications = [
        "Heavy congestion on Route A.",
        "Accident on Route B, expect delays.",
        "Roadwork on Route C, consider alternate routes."
    ];

    const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
    document.querySelector('.notifications-section p').textContent = randomNotification;
}, 10000); // Change notification every 10 seconds
