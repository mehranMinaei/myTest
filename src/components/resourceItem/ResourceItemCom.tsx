import SvgCoffe from '../../../assets/svgs/SvgCoffe';
import SvgWater from '../../../assets/svgs/SvgWater';
import {ResourceItem, ResourceType, ResourceUnitType} from '../../type/common';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgTea from '../../../assets/svgs/SvgTea';
import SvgAdd from '../../../assets/svgs/SvgAdd';
import SvgMinus from '../../../assets/svgs/SvgMinus';
import {useAtom} from 'jotai';
import {
  currentStatusStor,
  resourceStor,
  targetStor,
} from '../../jotaiStore/resourceStor';
import {Storage} from '../../utils/storage';

const ResourceItemCom = ({
  capacity,
  id,
  resourceType,
  title,
  unit,
  isSelectedItem,
  onSelect,
}: ResourceItem) => {
  const [currentStatus, setCurrentStatus] = useAtom(currentStatusStor);
  const [resource] = useAtom(resourceStor);
  const [target] = useAtom(targetStor);
  const getIcon = (type_: ResourceType) => {
    if (type_ === ResourceType.WATER) return <SvgWater />;
    if (type_ === ResourceType.COFFE) return <SvgCoffe />;
    if (type_ === ResourceType.TEA) return <SvgTea />;
  };

  const handleIncrease = async () => {
    const tmp = resource?.find(x => x.id === id);
    let res = 0;
    if (tmp) {
      if (tmp.unit === ResourceUnitType.LITER) {
        if (currentStatus + tmp?.capacity >= target) res = target;
        else res = currentStatus + tmp?.capacity;
      } else {
        if (currentStatus + tmp?.capacity / 1000 >= target) res = target;
        else res = currentStatus + tmp?.capacity / 1000;
      }
      await Storage.saveString('currentStatus', res.toString());
      setCurrentStatus(res);
    }
  };

  const handleDecrease = async () => {
    const tmp = resource?.find(x => x.id === id);
    let res = 0;
    if (tmp) {
      if (tmp.unit === ResourceUnitType.LITER) {
        if (currentStatus >= tmp?.capacity) res = currentStatus - tmp?.capacity;
        else res = 0;
      } else {
        if (currentStatus >= tmp?.capacity / 1000)
          res = currentStatus - tmp?.capacity / 1000;
        else res = 0;
      }

      await Storage.saveString('currentStatus', res.toString());
      setCurrentStatus(res);
    }
  };
  return (
    <SafeAreaView style={styles.itemWrapper}>
      {isSelectedItem && (
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => handleIncrease()}>
          <SvgAdd />
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.container} onPress={() => onSelect(id)}>
        <View style={styles.iconWrapper}>{getIcon(resourceType)}</View>

        <Text style={styles.title}>{title}</Text>
        <View style={styles.capWrapper}>
          <Text style={styles.capacity}>{capacity}</Text>
          <Text style={styles.capacity}>{unit}</Text>
        </View>
      </TouchableOpacity>
      {isSelectedItem && (
        <TouchableOpacity
          style={styles.minusBtn}
          onPress={() => handleDecrease()}>
          <SvgMinus />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
export default ResourceItemCom;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 11,
    borderWidth: 1,
    flexDirection: 'column',
    marginHorizontal: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    minWidth: 85,
    minHeight: 145,
    marginTop: 5,
  },
  itemWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    paddingTop: 5,
  },
  title: {fontSize: 20, fontWeight: '400'},
  capWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  capacity: {
    color: '#71717A',
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 2,
  },
  addBtn: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusBtn: {
    marginTop: 8,
    width: 60,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
