const sendGrid = require("@sendgrid/mail")

sendGrid.setApiKey("");

async function sendEmail() {
    const msg = {
        to: "",
        from: "",
        subject: "",
        text: "",
        html: "",
    };

    try {
        await sendGrid.send(msg);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

sendEmail();
