import { test, expect } from "@playwright/test";

test.describe("site navigation for users", () => {
  
  // projects page 
  test("user can navigate to projects page", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.getByRole("link", { name: /projects/i }).click();

    await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
  });

  test("does the sidebar navigation work", async ({ page }) => {
    await page.goto("http://localhost:3000/projects/fitrquest");

    const sections = ["overview", "challenges", "improvements", "screenshots"];

    for (const section of sections) {
      await page.getByRole("link", { name: new RegExp(section, "i") }).click();

      await expect(page).toHaveURL(new RegExp(`#${section}$`));

      await expect(page.locator(`#${section}`)).toBeInViewport();
    }
  });

  test("project page displays headings", async ({ page }) => {
    await page.goto("http://localhost:3000/projects/fitrquest");

    await expect(
      page.getByRole("heading", { name: /What I learnt/i }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: /Future Improvements/i }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: /UX\/UI/i }),
    ).toBeVisible();
  });

  // blogs page 
    test("user can navigate to blog detail page", async ({ page }) => {
    await page.goto("http://localhost:3000/blog/powerautomate");
    await page.getByRole("link", { name: /blog/i }).click();

    await expect(page).toHaveURL(/.*blog/);

    await expect(
      page.getByRole("heading", { name: "Power Automate" }),
    ).toBeVisible();
  });
});
