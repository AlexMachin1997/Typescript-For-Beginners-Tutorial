import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

const defaultUser: User = {
  id: 1,
  firstName: "Alex",
  lastName: "Machin",
  isAdmin: false,
};

const getUserId = (user: User): number => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
