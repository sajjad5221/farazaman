//deprecated: In next 13.4, handling apis has been changed!

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "Hello from the API!" });
}
