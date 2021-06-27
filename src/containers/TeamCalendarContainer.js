import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { ContainerWrapper } from '../styles/Ligues.styles';
import { getTeamMatchesRequest } from '../service/FootballService';
import { withRouter } from 'react-router-dom';

function TeamCalendarContainer(props) {
    const teamId = props.match.params.teamId;
    const [dateFrom, setDateFrom] = useState('2020-10-20');
    const [dateTo, setDateTo] = useState('2020-10-28');
    const [matches, setMatches] = useState([]);

    const handleDateFrom = (event) => {
        setDateFrom(event.target.value);
    }

    const handleDateTo = (event) => {
        setDateTo(event.target.value);
    }

    useEffect(() => {
        const getMatches = async () => {
            const response = await getTeamMatchesRequest(teamId, dateFrom, dateTo);
            setMatches(response);
        };
        getMatches();
        return () => getMatches;
    }, [dateFrom, dateTo])

    console.log(matches);

    return (
        <ContainerWrapper>
            <TextField
                label="Дата с" 
                variant="outlined" 
                style={{width: 200, marginLeft: "calc(50vw - 100px)", marginTop: 64}}
                value={dateFrom}
                onChange={handleDateFrom}
                helperText="YYYY-MM-DD"
            />
            <TextField
                label="Дата по" 
                variant="outlined" 
                style={{width: 200, marginLeft: "calc(50vw - 100px)", marginTop: 64}}
                value={dateTo}
                onChange={handleDateTo}
                helperText="YYYY-MM-DD"
            />
        </ContainerWrapper>
    );
}

export default withRouter(TeamCalendarContainer);