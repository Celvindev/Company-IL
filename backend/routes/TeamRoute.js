import express from 'express';
import {
    getTeam,
    getTeamById,
    createTeam,
    updateTeam,
    deleteTeam
} from '../controllers/Team.js';

const router = express.Router();

router.get('/team',getTeam);
router.get('/team/:id',getTeamById);
router.get('/team',createTeam);
router.get('/team',updateTeam);
router.get('/team',deleteTeam);

export default router;