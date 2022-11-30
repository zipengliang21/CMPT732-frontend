import {
  Link,
  styled,
  Typography
} from "@mui/material";
import React from "react";
import Bug from "./components/Bug";
import Github from "./components/Github";
import BarChart from "./components/BarChart";

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
  alignItems: "center"
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
  position: "absolute",
  bottom: "20px",
  color: theme.palette.grey[600],
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
}));

const BarChartWrapper = styled("div")(({theme}) => ({
  margin: theme.spacing(2, 5),
  width: "45%",
}));

const Wrapper = styled("div")(({theme}) => ({
  display: "flex"
}));

export default function Home() {
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
          <SectionStyle href="recommended_location" variant="h6" underline="none">
            Recommended Location
          </SectionStyle>
        </MenuStyle>
        <Footer>
          <div>
            <Github/> Team No_Error Frontend Demo <Bug/>
          </div>
          <div>Copyright © Made by Ziyao Cui, Xiaoxiao Duan, Jingyi Huang, Zipeng Liang</div>
        </Footer>
      </Paper>
      <Wrapper>
        <BarChartWrapper>
          <BarChart/>
        </BarChartWrapper>
        <BarChartWrapper>
          <BarChart/>
        </BarChartWrapper>
      </Wrapper>

    </BackgroundPage>
  )
}