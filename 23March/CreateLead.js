

import { test } from '@playwright/test';

test("create lead", async ({ page }) => {

    
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('Demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator('text=CRM/SFA').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('#createLeadForm_companyName').fill('Software Company');
    await page.locator('#createLeadForm_firstName').fill('Prakash');
    await page.locator('#createLeadForm_lastName').fill('Seshadri');
    await page.locator('#createLeadForm_personalTitle').fill('Mr');
    await page.locator('#createLeadForm_generalProfTitle').fill('QA Testing');
    await page.locator('#createLeadForm_annualRevenue').fill('1200000');
    await page.locator('#createLeadForm_departmentName').fill('QA');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('123456789');
    await page.locator('.smallSubmit').click();
    
});
