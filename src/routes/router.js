import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ResultsPage from '../pages/ResultsPage/ResultsPage';
import UserPage from '../pages/UserPage/UserPage';
import RepoPage from '../pages/RepoPage/RepoPage';
import StarredPage from '../pages/StarredPage/StarredPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Header from '../components/Header/Header';


const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/results">
                    <ResultsPage />
                </Route>
                <Route exact path="/user">
                    <UserPage />
                </Route>
                <Route exact path="/:id/repos">
                    <RepoPage />
                </Route>
                <Route exact path="/:id/starred">
                    <StarredPage />
                </Route>
                <Route >
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router