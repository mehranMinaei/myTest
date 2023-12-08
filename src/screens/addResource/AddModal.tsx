import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {
  AddMenuBoxProps,
  AddMenuBoxRefType,
  ResourceItem,
  ResourceType,
  ResourceUnitType,
} from '../../type/common';
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAtom} from 'jotai';
import {resourceStor} from '../../jotaiStore/resourceStor';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {validation} from './Resolver';

const {height, width} = Dimensions.get('window');
const AddModal = forwardRef<AddMenuBoxRefType, AddMenuBoxProps>(
  (props, ref) => {
    useImperativeHandle(
      ref,
      () => {
        return {
          open: () => openMenu(),
          close: () => closeMenu(),
        };
      },
      [],
    );

    const [resource, setResource] = useAtom(resourceStor);
    const {
      control,
      handleSubmit,
      formState: {errors},
    } = useForm<ResourceItem>({
      resolver: yupResolver(validation),
    });
    //BottomSheet
    const boxBottonSHeetRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => [height - 85, '100%'], []);

    const openMenu = useCallback(() => {
      boxBottonSHeetRef.current?.present();
    }, []);

    const closeMenu = useCallback(() => {
      boxBottonSHeetRef.current?.close();
    }, []);

    const getType = (val: string) => {
      switch (val.toUpperCase()) {
        case 'WATER':
          return ResourceType.WATER;

        case 'COFFE':
          return ResourceType.COFFE;

        case 'TEA':
          return ResourceType.TEA;

        default:
          return ResourceType.WATER;
      }
    };

    const getUnit = (val: string) => {
      switch (val.toUpperCase()) {
        case 'WATER':
          return ResourceUnitType.LITER;

        case 'COFFE':
          return ResourceUnitType.ML;

        case 'TEA':
          return ResourceUnitType.ML;

        default:
          return ResourceUnitType.LITER;
      }
    };

    const handleSave = (data: ResourceItem) => {
      const newItem: ResourceItem = {
        capacity: data.title.toUpperCase() === 'WATER' ? 0.5 : 100,
        id: resource ? resource.length + 1 : 1,
        resourceType: getType(data.title),
        title: data.title,
        unit: getUnit(data.title),
        isSelectedItem: false,
        onSelect: null,
      };
      if (resource) setResource([...resource, newItem]);
      else setResource([newItem]);
      boxBottonSHeetRef.current?.close();
    };

    return (
      <BottomSheetModal
        ref={boxBottonSHeetRef}
        index={0}
        style={{elevation: 10, flex: 1}}
        backgroundStyle={{display: 'none'}}
        handleStyle={{display: 'none'}}
        snapPoints={snapPoints}
        keyboardBehavior="fillParent"
        android_keyboardInputMode="adjustResize"
        enableDismissOnClose>
        <BottomSheetView style={styles.container}>
          <View style={styles.card}>
            <View style={styles.line}></View>
            <View>
              <Text style={styles.title}>Add</Text>
            </View>
            <View style={styles.inputWrapper}>
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 3,
                }}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Title"
                    onChangeText={onChange}
                    defaultValue={value}
                  />
                )}
                name="title"
              />

              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Description"
                    onChangeText={onChange}
                    defaultValue={value}
                  />
                )}
                name="description"
              />
            </View>
            <View style={styles.errorView}>
              <Text style={styles.errorText}>
                {errors.title && `${errors.title.message}`}
              </Text>
            </View>

            <View style={styles.uploadWrapper}>
              <TouchableOpacity style={styles.uploadBtn}>
                <Text style={styles.btnUploadTitle}>+Upload Icon</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnWrapper}>
              <TouchableOpacity onPress={closeMenu} style={styles.buttonCance}>
                <Text style={styles.titBtnCancel}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSubmit(handleSave)}
                style={styles.buttonSave}>
                <Text style={styles.titBtnSave}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

export default AddModal;
const styles = StyleSheet.create({
  container: {padding: 24, width: '100%', height: '90%'},
  card: {
    backgroundColor: '#fff',
    width: width,
    borderTopEndRadius: 16,
    borderTopLeftRadius: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    padding: 15,
    shadowColor: 'rgba(28, 43, 61, 0.5)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  line: {
    height: 7,
    backgroundColor: '#D4D4D8',
    width: 85,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#27272A',
  },
  inputWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  inputStyle: {
    width: '45%',
    height: 50,
    borderWidth: 1,
    borderColor: '#A1A1AA',
    borderRadius: 10,
    paddingLeft: 15,
    paddingVertical: 5,
  },
  btnWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  buttonCance: {
    width: '45%',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,

    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0A8080',
  },
  buttonSave: {
    width: '45%',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,

    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0A8080',
    backgroundColor: '#0A8080',
  },
  titBtnSave: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  titBtnCancel: {
    color: '#0A8080',
    fontSize: 14,
    fontWeight: '700',
  },
  uploadWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
  },
  uploadBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 5,
  },
  btnUploadTitle: {
    color: '#006194',
    fontSize: 14,
    fontWeight: '500',
  },
  errorView: {
    paddingLeft: 12,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  errorText: {
    color: '#DE3163',
    fontSize: 10,
  },
});
