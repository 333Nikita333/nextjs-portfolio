import { projects } from '../data/projects';

export default function handler(req, res) {
  // Обработка запроса на получение всех проектов
  if (req.method === 'GET') {
    res.status(200).json(projects);
  } else {
    // Обработка других методов (например, POST)
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
