import { LinearGradient as Gradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import { Transition } from 'react-navigation-fluid-transitions';

interface User {
  name: string;
  login: string;
  props: any;
}

const { height, width } = Dimensions.get('window');
const App: React.FC = (props) => {
  const [users, setUsers] = useState<User>();
  return (
    <View style={styles.container}>
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
      <Transition appear="horizontal">
        <View style={styles.heartBeat}>
          <LottieView
            autoPlay
            loop
            source={require('../../assets/lottie_assets/heartBeatLottie.json')}
          />
        </View>
      </Transition>
      
      <Transition appear="vertical" disappear="left">
        <View style={styles.logo}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.logoTextBig}>Love</Text>
            <Text style={styles.logoTextThin}>.MD</Text>
          </View>
          <Text style={styles.logoSlogan}>The chain of love to health</Text>
        </View>
      </Transition>
      <Transition appear="bottom" disappear="bottom">
        <View style={styles.ctaWrapper}>
          <Text style={styles.ctaMessage}>Book a <Text style={[styles.ctaMessage, { color: '#53B4FF'}]}>FREE</Text> consultation today</Text>
          <TouchableOpacity activeOpacity={0.7} style={[styles.ctaButtonWrapper, { marginTop: 10 }]}>
            <Gradient
              colors={['#3186FF', '#53B4FF']}
              start={[0, 1]}
              end={[1, 0]}
              style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Get consultation</Text>
            </Gradient>
          </TouchableOpacity>
          <Text style={styles.ctaDisclaimer}>
            All telemedicine consultations are donated by doctors who love people.
          </Text>
          <View style={styles.divisor} />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('socialLogin')}
            activeOpacity={0.7}
            style={[styles.doctorButton, { flexDirection: 'row', marginTop: 10 }]}>
            <Text style={styles.doctorButtonText}>I'm doctor</Text>
            <Svg width={29} height={28} viewBox="0 0 29 28" style={{ marginLeft: 20 }}>
              <Path
                d="M21.193 0h-.07c-2.767 0-5.215 1.47-6.623 3.64C13.093 1.47 10.645 0 7.878 0h-.07C3.485.041.002 3.57 0 7.91c0 2.59 1.13 6.265 3.332 9.288C7.53 22.96 14.5 28 14.5 28s6.972-5.04 11.168-10.802C27.87 14.175 29 10.5 29 7.91 28.998 3.57 25.515.042 21.193 0zm-.8 18.005c-.667-.003-1.263-.387-1.501-.968h-1.708a.538.538 0 01-.509-.344l-.524-1.478-1.66 5.423a.533.533 0 01-.516.362h-.033a.52.52 0 01-.498-.415l-1.711-9.618-1.25 5.691a.528.528 0 01-.519.379H7.558a.545.545 0 01-.482-.244.472.472 0 010-.512.545.545 0 01.482-.244h1.985l1.771-7.652A.533.533 0 0111.86 8c.256.01.47.189.508.426l1.748 9.811 1.488-4.85a.522.522 0 01.5-.359h.011c.231 0 .436.139.508.344l.949 2.668h1.3c.256-.729 1.06-1.16 1.862-.998.802.162 1.345.863 1.258 1.625-.087.763-.775 1.341-1.596 1.341l-.003-.003z"
                fill="#3186FF"
                fillRule="nonzero"
              />
            </Svg>
          </TouchableOpacity>
          <Text style={[styles.ctaDisclaimer, { color: '#4A4A4A' }]}>
            Only 15 minutes a week can make the world a better place :)
          </Text>
        </View>
      </Transition>
      
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  svgBackground: {
    position: 'absolute',
    top: -18,
  },
  heartBeat: {
    position: 'absolute',
    top: 200,
    left: 0,
    width: 250,
    height: 100,
    //backgroundColor: 'transparent',
    //backgroundColor: '#FF00FF20',
  },
  logo: {
    position: 'absolute',
    top: 115,
    left: 40,
    width: (width / 100) * 60,
    height: (width / 100) * 30,
  },
  logoTextBig: {
    fontSize: 62,
    fontWeight: '800',
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
    fontSize: 16,
    fontWeight: '300',
    color: '#FFFFFF',
    letterSpacing: -0.3,
    paddingTop: 0,
  },
  doctorImage: {
    position: 'absolute',
    //backgroundColor: '#FF00FF20',
    top: 115,
    right: 0,
    width: (width / 100) * 45,
    height: (width / 100) * 65,
  },
  ctaWrapper: {
    margin: 20,
    marginTop: (height / 100) * 47,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#0000FF10'
  },
  ctaMessage: {
    fontSize: 30,
    fontWeight: '800',
    color: '#636363',
    letterSpacing: -1,
    textAlign: 'center',
    lineHeight: 36,
  },
  ctaButtonWrapper: {
    shadowColor: '#7E88C4',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  ctaButton: {
    width: (width / 100) * 90,
    height: 68,
    margin: 20,
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
    width,
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
