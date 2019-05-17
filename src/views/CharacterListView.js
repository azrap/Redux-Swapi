import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions"

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData()
  }

  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      <h2>Grab a cupa Joe. I'm still loading...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading
});


export default connect(
  mapStateToProps,
  {getData}
)(CharacterListView);
