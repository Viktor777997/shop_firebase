import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './allCards.scss'

class AllCards extends Component {

    render() {

        return (
            <div className="random_cards ">
                {this.props.items.data.map(item => (
                    <div className="card " key={item.id}>
                        <Link to={`/card/${item.id}`}>
                            <img className="card-img-top" src={item.image} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default AllCards;