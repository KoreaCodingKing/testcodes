// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  name: string;
  email: string;
  age: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return fetch("https://myapi.testing.com/my/profile").then((response) => {
    if (!response.ok) {
      res.status(response.status).json({} as Data);
      return;
    }
    const data = response.json();
    return data;
  });
}
