import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  root: {
    width: '100%',
    height: "calc(100vh - 149px)"
  },
};

function Types(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <iframe title="icons" src="https://material.io/tools/icons/?icon=border_outer&style=baseline"
        width="100%" height="100%" />
    </div>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Types);
