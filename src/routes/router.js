import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RepoPage from '../pages/RepoPage';
import StarredPage from '../pages/StarredPage';
import ErrorPage from '../pages/ErrorPage';
import UserPage from '../pages/UserPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route path="/repos">
                    <RepoPage />
                </Route>
                <Route path="/user">
                    <UserPage />
                </Route>
                <Route path="/starred">
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