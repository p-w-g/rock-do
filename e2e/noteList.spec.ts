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

  const task_1 = page.getByText("First Task");
  const task_2 = page.getByText("Second Task");
  const task_3 = page.getByText("Third Task");

  // find only two tasks
  await expect(task_1).toBeVisible();
  await expect(task_2).toBeVisible();
  await expect(task_3).not.toBeVisible();

  // delete first task

  await task_1.dragTo(task_1, {
    sourcePosition: { x: 0, y: 0 },
    targetPosition: { x: 150, y: 0 },
  });
  await expect(task_1).not.toBeVisible();

  // edit second task
  // only second task remains with the text "third task failed successfully"
  // await expect(task_2).not.toBeVisible();
  // await expect(page.getByText("Third task failed successfully")).toBeVisible();
  // clear button deletes everything

  // add a task with text "Fifth task" and it should be with ID 0
});
