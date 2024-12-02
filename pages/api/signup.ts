import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // if (req.method == "POST") {
    //     return res.status(405).json({ message: "Request method is invalid" });
    // }
    try {
       return
    } catch (err) {
        return res.status(500).json({ message: "Server Error" })
    }
}