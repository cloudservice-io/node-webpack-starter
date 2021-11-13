import { Router } from 'express';
import { getWelcomeMessage } from './utils/getWelcomeMessage';

const router = Router();

router.get('/', (req, res) => {
  const now = new Date();
  const message = getWelcomeMessage(now);

  res.status(200);
  res.json({ message });
});

export default router;
