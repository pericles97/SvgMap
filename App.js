import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import Svg, { Circle, Defs, Path, Pattern, SvgUri } from 'react-native-svg';

import countries from './countries';
import SvgImage from './SvgImage';

import {
  Container,
  Countries,
} from './styles';

const mapStyle = {
  fill: "url(#externalpattern)",
  stroke: "white"
}

const emptyStyle = {
  fill: "lightgray",
  stroke: "white"
}

function App() {
  return (
    <View className="App" style={styles.app}>
      <ScrollView horizontal={true} vertical={true} zoom={true}>
        <Container>
          <Svg enable_background="new 0 0 1000 647" height="647px" pretty_print="False"
            style="stroke-linejoin: round; stroke:#000; fill: none;" version="1.1" viewBox="0 0 1000 647" width="1000px">

            <Countries class="" id="countries">
              {countries.map(({ id, name, design, code, image }) => (
                <>
                  {(image != null || image != undefined) ?
                    <>
                      <SvgImage key={id} urlProp={image} design={design} />
                      <Path key={id} style={mapStyle} d={design} />
                    </>
                    : <Path key={id} style={emptyStyle} d={design} />}
                </>
              ))}
            </Countries>

          </Svg>
        </Container>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 10,
    flex: 1,
    flexDirection: "column"
  }
});

export default App;
