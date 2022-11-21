import {
  Container,
  CssBaseline,
  styled
} from "@mui/material";

const BackgroundPage = styled("div")(() => ({
  backgroundImage: `url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "100%",
  backgroundColor: "#f0f2f5",
  minHeight: `calc(100vh - 70px)`
}));

export default function Home() {
  return (
    <BackgroundPage>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
      </Container>
    </BackgroundPage>
    )
}