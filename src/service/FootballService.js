import * as axios from 'axios';
import { API } from '../../config';

const instance = axios.create({
    baseURL: 'http://api.football-data.org/v2',
    headers: {'X-Auth-Token': API}
});

export const getEuropeLeaguesRequest = async () => {
    const response = await instance.get('/competitions?areas=2077&plan=TIER_ONE');
    return response.data.competitions;
}

export const getTeamsRequest = async (id, year = 2021) => {
    const response = await instance.get(`/competitions/${id}/teams?season=${year}`);
    return response.data.teams;
}

export const getTeamMatchesRequest = async (id, dateFrom, dateTo) => {
    const response = await instance.get(`/teams/${id}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`);
    return response.data.matches;
}

export const getLeagueMatchesRequest = async (id, dateFrom, dateTo) => {
    const response = await instance.get(`/competitions/${id}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`);
    return response.data.matches;
}