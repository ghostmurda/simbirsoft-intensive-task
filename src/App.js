import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import LeaguesContainer from './containers/LeaguesContainer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/"> 
                <Redirect to="/leagues" />
            </Route>
            <Route path="/leagues" render={() => <LeaguesContainer />} />
            <Route path="/teams/:leagueId" render={() => <div></div>} />
        </BrowserRouter>
    );
}

export default App;
