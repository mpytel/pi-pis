import PiBase from "../classes/PiBase";
import { Pi, Pis } from "../classes/Pis";

const bootPis = async (): Promise<Pis> => {
  const rtnPis: Pis = new Pis;
  const piPi: Pi = new PiBase(
    "pi",
    "pi",
    "Smallest particle of Pertinent Information. Used programically to store pi class first level field names."
  );
  rtnPis.pis.push(piPi);
  const piPiType: Pi = new PiBase(
    "pi",
    "piType",
    "pi sub-class type designator.",
  );
  rtnPis.pis.push(piPiType);
  const piPiTypePiType: Pi = new PiBase(
    "piType",
    "piType",
    "The pyType used to designate a pi as a piType.",
  );
  rtnPis.pis.push(piPiTypePiType);
  const piTypePi: Pi = new PiBase(
    "piType",
    "pi",
    "The pyType used to designate a pi as a pi piType.",
  );
  rtnPis.pis.push(piTypePi);
  const piTypePiField: Pi = new PiBase(
    "piType",
    "piField",
    "A pi that defines and discribes a pi opbject key.",
  );
  rtnPis.pis.push(piTypePiField);
  const piFieldId: Pi = new PiBase(
    "piField",
    "id",
    "The unique mongoDB ObjectID identifyer assined to each pi when created and updated in redis when saved to a mongoDB collection for the first time.",
  );
  rtnPis.pis.push(piFieldId);
  const piFieldName: Pi = new PiBase(
    "piField",
    "name",
    "The application name used when a pi was created.",
  );
  rtnPis.pis.push(piFieldName);
  const piFieldVersion: Pi = new PiBase(
    "piField",
    "version",
    "The application version number when a pi was created.",
  );
  rtnPis.pis.push( piFieldVersion);
  const piFieldPiType: Pi = new PiBase(
    "piField",
    "piType",
    "The name of the pi's type",
  );
  rtnPis.pis.push(piFieldPiType);
  const piFieldPiTitle: Pi = new PiBase(
    "piField",
    "piTitle",
    "The name of the pi.",
  );
  rtnPis.pis.push(piFieldPiTitle);
  const piFieldPiSD: Pi = new PiBase(
    "piField",
    "piSD",
    "A short discription of what the pi is.",
  );
  rtnPis.pis.push(piFieldPiSD);
  const piFieldPiID: Pi = new PiBase(
    "piField",
    "piID",
    "The set of fileds used to uniquily associate a pi with the combination of these piID field values",
  );
  rtnPis.pis.push(piFieldPiID);
  const piIDpiType: Pi = new PiBase(
    "piType",
    "piID",
    "The set of fileds used to uniquily associate a pi with the combination of these piID field values. (interface IPiID)",
  );
  rtnPis.pis.push(piIDpiType);
  const piIDId: Pi = new PiBase(
    "piID",
    "id",
    "A piType used to designate a pi as a piID field contained in the piID pi field.",
  );
  rtnPis.pis.push(piIDId);
  const piIDPiUser: Pi = new PiBase(
    "piID",
    "piUser",
    "System level pi storing a the root user name.",
  );
  rtnPis.pis.push(piIDPiUser);
  const piIDPiRealm: Pi = new PiBase(
    "piID",
    "piRealm",
    "System level pi storing a pis visablity (i.e secret, private, public).",
  );
  rtnPis.pis.push(piIDPiRealm);
  const piIDPiDomain: Pi = new PiBase(
    "piID",
    "piDomain",
    "System level pi storing subject domaine and its decendets.",
  );
  rtnPis.pis.push(piIDPiDomain);
  const piIDPiSubject: Pi = new PiBase(
    "piID",
    "piSubject",
    "System level pi storing subject domaine and its decendets.",
  );
  rtnPis.pis.push(piIDPiSubject);
  const piTypePiI: Pi = new PiBase(
    "piType",
    "piI",
    "The current pi setting the system context of any moment of pi interaction with exisating or new pis.",
  );
  rtnPis.pis.push(piTypePiI);
  const piTypeTopic: Pi = new PiBase(
    "piType",
    "topic",
    "Topic oriented writing is used when working with pis and the topic is the base piType of UX interactions",
  );
  rtnPis.pis.push(piTypeTopic);
  rtnPis.piPrincipal = piTypeTopic;

  return rtnPis;
};

export default bootPis;
