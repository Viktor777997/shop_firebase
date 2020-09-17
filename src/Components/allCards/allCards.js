import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './allCards.scss'

class AllCards extends Component {

    render() {
        return (
            <ul className="random_cards ">
                {this.props.items.data.map(item => (
                    <li className="card " key={item.id}>
                        <Link to={`/card/${item.id}`}>
                            <img className="card-img-top" src={item.image} alt={item.title} title={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

export default AllCards;