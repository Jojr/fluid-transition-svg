import { LinearGradient as Gradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import { Transition } from 'react-navigation-fluid-transitions';
import { Ionicons } from '@expo/vector-icons';

interface User {
  props: any;
  doAnimation: number;
  setDoAnimation: number;
  password: string;
  email: string;
}
const { height, width } = Dimensions.get('window');



const App: React.FC = (props) => {
  const [doAnimation, setDoAnimation] = useState<User>();
  const [email, setEmail] = useState<User>('');
  const [password, setPassword] = useState<User>('');
  const [animation, isEditing] = useState(new Animated.Value(0));

  const AnimatedImage = ( doAnimation ) => {
    return (
      <Animated.Image
        style={[
          styles.doctorImage,
          {
            transform: [
              /*{
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 20]
                }),
              },
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -20],
                }),
              },
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.5],
                }),
              },*/
            ],
          },
        ]}
        source={require('../../assets/image/doctor-female-plant.png')}
      />
    );
  };

  /*useEffect(() => {
    Animated.timing(animation, {
      //toValue: 1,
      toValue: isEditing ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [doAnimation]);*/

  return (
    <View style={styles.container}>
      
      <Transition shared="topImage">
        <Image
          style={styles.doctorImage}
          source={require('../../assets/image/doctor-female-plant.png')}
        />
      </Transition>
      <Transition shared="topSvg">
        <View style={styles.svgBackground}>
          <Svg width={width} height={width} viewBox="0 0 375 340">
            <Defs>
              <LinearGradient x1="90.743%" y1="87.641%" x2="10.14%" y2="3.465%" id="prefix__a">
                <Stop stopColor="#53B4FF" offset="0%" />
                <Stop stopColor="#3186FF" offset="100%" />
              </LinearGradient>
            </Defs>
            <Path
              d="M.11-2H376c-.005 204.081-.005 306.134 0 306.158-95.114 82-135.593-8.28-188-16.789C98.06 266.778 51.482 346.402.11 262.41-.037 251.212-.037 163.075.11-2z"
              fill="url(#prefix__a)"
              fillRule="evenodd"
            />
          </Svg>
        </View>
      </Transition>
      <Transition shared="topImage">
        <Image
          style={styles.doctorImage}
          source={require('../../assets/image/doctor-female-plant.png')}
        />
      </Transition>
      <Transition appear="scale">
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          style={styles.closeButton}>
          <Ionicons name="ios-arrow-back" size={40} color="#FFFFFF" />
        </TouchableOpacity>
      </Transition>
      <Transition appear="horizontal">
        <View style={styles.logo}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.logoTextBig}>Together</Text>
          </View>
          <Text style={styles.logoSlogan}>We can heal the world!</Text>
        </View>
      </Transition>

      {/* Body */}
      <View style={styles.ctaWrapper}>
        <View>
          <Text style={styles.ctaMessage}>Welcome hero,</Text>
          <Text style={styles.ctaMessageAction}>Sign in to continue</Text>
        </View>
        <View style={[styles.textInputWrapper, { marginTop: 40 }]}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#B1B9C0"
            secureTextEntry={false}
            value={email}
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={(e) => setEmail(e)}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyLabel="next"
            returnKeyType="next"
          />
        </View>
        <View style={[styles.textInputWrapper, {}]}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#B1B9C0"
            secureTextEntry
            value={password}
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={(e) => setPassword(e)}
            textContentType="newPassword"
            keyboardType="visible-password"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyLabel="next"
            returnKeyType="next"
          />
        </View>
        <View style={[styles.textInputWrapper, { borderWidth: 0 }]}>
          <TouchableOpacity activeOpacity={0.7} style={[styles.ctaButtonWrapper, { }]}>
            <Gradient
              colors={['#3186FF', '#53B4FF']}
              start={[0, 1]}
              end={[1, 0]}
              style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Login</Text>
            </Gradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  doctorImage: {
    position: 'absolute',
    left: -30,
    top: 30,
    width: (width / 100) * 45,
    height: (width / 100) * 65,
    transform: [
      {
        translateX: 20,
      },
      {
        translateY: -20,
      },
      {
        scale: 0.5,
      },
    ],
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    width: 40,
    height: 40,
    //backgroundColor: '#FF00FF20',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  svgBackground: {
    position: 'absolute',
    top: -150,
  },
  logo: {
    position: 'absolute',
    top: 60,
    right: 0,
    width: (width / 100) * 65,
    height: (width / 100) * 30,
    //backgroundColor: '#FF00FF20',
  },
  logoTextBig: {
    fontSize: 56,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: -4,
  },
  logoTextThin: {
    fontSize: 33,
    fontWeight: '300',
    color: '#FFFFFF',
    letterSpacing: -2,
    paddingTop: 20,
  },
  logoSlogan: {
    fontSize: 20,
    fontWeight: '200',
    color: '#FFFFFF',
    letterSpacing: -0.3,
    paddingTop: 0,
    paddingLeft: 10,
  },
  ctaWrapper: {
    margin: 20,
    marginTop: (height / 100) * 28,
  },
  ctaMessage: {
    fontSize: 30,
    fontWeight: '600',
    color: '#21232A',
    letterSpacing: -1,
    lineHeight: 35,
  },
  ctaMessageAction: {
    fontSize: 24,
    fontWeight: '500',
    color: '#B1B9C0',
    letterSpacing: -1,
    lineHeight: 30,
  },
  textInputWrapper: {
    width: '100%',
    height: 68,
    marginTop: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#C2C2C2',
  },
  textInput: {
    fontSize: 20,
    fontWeight: '600',
    color: '#21232A',
    width: '100%',
    height: 68,
    paddingLeft: 20,
    paddingRight: 20,
  },
  ctaButtonWrapper: {
    shadowColor: '#B1B9C0',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  ctaButton: {
    width: '100%',
    height: 68,
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaButtonText: {
    fontSize: 22,
    color: '#fff',
  },
  ctaDisclaimer: {
    fontSize: 14,
    fontWeight: '300',
    color: '#3186FF',
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: 18,
  },
  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#F1EEEE',
    marginTop: 30,
    marginBottom: 30,
  },
  doctorButton: {
    width: (width / 100) * 90,
    height: 56,
    margin: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#3186FF',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7E88C4',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  doctorButtonText: {
    fontSize: 22,
    color: '#3186FF',
  },
});
