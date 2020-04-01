import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sectionHeader: {
      paddingLeft: "0px",
  },

}));

export default function SubCategoryPreview(props) {
  const classes = useStyles();

  function createData(link, date) {
    return { link, date };
  }

  const rows = props.subCategoryResources.map((value)=> {
        return createData(value[0], value[1])
    })

  return (
      <div className={classes.root}>
        <div className={classes.sectionHeader}>
            {props.subCategoryName}
        </div>
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                <TableCell>Resource Link</TableCell>
                <TableCell align="right">Date Added</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                    {row.link}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}

