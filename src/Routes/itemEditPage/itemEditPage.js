import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItem, editItem } from '../../store/actions/item';
import CreateItem from '../../Components/createItem'
import Loading from '../../Components/loading';
import ErrorPage from '../errorPage';

class ItemEditPage extends Component {

    state = {
        isDidAction: false
    }


    componentDidMount() {
        this.loadData()

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isDidAction && !prevProps.item.isLoaded && this.props.item.isLoaded) {
            this.setState({ isDidAction: false });
            this.loadData()
            this.props.history.push('/admin/allItems')
        }
    }

    loadData = () => this.props.getItem(this.props.match.params.id);

    handleEdit = (id, data) => {
        this.props.editItem(id, data)
        this.setState({ isDidAction: true })
    }

    render() {
        const { item, } = this.props;
        if (!item.isLoaded || !item.data) {
            return (
                <Loading />
            )
        }


        if (item.error) {
            return <div>
                <ErrorPage />
            </div>
        }
        return (
            <div className='container'>
                <CreateItem
                    id={this.props.match.params.id}
                    edit={this.handleEdit}
                    data={item.data}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        item: state.item.current,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        getItem: (data) => dispatch(fetchItem(data)),
        editItem: (id, data) => dispatch(editItem(id, data)),
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