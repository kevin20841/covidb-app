import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import Button from '@material-ui/core/Button';

let listOfCategories = ["Sub Category 1", "Sub Category 2", "Sub Category 3", "Sub Category 4"];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '40px',
  },
  title: {
    color:'#B4424C',
    font: 'Bold 16px/19px Montserrat',
    marginLeft: '20px',
    position: 'relative',
    left: '90px',
  },
  flexContainer: {
    display: 'block',
    flexDirection: 'row',
    alignItems: "center",
    padding: 0,
    color: 'black',
    marginLeft: '20px',
    marginTop: '7px',
    position: 'relative',
    left: '90px',
    marginRight: '60px'

  }, 
  categoryButton: {
    fontSize: '11px',
    height: '22px',
    marginRight: '10px',
    marginBottom: '6px',
    color:'#4D4D4D',
    borderRadius: '14px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    backgroundColor: '#F0F0F0',
    '&:hover': {
      backgroundColor: '#A2A2A2',
    },
    padding: '2px 20px',
    textTransform: 'capitalize',

  }
}));

export default function SectionCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <a href={"./section"} className={classes.title} >
            {props.titleText}
        </a>
        <List className={classes.flexContainer}>
            {listOfCategories.map((value)=> {
                console.log(value);
            return <Button className={classes.categoryButton} isSecondary={true}> {value}</Button>
        })}
        </List>

    </div>
  );
}
