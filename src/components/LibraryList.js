import React, { Component } from "react";
import { ListView, Text } from "react-native";
import { connect } from "react-redux";

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <Text>{library.title}</Text>
  }

  render() {
    console.log(this.props);
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);