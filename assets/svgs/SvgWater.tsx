import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISvgProp} from '../../src/type/common';

function SvgWater(props: ISvgProp) {
  const {height, width} = props;
  return (
    <Svg
      width={width ?? 38}
      height={height ?? 46}
      viewBox="0 0 38 46"
      fill="none"
      {...props}>
      <Path
        d="M20.334 1.462a2.22 2.22 0 00-2.712 0C13.4 4.652.934 15.058 1 27.18 1 36.992 9.067 45 19 45s18-7.986 18-17.798c.022-11.946-12.467-22.528-16.666-25.74z"
        fill="#00B9FF"
        stroke="#292D32"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default SvgWater;
