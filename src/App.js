import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import LeaguesContainer from './containers/LeaguesContainer';
import TeamsContainer from './containers/TeamsContainer';
import TeamCalendarContainer from './containers/TeamCalendarContainer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/"> 
                <Redirect to="/leagues" />
            </Route>
            <Route path="/leagues" render={() => <LeaguesContainer />} />
            <Route path="/teams/:leagueId" render={() => <TeamsContainer />} />
            <Route path="/matches/:teamId" render={() => <TeamCalendarContainer />} />
        </BrowserRouter>
    );
}

export default App;
