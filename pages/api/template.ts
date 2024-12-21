import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return res.status(200).json({ message: "Response" });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// Export as default
export default handler;
