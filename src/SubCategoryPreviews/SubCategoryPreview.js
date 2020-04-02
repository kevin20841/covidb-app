import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  sectionHeader: {
      paddingLeft: "0px",
  },

});



class SubCategoryPreview extends Component{
  createData(link, date) {
    return { link, date };
  }

  render(){
    const rows = this.props.subCategoryResources.map((value)=> {
          return this.createData(value[0], value[1])
      })

    const {classes} = this.props;

    return ( <div className={classes.root}>
          <div className={classes.sectionHeader}>
              {this.props.subCategoryName}
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
}

SubCategoryPreview.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SubCategoryPreview);
