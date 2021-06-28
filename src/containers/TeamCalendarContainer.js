import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { ContainerWrapper } from '../styles/Ligues.styles';
import { getLeagueMatchesRequest, getTeamMatchesRequest } from '../service/FootballService';
import { withRouter } from 'react-router-dom';
import { CalendarWrapper } from '../styles/TeamCalendarContainer.styles';
import { DataGrid } from '@material-ui/data-grid';
import moment from "moment";

const tableColumns = [
    { field: 'homeTeam', headerName: 'Домашняя команда', width: 160 },
    { field: 'awayTeam', headerName: 'Гостевая команда', width: 160 },
    { field: 'date', headerName: 'Дата', width: 160 },
    { field: 'status', headerName: 'Статус', width: 160 },
    { field: 'score', headerName: 'Счет', width: 130 }
];

function TeamCalendarContainer(props) {
    const id = props.match.params.id;
    const [dateFrom, setDateFrom] = useState('2020-10-20');
    const [dateTo, setDateTo] = useState('2020-10-28');
    const [matches, setMatches] = useState([]);
    const [tableRows, setTableRows] = useState([]);

    const handleDateFrom = event => {
        setDateFrom(event.target.value);
    };

    const handleDateTo = event => {
        setDateTo(event.target.value);
    };

    useEffect(() => {
        const getMatches = async () => {
            if (props.match.url.split('/')[1] === 'matches') {
                const response = await getTeamMatchesRequest(
                    id,
                    dateFrom,
                    dateTo
                );
                setMatches(response);
            } else {
                const response = await getLeagueMatchesRequest(
                    id,
                    dateFrom,
                    dateTo
                );
                setMatches(response);
            }
        };
        getMatches();
        return () => getMatches;
    }, [dateFrom, dateTo]);

    useEffect(() => {
        if (matches.length) {
            const rows = [];
            matches.forEach((match, i) => {
                rows.push({
                    id: i,
                    homeTeam: match.homeTeam.name,
                    awayTeam: match.awayTeam.name,
                    date: moment(match.utcDate).format('YYYY-MM-DD'),
                    status: match.status,
                    score: (match.status != 'CANCELLED') ? `${match.score.fullTime.homeTeam} : ${match.score.fullTime.awayTeam}` : ' ',
                });
            })
            setTableRows(rows);
        }
    }, [matches]);

    return (
        <ContainerWrapper>
            <CalendarWrapper>
            <TextField
                label="Дата с"
                variant="outlined"
                style={{
                    width: 200,
                    marginTop: 64,
                }}
                value={dateFrom}
                onChange={handleDateFrom}
                helperText="YYYY-MM-DD"
            />
            <TextField
                label="Дата по"
                variant="outlined"
                style={{
                    width: 200,
                    marginTop: 64,
                }}
                value={dateTo}
                onChange={handleDateTo}
                helperText="YYYY-MM-DD"
            />
            </CalendarWrapper>
            {tableRows.length && 
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={tableRows} columns={tableColumns} pageSize={5} />
                </div>
            }
        </ContainerWrapper>
    );
}

export default withRouter(TeamCalendarContainer);
