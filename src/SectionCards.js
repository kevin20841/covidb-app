import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import SectionCard from "./SectionCard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// TODO: populate section titles/links from db
import * as db from './services/datastore';

//This will be inherited eventually
let sectionTitles = [
  ["Aggregated Resources on COVID-19", "Health And Hygiene"],
  ["Metrics And Trackers", "Fact-checking Sites"],
  ["Countries", "Legal"],
  ["Simulations/Projections", "Historical Pandemics"]
];

let sectionCategories = {
  "Aggregated Resources on COVID-19": [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
    "Sub Category 4"
  ],
  "Health And Hygiene": [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
    "Sub Category 4"
  ],
  "Metrics And Trackers": [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
    "Sub Category 4"
  ],
  "Fact-checking Sites": [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
    "Sub Category 4"
  ],
  Countries: [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
    "Sub Category 4"
  ],
  Legal: [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
    "Sub Category 4"
  ],
  "Simulations/Projections": [
    "Sub Category 1",
    "Sub Category 2",
    "Sub Category 3",
    "Sub Category 4"
  ],
  "Historical Pandemics": [
    "Sub Category 7",
    "Sub Category 2",
    "Sub Category 3",
    "Sub Category 4"
  ]
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    marginBottom: "80px",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  gridItem: {
    display: "block",
    marginLeft: "0px"
  },
  gridItemRight: {
    display: "block",
    paddingLeft: "50px"
  },
  row: {},
  grid: {
    alignContent: "space-between"
  }
}));

export default function SectionCards() {
  const classes = useStyles();

  function FormRow(props) {
    return (
      <React.Fragment className={classes.row}>
        <Grid item xs={6} className={classes.gridItem}>
          <SectionCard
            titleText={props.items[0]}
            subcategoryList={props.subcategories[props.items[0]]}
          />
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight}>
          <SectionCard
            titleText={props.items[1]}
            subcategoryList={props.subcategories[props.items[1]]}
            isRight={true}
          />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={1} className={classes.grid}>
          {sectionTitles.map(value => {
            return (
              <Grid container item xs={12} spacing={3} key={value}>
                <FormRow
                  items={value}
                  key={value}
                  subcategories={sectionCategories}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
