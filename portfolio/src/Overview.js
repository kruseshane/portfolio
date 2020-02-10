import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
import pic from './overview_page_pic_1.jpg';

import { withStyles } from "@material-ui/styles";

const StyledTypography = withStyles({
  root: {
    //margin: "50px 150px 0px 100px", //top, right, bot, left
    flexWrap: "wrap"
  },

  body1: {
    fontSize: 28
  }
})(Typography);

function Overview() {
  return(
    <div style={{ paddingLeft: '50px', paddingTop: '75px' }}>
      <img src={pic} alt="Logo" width="337px" height="450px" align="right"
      style={{paddingLeft: '50px', paddingBottom: '50px'}}
      />
      <StyledTypography variant="body1" display="inline">
        Hello, my name is Shane Kruse and I am a Software Developer from
        Warner Robins, Georia. I graduated from Georgia Southern in May of 2019.
        I have a passion for learning new technology and contribuiting my
        knowledge to the ever evolving world of technology. I have the ability to
        learn quickly and implement what I have learned in an efficent manner.
        Click the links below to view my various achievements, projects, and experience.
        If you have any questions, you may email me at kruseshane057@gmail.com.
      </StyledTypography>
    </div>
  );
}

export default Overview;
