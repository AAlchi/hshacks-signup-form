import { NextApiRequest, NextApiResponse } from "next";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import axios from "axios";
const sendGrid = require("@sendgrid/mail")

sendGrid.setApiKey(process.env.SENDGRID);
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
};

const app = initializeApp(firebaseConfig);
 
const db = getFirestore(app);

export { db };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "POST") {
        return res.status(405).json({ message: "Request method is invalid" });
    }  

    try {
        const {dietaryRestrictions, email, experience,  firstName, grade, laptop, lastName, otherInfo, shirtSize} = req.body;

        const docRef = await addDoc(collection(db, "users"), {
            uid: Math.random() + email + firstName,
            dietaryRestrictions, 
            email, 
            experience,  
            firstName, 
            grade, 
            laptop,
            lastName,
            otherInfo,
            shirtSize,
            createdAt: new Date(),
          });

          const response = await axios.post(
            'https://api.brevo.com/v3/smtp/email',
            {
              sender: { email: "team@hshacks.org" },  
              to: [{ email }],  
              subject: 'HSHacks Signup Confirmation',
              htmlContent: `<html><body><h1>Thanks for registering for HSHacks!</h1><p>You're registration is confirmed for HSHacks 2025! If you have any questions, please reach out to us at team@hshacks.org</p></body></html>`,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY,  
              },
            }
          );

        return res.status(200).json({ message: "Signup Complete" }) 
    } catch (err) {
        return res.status(500).json({ message: "Server Error" })
    }
} 