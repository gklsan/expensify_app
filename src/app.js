import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const expenseDashboardPage = () => (
    <div>
        <p> expenseDashboardPage </p>
    </div>
);

const AddExpensePage = () => (
    <div>
        <p> addExpensePage </p>
    </div>
);

const EditExpensePage = () => (
    <div>
        <p> editExpensePage </p>
    </div>
);

const HelpPage = () => (
    <div>
        <p> helpPage </p>
    </div>
);

const NotFoundPage = () => (
    <div>
        <p> 404!!! <Link to='/'> Go Home </Link> </p>
    </div>
);



const Header = () => (
  <div>
      <h1>Expensify App</h1>
      <NavLink to='/' activeClassName='is-active' exact={true}> Home </NavLink>
      <NavLink to='/create' activeClassName='is-active'> Add expense </NavLink>
      <NavLink to='/edit' activeClassName='is-active'> Edit expense </NavLink>
      <NavLink to='/help' activeClassName='is-active'> Help </NavLink>
  </div>
);


const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={expenseDashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage} exact={true} />
                <Route path='/edit' component={EditExpensePage} exact={true} />
                <Route path='/help' component={HelpPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes , document.getElementById('app'));

