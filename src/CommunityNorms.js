import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import logo_color from "./logo_color.svg"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 15),
    height: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
  vertDiv: {
    padding: theme.spacing(0, 15),
    height: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
  entry: {
    display: 'flex',
    float: 'left',
    flexDirection: 'row',
    clear: 'none'
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
  boldBody: {
    color: 'blue',
    aligh: 'left',
    paragraph: 'true',
    variant: 'body1',
    //paddingRight: '10px',
  },
  body: {
    color: 'black',
    aligh: 'left',
    variant: 'body1',
    paragraph: 'true',
  },
  linkBack: {
    paddingTop: '15px',
    color: 'red',
    aligh: 'left',
    paragraph: 'true',
    variant: 'body1',
  },
}));

export default function CommunityNorms() {
  const classes = useStyles();

  return (
    <>
      <div>
        <Paper className={classes.vertDiv}>
          <Box display="flex" justifyContent="left">
            <img src={logo_color} alt=''/>
          </Box>
          <Typography className={classes.linkBack}>
            Home > Community Norms
          </Typography>
          <Typography variant="h4" className={classes.headerAbout}>
            Community Norms
          </Typography>

          <Box paddingTop='25px'>
            <span className={classes.boldBody}> Contributor = </span>
            any user that wishes to make additons/edits or propose deletions
          </Box>
          <Box>
            <span className={classes.boldBody}> Page Editor = </span>
            someone in charge of editorial process for a single page (or
            multiple pages)
          </Box>
          <Box>
            <span className={classes.boldBody}> Topic Editor = </span>
            someone in harge of editorial process for a topic (ie. Economics).
            Could be combined roles in earlier stages: to simplify for the MVP so
            its main contributor is editor and sometimes expert editor.
          </Box>
          <Box>
            <span className={classes.boldBody}> Expert Editor = </span>
            someone in charge of ultimate arbitration for a topic or topics, an
            expert in the field (not one of us but rather an external advisor
            with appropraite vetted credentials.
          </Box>
          <Box paddingTop='35px'>
            <span className={classes.boldBody}> General Thoughts: </span>
          </Box>
          <Box>
            <span className={classes.boldBody}> -> </span>
            The Chief editor assigns Topic editors to one of the content categories.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus.
          </Box>
          <Box>
            <span className={classes.boldBody}> -> </span>
            The Chief editor assigns Topic editors to one of the content categories.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
          </Box>

          <Box paddingTop='35px'>
            <span className={classes.boldBody}> Editorial Process: </span>
          </Box>
          <Box>
            <span className={classes.boldBody}> -> </span>
            The Chief editor assigns Topic editors to one of the content categories.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus.
          </Box>
          <Box>
            <span className={classes.boldBody}> -> </span>
            The Chief editor assigns Topic editors to one of the content categories.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus.
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
          </Box>
        </Paper>
      </div>

    </>
  );
}
