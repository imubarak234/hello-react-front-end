import React from "react"
import PropTypes from "prop-types"

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        Welcome: {this.props.welcome}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  welcome: PropTypes.string
};
export default Home
