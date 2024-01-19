import { projectsDataEn } from '../data/projectsDataEn';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(projectsDataEn);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
