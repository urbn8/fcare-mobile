import React, {PropTypes} from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import {Images, Metrics} from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// I18n
import I18n from 'react-native-i18n'

export class loginScreen extends React.Component {

  render () {
    return (
      <ScrollView
        contentContainerStyle={{justifyContent: 'center'}}
        style={[Styles.container, {height: '100%'}]}
        keyboardShouldPersistTaps
      >
        <View style={[styles.subContainer]}>
          <View style={[ s.flx_i, s.bg_blue ]}>
          </View>
          <View style={[ s.flx_i, s.bg_red ]}>
          </View>
        </View>
      </ScrollView>
    )
  }
}
