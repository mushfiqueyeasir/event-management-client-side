/* eslint-disable testing-library/prefer-find-by */
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import EventCard from "../EventCard";

test("Card Title length Check", async () => {
  render(
    <Router>
      <EventCard />
    </Router>
  );

  await waitFor(() => expect(screen.getByTestId("title")).toBeDefined());
  const titleElement = screen.getByTestId("title");
  expect(titleElement.textContent.length).toBeGreaterThanOrEqual(0);
  expect(titleElement.textContent.length).toBeLessThanOrEqual(20);
});

test("Card Location length Check", async () => {
  render(
    <Router>
      <EventCard />
    </Router>
  );

  await waitFor(() => expect(screen.getByTestId("location")).toBeDefined());
  const locationElement = screen.getByTestId("location");
  expect(locationElement.textContent.length).toBeGreaterThanOrEqual(0);
  expect(locationElement.textContent.length).toBeLessThanOrEqual(20);
});

test("Card Description length Check", async () => {
  render(
    <Router>
      <EventCard />
    </Router>
  );

  await waitFor(() => expect(screen.getByTestId("description")).toBeDefined());
  const decryptionElement = screen.getByTestId("description");
  expect(decryptionElement.textContent.length).toBeGreaterThanOrEqual(0);
  expect(decryptionElement.textContent.length).toBeLessThanOrEqual(153);
});
