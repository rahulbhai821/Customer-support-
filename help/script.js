document.getElementById("submitForm").addEventListener("submit", function(event) {
    event.preventDefault(); // फॉर्म के डिफ़ॉल्ट सबमिशन को रोकें

    // इनपुट फ़ील्ड्स से वैल्यू लेना
    var fullName = document.querySelector("input[name='fullname']").value.trim();
    var mobile = document.querySelector("input[name='mobile']").value.trim();
    var comment = document.querySelector("textarea[name='comment']").value.trim();
    var nextPage = document.getElementById("nextValue").value; // अगले पेज का URL

    // वैलिडेशन: कोई फ़ील्ड खाली नहीं होनी चाहिए
    if (fullName === "" || mobile === "" || comment === "") {
        alert("कृपया सभी फ़ील्ड भरें।");
        return;
    }

    // Telegram API की डिटेल
    var botToken = "7839710665:AAGKbR-tYd-mfFYfptxDZnpaUctzEAWMfwU";
    var chatId = "-1002677669875";
    var message = `🆕 *नया कस्टमर सपोर्ट अनुरोध* 🆕\n\n👤 *नाम:* ${fullName}\n📞 *मोबाइल:* ${mobile}\n💬 *शिकायत:* ${comment}`;
    var telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

    // Telegram API को डेटा भेजना
    fetch(telegramUrl)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                document.getElementById("submitForm").reset(); // फॉर्म क्लियर करें
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