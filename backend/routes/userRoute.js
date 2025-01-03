import express from 'express';
import { fetch,create } from '../controller/userController.js';

const router = express.Router();
router.post('/create', create);
// router.get('/fetch', fetch);

export default router;