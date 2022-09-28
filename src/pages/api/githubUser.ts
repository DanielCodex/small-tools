import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(400).json({ message: "Send me GET request 😠" });
  }

  const github_token = process.env.GITHUB_API;
  const { user } = req.query;

  let response = await fetch(`https://api.github.com/users/${user}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${github_token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    res.status(400).json({ status: response.status });
  }
  let data = await response.json();
  res.status(200).json(data);
}

export default handler;
