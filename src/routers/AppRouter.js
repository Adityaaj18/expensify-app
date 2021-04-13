import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpense from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotPageFound';
import Header from '../components/Header';













const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
        </Switch> 
    </div>      
    </BrowserRouter>
)

export default AppRouter;