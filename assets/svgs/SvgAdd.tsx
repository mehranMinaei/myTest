import {ISvgProp} from '../../src/type/common';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAdd(props: ISvgProp) {
  const {color, height, width} = props;
  return (
    <Svg
      width={width ?? 22}
      height={height ?? 22}
      viewBox="0 0 21 20"
      fill={color ?? '#fff'}
      {...props}>
      <Path
        d="M2 11h18M11.5 20V2"
        stroke="#149246"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgAdd;
