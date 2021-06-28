import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import LeaguesContainer from './containers/LeaguesContainer';
import TeamsContainer from './containers/TeamsContainer';
import TeamCalendarContainer from './containers/TeamCalendarContainer';

function App() {
    const [currentTeam, setCurrentTeam] = useState(null);
    const [currentLeague, setCurrentLeague] = useState(null);

    const handleCurrentTeam = (team) => {
        setCurrentTeam(team);
    }

    const handleCurrentLeague = (league) => {
        setCurrentLeague(league);
    }

    return (
        <BrowserRouter>
            <Header 
                currentLeague={currentLeague} 
                currentTeam={currentTeam} 
                handleCurrentLeague={handleCurrentLeague} 
                handleCurrentTeam={handleCurrentTeam} 
            />
            <Route exact path="/"> 
                <Redirect to="/leagues" />
            </Route>
            <Route path="/leagues" render={() => <LeaguesContainer handleCurrentLeague={handleCurrentLeague} />} />
            <Route path="/teams/:id" render={() => <TeamsContainer handleCurrentTeam={handleCurrentTeam} />} />
            <Route path="/matches/:id" render={() => <TeamCalendarContainer />} />
        </BrowserRouter>
    );
}

export default App;
