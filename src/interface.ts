type chaiorder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makechai(order: chaiorder) {
  console.log(order);
}
function servechai(order: chaiorder) {
  console.log(order);
}
interface tearecipe {
  water: number;
  milk: number;
}

class masalachai implements tearecipe {
  // class
  water = 100;
  milk = 100;

  masalachai1() {
    console.log("masala chai is ready");
    console.log(this.water);
    console.log(this.milk);
  }
}

const chai1 = new masalachai();
chai1.masalachai1();

type chaiorder2 = "tea" | "masala" | "ginger"; // lieteral type and union of literal types
interface cupsize {
  size: "small" | "medium" | "large";
}
class cup implements cupsize {
  size: "small" | "medium" | "large" = "large";
}
type response =
  | {
      ok: true;
    }
  | {
      ok: false;
    };

/*class myresponse implements response { // only objector intersection of objects can be implemented by class
  ok: boolean = true;
} */

//  intersectio of objects

type basechai = {
  tealeaves: number;
};

type extrachai = {
  masala: number;
};
type fullchai = basechai & extrachai;

const chai2: fullchai = {
  tealeaves: 100,
  masala: 50,
};

type user = {
  username: string;
  password?: string; // optional property
};

const user1: user = {
  username: "Shredhaya Goel",
};

const user2: user = {
  username: "Shredhaya Goel",
  password: "secret",
};

type config = {
  readonly appName: string; // readonly property
  version: number;
};

const cfg: config = {
  appName: "ChaiApp",
  version: 1.0,
};
// cfg.appName = "NewChaiApp"; // Error: Cannot assign to 'appName' because it is a read-only property.
