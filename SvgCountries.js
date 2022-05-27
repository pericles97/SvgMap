import React from 'react';
import Svg, { SvgUri } from 'react-native-svg';

function SvgCountries(country) {
    console.log(country);
    return (
        <SvgUri
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            uri={(country === 'US') ? (uri="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg") : (country === 'BR') ? (uri="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg") : 0}
        />
    )
}

export { SvgCountries }