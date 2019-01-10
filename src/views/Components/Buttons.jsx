import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import NavigationIcon from '@material-ui/icons/Navigation';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/styles';
import classNames from "classnames";
import React from 'react';
import { Fab, IconButton, Typography } from '../../../node_modules/@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
}));

function Buttons() {
  const classes = useStyles();
  return (
    <div style={{ padding: "16px 24px" }}>
      <Typography variant="h6" color="textSecondary">Contained Buttons</Typography>
      <div>
        <Button variant="contained" className={classes.button}>
          Default
      </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Primary
      </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
          Secondary
      </Button>
        <Button variant="contained" color="secondary" disabled className={classes.button}>
          Disabled
      </Button>
        <Button variant="contained" href="#contained-buttons" className={classes.button}>
          Link
      </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            Upload
        </Button>
        </label>
      </div>
      <br />
      <Typography variant="h6" color="textSecondary">Text Buttons</Typography>
      <div>
        <Button className={classes.button}>Default</Button>
        <Button color="primary" className={classes.button}>
          Primary
</Button>
        <Button color="secondary" className={classes.button}>
          Secondary
</Button>
        <Button disabled className={classes.button}>
          Disabled
</Button>
        <Button href="#text-buttons" className={classes.button}>
          Link
</Button>
        <input
          accept="image/*"
          className={classes.input}
          id="flat-button-file"
          multiple
          type="file"
        />
        <label htmlFor="flat-button-file">
          <Button component="span" className={classes.button}>
            Upload
  </Button>
        </label>
      </div>

      <br />
      <Typography variant="h6" color="textSecondary">Floating Action Buttons</Typography>
      <div>
        <Button variant="outlined" className={classes.button}>
          Default
      </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Primary
      </Button>
        <Button variant="outlined" color="secondary" className={classes.button}>
          Secondary
      </Button>
        <Button variant="outlined" disabled className={classes.button}>
          Disabled
      </Button>
        <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
          Link
      </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="outlined-button-file"
          multiple
          type="file"
        />
        <label htmlFor="outlined-button-file">
          <Button variant="outlined" component="span" className={classes.button}>
            Upload
        </Button>
        </label>
      </div>
      <br />
      <Typography variant="h6" color="textSecondary">Floating Action Buttons</Typography>
      <div>
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="Edit" className={classes.fab}>
          <Icon>edit_icon</Icon>
        </Fab>
        <Fab variant="extended" aria-label="Delete" className={classes.fab}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
      </Fab>
        <Fab disabled aria-label="Delete" className={classes.fab}>
          <DeleteIcon />
        </Fab>
      </div>

      <br />
      <Typography variant="h6" color="textSecondary">Size</Typography>
      <div>
        <div>
          <Button size="small" className={classes.margin}>
            Small
        </Button>
          <Button size="medium" className={classes.margin}>
            Medium
        </Button>
          <Button size="large" className={classes.margin}>
            Large
        </Button>
        </div>
        <div>
          <Button variant="outlined" size="small" color="primary" className={classes.margin}>
            Small
        </Button>
          <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
            Medium
        </Button>
          <Button variant="outlined" size="large" color="primary" className={classes.margin}>
            Large
        </Button>
        </div>
        <div>
          <Button variant="contained" size="small" color="primary" className={classes.margin}>
            Small
        </Button>
          <Button variant="contained" size="medium" color="primary" className={classes.margin}>
            Medium
        </Button>
          <Button variant="contained" size="large" color="primary" className={classes.margin}>
            Large
        </Button>
        </div>
        <div>
          <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
            <AddIcon />
          </Fab>
          <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin}>
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="Add" className={classes.margin}>
            <AddIcon />
          </Fab>
        </div>
        <div>
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="Add"
            className={classes.margin}
          >
            <NavigationIcon className={classes.extendedIcon} />
            Extended
        </Fab>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="Add"
            className={classes.margin}
          >
            <NavigationIcon className={classes.extendedIcon} />
            Extended
        </Fab>
          <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
            <NavigationIcon className={classes.extendedIcon} />
            Extended
        </Fab>
        </div>
        <div>
          <IconButton aria-label="Delete" className={classes.margin}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="Delete" className={classes.margin}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Delete" className={classes.margin}>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </div>
      </div>

      <br />
      <Typography variant="h6" color="textSecondary">Buttons with icons and label</Typography>
      <div>
        <Button variant="contained" color="secondary" className={classes.button}>
          Delete
        <DeleteIcon className={classes.rightIcon} />
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
        <Button variant="contained" color="default" className={classes.button}>
          Upload
        <CloudUploadIcon className={classes.rightIcon} />
        </Button>
        <Button variant="contained" disabled color="secondary" className={classes.button}>
          <KeyboardVoiceIcon className={classes.leftIcon} />
          Talk
      </Button>
        <Button variant="contained" size="small" className={classes.button}>
          <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
          Save
      </Button>
      </div>
    </div>
  );
}


export default Buttons;
