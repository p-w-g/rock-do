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
  await task_2.dragTo(task_2, {
    sourcePosition: { x: 150, y: 0 },
    targetPosition: { x: 0, y: 0 },
  });

  await expect(
    page.getByRole("dialog").getByText("Current note")
  ).toBeVisible();

  await page
    .getByRole("dialog")
    .getByRole("textbox")
    .fill("Third task failed successfully");

  await page
    .getByRole("dialog")
    .getByRole("button")
    .getByText("Update Note")
    .click();

  await expect(task_2).not.toBeVisible();

  // adding a note is possible using enter
  await page.getByRole("textbox").fill("Fourth Task");
  await page.keyboard.press("Enter");

  // adding a note is possible using button
  await page.getByRole("textbox").fill("Fifth Task");
  await page.getByText("Add note").click();

  const task_4 = page.getByText("Fourth task");
  const task_5 = page.getByText("Fifth Task");

  await expect(task_1).not.toBeVisible();
  await expect(task_2).not.toBeVisible();

  // task_2 is now selectable as task_3
  await expect(page.getByText("Third task failed successfully")).toBeVisible();
  await expect(task_3).toBeVisible();

  await expect(task_4).toBeVisible();
  await expect(task_5).toBeVisible();

  // edit the "second task again", try assigning with "enter"
  await task_3.dragTo(task_3, {
    sourcePosition: { x: 150, y: 0 },
    targetPosition: { x: 0, y: 0 },
  });
  await page.getByRole("dialog").getByRole("textbox").fill("Sixth task");
  await page.keyboard.press("Enter");

  await task_4.dragTo(task_4, {
    sourcePosition: { x: 150, y: 0 },
    targetPosition: { x: 0, y: 0 },
  });
  await page
    .getByRole("dialog")
    .getByRole("textbox")
    .fill("Updated 4th task to Seventh Task");
  await page.keyboard.press("Enter");

  await task_5.dragTo(task_5, {
    sourcePosition: { x: 0, y: 0 },
    targetPosition: { x: 150, y: 0 },
  });

  await expect(page.getByText("Sixth task")).toBeVisible();
  await expect(
    page.getByText("Updated 4th task to Seventh Task")
  ).toBeVisible();
  await expect(task_5).not.toBeVisible();
  await expect(task_4).not.toBeVisible();
});
