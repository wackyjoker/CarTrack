import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

declare const window: any;

type IProps = {
  lat: number;
  lng: number;
};

const containerStyle = {
  width: "100vw",
  height: "50vh",
};

const Map: React.FC<IProps> = (props) => {
  console.log(props);
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={props} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
