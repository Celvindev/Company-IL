import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MdEdit, MdDelete } from 'react-icons/md';

const AdTeam = () => {
    const [teamData, setTeamData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        description: '',
        photoURL: null // Change to null initially
    });
    const [selectedTeamMember, setSelectedTeamMember] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {
        getTeam();
    }, []);

    const getTeam = async () => {
        try {
            const response = await axios.get('http://localhost:3000/team');
            setTeamData(response.data);
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/team/${id}`);
            getTeam();
        } catch (error) {
            console.error('Error deleting team member:', error);
        }
    };

    const handleEdit = (teamMember) => {
        setSelectedTeamMember(teamMember);
        setFormData({
            name: teamMember.name,
            position: teamMember.position,
            description: teamMember.description,
            photoURL: teamMember.photoURL
        });
        modalRef.current.showModal();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('position', formData.position);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('photo', formData.photoURL); // Change here to append file

            if (selectedTeamMember) {
                await axios.patch(`http://localhost:3000/team/${selectedTeamMember.id}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data' // Set headers for multipart/form-data
                    }
                });
            } else {
                await axios.post('http://localhost:3000/team', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data' // Set headers for multipart/form-data
                    }
                });
            }
            console.log('Data submitted successfully');
            getTeam(); // Reload the team data after adding or editing member
            // Clear the form after successful submission
            setFormData({
                name: '',
                position: '',
                description: '',
                photoURL: null // Reset photoURL to null
            });
            setSelectedTeamMember(null);
            modalRef.current.close();
        } catch (error) {
            console.error('Error adding/editing team member:', error);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'photoURL') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0] // Set the file object
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center py-0 sm:py-6 mx-auto max-w-screen-xl bg-white'>
                <button className="btn" onClick={() => modalRef.current.showModal()}>Add Data</button>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Description</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamData.map((team, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{team.name}</td>
                                    <td>{team.position}</td>
                                    <td>{team.description}</td>
                                    <td>{team.photoURL}</td>
                                    <td>
                                        <button onClick={() => handleEdit(team)}><MdEdit /></button>
                                        <button onClick={() => handleDelete(team.id)}><MdDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <dialog ref={modalRef} className="modal">
                    <div className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => modalRef.current.close()}>✕</button>
                        <form onSubmit={handleSubmit} className='mt-5'>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input mb-5 input-bordered w-full" />
                            <input type="text" name="position" value={formData.position} onChange={handleChange} placeholder="Position" className="input mb-5 input-bordered w-full" />
                            <textarea name="description" value={formData.description} onChange={handleChange} className="textarea textarea-bordered w-full mb-5" placeholder="Description"></textarea>
                            <input type="file" name="photoURL" onChange={handleChange} placeholder="Photo URL" className="file-input file-input-bordered w-full" />
                            <div className="modal-action">
                                <input type="submit" value={selectedTeamMember ? 'Update' : 'Submit'} className="btn" />
                            </div>
                        </form>
                    </div>
                </dialog>

            </div>
        </>
    );
}

export default AdTeam;
