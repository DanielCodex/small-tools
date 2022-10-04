import http from "http";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const site = req.query.site as string;
  let option = {
    method: "HEAD",
    host: `${site}`,
    port: 80,
    path: "/",
  };
  
  let data = http.request(option, (data) => {
    res.status(200).json({ response: data.headers, request: req.headers });
  });
  data.end();
  // res.status(200).json({ request: res.getHeaderNames});
}

export default handler;
