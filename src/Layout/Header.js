import React, { useEffect, useState } from "react";
import Popover from "@mui/material/Popover";
import UserMenu from "../Components/UserMenu";
import { Sheet } from "@mui/joy";
import { SearchInput } from "../Components/SearchInput";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { styled } from "@mui/joy/styles";
import { Link } from "react-router-dom";
import { DrawerMobileNavigation } from "../Components/MobileNavigation";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import CartMenu from "../Components/CartMenu";

const NavbarContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 22px",
  background: "var(--bright)",
}));

const SideContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  background: "var(--bright)",
}));

const StoreName = styled("h1")(({ theme }) => ({
  color: "#17494D",
}));

const AppTitle = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

const NavbarLinksContainer = styled(Sheet)(({ theme }) => ({
  gap: "12px",
  alignItems: "center",
  marginLeft: "10px",
  background: "var(--bright)",
}));

const NavbarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "var(--type-high-emphasis)",
  fontWeight: "var(--medium-font)",
}));

const IconContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "bottom",
  background: "var(--bright)",
}));

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartAnchorEl, setCartAnchorEl] = useState(null);
  let navigate = useNavigate();

  const handleNavigation = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNavigation(e);
      navigate(`/category?keyword=${searchValue}`);
      setSearchValue("");
    }
  };

  const handleUserMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const isUserMenuOpen = Boolean(anchorEl);

  const handleCartMenuClick = (event) => {
    setCartAnchorEl(event.currentTarget);
  };

  const handleCartMenuClose = () => {
    setCartAnchorEl(null);
  };

  const isCartMenuOpen = Boolean(cartAnchorEl);
  return (
    <>
      <NavbarContainer>
        <SideContainer>
          <DrawerMobileNavigation />
          <AppTitle to={"/"}>
            <StoreName>CORA'L</StoreName>
          </AppTitle>
          <NavbarLinksContainer
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
              },
            }}
          >
            <NavbarLink to={"/category?categoryName=Handbags"}>
              Handbags
            </NavbarLink>
            <NavbarLink to={"/category?categoryName=Watches"}>
              Watches
            </NavbarLink>
            <NavbarLink to={"/category?categoryName=Skincare"}>
              Skincare
            </NavbarLink>
            <NavbarLink to={"/category?categoryName=Jewellery"}>
              Jewellery
            </NavbarLink>
            <NavbarLink to={"/category?categoryName=Apparels"}>
              Apparels
            </NavbarLink>
          </NavbarLinksContainer>
        </SideContainer>
        <SideContainer>
          <SearchInput
            onKeyPress={handleKeyPress}
            onChange={handleNavigation}
            value={searchValue}
          />
          <IconContainer>
            <FavoriteBorderOutlinedIcon
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "inline",
                  xl: "inline",
                },
              }}
            />
            <PersonOutlineOutlinedIcon
              onClick={handleUserMenuClick}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "inline",
                  xl: "inline",
                },
              }}
            />
            <Badge
              color="primary"
              variant="dot"
              onClick={handleCartMenuClick}
            >
              <LocalMallOutlinedIcon />
            </Badge>
          </IconContainer>
        </SideContainer>
      </NavbarContainer>
      <Popover
        open={isUserMenuOpen}
        anchorEl={anchorEl}
        onClose={handleUserMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <UserMenu />
      </Popover>
      <Popover
        open={isCartMenuOpen}
        anchorEl={cartAnchorEl}
        onClose={handleCartMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <CartMenu setCartAnchorEl={setCartAnchorEl}/>
      </Popover>
    </>
  );
};