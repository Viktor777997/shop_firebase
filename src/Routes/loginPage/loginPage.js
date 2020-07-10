import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { authenticateUser } from '../../store/actions/auth';


class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        return this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        return (
            <div className='container' >
                <div className="m-auto col-sm-6 text-center d-block">
                    <span className="font-weight-bold">Вход</span>
                    <form className="form-group mt-2" onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control mb-2" name='email' placeholder="E-mail" onChange={this.handleChange} value={this.state.email} />
                        <input type="password" className="form-control mb-2" name='password' placeholder="Пароль" onChange={this.handleChange} value={this.state.password} />
                        <p className='text-danger'>{this.props.error ? this.props.error.message : null}</p>
                        <button type="submit" className="btn btn-dark">Войти</button>
                    </form>

                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        error: state.auth.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: (data) => dispatch(authenticateUser(data)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(LoginPage);