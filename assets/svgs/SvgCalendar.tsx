import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISvgProp} from '@/type/common';

function SvgCalendar(props: ISvgProp) {
  const {color, height, width} = props;
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
        stroke="#27272A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.695 13.7h.005M15.695 16.7h.005M11.996 13.7h.005M11.996 16.7h.005M8.295 13.7H8.3M8.295 16.7H8.3"
        stroke="#27272A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgCalendar;
