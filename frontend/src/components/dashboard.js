import React from 'react';
import { connect } from 'react-redux';
import * as ensembleActions from '../actions/ensembles-actions';

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
    this.props.ensemblesFetch();
  }

  render() {
    const { ensembles } = this.props;

    if (!ensembles) {
      return (
        <h2>Loading...</h2>
      );
    }

    return (
      <ul>
        {ensembles.map(ensemble => (
          <li key={ensemble._id}>{ensemble.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  ensembles: state.ensembles,
});

const mapDispatchToProps = (dispatch) => ({
  ensemblesFetch: () => dispatch(ensembleActions.ensembleFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);