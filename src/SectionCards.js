import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SectionCards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Hey here's where sections will go 
    </div>
  );
}
