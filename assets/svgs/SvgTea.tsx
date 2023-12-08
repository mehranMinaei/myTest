import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISvgProp} from '../../src/type/common';

function SvgTea(props: ISvgProp) {
  const {height, width} = props;
  return (
    <Svg
      width={width ?? 40}
      height={height ?? 44}
      viewBox="0 0 40 44"
      fill="none"
      {...props}>
      <Path
        d="M8.434 2.706c-1.004-.128-1.967.383-2.348 1.247-2.046 4.51-7.587 18.622-1.407 28.348 4.956 7.898 16.792 11.917 22.44 2.637 11.557.14 13.703-11.284 8.748-19.182C29.853 6.131 13.693 3.36 8.434 2.706z"
        fill="#009821"
        stroke="#292D32"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M31.187 40.93l-9.672-15.414"
        stroke="#292D32"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgTea;
