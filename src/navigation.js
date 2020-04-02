import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import {  makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    display: "none",
    textTransform: "none",
    fontSize: "20px",
    width: "10%",
    color: "black",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    marginRight: "30px",
    marginLeft: "30px",
    borderRadius: 16,
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white"
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    //marginLeft: 0,
    width: "60%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(6),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    color: "#A2A2A2",
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    fontStyle: "italic"
  },
  inputInput: {
    color: "#848484",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    fontSize: "13px",
    [theme.breakpoints.up("sm")]: {
      width: "55ch",
      "&:focus": {
        width: "55ch"
      }
    }
  },
  toolBar: {
    justifyContent: "center",
    backgroundColor: "#EDEBEB",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  clickButton: {
    width: "150px",
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 10,
    height: "30px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontSize: "12px",
    color: "white", //hot pink
    backgroundColor: "#BE2E3B",
    "&:hover": {
      backgroundColor: "#A2A2A2"
    }
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Button href={"./"} className={classes.title} variant="h6" noWrap>
            TeachAids
          </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Example: Coronavirus testing in my area"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button href={"./submission"} className={classes.clickButton}>
            Add Article
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
