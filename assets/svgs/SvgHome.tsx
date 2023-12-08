import {ISvgProp} from '../../src/type/common';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHome(props: ISvgProp) {
  const {color, height, width} = props;
  return (
    <Svg
      width={width ?? 23}
      height={height ?? 22}
      viewBox="0 0 23 22"
      fill={color ?? '#fafafa'}
      {...props}>
      <Path
        d="M8.645 1.84l-5.39 4.2a4.76 4.76 0 00-1.63 3.32v7.41a4.225 4.225 0 004.21 4.22h11.58a4.223 4.223 0 004.21-4.21V9.5a4.722 4.722 0 00-1.8-3.45l-6.18-4.333a4.487 4.487 0 00-5 .123z"
        stroke={color ? color : '#71717A'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgHome;
