import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap({ center, zoom }) {


    return (
        // Important! Always set the container height explicitly
        <div style={{
            height: "calc(100vh - 149px)",
            width: '100%'
        }}>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}

SimpleMap.defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
}

export default SimpleMap;