import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        let firstName: string = req.body.firstName;
        let lastName: string = req.body.lastName;
        let email: string = req.body.email;
        let laptop: boolean = req.body.laptop;
        let experience: string = req.body.experience;
        let grade: number = req.body.grade;
        let shirt: string = req.body.shirt;
        let diet: string = req.body.diet;
        let other: string = req.body.other;
        let errors = []; //grouping: names, email, long paragraphs, button choices
        const names: string[] = [firstName, lastName];
        const explains: string[] = [experience, diet, other];
        const choices: any[] = [laptop, grade, shirt];
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const namePattern = /^[a-zA-Z]{2,25}$/;
        const explainPattern = /^[a-zA-Z0-9\(\)._ -]+$/;

        for (var s of names) {
            if (namePattern.test(s)) {
                errors.push(res.status(200).json({ message: "OK" }));
            } else {
                errors.push(res.status(400).json({ message: "Bad Request" }));
            }
        }

        if (emailPattern.test(email)) {
            errors.push(res.status(200).json({ message: "OK" }));
        } else {
            errors.push(res.status(400).json({ message: "Bad Request" }));
        }

        for (var s of explains) {
            if (explainPattern.test(s)) {
                errors.push(res.status(200).json({ message: "OK" }));
            } else {
                errors.push(res.status(400).json({ message: "Bad Request" }));
            }
        }

        for (let i = 0; i < 3; i++) {
            if (choices[i] != null) {
                errors.push(res.status(200).json({ message: "OK" }));
            } else {
                errors.push(res.status(400).json({ message: "Bad Request" }));
            }
        }

        return errors;
    } catch (err) {
        return res.status(500).json({ message: "Server Error" })
    }
}
