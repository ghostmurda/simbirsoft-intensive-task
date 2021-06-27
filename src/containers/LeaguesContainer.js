import React from 'react';
import { useEffect, useState } from 'react';
import { getEuropeLeaguesRequest } from '../service/FootballService';
import League from '../components/League';
import { LeaguesWrapper } from '../styles/Ligues.styles';

export default function LeaguesContainer() {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const getLeagues = async () => {
            const response = await getEuropeLeaguesRequest();
            setLeagues(response);
        };
        getLeagues();
        return () => getLeagues;
    }, [])

    console.log(leagues);

    return (
        <LeaguesWrapper>
            {leagues.map((item, key) => <League {...item} key={key} />)}
        </LeaguesWrapper>
    );
}