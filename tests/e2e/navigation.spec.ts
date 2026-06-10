import { test, expect } from '@playwright/test';

test.describe('site navigation for users', () => {
  test('user can navigate to blog page', async ({page}) => {

    await page.goto('http://localhost:3000');

    await page.getByRole('link', {name: /blog/i}).click();

    await expect(page).toHaveURL(/.*blog/);

    await expect(
      page.getByRole('heading', {name: 'This is the blog page'})
    ).toBeVisible();
  })

  test('user can navigate to projects page', async({page}) => {
    await page.goto('http://localhost:3000');
    await page.getByRole('link', {name: /projects/i}).click();
    
    await expect(
      page.getByRole('heading', {name: 'Projects'})
    ).toBeVisible();
  })
})