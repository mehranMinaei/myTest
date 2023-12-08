import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface ISvgProp {
  color?: string;
  width?: number;
  height?: number;
}

export interface IHeaderProps {
  leftChaild?: ReactNode;
  title?: string;
  rightChaild?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface IOccuredProps {
  currentStatus: number;
  target: number;
}

export enum ResourceType {
  WATER = 'Water',
  COFFE = 'Caffe',
  TEA = 'Tea',
}

export enum ResourceUnitType {
  LITER = 'liter',
  ML = 'ml',
}

export type ResourceItem = {
  id: number;
  title: string;
  capacity: number;
  resourceType: ResourceType;
  unit: ResourceUnitType;
  onSelect: any; // (id: number) => void;
  isSelectedItem: boolean;
  description?: string;
};

export interface IResourceListProp {
  items: ResourceItem[];
}

export interface AddMenuBoxProps {
  onAddResource: () => void;
  onCancel: () => void;
}

export type AddMenuBoxRefType = {
  open: () => void;
  close: () => void;
};
