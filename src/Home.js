import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
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
          <Box m={10} />
          <Grid container spacing={4} alignContent={"stretch"}>
            <Grid item xs={12} md={4} alignContent={"stretch"}>
              <Paper
                style={{ display: "flex" }}
                className={`${classes.roundedRect} ${classes.flexCenter} ${classes.headerRowGridPaper}`}
                elevation={3}
              >
                <div className={classes.flexGrowAndJustifyCenter}>
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
                </div>
                <Grid container spacing={0} style={{ flex: 1 }}>
                  <Grid
                    item
                    xs={6}
                    className={`${classes.flexCenter} ${classes.flexGrowAndJustifyCenter}`}
                  >
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
                  <Grid
                    item
                    xs={6}
                    className={`${classes.flexCenter} ${classes.flexGrowAndJustifyCenter}`}
                  >
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
              <Paper
                className={`${classes.roundedRect} ${classes.headerRowGridPaper} ${classes.whatIsCovIDPaper}`}
                elevation={3}
              >
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
          <Box m={3} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={1}
                className={`${classes.roundedRect} ${classes.ctaButton}`}
              >
                <Typography
                  variant="body"
                  align="center"
                  color="textPrimary"
                  paragraph
                  className={classes.ctaButtonText}
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
                  align="center"
                  color="textPrimary"
                  paragraph
                  className={classes.ctaButtonText}
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
                  align="center"
                  color="textPrimary"
                  paragraph
                  className={classes.ctaButtonText}
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
