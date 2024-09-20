import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        let firstName: string = req.body.firstName();
        let lastName: string = req.body.lastName();
        let email: string = req.body.email();
        let laptop: boolean = req.body.laptop();
        let experience: string = req.body.experience();
        let grade: number = req.body.grade();
        let shirt: string = req.body.shirt();;
        let diet: string = req.body.diet();;
        let other: string = req.body.other();;
        const names: string[] = [firstName, lastName];
        const explains: string[] = [experience, diet, other];
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2-4}$/;
        const namePattern = /^[a-zA-Z]{2-25}$/;
        const explainPattern = /^[a-zA-Z0-9\(\)._ -]+$/;

        if (grade == null || laptop == null || shirt == null) {
            res.status(400).json({ message: "Bad Request" })
        } else {
            res.status(200).json({ message: "OK" })
        }

        if (emailPattern.test(email)) {
            res.status(200).json({ message: "OK" })
        } else {
            res.status(400).json({ message: "Bad Request" })
        }

        for (var s in names) {
            if (namePattern.test(s)) {
                res.status(200).json({ message: "OK" })
            } else {
                res.status(400).json({ message: "Bad Request" })
            }
        }

        for (var s in explains) {
            if (s.length > 250) {
                res.status(400).json({ message: "Bad Request" })
            }
            if (explainPattern.test(s)) {
                res.status(200).json({ message: "OK" })
            } else {
                res.status(400).json({ message: "Bad Request" })
            }
        }
    } catch (err) {
        return res.status(500).json({ message: "Server Error" })
    }
}
