import React, { PropTypes } from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation,
  StyleSheet,
} from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { styles as s } from 'react-native-style-tachyons'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { Colors, Images, Metrics } from '../../Themes'

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: Colors.background
  },
  contentContainer: {
    justifyContent: 'center',
  }
})

export class LoginScreen extends React.Component {

  render () {
    return (
      <ScrollView
        contentContainerStyle={ styles.contentContainer }
        style={ [styles.container] }
        keyboardShouldPersistTaps
      >
        <View style={ [styles.subContainer] }>
          <View style={[s.flx_i, s.bg_blue]}>
          </View>
          <View style={[s.flx_i, s.bg_red]}>
          </View>
        </View>
      </ScrollView>
    )
  }
}
