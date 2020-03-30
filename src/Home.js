import React from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import logo from "./logo.svg";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  roundedRect: {
    borderRadius: 20
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  ctaButton: {
    backgroundColor: "lightgray",
    padding: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            COVIDB
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper className={classes.flexCenter} elevation={3}>
                <Typography variant="body" align="center" color="textPrimary">
                  Total confirmed cases
                </Typography>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                >
                  713,171
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={6} className={classes.flexCenter}>
                    <Typography
                      variant="body"
                      align="center"
                      color="textPrimary"
                    >
                      Total confirmed cases
                    </Typography>
                    <Typography
                      component="h5"
                      variant="h5"
                      align="center"
                      color="textPrimary"
                    >
                      713,171
                    </Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.flexCenter}>
                    <Typography
                      variant="body"
                      align="center"
                      color="textPrimary"
                    >
                      Total confirmed cases
                    </Typography>
                    <Typography
                      component="h5"
                      variant="h5"
                      align="center"
                      color="textPrimary"
                    >
                      713,171
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={3}>
                <Typography
                  component="h1"
                  variant="h2"
                  align="left"
                  color="textPrimary"
                >
                  What is COVID-19
                </Typography>
                <Typography
                  variant="body"
                  align="left"
                  color="textPrimary"
                  paragraph
                >
                  Coronavirus disease (COVID-19) is an infectious disease caused
                  by a new virus. The disease causes respiratory illness (like
                  the flu) with symptoms such as a cough, fever, and in more
                  severe cases, difficulty breathing. You can protect yourself
                  by washing your hands frequently, avoiding touching your face,
                  and avoiding close contact (1 meter or 3 feet) with people who
                  are unwell.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={1}
                className={`${classes.roundedRect} ${classes.ctaButton}`}
              >
                <Typography
                  variant="body"
                  align="left"
                  color="textPrimary"
                  paragraph
                >
                  How do I protect myself
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={1}
                className={`${classes.roundedRect} ${classes.ctaButton}`}
              >
                <Typography
                  variant="body"
                  align="left"
                  color="textPrimary"
                  paragraph
                >
                  Think you are sick, what to do?
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={1}
                className={`${classes.roundedRect} ${classes.ctaButton}`}
              >
                <Typography
                  variant="body"
                  align="left"
                  color="textPrimary"
                  paragraph
                >
                  How do I get tested?
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
