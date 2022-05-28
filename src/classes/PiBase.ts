import { IPiBase } from "../interface/IPi";

export default class PiBase implements IPiBase {
  piType: string;
  piTitle: string;
  piSD: string;

  constructor(piType: string, piTitle: string, piSD: string) {
    this.piType = piType == undefined ? "" : piType;
    this.piTitle = piTitle == undefined ? "" : piTitle;
    this.piSD = piSD == undefined ? "" : piSD;
  }
}
