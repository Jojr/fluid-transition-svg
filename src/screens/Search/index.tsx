import { LinearGradient as Gradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import { Transition } from 'react-navigation-fluid-transitions';

import { useSelector, useDispatch } from 'react-redux';

import { fetchGoogle } from '../../redux/actions/main';
import { RootState } from '../../redux/reducers';

interface User {
  props: any;
  state: RootState;
  main: string;
}

const { height, width } = Dimensions.get('window');

const Search: React.FC = (props) => {
  const dispatch = useDispatch(); // The older mapDispatchToProps
  const dataFromReducer = useSelector<User>((state) => state.main); //The older mapStateToProps
  console.log(dataFromReducer);

  useEffect(() => {
    dispatch(fetchGoogle()); //The older componentDidMount
  }, []);

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
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  svgBackground: {
    position: 'absolute',
    top: -18,
  },
});
