import React from 'react';

const LoginPage = () => {
    return (
        <div className='container'>
            <div className="m-auto col-6 text-center d-block">
                <span className="font-weight-bold">Sign in</span>

                <form className="form-group col mt-2" >
                        <input type="text" className="form-control mb-2" placeholder="E-mail"></input>
                        <input type="text" className="form-control mb-2" placeholder="Password"></input>
                        <button type="submit" className="btn btn-dark">Sign in</button>
                </form>

            </div>
        </div>
    );
}

export default LoginPage;