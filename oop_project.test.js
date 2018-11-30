const Teacher = require("./oop_project.js");
const Rectangle = require("./oop_project.js");

describe("teacher", () => {
  it("should construct with the correct values", () => {
    const teacher = new Teacher("Sally Smith", [1, 2, 3]);
    // const teacher = new Rectangle(5, 5);
    console.log("teacher", teacher);
  });
});
