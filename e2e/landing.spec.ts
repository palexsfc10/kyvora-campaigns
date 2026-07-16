import { expect, test } from "@playwright/test";

test("home landing renders and preserves UTMs on CTA", async ({ page }) => {
  await page.goto("/?utm_source=meta&utm_campaign=test&utm_content=hero_a&fbclid=xyz");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: /Criar meu time grátis/i }).first()).toBeVisible();

  const href = await page
    .getByRole("link", { name: /Criar meu time grátis/i })
    .first()
    .getAttribute("href");

  expect(href).toContain("https://app.kyvoraapp.com.br");
  expect(href).toContain("utm_source=meta");
  expect(href).toContain("utm_campaign=test");
  expect(href).toContain("fbclid=xyz");
  expect(href).toContain("ref=lp");
});

test("english locale renders", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/team|Organize|Know/i);
  await expect(page.getByRole("link", { name: /Create my team free/i }).first()).toBeVisible();
});

test("faq opens", async ({ page }) => {
  await page.goto("/");
  const item = page.locator("details").first();
  await item.locator("summary").click();
  await expect(item).toHaveAttribute("open", "");
});
