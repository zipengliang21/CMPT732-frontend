import {
  CssBaseline,
  styled
} from "@mui/material";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import {useMemo} from "react";
import "./globals.css"
import business from "./business.json"

const BackgroundPage = styled("div")(() => ({
  backgroundImage: `url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "100%",
  backgroundColor: "#f0f2f5",
  minHeight: `calc(100vh - 70px)`
}));

const CustomGoogleMap = styled(GoogleMap)(({ theme }) => ({
}));

const Map = () => {
  const center = useMemo(() => ({lat: 53.55, lng: -113.5}), [])
  console.log(business.data)

  return <CustomGoogleMap zoom={10} center={center} mapContainerClassName="map-container">
    {business.data.map((business) => {
      return <Marker position={{lat: business.latitude, lng:business.longitude}}/>
    })}
  </CustomGoogleMap>
}

export default function Home() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <BackgroundPage>
      <CssBaseline/>
      <Map/>
    </BackgroundPage>
  )
}