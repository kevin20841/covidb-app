import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import logo_white from "./logo_white.svg";
import TextField from "@material-ui/core/TextField";
import { sizing } from "@material-ui/system";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "40vh",
    justifyContent: "space-between"
  },
  email: {
    borderRadius: 16,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: 0,
    paddingLeft: 15,
    borderWidth: "1px 1px",
    border: "solid white",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      width: "55ch",
      "&:focus": {
        width: "55ch"
      }
    }
  },
  backEmail: {
    color: "red"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  },
  list: {
    color: "#FFFFFF",
    font: "Regular 16px/26px Motiva Sans"
  },
  update: {
    color: "#FFFFFF"
  },
  bottomLink: {
    color: "#FFFFFF",
    textDecoration: "none",
    "&:hover": {
      color: "white",
      textDecoration: "none"
    },
    height: "inherit"
  },
  inputRoot: {},
  inputInput: {
    color: "white",
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    fontSize: "17px"
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      bgcolor="#4C3B92"
      paddingLeft={16}
      paddingRight={16}
      paddingTop={8}
      paddingBottom={4}
    >
      <Box flexGrow={1} flexDirection="column">
        <Box marginLeft="12px">
          <img src={logo_white} width="30%" height="30%" />
        </Box>
        <Box>
          <div className={classes.list}>
            <List dense="true">
              <ListItem>
                <Link href="./About" className={classes.bottomLink}>
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link href="./CommunityNorms" className={classes.bottomLink}>
                  Community Norms
                </Link>
              </ListItem>
              <ListItem>
                <Link href="./CommunityNorms" className={classes.bottomLink}>
                  How to use
                </Link>
              </ListItem>
              <ListItem>
                <Link href="./CommunityNorms" className={classes.bottomLink}>
                  FAQs
                </Link>
              </ListItem>
              <ListItem>
                <Link href="./CommunityNorms" className={classes.bottomLink}>
                  Contact Us
                </Link>
              </ListItem>
            </List>
          </div>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" style={{ fontWeight: 200, color: "white" }}>
          Never miss an update.
        </Typography>
        <Box m={2} />
        <div className={classes.email}>
          <InputBase
            placeholder="Email"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <div
            style={{
              boxSizing: "border-box",
              backgroundColor: "white",
              width: "35%",
              margin: 0,
              heihgt: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Typography
              variant="body"
              align="center"
              style={{
                fontWeight: 400,
                color: "#4C3E90",
                fontSize: 17,
                margin: 0,
                heihgt: "100%",
                width: "100%"
              }}
            >
              Get Alerts
            </Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
}
