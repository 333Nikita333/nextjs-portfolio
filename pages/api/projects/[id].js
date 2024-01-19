import { projectsDataEn } from '../data/projectsDataEn';
import { projectsDataUk } from '../data/projectsDataUk';

export default function handler(req, res) {
  const { id, locale } = req.query;

  if (req.method === 'GET') {
    console.log('locale =>', locale);
    let project;

    if (locale === 'en') {
      project = projectsDataEn.find(project => project.id === id);
    }

    if (locale === 'uk') {
      project = projectsDataUk.find(project => project.id === id);
    }

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
