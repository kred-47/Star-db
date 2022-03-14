import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {
    PersonPage,
    PlanetPage,
    StarshipPage
} from "../pages";
import {SwapiServiceProvider} from "../swapi-service-context";

import './app.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import {StarshipDetails} from "../sw-components";


export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        });
    };

    render() {

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className='stardb-app'>
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet/>

                            <Route path='/'
                                   render={() => <h2>Welcome to StarDB!</h2>}
                                   exact={true}
                            />
                            <Route path='/people'
                                   render={() => <h2>People</h2>}
                                   exact={true}
                            />
                            <Route path='/planets'
                                   render={() => <h2>Planets</h2>}
                                   exact={true}
                            />
                            <Route path='/starships'
                                   render={() => <h2>Starships</h2>}
                                   exact={true}
                            />
                            <Route path='/people/:id?' component={PersonPage}/>
                            <Route path='/planets' component={PlanetPage}/>
                            <Route path='/starships' exact component={StarshipPage}/>
                            <Route path='/starships/:id'
                                   render={({match,location,history}) => {
                                       const { id } = match.params;
                                       return <StarshipDetails itemId={id} />
                                   }}
                            />

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    };
}
