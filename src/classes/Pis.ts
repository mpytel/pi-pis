import { IPiBase } from "../interface/IPi";
import PiBase from "./PiBase";

export class PiUsers {
  // global sington holding entry points for piUser pis
  // the global user is "piUser".
  piUsers: PiUser[];
  piPrincipal: PiUser;
  constructor(principal: PiUser) {
    this.piPrincipal = principal;
    this.piUsers = [principal];
  }
}

export class PiUser {
  // global sington holding entry points for piUser pis
  piUser: Pi;
  pis: Pis

  constructor(piUser: string, piRelm: string) {
    const piPi: IPiBase = new PiBase("piUser", piUser, piRelm);
    const principal = new Pi(piPi);
    const thePis = new Pis();
    this.piUser = principal;
    this.pis = thePis

  }
  set setPis(thePis: Pis) {
    this.pis = thePis;
  }
}

export class Pis {
  // global sington holding entry points for piUser pis
  pis: Pi[];
  piPrincipal: Pi;
  constructor() {
    const piPi: IPiBase = new PiBase("piType-boot", "piTitle-boot", "piSD-boot");
    const principal = new Pi(piPi);
    this.piPrincipal = principal;
    this.pis = [ principal ];
  }
  length(): number {
    return this.pis.length;
  }
  push(thePi: Pi) {
    this.pis.push(thePi);
    this.piPrincipal = thePi;
  }
}

export class Pi implements IPiBase {
  piType: string;
  piTitle: string;
  piSD: string;

  constructor(pi: IPiBase) {
    this.piType = pi.piType == undefined ? "" : pi.piType;
    this.piTitle = pi.piTitle == undefined ? "" : pi.piTitle;
    this.piSD = pi.piSD == undefined ? "" : pi.piSD;
  }
}
