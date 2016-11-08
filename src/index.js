import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/searchBar'

const youtubeAPIKey = 'AIzaSyAqqNfDrWoYBJy9pduS6NQAUI5DMWgtGps'

// Create new coponent 
// This component shou;d produce html
const App = ()=>{
	return (
		<div>
			<SearchBar />
		</div>
	)
}

// Put into DOM

ReactDOM.render(<App />, document.querySelector('#container'))