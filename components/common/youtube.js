import React, { Component } from 'react'
import YouTube from 'react-youtube';

export default class Youtube extends Component {    

    render() {
        const {video} = this.props
        let video_id = video.split('v=')[1];
        let ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        
        const opts = {
            height: '368',
            width:'100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
        }

        return (
            <YouTube
                videoId={video_id}
                opts={opts}
                onReady={this._onReady}
            />
        )
    }
}