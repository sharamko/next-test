import { socials } from './data/socials';
import { NextApiResponse, NextApiRequest } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(socials);
  }
}
