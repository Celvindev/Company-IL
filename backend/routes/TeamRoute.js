import express from 'express';
import {
    getTeam,
    getTeamById,
    createTeam,
    updateTeam,
    deleteTeam
} from '../controllers/Team.js';
// import { verifyUser } from '../middleware/AuthUser.js';
const router = express.Router();

router.get('/team', getTeam);
router.get('/team/:id', getTeamById);
router.post('/team', createTeam);
router.patch('/team', updateTeam);
router.delete('/team', deleteTeam);

export default router;