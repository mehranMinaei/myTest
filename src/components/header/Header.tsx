import {IHeaderProps} from '@/type/common';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({
  leftChaild,
  title,
  rightChaild,
  containerStyle,
}: IHeaderProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.leftBox}>{leftChaild}</View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightBox}>{rightChaild}</View>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  leftBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',

    flex: 1,
  },

  titleBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#27272A',
  },

  rightBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    flex: 1,
  },
});
