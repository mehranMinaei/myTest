import * as React from 'react';
import {ISvgProp} from '../../src/type/common';
import Svg, {Path} from 'react-native-svg';

function SvgRectangle(props: ISvgProp) {
  const {color, height, width} = props;
  return (
    <Svg
      width={width ?? 151}
      height={height ?? 320}
      viewBox="0 0 151 320"
      fill="none"
      {...props}>
      <Path
        d="M.968 21.337C.193 10.068 9.126.5 20.422.5h110.289c11.248 0 20.164 9.49 19.462 20.716l-17.5 280c-.642 10.278-9.165 18.284-19.462 18.284H39.672c-10.25 0-18.75-7.936-19.454-18.163l-19.25-280z"
        stroke="#000"
      />
    </Svg>
  );
}

export default SvgRectangle;
