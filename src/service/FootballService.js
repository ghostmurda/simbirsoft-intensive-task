import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.football-data.org/v2',
    headers: {'X-Auth-Token': '3763cf0e91d54923968be8072ab602eb'}
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