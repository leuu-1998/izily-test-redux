import React from "react";
import AppBar from "@material-ui/core/AppBar";

import { makeStyles, Grid, Button } from "@material-ui/core";

import logo from "../../assets/images/logoprincipal.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 0px 4px 0 rgba(0, 0, 0, 0.2)",
    zIndex: theme.zIndex.drawer + 1,
  },

  gridPadre: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  gridHijo: {
    height: "50px",
    display: "flex",
    alignItems: "center",
  },

  searchInput: {
    opacity: "0.9",
    padding: "0px 5px",
    margin: "0px 40px",
    fontSize: "11px",
  },

  logo: {
    width: 64,
    height: 40,
    marginLeft: 15,
  },
  buttonLogo: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
  },

  botones: {
    margin: "0px 5px",
    color: "#3493C2",
    fontWeight: "bold",
    height: "30px",
    fontSize: "11px",
  },

  menu: {
    padding: "0px",
  },

  icon: {
    padding: "10px",
  },

  nombrecontainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "160px",
    color: "black",
    paddingLeft: "10px",
  },

  rootAvatar: {
    marginRight: "10px",
    width: "33px",
    height: "33px",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    "&:hover": { cursor: "pointer" },
  },
  nombre: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    margin: "0px",
    padding: "0px",
    "&:hover": { cursor: "pointer" },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.root}>
        {/* <Toolbar> */}
        <Grid className={classes.gridPadre} container alignItems="center">
          <Grid className={classes.gridHijo} item>
            <Button
              to={"/"}
              className={classes.buttonLogo}
              disableRipple={true}
              disableFocusRipple={true}
            >
              <img alt="logo" src={logo} className={classes.logo} />
            </Button>
          </Grid>

          <Grid className={classes.gridHijo} item xs></Grid>

          <Grid className={classes.gridHijo} item>
            <Button className={classes.botones} variant="outlined">
              Ingresar
            </Button>
            <Button className={classes.botones} variant="outlined">
              Regístrate
            </Button>
          </Grid>
        </Grid>
        {/* </Toolbar> */}
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
