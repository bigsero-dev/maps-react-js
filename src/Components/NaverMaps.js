import React from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'

const NaverMapComponent = ({ latitude, longitude }) => {
    const navermaps = useNavermaps()

    return (
        <MapDiv
            style={{
                width: '100%',
                height: '300px',
            }}
        >
            <NaverMap
                defaultCenter={new navermaps.LatLng(latitude, longitude)}
                defaultZoom={15}
            >
                <Marker
                    defaultPosition={new navermaps.LatLng(latitude, longitude)}
                />
            </NaverMap>
        </MapDiv>

    );
};

export default NaverMapComponent;