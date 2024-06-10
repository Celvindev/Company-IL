import Team from '../models/TeamModel.js';

export const getTeam = async (req, res) => {
    try {
        const teams = await Team.findAll();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTeamById = (req, res) =>{

}

export const createTeam = (req, res) =>{
    
}

export const updateTeam = (req, res) =>{
    
}

export const deleteTeam = (req, res) =>{
    
}