import React from 'react'

const VideoDetail = ({video})=>{
	if(!video)return <h2>Loading ... </h2>

	const videoId = video.id.videoId
		, url = `https://www.youtube.com/embed/${videoId}`
	return (
		<div className="row">
			<br />
			<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
				<h3>{video.snippet.title}</h3><br />
				<p>{video.snippet.description}</p>
			</div>
		</div>
	)
}

export default VideoDetail