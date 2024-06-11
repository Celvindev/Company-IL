import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdTeam = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/team');
                console.log(response.data);
                setTeamData(response.data);
            } catch (error) {
                console.error('Error fetching team data:', error);
            }
        };

        fetchTeamData();

    }, []);

    return (
        <>
            <div className='flex flex-col items-center justify-center py-0 sm:py-6 mx-auto max-w-screen-xl bg-white' >
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamData.map((team, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{team.name}</td>
                                    <td>{team.position}</td>
                                    <td>{team.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default AdTeam;
