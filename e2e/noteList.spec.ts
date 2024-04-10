import { test, expect } from "@playwright/test";

test("CRUD operations", async ({ page }) => {
  await page.goto("http://localhost:8080/");

  await expect(page).toHaveTitle(/rock-do/);

  // can add using enter

  // click note input
  // type first task
  // press enter

  // can add using button

  // click note input
  // type second task
  // click add note

  // reset button only cleans inputs
  // click note input
  // type third task
  // click add note

  // find only two tasks

  // edit second task
  // delete first task

  // only second task remains with the text "third task failed successfully"
  // clear button deletes everything
});
