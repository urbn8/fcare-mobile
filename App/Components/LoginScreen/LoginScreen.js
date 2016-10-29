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
import { Button } from 'react-native-elements'
import I18n from 'react-native-i18n'
// import { connect } from 'react-redux'
import NativeTachyons, { styles as s, colors, wrap as tachyons } from 'react-native-style-tachyons'
import { Actions as NavigationActions } from 'react-native-router-flux'

// import { Colors, Images, Metrics } from '../../Themes'

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 70,
//     // height: 500,
//     backgroundColor: Colors.background
//     // backgroundColor: 'blue',
//   },
//   contentContainer: {
//     justifyContent: 'center',
//   },
//   subContainer: {
//     height: 200,
//     backgroundColor: 'yellow',
//   },
// })

class LoginScreenComponent extends React.Component {

  render() {
    console.log('style', colors, s['bg-navy'], s.bg_navy, colors['bg-navy'], colors.bg_navy)

    return (
      <View cls='flx-i'>
        <View cls='flx-i aic jcc'>
          <Text cls='f1'>
            FCare
          </Text>
        </View>
        <View cls='flx-i pt2'>
          <Button
            cls='bg-navy'
            backgroundColor={ '#3B5998' }
            icon={{
              name: 'facebook', type: 'font-awesome',
            }}
            title='Login with Facebook'
          />
        </View>
      </View>
    )

    // return (
    //   <ScrollView
    //     contentContainerStyle={ styles.contentContainer }
    //     style={ [styles.container] }
    //     keyboardShouldPersistTaps
    //   >
    //     <View style={ [styles.subContainer] } cls='bg-blue flx-i'>
    //       <View style={[s.flx_i, s.bg_red, s.h1]} cls='flx-i bg-green h1'>
            
    //       </View>
    //       <View style={[s.flx_i, s.bg_red]} cls='bg-red'>
    //         <Button
    //           buttonStyle={[s.bg_blue]}
    //           backgroundColor={ colors.bg__navy }
    //           icon={{
    //             name: 'facebook', type: 'font-awesome',
    //           }}
    //           title='Login with Facebook'
    //         />
    //       </View>
    //     </View>
    //   </ScrollView>
    // )
  }
}

export const LoginScreen = NativeTachyons.wrap(LoginScreenComponent)
