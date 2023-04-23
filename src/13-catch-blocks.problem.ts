import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed" | "fail2") => {
  try {
    // Throw an error object, this will fall into the instanceof Error check
    if (state === "fail") {
      throw new Error("Failure!");
    }

    // Throw a string value not an error object, this will fall into the default case ie when it's not an instanceof Error check
    if (state === "fail2") {
      throw "Failure";
    }
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }

    return e;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail2")).toEqual("Failure");
});
