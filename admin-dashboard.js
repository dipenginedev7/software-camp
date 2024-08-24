// Simulate real-time traffic updates
setInterval(function() {
    const trafficConditions = [
        "Traffic is flowing smoothly.",
        "Congestion reported at Junction 5.",
        "Heavy traffic on Route 10."
    ];

    const cameraFeeds = [
        "Camera 1: Clear",
        "Camera 2: Heavy Traffic",
        "Camera 3: Accident reported"
    ];

    const aiPredictions = [
        "AI predicts congestion in 15 minutes on Route 4.",
        "AI predicts smooth flow for next 30 minutes on Route 2."
    ];

    const congestionAlerts = [
        "Long-term congestion detected on Route 7.",
        "Cleared: Long-term congestion on Route 5."
    ];

    document.querySelector('.traffic-conditions').textContent = trafficConditions[Math.floor(Math.random() * trafficConditions.length)];
    document.querySelector('.camera-feeds').textContent = cameraFeeds[Math.floor(Math.random() * cameraFeeds.length)];
    document.querySelector('.ai-predictions').textContent = aiPredictions[Math.floor(Math.random() * aiPredictions.length)];
    document.querySelector('.congestion-alerts').textContent = congestionAlerts[Math.floor(Math.random() * congestionAlerts.length)];
}, 10000); // Update every 10 seconds

// Manual control functions
document.querySelector('.manual-control button:nth-child(1)').addEventListener('click', function() {
    alert('Traffic light status toggled.');
});

document.querySelector('.manual-control button:nth-child(2)').addEventListener('click', function() {
    alert('Traffic light timers set.');
});

// Emergency protocol functions
document.querySelector('.emergency-protocols button:nth-child(1)').addEventListener('click', function() {
    alert('Routes cleared for emergency.');
});

document.querySelector('.emergency-protocols button:nth-child(2)').addEventListener('click', function() {
    alert('Emergency services notified.');
});
