import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MyFormComponent from "./index";

test("submit button validation", async () => {
  const user = userEvent.setup();
  const { getByLabelText, getByText, queryByText, debug } = render(
    <MyFormComponent />
  );

  screen.debug(); // Debugging line to check the rendered output

  const idInput = getByLabelText("id");
  const nameInput = getByLabelText("name");
  const emailInput = getByLabelText("email");
  const ageInput = getByLabelText("age");
  const submitButton = getByText("submit");

  // Test invalid ID
  await user.type(idInput, "abc");
  await user.type(nameInput, "John");
  await user.type(emailInput, "test@example.com");
  await user.type(ageInput, "25");
  await user.click(submitButton);
  expect(
    screen.queryByText("ID must be at least 4 characters long.")
  ).toBeInTheDocument();

  await new Promise((resolve) => setTimeout(resolve, 500));

  // Test invalid email
  await user.clear(idInput);
  await user.type(idInput, "abcd");
  await user.clear(nameInput);
  await user.type(nameInput, "John");
  await user.clear(emailInput);
  await user.type(emailInput, "invalid-email");
  await user.clear(ageInput);
  await user.type(ageInput, "25");
  await user.click(submitButton);
  expect(
    screen.queryByText("Email must be in a valid format.")
  ).toBeInTheDocument();

  await new Promise((resolve) => setTimeout(resolve, 500));

  // Test valid inputs
  await user.clear(emailInput);
  await user.type(emailInput, "test@example.com");
  await user.clear(nameInput);
  await user.type(nameInput, "John Doe");
  await user.clear(ageInput);
  await user.type(ageInput, "25");
  await user.clear(idInput);
  await user.type(idInput, "abcd");
  await user.click(submitButton);
  expect(
    screen.queryByText("ID must be at least 4 characters long.")
  ).not.toBeInTheDocument();

  await new Promise((resolve) => setTimeout(resolve, 500));

  expect(
    screen.queryByText("Email must be in a valid format.")
  ).not.toBeInTheDocument();
});
