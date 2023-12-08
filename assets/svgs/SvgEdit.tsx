import {ISvgProp} from '@/type/common';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEdit(props: ISvgProp) {
  const {color, height, width} = props;
  return (
    <Svg
      width={width ?? 20}
      height={height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}>
      <Path
        d="M9.167 1.667H7.5c-4.167 0-5.833 1.666-5.833 5.833v5c0 4.167 1.666 5.833 5.833 5.833h5c4.167 0 5.833-1.666 5.833-5.833v-1.667"
        stroke="#27272A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.367 2.517L6.8 9.083a2.26 2.26 0 00-.55 1.1l-.358 2.509a1.186 1.186 0 001.416 1.416l2.509-.358c.409-.082.789-.272 1.1-.55l6.566-6.567c1.134-1.133 1.667-2.45 0-4.116-1.666-1.667-2.983-1.134-4.116 0zM12.425 3.458a5.953 5.953 0 004.117 4.117"
        stroke="#27272A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgEdit;
