import { FormData } from "../form-page/contact-form";
import { containsLink, isEmailValid } from "./utils";

describe("Email Validation", () => {
  test("Valid email should return true", () => {
    const validEmail = "test@example.com";
    const isValid = isEmailValid(validEmail);
    expect(isValid).toBe(true);
  });

  test("Invalid email should return false", () => {
    const invalidEmails = ["invalid-email", "absko@moajeh"];
    invalidEmails.forEach((invalidEmail) => {
      const isValid = isEmailValid(invalidEmail);
      expect(isValid).toBe(false);
    });
  });

  test("Empty email should return false", () => {
    const emptyEmail = "";
    const isValid = isEmailValid(emptyEmail);
    expect(isValid).toBe(false);
  });
});

describe("Link Detection", () => {
  let formData: FormData;

  beforeEach(() => {
    formData = {
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      service: "",
      description: "",
    };
  });

  describe("HTTP Link", () => {
    test("Should return true if formData contains a link with http://", () => {
      const formDataTest: FormData = {
        ...formData,
        description: "http://example.com",
      };

      const result = containsLink(formDataTest);
      expect(result).toBe(true);
    });
  });

  test("Should return true if formData contains a link with https://", () => {
    const formDataTest: FormData = {
      ...formData,
      description: "https://example.com",
    };

    const result = containsLink(formDataTest);
    expect(result).toBe(true);
  });

  test("Should return false if formData does not contain a link", () => {
    const result = containsLink(formData);
    expect(result).toBe(false);
  });
});
