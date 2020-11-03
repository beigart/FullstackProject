import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from '../view/HomeView/HomeView';
import { SignInView } from '../view/SignInView/SignInView';
import { RecipeView} from '../view/RecipeView/RecipeView';
import { AboutView } from '../view/AboutView/AboutView';
import { RegisterView} from '../view/RegisterView/RegisterView';

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
                        <Route exact path ='/register' component={RegisterView} />
                    </Switch>
            </Router>
        </div>
    )
}
