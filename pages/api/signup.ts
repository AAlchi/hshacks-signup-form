import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "POST") {
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
                return res.status(500).json({ message: "Errors" });
            }
        } catch (err) {
            return res.status(500).json({ message: "Server Error" })
        }
    }
}
