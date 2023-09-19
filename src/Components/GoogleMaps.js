import {Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

class GoogleMaps extends Component {
    render() {
        return(
            <Map 
            google= {this.props.google}
            style = {{width:'40%', height:'70%'}}
            zoom = {10}
            initialCenter = {
                {
                lat: 10.790483,
                lng: 78.704674
                }
            }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBTDAP2yv3Z7t5UFVu-cMRBtEEsre8tccQ"
})(GoogleMaps)