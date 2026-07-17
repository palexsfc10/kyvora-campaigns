import { expect, test } from "@playwright/test";

test("home landing renders and preserves UTMs on CTA", async ({ page }) => {
  await page.goto("/?utm_source=meta&utm_campaign=test&utm_content=hero_a&fbclid=xyz");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  const cta = page.getByRole("link", { name: /Criar conta grátis/i }).first();
  await expect(cta).toBeVisible();
  await expect(cta).toHaveAttribute("href", /utm_source=meta/);
  await expect(cta).toHaveAttribute("href", /utm_campaign=test/);
  await expect(cta).toHaveAttribute("href", /fbclid=xyz/);
  await expect(cta).toHaveAttribute("href", /ref=lp/);
  await expect(cta).toHaveAttribute("href", /app\.kyvoraapp\.com\.br/);
});

test("english locale renders", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    /team|organized|Know|Less chasing/i,
  );
  await expect(page.getByRole("link", { name: /Create free account/i }).first()).toBeVisible();
});

test("spanish locale renders", async ({ page }) => {
  await page.goto("/es");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    /equipo|organizado|Sabe|Menos insistir/i,
  );
  await expect(page.getByRole("link", { name: /Crear cuenta gratis/i }).first()).toBeVisible();
});

test("faq opens", async ({ page }) => {
  await page.goto("/");
  const item = page.locator("details").first();
  await item.locator("summary").click();
  await expect(item).toHaveAttribute("open", "");
});

test("page has single h1 and no horizontal overflow on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  const hasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
  });
  expect(hasOverflow).toBe(false);
});
