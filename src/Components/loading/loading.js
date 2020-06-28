import React from 'react';
import { Spinner } from 'reactstrap';
import './loading.scss'

const Loading = (props) => {
    return (
        <div className="loading">
            <Spinner type="grow" color="secondary" />
        </div>
    );
}

export default Loading;