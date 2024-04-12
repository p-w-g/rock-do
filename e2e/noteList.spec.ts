import { test, expect } from "@playwright/test";

test("CRUD operations", async ({ page }) => {
  await page.goto("http://localhost:8080/");

  await expect(page).toHaveTitle(/rock-do/);

  // adding a note is possible using enter
  await page.getByRole("textbox").fill("First Task");
  await page.keyboard.press("Enter");

  // adding a note is possible using button
  await page.getByRole("textbox").fill("Second Task");
  await page.getByText("Add note").click();

  // reset button only cleans inputs
  await page.getByRole("textbox").fill("Third Task");
  await page.getByText("Reset").click();

  // find only two tasks
  await expect(page.getByText("First Task")).toBeVisible();
  await expect(page.getByText("Second Task")).toBeVisible();
  await expect(page.getByText("Third Task")).not.toBeVisible();

  // delete first task
  // edit second task

  // only second task remains with the text "third task failed successfully"
  // clear button deletes everything

  // add a task with text "Fifth task" and it should be with ID 0
});
