import React from 'react';

import Svg, { Circle, Defs, Path, Pattern, SvgUri } from 'react-native-svg';

export default ({urlProp, design})=> {
    return (
        <>
        {
            console.log("URL img: "+urlProp)
        }
        <Defs>
            <Pattern id="externalpattern" x="0" y="0" width="1" height="1" >
                <SvgUri
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    uri={urlProp}
                />
            </Pattern>
        </Defs>
        </>
    );
}