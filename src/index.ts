import bootPis from "./bootPis/bootPis000";
import PiBase from "./classes/PiBase";
import { Pi, Pis, PiUser, PiUsers } from "./classes/Pis";
export { bootPis };
export { PiBase };
export { Pi, Pis, PiUser, PiUsers };

const piUser = new PiUser("piUser", "root");
const piUsers = new PiUsers(piUser);

bootPis().then(async (pis: Pis) => {
  let index = 0;
  for (index; index < pis.length(); index++) {
    const aPi: Pi = pis.pis[index];
    piUsers.piUsers[0].pis.push(aPi);
  }
  // })
  // .then(() => {
  //   process.exit();
});

//const pis: Pis = new Pis(piUser.piUser);
//const pi: Pi = new Pi("piType-in","piTitle-in", "piSD-in")

//pis.pis.push(pi)

export default piUsers;
