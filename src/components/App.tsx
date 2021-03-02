import React from 'react';
import { Switch, Route } from 'react-router-dom';
import useScrollToTopOnPathChange from '../hooks/useScrollToTopOnPathChange';
import { contact, eventDetail, home } from '../routing/routes';
import Contact from './pages/Contact';
import EventDetail from './pages/EventDetail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MainLayout from './primitives/mainLayout/MainLayout';
import MainNavigation from './features/mainNavigation/MainNavigation';

const App: React.FC = () => {
    useScrollToTopOnPathChange();

    return (
        <MainLayout.Container>
            <MainLayout.Header>
                <MainNavigation />
            </MainLayout.Header>
            <MainLayout.Content>
                <Switch>
                    <Route exact path={home} component={Home} />
                    <Route exact path={eventDetail} component={EventDetail} />
                    <Route exact path={contact} component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </MainLayout.Content>
        </MainLayout.Container>
    );
};

export default App;
