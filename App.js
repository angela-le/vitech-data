import React, { Component } from 'react';
import { Box, Text } from 'react-desktop/macOs';
export default class extends Component {
  render() {
    return (
    #outer box
      <Box label="Box" padding="10px 30px">
      <Box height =500>
      <Box width =1000>
      <Box verticalAlignment = "center">
        <Text>'bye bye.'</Text>
      </Box>
      #left box
     #right box
    );
  }
