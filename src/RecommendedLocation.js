import {
  styled, Typography
} from "@mui/material";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import React, {useMemo, useState} from "react";
import "./globals.css"
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useMapData from "./hooks/useMapData";

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
}));

const CustomTable = styled("div")(({theme}) => ({
  width: "25vw",
  minWidth: "300px",
  border: `solid ${theme.palette.primary.lighter} 2px`,
  margin: theme.spacing(6, 4, 0, 15),
  padding: theme.spacing(2, 4),
  textAlign: "center",
  color: theme.palette.info.main,
}));

const CustomGoogleMap = styled("div")(({theme}) => ({
  margin: theme.spacing(6, 2),
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

const onReset = () => {
  return undefined;
}

const starRating = [1, 2, 3, 4, 5]

export default function RecommendedLocation() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [category, setCategory] = useState("");
  const { businessData, starLevel, setStarLevel }  = useMapData()

  const onApplyFilter = async e => {
    e.preventDefault();

  }

  if (!isLoaded) return <div>Loading...</div>
  const Map = () => {
    const center = useMemo(() => ({lat: 53.55, lng: -113.5}), [])

    return <CustomGoogleMap>
      <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
        {businessData.map((business) => {
          return <Marker position={{lat: business.latitude, lng: business.longitude}}/>
        })}
      </GoogleMap>
    </CustomGoogleMap>
  }

  const handleStarLevelChange= (e) => {
    setStarLevel(e.target.value)
  }

  return (
    <BackgroundPage>
      <Paper>
        <form onSubmit={onApplyFilter}>
          <CustomTable>
            <Typography variant="h4">
              Choose values to filter data you want
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
                "& > :not(style)": { marginRight: 2 }
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
      </Paper>
    </BackgroundPage>
  )
}