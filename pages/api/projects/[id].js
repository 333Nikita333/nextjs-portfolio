import projectsData from '/db.json';

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const project = projectsData.find(project => project.id === id);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
