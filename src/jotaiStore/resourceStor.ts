import {ResourceItem} from '../type/common';
import {atom} from 'jotai';

export const resourceStor = atom<ResourceItem[] | undefined>(undefined);

export const targetStor = atom<number>(10);
export const currentStatusStor = atom<number>(0);
