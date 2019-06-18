import React, { Component } from "react";
import { connect } from "react-redux";
import { trainersRequest } from "../../state/Actions";

class Sports extends Component {
  componentDidMount() {
    this.props.handleLoadTrainers(1);
  }

  render() {
    const { trainers } = this.props.ACCOUNT_REDUCER;
    return (
      <ul className="sports-list">
        {trainers.map(trainer => (
          <li key={trainer.id} className="sports-list__item">
            <h3 className="sports-list__title">{trainer.name}</h3>
            <span className="sports-list__capacity">{trainer.id}</span>
          </li>
        ))}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLoadTrainers(id) {
    dispatch(trainersRequest(id));
  }
});

const mapStateToProps = ({ ACCOUNT_REDUCER }) => ({
  ACCOUNT_REDUCER
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sports);
