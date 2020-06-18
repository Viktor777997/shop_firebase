import React, { Component } from 'react';
import CreateItem from '../../Components/createItem'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItem, createItem } from '../../store/actions/item';


class ItemCreatePage extends Component {

    render() {

        return (
            <div className='container'>
                <CreateItem create={this.props.createItem} />
            </div>
        );

    }
}


function mapStateToProps(state) {
    // console.log(state)
    return {
        // item: state.item.current,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        createItem: (data) => dispatch(createItem(data)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(ItemCreatePage);