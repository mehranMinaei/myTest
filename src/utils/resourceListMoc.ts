import {ResourceItem, ResourceType, ResourceUnitType} from '../type/common';

export const ResourceItems: ResourceItem[] = [
  {
    capacity: 0.5,
    id: 1,
    resourceType: ResourceType.WATER,
    title: 'Water',
    unit: ResourceUnitType.LITER,
    isSelectedItem: true,
    onSelect: null,
  },
  {
    capacity: 100,
    id: 2,
    resourceType: ResourceType.COFFE,
    title: 'coffe',
    unit: ResourceUnitType.ML,
    isSelectedItem: false,
    onSelect: null,
  },
  {
    capacity: 100,
    id: 3,
    resourceType: ResourceType.TEA,
    title: 'Tea',
    unit: ResourceUnitType.ML,
    isSelectedItem: false,
    onSelect: null,
  },
];
