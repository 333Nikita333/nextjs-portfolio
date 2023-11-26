import { projects } from '../data/projects';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(projects);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
