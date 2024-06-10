import Team from '../models/TeamModel.js';
import fs from 'fs';
import path from 'path';

export const getTeam = async (req, res) => {
    try {
        const teams = await Team.findAll();
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTeamById = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Team.findByPk(id);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createTeam = async (req, res) => {
    const { name, position, description } = req.body;
    try {
        const photo = req.files ? req.files.photo : null;

        let photoURL = null;
        if (photo) {
            const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

            if (!allowedTypes.includes(photo.mimetype)) {
                return res.status(400).json({ message: 'Invalid file type. Only JPEG, PNG, and JPG files are allowed.' });
            }

            const uploadPath = 'uploads/' + photo.name;
            await photo.mv(uploadPath);
            photoURL = '/' + uploadPath;
        }

        const newTeam = await Team.create({
            name,
            position,
            description,
            photoURL
        });

        res.status(201).json(newTeam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateTeam = async (req, res) => {
    const { id } = req.params;
    const { name, position, description } = req.body;
    try {
        const team = await Team.findByPk(id);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }

        const photo = req.files ? req.files.photo : null;

        let photoURL = team.photoURL;
        if (photo) {
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

            if (!allowedTypes.includes(photo.mimetype)) {
                return res.status(400).json({ message: 'Invalid file type. Only JPEG, PNG, and GIF files are allowed.' });
            }

            // Hapus file gambar lama jika ada
            if (photoURL) {
                const oldFilePath = path.join(__dirname, '..', photoURL);
                fs.unlink(oldFilePath, (err) => {
                    if (err) {
                        console.error('Failed to delete old image file:', err);
                    }
                });
            }

            const uploadPath = 'uploads/' + photo.name;
            await photo.mv(uploadPath);
            photoURL = '/' + uploadPath;
        }

        team.name = name;
        team.position = position;
        team.description = description;
        team.photoURL = photoURL;

        await team.save();

        res.status(200).json(team);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Fungsi untuk menghapus tim
export const deleteTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Team.findByPk(id);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }

        // Hapus file gambar jika ada
        if (team.photoURL) {
            const filePath = path.join(__dirname, '..', team.photoURL);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Failed to delete image file:', err);
                }
            });
        }

        await team.destroy();

        res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
