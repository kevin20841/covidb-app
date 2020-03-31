import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SectionCard from "./SectionCard"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { relative } from 'upath';



// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import Button from '@material-ui/core/Button';

let sectionTitles = [["Aggregated Resources on COVID-19", "Health And Hygiene"], ["Metrics And Trackers", "Fact-checking Sites"],
 ["Countries", "Legal"], ["Simulations/Projections", "Historical Pandemics"]];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginBottom: '80px',
    backgroundColor: 'white',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridItem:{
    // position: 'relative',
    // left: '90px',
    //marginLeft: '60px',
    display: 'block',

  },
  row:{
  }
}));

export default function SectionCards() {
  const classes = useStyles();

  function FormRow(props) {
    return (
      <React.Fragment className={classes.row}>
        <Grid item xs={6} className={classes.gridItem}>
          <SectionCard titleText={props.items[0]}/>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <SectionCard titleText={props.items[1]}/>
        </Grid>

      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>

      {sectionTitles.map((value)=> {
        return <Grid container item xs={12} spacing={3} key={value}>
          <FormRow items={value} key={value}/>
        </Grid>
      })}
    </Grid>
  </div>
  );
}
