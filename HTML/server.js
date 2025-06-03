const express = require("express");
const twilio = require("twilio");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));

const accountSid = "AC2a9d4dce94d9c9215ae801cdc721cf34"; // Twilio Account SID
const authToken = "3b1351dd600ebd44f7e18579d4641bb7"; // Twilio Auth Token
const twilioNumber = "whatsapp:+14155238886"; // Twilio sandbox number
const friendNumber = "whatsapp:+2349020422316"; // Friend's WhatsApp number

const client = new twilio(accountSid, authToken);

app.post("/send-message", async (req, res) => {
    try {
        const { answer } = req.body;
        const message = answer === "yes" 
            ? "She said YES! 🎉❤️" 
            : "She said NO! 💔 Keep trying!";

        await client.messages.create({
            from: twilioNumber,
            to: friendNumber,
            body: message
        });

        res.send({ success: true, message: "Message sent!" });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
