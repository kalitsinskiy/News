import React, {Component, Fragment} from 'react';
import {Switch, Route, Redirect} from "react-router-dom"

import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import ProfileContainer from "../containers/ProfileContainer";
import HeaderContainer from "../containers/HeaderContainer";
import AdminComponent from "../components/AdminComponent";

import {postStatistics} from "../action/apiRequests"

export default class Base extends Component{
    componentDidMount(){
        const { isLoggedIn, getCurrentSession } = this.props;
        isLoggedIn && getCurrentSession();
        postStatistics();
    }

    componentWillReceiveProps(nextProps){
        const { isLoggedIn, history } = this.props;

        if (isLoggedIn !== nextProps.isLoggedIn && nextProps.isLoggedIn){
            history.push("/dashboard")
        }
    }

    render(){
        const {login, addUser, getNews, isLoggedIn, news, isAdmin} = this.props;

        return (
            <Fragment>
                <HeaderContainer/>
                <Switch>
                    <Route path="/dashboard" render={() => <Dashboard getNews={getNews} news={news}/>}/>
                    <Route path='/login' render={() => <LogIn login={login}/>}/>
                    <Route path='/signup' render={() => <SignUp addUser={addUser}/>}/>
                    {isLoggedIn && <Route path='/profile' component={ProfileContainer}/>}
                    {isAdmin && <Route path='/admin' component={AdminComponent}/>}
                    <Redirect to="/dashboard"/>
                </Switch>
            </Fragment>
        )
    }
}
