import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/.'


class Pokecard extends Component {
	render() {
		return (
			<div className="Pokecard">
				<h1>{this.props.name}</h1>
			</div>
		);
	}
}

export default Pokecard;
