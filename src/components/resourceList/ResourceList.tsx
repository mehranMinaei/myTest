import ResourceItem from '../resourceItem/ResourceItemCom';
import {IResourceListProp} from '../../type/common';
import {StyleSheet, View} from 'react-native';
import {resourceStor} from '../../jotaiStore/resourceStor';
import {useAtom} from 'jotai';

const ResourceList = ({items}: IResourceListProp) => {
  const [resource, setResource] = useAtom(resourceStor);

  const handleSelect = (id: number) => {
    if (resource) {
      const otherList = [...resource];
      resource.map((item, idx) => {
        if (item.id === id)
          otherList[idx] = {...otherList[idx], isSelectedItem: true};
        else otherList[idx] = {...otherList[idx], isSelectedItem: false};
      });
      setResource(otherList);
    }
  };
  return (
    <View style={styles.container}>
      {items &&
        items.map((item, index) => {
          return (
            <View key={item.id + '' + index}>
              <ResourceItem
                capacity={item.capacity}
                id={item.id}
                isSelectedItem={item.isSelectedItem}
                resourceType={item.resourceType}
                title={item.title}
                unit={item.unit}
                onSelect={handleSelect}
              />
            </View>
          );
        })}
    </View>
  );
};

export default ResourceList;

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', overflow: 'scroll'},
});
