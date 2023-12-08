import Occurred from '../../components/occurred/Occurred';
import Header from '../../components/header/Header';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SvgEdit from '../../../assets/svgs/SvgEdit';
import SvgCalendar from '../../../assets/svgs/SvgCalendar';
import ResourceList from '../../components/resourceList/ResourceList';
import {
  currentStatusStor,
  resourceStor,
  targetStor,
} from '../../jotaiStore/resourceStor';
import {useAtom} from 'jotai';

const Home = () => {
  const [resource] = useAtom(resourceStor);
  const [target] = useAtom(targetStor);
  const [currentStatus] = useAtom(currentStatusStor);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
          title="Liter"
          rightChaild={<SvgEdit />}
          leftChaild={<SvgCalendar />}
        />
      </View>
      <View style={styles.stipeSvgWrapper}>
        <Occurred currentStatus={currentStatus} target={target} />
      </View>
      <View style={styles.stipeResource}>
        <ResourceList items={resource!} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  stipeSvgWrapper: {flex: 7},
  stipeResource: {flex: 3},
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
});
