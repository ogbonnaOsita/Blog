import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const navLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Business",
    url: "/business",
  },
  {
    label: "Health",
    url: "/health",
  },
  {
    label: "Technology",
    url: "/technology",
  },
  {
    label: "Entertainment",
    url: "/entertainment",
  },
  {
    label: "Sports",
    url: "/sports",
  },
];

const Navbar = () => {
  const [state, setState] = useState(false);

  //   Control sidebar
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div className="w-full h-50 py-3 md:py-5 md:px-10 px-5 bg-white">
      <div className="w-full flex justify-between items-center">
        <Link to="/">
          <div className="nav-logo font-bold text-xl">
            Mini <span className="italic text-2xl text-red-600">Blog</span>
          </div>
        </Link>
        <div className="nav-links  hidden md:flex md:gap-8">
          {navLinks.map((link, i) => (
            <Link
              to={link.url}
              key={i}
              className="nav-links group transition duration-300 font-semibold"
            >
              {link.label}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-red-600"></span>
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Button color="blogDark" onClick={toggleDrawer(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </Button>
          <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {navLinks.map((link, i) => (
                  <Link key={i} to={link.url}>
                    <ListItem
                      disablePadding
                      sx={{
                        "&:hover": {
                          backgroundColor: "#dc2626",
                          color: "white",
                          "& .MuiListItemIcon-root": {
                            color: "white",
                          },
                        },
                      }}
                    >
                      <ListItemButton>
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
