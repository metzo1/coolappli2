import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'cf39310e-7524-4559-b79b-0ac731a3a307',
};

export const sampleWithPartialData: IAuthority = {
  name: 'ee3a527f-0506-4daf-82fd-c34acd759fd3',
};

export const sampleWithFullData: IAuthority = {
  name: '474f64d9-e804-4e82-a73e-0f07ebaeacfa',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
