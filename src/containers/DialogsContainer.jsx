import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Lightbox from 'components/Lightbox';
import LoginDialog from 'components/LoginDialog';
import { resetDialogs } from 'actions/dialogs';

const DialogsContainer = ({ active, hideDialog }) => {
  return (
    <Fragment>
      <Lightbox active={active} onClick={hideDialog} />
      { !!active && <LoginDialog onClose={hideDialog} /> }
    </Fragment>
  );
};

DialogsContainer.propTypes = {
  active: PropTypes.bool,
  hideDialog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { dialogs } = state;
  const { login } = dialogs;
  return {
    active: !!login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideDialog: () => dispatch(resetDialogs()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DialogsContainer);
