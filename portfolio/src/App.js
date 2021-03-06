import React from 'react';
import ReactDOM from "react-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/styles";
import { ListItem } from "@material-ui/core";

import Overview from './Overview';
import Experience from './Experience';
import Projects from './Projects';
import Achievements from './Achievements';

const drawerWidth = 300;
const contentElement = document.getElementById('content');

const classes = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  }
}));

const StyledList = withStyles({
  root: {
    background: 'linear-gradient(45deg, #23074d 40%, #cc5333 90%)',
    border: 0,
    color: 'white',
    height: "100%",
    padding: '15px 25px',
  }
})(List);

const StyledListItem = withStyles({
  root: {
    padding: '20px'
  }
})(ListItem);

function overviewHandle() {
  ReactDOM.render(<Overview />, contentElement);
}

function experienceHandle() {
  ReactDOM.render(<Experience />, contentElement);
}

function projectsHandle() {
  ReactDOM.render(<Projects />, contentElement);
}

function achievementsHandle() {
  ReactDOM.render(<Achievements />, contentElement);
}

function SideBar() {
  return (
    <Drawer variant="permanent" anchor="left" className={classes.drawer}>
      <StyledList>
        <StyledListItem button onClick={overviewHandle}>
          <ListItemText primary="Overview" />
        </StyledListItem>
        <StyledListItem button onClick={experienceHandle}>
          <ListItemText primary="Experience" />
        </StyledListItem>
        <StyledListItem button onClick={projectsHandle}>
          <ListItemText primary="Projects" />
        </StyledListItem>
        <StyledListItem button onClick={achievementsHandle}>
          <ListItemText primary="Achievements" />
        </StyledListItem>
      </StyledList>
    </Drawer>
  );
}

export default SideBar;
