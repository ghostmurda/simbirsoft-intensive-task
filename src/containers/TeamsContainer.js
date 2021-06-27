import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getTeamsRequest } from '../service/FootballService';
import { ContainerWrapper } from '../styles/Ligues.styles';
import Team from '../components/Team';
import TextField from '@material-ui/core/TextField';

function TeamsContainer(props) {
    const leagueId = props.match.params.leagueId;
    const [teams, setTeams] = useState([]);
    const [year, setYear] = useState(2021);

    const handleYear = (event) => {
        setYear(event.target.value);
    }

    useEffect(() => {
        const getTeams = async () => {
            if (year >= 2018) {
                const response = await getTeamsRequest(leagueId, year);
                setTeams(response);
            }
        };
        getTeams();
        return () => getTeams;
    }, [leagueId, year])


    return (
        <Fragment>
            <TextField 
                label="Год" 
                variant="outlined" 
                style={{width: 200, marginLeft: "calc(50vw - 100px)", marginTop: 64}}
                value={year}
                onChange={handleYear}
                helperText="2018-2021"
            />
            <ContainerWrapper>
                {teams.map((item, key) => <Team {...item} key={key} />)}
            </ContainerWrapper>
        </Fragment>
    );
}

export default withRouter(TeamsContainer);