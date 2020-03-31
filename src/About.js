import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import logo_color from "./logo_color.svg"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 15),
    height: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
  headerAbout: {
    paddingTop: '50px',
    color: 'red',
    align: 'left',
    //variant: 'h5',
    //component: 'h5'
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
    h1: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      lineHeight: "1.2em"
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "normal",
      lineHeight: "1.2em"
    },
  },
  headerGeneral: {
    paddingTop: '30px',
    color: 'black',
    align: 'left',
    variant: 'h3',
    //component: 'h3'??
  },
  body: {
    color: 'black',
    aligh: 'left',
    paragraph: 'true',
    variant: 'body1',
  },
  linkBack: {
    paddingTop: '15px',
    color: 'red',
    aligh: 'left',
    paragraph: 'true',
    variant: 'body1',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>

      <div>
        <Paper className={classes.root}>
          <Box display="flex" justifyContent="left">
            <img src={logo_color} />
          </Box>
          <Typography className={classes.linkBack}>
            Home > About
          </Typography>
          <Typography variant="h4" className={classes.headerAbout}>
            About
          </Typography>
          <Typography variant="h5" className={classes.headerGeneral}>
            What Is This Site?
          </Typography>
          <Typography className={classes.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="h5" className={classes.headerGeneral}>
            Mission Statement
          </Typography>
          <Typography className={classes.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="h5" className={classes.headerGeneral}>
            Who Created This Site/Credibility
          </Typography>
          <Typography className={classes.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="h5" className={classes.headerGeneral}>
            Disclaimer
          </Typography>
          <Typography className={classes.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Box width="100%" height="auto" paddingTop='50px' color='red'>
            <Box display="flex" justifyContent="center">
              <Button> Meet the Team </Button>
            </Box>
          </Box>
        </Paper>
      </div>

    </>
  );
}
