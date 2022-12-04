import {
  Link,
  styled,
  Typography
} from "@mui/material";
import React, {useMemo, useRef, useState} from "react";
import Bug from "./components/Bug";
import Github from "./components/Github";
import BarChart from "./components/BarChart";
import * as BarChartData from "./util/BarChartData";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useMapData from "./hooks/useMapData";
import L from "leaflet";
import {Circle, LayerGroup, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

const BackgroundPage = styled("div")(() => ({
  backgroundImage: `url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "100%",
  backgroundColor: "#f0f2f5",
  minHeight: `calc(100vh - 70px)`
}));

const Paper = styled("div")(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: `calc(100vh - 150px)`
}));

const TitleStyle = styled(Typography)(({theme}) => ({
  color: theme.palette.info.main,
  margin: theme.spacing(5, 3, 0, 3),
  alignItems: "center",
  textAlign: "center"
}));

const MenuStyle = styled("div")(() => ({
  display: "flex"
}));

const SectionStyle = styled(Link)(({theme}) => ({
  color: theme.palette.error.light,
  margin: theme.spacing(2, 3),
  alignItems: "center"
}));

const Footer = styled("div")(({theme}) => ({
  padding: "1em 0",
  color: theme.palette.grey[600],
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
}));

const BarChartWrapper = styled("div")(({theme}) => ({
  margin: theme.spacing(2, 5),
  width: "500px",
}));

const Wrapper = styled("div")(({theme}) => ({
  display: "flex",
}));

const CustomTable = styled("div")(({theme}) => ({
  width: "25vw",
  minWidth: "300px",
  border: `solid ${theme.palette.primary.lighter} 2px`,
  margin: theme.spacing(6, 4, 0, 3),
  padding: theme.spacing(2, 4),
  textAlign: "center",
  color: theme.palette.info.main,
}));

const DropdownWrapper = styled("div")(({theme}) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const FilterWrapper = styled(Typography)(({theme}) => ({
  margin: theme.spacing(0, 10, 0, 0),
}));

const MapWrapper = styled("div")(({theme}) => ({
  display: "flex",
}));

export default function Home() {
  const BarChartData1 = {
    chartTitle: BarChartData.chartTitle[0],
    xValues: BarChartData.xValues[0],
    yValues: BarChartData.yValues[0],
    dataSetLabels: BarChartData.dataSetLabels[0],
    backgroundColor: BarChartData.backgroundColor[0]
  }

  const BarChartData2 = {
    chartTitle: BarChartData.chartTitle[1],
    xValues: BarChartData.xValues[1],
    yValues: BarChartData.yValues[1],
    dataSetLabels: BarChartData.dataSetLabels[1],
    backgroundColor: BarChartData.backgroundColor[1]
  }

  const onReset = () => {
    return undefined;
  }

  const starRating = [1, 2, 3, 4, 5]

  const [category, setCategory] = useState("");
  const {businessData, starLevel, setStarLevel} = useMapData();
  const mapRef = useRef()

  const markerIcon = new L.Icon({
    iconUrl: require("./resources/images/marker.png"),
    iconSize: [25, 35],
    iconAnchor: [20, 40],
  })

  const onApplyFilter = async e => {
    e.preventDefault();
  }

  const Map = () => {
    const position = useMemo(() => ({lat: 53.55, lng: -113.5}), [])
    console.log(businessData)
    return (

      <MapContainer
        doubleClickZoom={false}
        center={position}
        zoom={11}
        maxZoom={18}
        ref={mapRef}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {businessData.map((business) => {
          return <>
            <Marker
              position={{lat: business.latitude, lng: business.longitude}}
              icon={markerIcon}>
              <Popup>
                <b>Name: {business.name}</b> <br/>
                <b>Star: {business.stars}</b> <br/>
                <b>Review count: {business.review_count}</b>
              </Popup>
            </Marker>
          </>
        })}
      </MapContainer>

    );
  }

  const handleStarLevelChange = (e) => {
    setStarLevel(e.target.value);
  }

  return (
    <BackgroundPage>
      <Paper>
        <TitleStyle variant="h2">
          <div>
            Welcome to our
          </div>
          <div>
            Yelp Recommender System project demo
          </div>
        </TitleStyle>
        <MenuStyle>
          <SectionStyle href="/" variant="h6" underline="none">
            Home
          </SectionStyle>
          <SectionStyle href="nlp" variant="h6" underline="none">
            NLP
          </SectionStyle>
          <SectionStyle href="location_recommender" variant="h6" underline="none">
            Location Recommender
          </SectionStyle>
        </MenuStyle>
        <Wrapper>
          <BarChartWrapper>
            <BarChart BarChartData={BarChartData1}/>
          </BarChartWrapper>
          <BarChartWrapper>
            <BarChart BarChartData={BarChartData2}/>
          </BarChartWrapper>
        </Wrapper>
        <MapWrapper>
          <form onSubmit={onApplyFilter}>
            <CustomTable>
              <Typography variant="h3">
                Filter data
              </Typography>
              <DropdownWrapper>
                <FilterWrapper variant="h6">
                  Category
                </FilterWrapper>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={1}
                    size="small"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </DropdownWrapper>
              <DropdownWrapper>
                <FilterWrapper variant="h6">
                  Star Rating
                </FilterWrapper>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={starLevel}
                    size="small"
                    onChange={handleStarLevelChange}
                  >
                    {starRating.map((starValue) => {
                      return <MenuItem value={starValue}>{starValue}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </DropdownWrapper>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                sx={{
                  "& > :not(style)": {marginRight: 2}
                }}
              >
                <Button variant="contained" color="error" onClick={() => onReset()}>
                  Reset
                </Button>
                {/*<Button variant="contained" type="submit">*/}
                {/*  Apply*/}
                {/*</Button>*/}
              </Grid>
            </CustomTable>
          </form>
          <Map/>
        </MapWrapper>
      </Paper>

      <Footer>
        <div>
          <Github/> Team No_Error Frontend Demo <Bug/>
        </div>
        <div>Copyright © Made by Ziyao Cui, Xiaoxiao Duan, Jingyi Huang, Zipeng Liang</div>
      </Footer>

    </BackgroundPage>
  )
}