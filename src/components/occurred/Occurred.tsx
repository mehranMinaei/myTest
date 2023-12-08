import {IOccuredProps} from '@/type/common';
import SvgRectangle from '../../../assets/svgs/SvgRectangle';
import {StyleSheet, Text, View} from 'react-native';
import {useMemo} from 'react';

const Occurred = ({currentStatus, target}: IOccuredProps) => {
  const getTargetPercentage = useMemo(() => {
    try {
      return ((currentStatus * 100) / target).toFixed(0);
    } catch {
      return -1;
    }
  }, [currentStatus, target]);

  return (
    <View style={styles.container}>
      <Text style={styles.traget}>{currentStatus.toFixed(1)}</Text>
      <View style={styles.svg}>
        <SvgRectangle />
      </View>

      <Text
        style={
          currentStatus === 0
            ? styles.targetPercentageNZ
            : styles.targetPercentageNM
        }>
        {getTargetPercentage}
        <Text
          style={
            currentStatus === 0
              ? styles.targetPercentageZero
              : styles.targetPercentageMore
          }>
          %
        </Text>
      </Text>
    </View>
  );
};

export default Occurred;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  svg: {position: 'relative'},
  traget: {fontSize: 60, fontWeight: '700', lineHeight: 60},
  targetPercentageNZ: {
    position: 'absolute',
    bottom: 110,
    fontSize: 46,
    fontWeight: '700',
    color: '#B9B9B9',
  },
  targetPercentageNM: {
    position: 'absolute',
    bottom: 110,
    fontSize: 46,
    fontWeight: '700',
    color: '#0A8080',
  },
  targetPercentageZero: {
    fontSize: 30,
    fontWeight: '600',
    color: '#B9B9B9',
  },
  targetPercentageMore: {
    fontSize: 30,
    fontWeight: '600',
    color: '#0A8080',
  },
});
