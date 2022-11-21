import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";

import { Outlet } from "react-router-dom";

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  borderBottom: `solid ${theme.palette.primary.lighter} 1px`,
  minHeight: "70px",
}));

const ToolBarStyle = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between"
}));

const TitleStyle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  margin: theme.spacing(0, 3)
}));

const MenuStyle = styled("div")(() => ({
  display: "flex"
}));

export default function Header() {
  return (
    <div>
      <AppBarStyle position="relative" elevation={1}>
        <ToolBarStyle>
          <div>
            <TitleStyle variant="h4" aria-label="title">
              Yelp Recommender System
            </TitleStyle>
          </div>
          <MenuStyle>
            <TitleStyle variant="h6">
              Home
            </TitleStyle>
            <TitleStyle variant="h6">
              Recommender System
            </TitleStyle>
          </MenuStyle>
        </ToolBarStyle>
      </AppBarStyle>
      <Outlet />
    </div>
  );
}
