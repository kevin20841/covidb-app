import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from "./logo.svg";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '10vh',
  },
  email: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    color: "#FFFFFF",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  list:{
    color: "#FFFFFF",
    font: "Regular 16px/26px Motiva Sans",
  },
  update:{
    color: "#FFFFFF",
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div style={{ width: '100%' }}>
        <Box display="flex" flexDirection="row" p={1} bgcolor="#4C3B92">
          <Box flexGrow={1}>
          <Typography
            component="h1"
            variant="h2"
            align="left"
            color="#fff"
          >
            COVIDB
          </Typography>
          <div className={classes.list}>
            <List dense="true">
                <ListItem>
                  <ListItemText
                    primary="About"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Community Norms"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="How to Use"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="FAQs"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Contact Us"
                  />
                </ListItem>
              </List>
            </div>
          </Box>
          <Box flexGrow={1}>
            <div className={classes.update}>
              <Typography variant="h5">
                Never miss an update.
              </Typography>
            </div>
            <form className={classes.email} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Email Address" variant="outlined" />
            </form>
          </Box>
        </Box>
      </div>
    </div>
  );
}