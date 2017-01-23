import React from 'react';
import { connect } from 'react-redux';

import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

let Menu = () => {
  return (
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
    >
      <MenuItem primaryText="Option 1" />
      <MenuItem primaryText="Option 2" />
    </IconMenu>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

Menu = connect(null, mapDispatchToProps)(Menu);

export {
  Menu,
};
