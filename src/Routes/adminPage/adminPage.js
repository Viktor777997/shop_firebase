import React, { Component } from 'react';

import firebase from '../../config/firebase'

import AdminHomePage from '../adminHomePage'
import LoginPage from '../loginPage'
import Loading from '../../Components/loading'

class AdminPage extends Component {
    state = {
        user: undefined,
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }

    render() {
        if (this.state.user === undefined) {
            return <Loading />
        }
        return (
            <div className='conainer'>
                {this.state.user ? <AdminHomePage /> : <LoginPage />}
            </div>
        );
    }
}



export default AdminPage;