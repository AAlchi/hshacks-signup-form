import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "POST") {
        return res.status(405).json({ message: "Request method is invalid" });
    }
    try {
        let {firstName, lastName, email, laptop, experience, grade, shirt, diet, other} = req.body;
        let errors = []; //grouping: names, email, long paragraphs, button choices
        const names: string[] = [firstName, lastName];
        const explains: string[] = [experience, diet, other];
        const choices: any[] = [laptop, grade, shirt];
        const combinedArr = names.concat(explains.concat(choices));
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const namePattern = /^[a-zA-Z\s'-]{2,25}$/;
        const explainPattern = /^[a-zA-Z0-9\s.,'!?\-()]{2,500}$/;

        for (let i = 0; i < combinedArr.length; i++) {
            if (combinedArr[i] == null) {
                return res.status(400).json({ message: "Empty Input"});
            }
        }

        for (var s of names) {
            if (!namePattern.test(s)) {
                errors.push("Name Error");
            }
        }

        if (!emailPattern.test(email)) {
            errors.push("Email Error");
        }

        for (var s of explains) {
            if (!explainPattern.test(s)) {
                errors.push("Explain Error");
            }
        }

        for (let i = 0; i < 3; i++) {
            if (choices[i] == null) {
                errors.push("No Selection");
            }
        }

        if (errors.length > 0) {
            return res.status(400).json({ message: "Errors", details: errors });
        } else {
            return res.status(200).json({ message: "OK" });
        }
    } catch (err) {
        return res.status(500).json({ message: "Server Error" })
    }
}
