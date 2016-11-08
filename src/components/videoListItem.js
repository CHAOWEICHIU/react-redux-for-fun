import React from 'react'

const VideoListItem = ({video, onVideoSelect})=>{
	const imageUrl = video.snippet.thumbnails.default.url
		, title = video.snippet.title;

	return (
		<div onClick={()=>{ onVideoSelect(video) }} 
			className="col-lg-3 col-md-3 col-sm-3 col-xs-3 hover-gray">
			<img className="btn img-responsive col-lg-12 col-md-12 col-sm-12 col-xs-12" src={ imageUrl }/>
		</div>
	)
}

export default VideoListItem