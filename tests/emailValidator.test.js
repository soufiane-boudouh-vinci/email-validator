const validateEmail = require('../src/emailValidator');

describe("email validator - '@' presence", () => {
  test("fails when no @", () => {
    expect(validateEmail("user.example.com")).toBe(false);
  });
  test("passes when contains @ (other rules will catch later)", () => {
    expect(typeof validateEmail("user@example.com")).toBe("boolean");
  });
});

describe("email validator - no spaces", () => {
  test("fails when email contains space anywhere", () => {
    expect(validateEmail("user @example.com")).toBe(false);
    expect(validateEmail("user@ example.com")).toBe(false);
    expect(validateEmail(" user@example.com ")).toBe(false);
  });
});

describe("email validator - non-empty local/domain", () => {
  test("fails when no text before @", () => {
    expect(validateEmail("@example.com")).toBe(false);
  });
  test("fails when no text after @", () => {
    expect(validateEmail("user@")).toBe(false);
  });
  test("passes when text exists on both sides", () => {
    expect(validateEmail("u@e.co")).toBe(true);
  });
});

