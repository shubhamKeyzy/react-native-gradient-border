import MaskedView from '@react-native-masked-view/masked-view';
import {LinearGradient} from 'react-native-linear-gradient';
import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {GradientBorderView} from './package/index';

export function FadeOutTopView({
  fadeHeight = 100,
  ...props
}: ViewProps & {fadeHeight?: number}) {
  return (
    <MaskedView
      style={{flex: 1}}
      maskElement={
        <View style={StyleSheet.absoluteFill}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0,0,0,1)']}
            style={{
              height: fadeHeight,
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: fadeHeight,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'black',
            }}
          />
        </View>
      }
      {...props}
    />
  );
}

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <View
        style={StyleSheet.absoluteFill}
      >
        <ImageBackground
          source={require('./background.jpg')}
          style={StyleSheet.absoluteFill}
          blurRadius={2}
        />
        <View
          style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.3)' }]}
        />
      </View> */}
      {/* <FadeOut /> */}
      {/* <GradientBorderView
        style={{
          borderWidth: 10,
          width: 100,
          height: 100,
          borderTopRightRadius: 100
        }}
        gradientProps={{
          colors: ['red', 'orange']
        }}
      /> */}
      {/* <GradientBorderView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 100,
          height: 100,
          borderLeftWidth: 5,
          borderTopLeftRadius: 40,
          borderRightWidth: 5,
          borderBottomRightRadius: 5,
          borderBottomWidth: 2,
          borderBottomLeftRadius: 20,
          borderTopWidth: 0.25
        }}
        gradientProps={{
          colors: ['red', 'orange', 'yellow', 'green'],
          start: { x: 0.5, y: 0, },
          end: { x: 1, y: 1 }
        }}

      >
        <Text style={{
          color: 'white',
          fontSize: 24,
        }}>
          Cool!
        </Text>
      </GradientBorderView> */}

      <GradientBorderView
        gradientProps={{
          colors: ['red', 'orange'],
        }}
        style={{
          borderWidth: 5,
          borderRadius: 5,
          height: 50,
          width: 50,
        }}
      />
      {/* <View
        style={{
          borderWidth: 5,
          borderRadius: 5,
          height: 50,
          width: 50,
          borderColor: 'black',
        }}
      /> */}
    </View>
  );
};

export default App;
