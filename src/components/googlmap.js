import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Geocode from "react-geocode";
import { GoogleMap,LoadScript,Marker,useLoadScript} from '@react-google-maps/api';
const GoogleMapTest = (props) => {
    Geocode.setApiKey("AIzaSyDO4EN6sFxK8_Fm8mIOpzYfJcVdqA_k4B0");
    const [latitude,setLatitude]=useState(0);
    const [longtitude,setLongtitude]=useState(0);
    /*
    fetch Latitude and Longtitude by Geocode
    每次到新的房子時，要刷新house的address，做為新的center。
    click 的時候也要跑才可得到新的位址，來mark地圖
    */

   useEffect(()=>{
    Geocode.fromAddress("新北市林口區文化三路二段").then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLatitude(lat);
          setLongtitude(lng);
          console.log(lat, lng);
        },
        (error) => {
          console.error(error);
        }
    );},[latitude]);
  const containerStyle = {
      width: '800px',
      height: '400px'
    };
  return (
    <div>
    <LoadScript
      googleMapsApiKey= "AIzaSyDO4EN6sFxK8_Fm8mIOpzYfJcVdqA_k4B0"
    >

      <GoogleMap

        mapContainerStyle={containerStyle}
        zoom={15}
        center={{lat:latitude,lng:longtitude}}
        options={mapstyle}
      >
        <Marker 
         position={{lat:latitude,lng:longtitude}}
          icon ="/Image/placeholder.png"
        />
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default  GoogleMapTest