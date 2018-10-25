import React, { Component } from "react";
import { Text, View, TouchableOpacity, LayoutAnimation, UIManager, Platform } from "react-native";
import { CardSection } from "./common";
import * as actions from '../actions';
import { connect } from 'react-redux'

export class ListItem extends Component {
  renderDescription() {
    const { expanded, library } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text>{library.description}</Text>
        </CardSection>
      )
    }
  }

  componentWillUpdate(){
    if(Platform.OS === "android"){
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.spring();
  }

  render() {
    const { title, id } = this.props.library;
    return (
      <TouchableOpacity onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}> {title} </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {expanded}
}

export default connect(mapStateToProps, actions)(ListItem);
