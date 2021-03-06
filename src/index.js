import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YoutubeSearch from 'youtube-api-search'
import SearchBar from './components/searchBar'
import VideoList from './components/videoList'
import VideoDetail from './components/videoDetail'

const youtubeAPIKey = 'AIzaSyAqqNfDrWoYBJy9pduS6NQAUI5DMWgtGps'

class App extends Component {
	constructor(props){
		super(props)

		this.state = { 
			selectedVideo: null,
			videos: [] 
		}

		this.videoSearch('chef')
	}

	videoSearch(term){
		YoutubeSearch({key:youtubeAPIKey, term:term},(videos)=>{
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			})
		})
	}

	render(){
		return (
			<div className="jumbotron">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
						<SearchBar onSearchTermChange={(term)=>{this.videoSearch(term)}}/>
					</div>
					<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
						<VideoDetail video={this.state.selectedVideo}/>
					</div>

					<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
						<br /><hr />
						<div>
							<VideoList 
								onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
								videos={this.state.videos}/>
						</div>
					</div>
					
				</div>
			</div>
		)	
	}
}
	

ReactDOM.render(<App />, document.querySelector('.container'))