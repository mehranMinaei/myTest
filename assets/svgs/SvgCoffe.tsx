import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISvgProp} from '../../src/type/common';

function SvgCoffe(props: ISvgProp) {
  const {height, width} = props;
  return (
    <Svg
      width={width ?? 38}
      height={height ?? 46}
      viewBox="0 0 38 46"
      fill="none"
      {...props}>
      <Path
        d="M29.423 19.313V35.62c0 5.19-3.402 9.379-7.578 9.379H8.578C4.402 45 1 40.79 1 35.62V19.314c0-5.191 3.402-9.38 7.578-9.38h13.267c4.176 0 7.578 4.211 7.578 9.38z"
        fill="#868686"
        stroke="#292D32"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M7.3 4.899V1v3.899z" fill="#868686" />
      <Path
        d="M7.3 4.899V1"
        stroke="#292D32"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M14.5 4.899V1v3.899z" fill="#868686" />
      <Path
        d="M14.5 4.899V1"
        stroke="#292D32"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M21.701 4.899V1v3.899z" fill="#868686" />
      <Path
        d="M21.701 4.899V1"
        stroke="#292D32"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M37 25.306c0 5.168-3.402 9.38-7.578 9.38v-18.76c4.176 0 7.578 4.189 7.578 9.38z"
        fill="#868686"
        stroke="#292D32"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M1 22.721h27.92H1z" fill="#868686" />
      <Path
        d="M1 22.721h27.92"
        stroke="#292D32"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgCoffe;
