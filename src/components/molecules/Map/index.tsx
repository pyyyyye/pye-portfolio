import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const mapStyle = {
  width: "1200px",
  height: "650px",
};

const Map = () => {
  const apiKey = String(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
  const [lat, setLat] = React.useState(0);
  const [lng, setLng] = React.useState(0);
  const center = { lat, lng };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(`Position.Latitude 위도 : ${position.coords.latitude}`);
          setLat(position.coords.latitude);
          console.log(`Position.longitude 경도 : ${position.coords.longitude}`);
          setLng(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다. 설정을 확인하세요.");
    }
  };
  React.useEffect(() => {
    getLocation();
  }, []);
  return (
    <>
      <div>구글뱁</div>
      <div className="border border-blue-500">
        <LoadScript googleMapsApiKey="AIzaSyADPVSiLjoar45suZE8XJCKuw2PwA86k4s">
          <GoogleMap
            mapContainerStyle={mapStyle}
            center={center}
            zoom={16}
            options={{
              disableDefaultUI: true,
              mapTypeControl: true,
            }}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </LoadScript>
        )
      </div>
    </>
  );
};

export default Map;
