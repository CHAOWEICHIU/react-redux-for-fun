// npm
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YoutubeSearch from 'youtube-api-search'

// self
import SearchBar from './components/searchBar'

const youtubeAPIKey = 'AIzaSyAqqNfDrWoYBJy9pduS6NQAUI5DMWgtGps'




class App extends Component {
	constructor(props){
		super(props)

		this.state = { videos: [] }

		YoutubeSearch({key:youtubeAPIKey, term:'pitbull'},(videos)=>{
			this.setState({ videos })
		})

	}
	render(){
		return (
			<div>
				<SearchBar />
			</div>
		)	
	}
}
	

ReactDOM.render(<App />, document.querySelector('#container'))