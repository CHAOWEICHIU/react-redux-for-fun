import React, { Component } from 'react'

class SearchBar extends Component {
	constructor(props){
		super(props)
		this.state = {term:''}
	}

	render(){
		return (
		<div>
			<input 
				className="form-control"
				value={this.state.term}
				onChange={ (event)=> this.onSearchChange(event.target.value) } />
		</div>	
		)
	}

	onSearchChange(term){
		this.setState({term})
		this.props.onSearchTermChange(term)
	}

}


export default SearchBar