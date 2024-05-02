import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 20477,
  login: 'Hv$C@l\\M4d1h\\4M1\\ziX3\\,o',
};

export const sampleWithPartialData: IUser = {
  id: 12669,
  login: 'u_bnP',
};

export const sampleWithFullData: IUser = {
  id: 24408,
  login: 'I13jX9',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
