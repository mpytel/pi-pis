//import { ObjectId } from "mongodb";

export interface IPiBase {
  piType: string;
  piTitle: string;
  piSD: string;
}

// export interface IPiID {
//   id?: ObjectId | null;
//   piIDMD5?: string;
//   piUser: ObjectId | null;
//   piRealm: ObjectId | null;
//   piDomain: ObjectId | null;
//   piSubject: ObjectId | null;
//   setPiID?: () => {};
//   getPiID?: () => {};
//   patchPiID?: () => {};
//   deletePiID?: () => {};
// }

// export interface IPiMeta {
//   piInflus: ObjectId[];
//   piPre: ObjectId[];
//   piDec: ObjectId[];
//   piMaps: ObjectId[];
//   setPiMeta?: () => {};
//   getPiMeta?: () => {};
//   patchPiMeta?: () => {};
//   deletePiMeta?: () => {};
// }
// export interface IPi extends Partial<IPiBase> {
//   id: ObjectId;
//   name: string;
//   version: string;
//   piMD5?: string;
//   piID: ObjectId | null;
//   piMeta: IPiMeta;
//   piBody?: Object[];
// }

// export interface IPiIMeta extends Partial<IPiMeta> {
//   piI: {
//     piUser: ObjectId | null;
//     piRealm: ObjectId | null;
//     piDomain: ObjectId | null;
//     piSubject: ObjectId | null;
//     piType: ObjectId | null;
//   };
// }
// export interface IPiI extends Partial<IPiBase> {
//   id: ObjectId;
//   name: string;
//   version: string;
//   piID: ObjectId | null;
//   piMeta: IPiIMeta;
//   setPiI?: () => {};
//   getPiI?: () => {};
//   patchPiI?: () => {};
//   deletePiI?: () => {};
// }
// export interface IPiLog extends Partial<IPiBase> {
//   id: ObjectId;
//   name: string;
//   version: string;
//   piMD5?: string;
//   piIDs: {
//     id: string;
//     piIDMD5: string;
//     piUser: string;
//     piRealm: string;
//     piDomain: string;
//     piSubject: string;
//   };
// }

// export interface IPiAlpha {
//   αID: string;
//   αPi: IPi;
//   setPi: () => {};
//   getPi: () => {};
//   patchPi: () => {};
//   deletePi: () => {};
// }
