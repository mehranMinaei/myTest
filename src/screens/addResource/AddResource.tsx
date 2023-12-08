import Header from '../../components/header/Header';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SvgEdit from '../../../assets/svgs/SvgEdit';
import {AddMenuBoxRefType, ResourceItem, ResourceType} from '../../type/common';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import AddModal from './AddModal';
import {useRef} from 'react';

import SvgWater from '../../../assets/svgs/SvgWater';
import SvgCoffe from '../../../assets/svgs/SvgCoffe';
import SvgTea from '../../../assets/svgs/SvgTea';
import {resourceStor} from '../../jotaiStore/resourceStor';
import {useAtom} from 'jotai';

const AddUseCase = () => {
  const onPressShowModal = () => {
    addMpdalBoxRef.current?.open();
  };

  const {width} = Dimensions.get('window');
  const threshold = width * 0.4;
  const addMpdalBoxRef = useRef<AddMenuBoxRefType>(null);
  const [resource, setResource] = useAtom(resourceStor);
  const getIcon = (type_: ResourceType) => {
    if (type_ === ResourceType.WATER)
      return <SvgWater height={24} width={20} />;
    if (type_ === ResourceType.COFFE)
      return <SvgCoffe height={34} width={34} />;
    if (type_ === ResourceType.TEA) return <SvgTea height={35} width={26} />;
  };

  const handleDelete = (id: number) => {
    const res = resource?.filter(x => x.id !== id);
    if (resource && res) {
      setResource(res);
    }
  };
  const itemId = useSharedValue(0);
  const onRecordingPressOut = () => {
    handleDelete(itemId.value);
  };
  const RenderItem: ListRenderItem<ResourceItem> = ({item}) => {
    // Animation State
    const translateX = useSharedValue(0);

    const itemContainerStyle = useAnimatedStyle(() => {
      return {
        transform: [{translateX: translateX.value}],
      };
    });
    const panGestureEvent =
      useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onStart: _ => {},
        onActive: event => {
          translateX.value = event.translationX > 0 ? 0 : event.translationX;
        },
        onEnd: _ => {
          if (threshold < _.translationX) {
            translateX.value = withTiming(0);
          } else {
            itemId.value = item.id;
            translateX.value = withTiming(-width);
          }
        },

        onFinish: _ => {
          runOnJS(onRecordingPressOut)();
        },
      });

    return (
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.itemWrapper, itemContainerStyle]}>
          <View style={styles.card}>
            <View style={styles.cardleftSide}>
              <View>{getIcon(item.resourceType)}</View>
              <View style={styles.infoWrapper}>
                <Text style={styles.titleItem}>{item.title}</Text>
                <View style={styles.capWrapper}>
                  <Text style={styles.capacity}>{item.capacity}</Text>

                  <Text style={styles.capacity}>{item.unit}</Text>
                </View>
              </View>
            </View>
            <View style={styles.cardleftSide}>
              <SvgEdit height={20} width={20} />
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    );
  };

  const onCancel = () => {};
  const onAddResource = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Resource" containerStyle={styles.headerContainer} />
      </View>

      <View style={{flex: 1, width: '100%'}}>
        <TouchableOpacity
          onPress={onPressShowModal}
          style={styles.buttonShowModa}>
          <Text>Add New Recourse</Text>
        </TouchableOpacity>
        <FlatList
          data={resource}
          renderItem={({item}) => <RenderItem item={item} />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => 'list' + item.id}
          ItemSeparatorComponent={() => {
            return <View style={{height: 10}}></View>;
          }}
          ListHeaderComponent={() => {
            return <View style={{height: 10}}></View>;
          }}
        />

        <AddModal
          ref={addMpdalBoxRef}
          onCancel={onCancel}
          onAddResource={onAddResource}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddUseCase;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  headerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 56,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  buttonShowModa: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0A8080',
  },
  itemWrapper: {
    paddingHorizontal: 3,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  cardleftSide: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoWrapper: {
    flexDirection: 'column',
    padding: 4,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
  },
  titleItem: {fontSize: 20, fontWeight: '400'},
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
});
