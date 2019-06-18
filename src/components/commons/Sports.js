import React, { Component } from "react";
import { connect } from "react-redux";
import { sportsRequest } from "../../state/Actions";

class Sports extends Component {
  componentDidMount() {
    this.props.handleLoadSports(1);
  }

  render() {
    const { sports } = this.props.ACCOUNT_REDUCER;
    return (
      <ul className="sports-list">
        {sports.map(sport => (
          <li key={sport.id} className="sports-list__item">
            <h3 className="sports-list__title">{sport.name}</h3>
            <span className="sports-list__capacity">{sport.capacity}</span>
          </li>
        ))}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLoadSports(id) {
    dispatch(sportsRequest(id));
  }
});

const mapStateToProps = ({ ACCOUNT_REDUCER }) => ({
  ACCOUNT_REDUCER
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sports);
