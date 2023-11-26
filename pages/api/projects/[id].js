import { projects } from '../data/projects';

export default function handler(req, res) {
  const { id } = req.query;

  // Обработка запроса на получение проекта по ID
  if (req.method === 'GET') {
    const project = projects.find(project => project.id === id);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } else {
    // Обработка других методов (например, POST)
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
