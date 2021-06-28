import React from 'react';
import { useEffect, useState } from 'react';
import { getEuropeLeaguesRequest } from '../service/FootballService';
import League from '../components/League';
import { ContainerWrapper } from '../styles/Ligues.styles';

export default function LeaguesContainer({handleCurrentLeague}) {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const getLeagues = async () => {
            const response = await getEuropeLeaguesRequest();
            setLeagues(response);
        };
        getLeagues();
        return () => getLeagues;
    }, [])

    return (
        <ContainerWrapper>
            {leagues.map((item, key) => <League {...item} key={key} handleCurrentLeague={handleCurrentLeague} />)}
        </ContainerWrapper>
    );
}