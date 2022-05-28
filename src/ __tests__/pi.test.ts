import PiBase from "../classes/PiBase";
import { Pi, PiUsers } from "../classes/Pis";
import piUsers from "../index";

const Users: PiUsers = piUsers;
const User = Users.piUsers[0];

test("Boot Users have only one element", () => {
  expect(Users.piUsers.length).toBe(1);
});

describe("Pi Class Testing", () => {
  it("Add another pi to piUser pis", () => {
    const initLenght = User.pis.length();
    console.log(`Init Lenght: ${initLenght}`);
    const piPi: Pi = new PiBase(
      "topic",
      "pi",
      "Smallest particle of Pertinent Information. Used programically to store pi class first level field names.",
    );
    User.pis.push(piPi);
    //const checkPi = User.pis.pis[initLenght];
    //console.log(JSON.stringify(checkPi, null, 2));
    console.log(`New Lenght: ${User.pis.length()}`);
    expect(User.pis.length()).toBe(initLenght + 1);
  });
});
