// Handle OTP verification (simulated)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const otp = event.target.otp ? event.target.otp.value : null;

    if (!otp) {
        sendOTP(email);
    } else {
        verifyOTP(email, otp);
    }
});

function sendOTP(email) {
    // Simulate sending OTP
    alert(`OTP sent to ${email}. Please check your email.`);
    document.querySelector('form').innerHTML += `
        <div class="input-group">
            <label for="otp">Enter OTP:</label>
            <input type="text" id="otp" name="otp" required>
        </div>
        <button type="submit">Verify OTP</button>
    `;
}

function verifyOTP(email, otp) {
    // Simulate OTP verification
    if (otp === "123456") { // Assume "123456" is the correct OTP
        alert(`OTP verified for ${email}. You are now signed in.`);
    } else {
        alert('Invalid OTP. Please try again.');
    }
}
