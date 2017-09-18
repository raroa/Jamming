import React from 'react';
import ReactDOM from 'react-dom';
import './TrackList.css';
import { Track } from '../Track/Track';

 export class TrackList extends React.Component {
    render() {
        (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} />;
                    })

                }
            </div>
        )
    }
}

//{
//    this.props.businesses.map(business => {
//        return <Business key={business.id} business={business} />;
//    })
//}