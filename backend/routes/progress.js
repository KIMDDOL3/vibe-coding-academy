const express = require('express');
const db = require('../db/init');
const authMiddleware = require('../middleware/auth');

const router = express.Router();
router.use(authMiddleware);

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT lesson_id FROM progress WHERE user_id = ? AND completed = 1').all(req.user.id);
  const completed = {};
  rows.forEach(r => { completed[r.lesson_id] = true; });
  res.json({ completed });
});

router.post('/:lessonId', (req, res) => {
  const { lessonId } = req.params;
  db.prepare(`
    INSERT INTO progress (user_id, lesson_id, completed, updated_at)
    VALUES (?, ?, 1, CURRENT_TIMESTAMP)
    ON CONFLICT(user_id, lesson_id) DO UPDATE SET completed = 1, updated_at = CURRENT_TIMESTAMP
  `).run(req.user.id, lessonId);
  res.json({ success: true, lessonId, completed: true });
});

router.delete('/:lessonId', (req, res) => {
  const { lessonId } = req.params;
  db.prepare('UPDATE progress SET completed = 0, updated_at = CURRENT_TIMESTAMP WHERE user_id = ? AND lesson_id = ?')
    .run(req.user.id, lessonId);
  res.json({ success: true, lessonId, completed: false });
});

module.exports = router;
