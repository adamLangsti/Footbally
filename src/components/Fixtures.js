import React, { useState, useEffect } from 'react';

const Fixtures = () => {
    const [league, setLeague] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
                'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
            },
        };
        const fetchFixtures = async () => {
            const response = await fetch(
                'https://api-football-v1.p.rapidapi.com/v3/leagues?id=39',
                options
            );
            const data = await response.json();
            setLeague(data);
            console.log(data);
        };
        fetchFixtures();
    }, []);

    return <div>Fixtures page</div>;
};

export default Fixtures;
