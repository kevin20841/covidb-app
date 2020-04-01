import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SectionCard from "./SectionCard"
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";

//This will be inherited eventually

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SubCategoryPreviews() {
  const classes = useStyles();
}
