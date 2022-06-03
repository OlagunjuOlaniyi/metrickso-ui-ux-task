import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: theme.spacing(2, 10),
    backgroundColor: "inherit",
    boxShadow: "none",
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
    fontSize: "16px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className={`${classes.navbar} navbar2`}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Matricks
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/about" className={classes.link}>
              about us
            </Link>
            <Link to="/blog" className={classes.link}>
              blog
            </Link>
            <Link
              to="/contact"
              className={`${classes.link} ${classes.contact}`}
            >
              <span className="contact">Contact</span>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
