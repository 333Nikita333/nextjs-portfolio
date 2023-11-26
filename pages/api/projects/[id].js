import { projectsData } from '../data/projectsData';

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const project = projectsData.find(project => project.id === id);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
