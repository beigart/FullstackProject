import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from '../view/HomeView/HomeView';
import { SignInView } from '../view/SignInView/SignInView';
import { RecipeView} from '../view/RecipeView/RecipeView';
import { AboutView } from '../view/AboutView/AboutView';

export default function Routing(props) {
    return (
        <div>
            <Router>
                {props.children}
                    <Switch>
                        <Route exact path='/' component={HomeView} />
                        <Route exact path='/recept' component={RecipeView} />
                        <Route exact path='/om' component= { AboutView } />
                        <Route exact path='/loggain' component={SignInView} />
                    </Switch>
            </Router>
        </div>
    )
}
