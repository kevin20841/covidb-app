import React, {Component} from "react";
import Immutable from 'immutable';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SectionCards from "./SectionCards";
import Button from "@material-ui/core/Button";

import logo_color from "./assets/logo_color.svg";

import * as db from './services/datastore';

class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
    links: Immutable.Map(),
    };
  }

  componentDidMount() {
    db.fetchLinks((links) => {
      this.setState({ links: Immutable.Map(links) });
    });
  }

  render(){
  document.body.style = "background: white;";
  const {classes} = this.props;

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Box width="100%" height="auto">
            <Box display="flex" justifyContent="center">
              <img src={logo_color} alt=''/>
            </Box>
          </Box>
          <Box m={10} />
          <Grid container spacing={4} alignContent={"stretch"}>
            <Grid item xs={12} md={4} alignContent={"stretch"}>
              <Paper
                style={{
                  display: "flex",
                  backgroundColor: "#4C3E90",
                  padding: 10
                }}
                className={`${classes.roundedRect} ${classes.flexCenter} ${classes.headerRowGridPaper}`}
                elevation={3}
              >
                <div
                  style={{ justifyContent: "flex-end", padding: 10 }}
                  className={classes.flexGrowAndJustifyCenter}
                >
                  <Typography
                    variant="body"
                    align="center"
                    style={{ color: "white" }}
                  >
                    Total confirmed cases
                  </Typography>
                  <Typography
                    style={{ color: "white", fontWeight: "bold" }}
                    component="h4"
                    variant="h3"
                    align="center"
                    color="textPrimary"
                  >
                    713,171
                  </Typography>
                </div>
                <Grid container spacing={0} style={{ flex: 1 }}>
                  <Grid
                    item
                    xs={6}
                    style={{ alignItems: "flex-start", padding: 10 }}
                    className={`${classes.flexCenter} ${classes.flexGrowAndJustifyCenter}`}
                  >
                    <Typography
                      style={{ color: "white" }}
                      variant="body"
                      align="left"
                      color="textPrimary"
                    >
                      Total deaths
                    </Typography>
                    <Typography
                      style={{ color: "white", fontWeight: "bold" }}
                      component="h5"
                      variant="h5"
                      align="left"
                      color="textPrimary"
                    >
                      713,171
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ alignItems: "flex-start", padding: 10 }}
                    className={`${classes.flexCenter} ${classes.flexGrowAndJustifyCenter}`}
                  >
                    <Typography
                      style={{ color: "white" }}
                      variant="body"
                      align="left"
                      color="textPrimary"
                    >
                      Total recovered
                    </Typography>
                    <Typography
                      style={{ color: "white", fontWeight: "bold" }}
                      component="h5"
                      variant="h5"
                      align="left"
                      color="textPrimary"
                    >
                      713,171
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper
                style={{ padding: 24 }}
                className={`${classes.roundedRect} ${classes.headerRowGridPaper} ${classes.whatIsCovIDPaper}`}
                elevation={3}
              >
                <Typography
                  component="h4"
                  variant="h4"
                  align="left"
                  color="textPrimary"
                  style={{ fontWeight: 200 }}
                >
                  What is COVID-19
                </Typography>
                <Box m={2} />
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
          <Box m={3} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={1}
                className={`${classes.roundedRect} ${classes.ctaButton}`}
              >
                <a
                  href={"./"}
                  variant="body"
                  align="center"
                  color="textPrimary"
                  paragraph
                  className={classes.buttonLink}
                  noWrap
                >
                  How do I protect myself?
                </a>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={1}
                className={`${classes.roundedRect} ${classes.ctaButton}`}
              >
                <a
                  href={"./"}
                  variant="body"
                  align="center"
                  color="textPrimary"
                  paragraph
                  className={classes.buttonLink}
                  noWrap
                >
                  Think you are sick, what to do?
                </a>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={1}
                className={`${classes.roundedRect} ${classes.ctaButton}`}
              >
                <a
                  href={"./"}
                  variant="body"
                  align="center"
                  color="textPrimary"
                  paragraph
                  className={classes.buttonLink}
                  noWrap
                >
                  How do I get tested
                </a>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <SectionCards />
      <Box m={5} />
      <Container className={classes.concludingContainer} maxWidth="sm">
        <Typography variant="body" align="center" color="textPrimary" paragraph>
          COVIDB is a crowd-sourced resource, Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Create an account and add a resources to CoviDB
        </Typography>
        <Button href={"./submission"} className={classes.clickButton}>
          Add an Article
        </Button>
      </Container>
      <Box m={10} />
    </>
  );
}
}

const styles = theme =>({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  whatIsCovIDPaper: {
    padding: theme.spacing(2)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  roundedRect: {
    borderRadius: 15
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  ctaButton: {
    //display: 'none',
    textTransform: "none",
    backgroundColor: "lightgray",
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  ctaButtonText: {
    margin: 0
  },
  headerRowGridContainer: {
    display: "flex",
    alignItems: "stretch"
  },
  headerRowGridPaper: {
    width: "100%",
    height: "100%"
  },
  flexGrowAndJustifyCenter: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonLink: {
    color: "#000000",
    textDecoration: "none"
  },
  concludingContainer: {
    textAlign: "center"
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
});


export default withStyles(styles)(Home);
