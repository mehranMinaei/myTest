import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISvgProp} from '../../src/type/common';

function SvgAlarm(props: ISvgProp) {
  const {color, height, width} = props;
  return (
    <Svg
      width={width ?? 23}
      height={height ?? 22}
      viewBox="0 0 42 24"
      fill={color ?? '#fafafa'}
      {...props}>
      <Path
        d="M21.145 2.91a6 6 0 00-6 6v2.89a4.778 4.778 0 01-.57 2.06l-1.15 1.91a1.92 1.92 0 001.08 2.93 20.921 20.921 0 0013.27 0 2.002 2.002 0 001.08-2.93l-1.15-1.91a4.91 4.91 0 01-.56-2.06V8.91a6.018 6.018 0 00-6-6z"
        stroke="#71717A"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M22.995 3.2a6.754 6.754 0 00-3.7 0 1.987 1.987 0 013.7 0z"
        stroke="#71717A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.145 19.06a3.01 3.01 0 01-3 3 3.011 3.011 0 01-2.12-.88 3.011 3.011 0 01-.88-2.12"
        stroke="#71717A"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default SvgAlarm;
