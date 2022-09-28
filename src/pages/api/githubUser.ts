import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const github_token = process.env.GITHUB_API;
  const { user } = req.query;

  if (req.method === "GET") {
    let response = await fetch(`https://api.github.com/users/${user}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${github_token}`,
      },
    });
    let data = await response.json();
    res.status(200).json(data);
  }

  res.status(400).json({ message: "Send me GET request 😠" });
}

export default handler;
