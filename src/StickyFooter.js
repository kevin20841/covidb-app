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
import logo_white from "./logo_white.svg";
import TextField from '@material-ui/core/TextField';
import { sizing } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '5vh',
  },
  backEmail: {
    color: 'red',
  },
  email: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    color: 'white',
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
  },
  bottomLink:{
    color: '#FFFFFF',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
      textDecoration: 'none',
    } 
  },

}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div style={{ width: '100%' }}>
        <div style={{alignContent:"center", backgroundColor:"#4C3B92", paddingLeft:"80", paddingRight:"80"}}>
        <Box display="flex" flexDirection="row" p={1} bgcolor="#4C3B92" paddingLeft={16} paddingRight={16} paddingTop={4} paddingBottom={"4"}>
          <Box flexGrow={1} flexDirection="column">
            <Box marginLeft="12px">
              <img src={logo_white} width="30%" height="30%"/>
            </Box>
            <Box>
            <div className={classes.list}>
              
              <List dense="true">
                  <ListItem >
                  <Link href="./About" className={classes.bottomLink}>About</Link>
                  </ListItem>
                  <ListItem>
                  <Link href="./CommunityNorms" className={classes.bottomLink}>Community Norms</Link>
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
          </Box>
          <Box flexGrow={1}>
            <div className={classes.update}>
              <Typography variant="h5">
                Never miss an update.
              </Typography>
            </div>
            <form className={classes.email} noValidate autoComplete="off">
              <TextField
                label="Email Address"
                variant="filled"
                InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                />
            </form>
          </Box>
        </Box>
        </div>
      </div>
    </div>
  );
}
