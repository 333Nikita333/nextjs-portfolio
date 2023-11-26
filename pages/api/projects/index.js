import { projectsData } from '../data/projectsData';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(projectsData);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
