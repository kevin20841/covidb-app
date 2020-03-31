import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '40px',
    paddingRight: '12px',
  },
  rootRight: {
    position: 'relative',
    left: '65px',
  },
  title: {
    color:'#B4424C',
    font: 'Bold 16px/19px Montserrat',
    marginLeft: '0px',
  },
  flexContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'stretch',  
    alignContent: 'space-between',
    justifyContent: 'space-between',
    width: '90%',
    color: 'black',
    paddingRight: '0px',
    marginTop: '7px',
    flexGrow: '1',
    paddingLeft: '0px',
  }, 
  categoryButton: {
    fontSize: '11px',
    height: '22px',
    marginRight: '0px',
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
    <div className={props.isRight ? classes.rootRight : classes.root}>
        <a href={"./section"} className={classes.title} >
            {props.titleText}
        </a>
        <div className={classes.flexContainer}>
            {props.subcategoryList.map((value)=> {
            return <Button className={classes.categoryButton} isSecondary={true}> {value}</Button>
        })}
        </div>

    </div>
  );
}
