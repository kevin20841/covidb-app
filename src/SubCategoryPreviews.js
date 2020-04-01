import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SubCategoryPreview from "./SubCategoryPreview";
import Grid from '@material-ui/core/Grid';

import Container from "@material-ui/core/Container";

//This will be inherited eventually
let subCategoryTitles = [["Sub Category 1", "Sub Category 2"], ["Sub Category 3", "Sub Category 4"],
 ["Sub Category 5", "Sub Category 6"], ["Sub Category 7", "Sub Category 8"]];

 let subCategoryResources = {
  "Sub Category 1": [["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"]],
  "Sub Category 2": [["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"]],
  "Sub Category 3": [["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"]],
  "Sub Category 4": [["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"]],
  "Sub Category 5": [["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"]],
  "Sub Category 6": [["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"]],
  "Sub Category 7": [["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"]],
  "Sub Category 8":[["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"], ["samplelink.com", "4/1/2020"]],
 };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    marginBottom: '80px',
    backgroundColor: 'white',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridItem:{
    display: 'block',
    marginLeft: '0px',
  },
  gridItemRight:{
    display: 'block',
    paddingLeft: '50px',
  },
  row:{
  },
  grid: {
    alignContent: 'space-between'
  }
}));

export default function SubCategoryPreviews() {
  const classes = useStyles();

  function FormRow(props) {
    return (
      <React.Fragment className={classes.row}>
        <Grid item xs={6} className={classes.gridItem}>
          <SubCategoryPreview subCategoryName={props.subCategoryTitle[0]} subCategoryResources={props.subCategoryResources[props.subCategoryTitle[0]]}/>
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight}>
          <SubCategoryPreview subCategoryName={props.subCategoryTitle[1]} subCategoryResources={props.subCategoryResources[props.subCategoryTitle[1]]}/>
        </Grid>

      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="md">

        <Grid container spacing={1} className={classes.grid}>

        {subCategoryTitles.map((title)=> {
          return <Grid container item xs={12} spacing={3} key={title}>
            <FormRow subCategoryTitle={title} subCategoryResources={subCategoryResources}/>
          </Grid>
        })}
      </Grid>
    </Container>
  </div>
  );
}