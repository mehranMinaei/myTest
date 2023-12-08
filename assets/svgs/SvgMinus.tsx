import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISvgProp} from '../../src/type/common';

function SvgMinus(props: ISvgProp) {
  const {color, height, width} = props;
  return (
    <Svg
      width={width ?? 22}
      height={height ?? 4}
      viewBox="0 0 22 4"
      fill="none"
      {...props}>
      <Path
        d="M2 2h18"
        stroke="#CD0D0D"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgMinus;
