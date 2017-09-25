import React from 'react';
import ReactDOM from 'react-dom';
import './TrackList.css';
import { Track } from '../Track/Track';

 export class TrackList extends React.Component {
    render() {
         return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track key={track.id} isRemoval={this.props.isRemoval} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} />;
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