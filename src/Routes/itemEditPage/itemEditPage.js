import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItem, createItem } from '../../store/actions/item';
import CreateItem from '../../Components/createItem'

class ItemEditPage extends Component {

    state = {
        id:  this.props.match.params.id,
    }

    componentDidMount() {
        this.props.getItem(this.state.id);
      
    }
    // componentDidUpdate(prevProps, prevState) {
        
    //     if (prevProps!==this.props) {
    //     this.props.getItem(this.state.id);
            
    //     }
    // }

    render() {
        console.log(this.props)
        const { item, createItem, getItem} = this.props


        if (!item.isLoaded || item.data === null) {
            return (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }


        if (item.error) {
            return <div>
                Error
        </div>
        }
        return (
            <div className='container'>
                <CreateItem
                    create={createItem}
                    data={item.data}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        item: state.item.current,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        getItem: (data) => dispatch(fetchItem(data)),
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

export default enhance(ItemEditPage);