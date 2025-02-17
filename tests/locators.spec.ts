import { test, expect } from '@playwright/test';

test('locators', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  
//1. CSS selector 

// Select by attribute
await page.locator('css=[name="name"]').first().fill("Amit")  

// Select by Id
await page.locator('css=#exampleCheck1').check()

// Select by class
//await page.locator('css=.btn-success').click()

// await page.locator('css=button');  // Select by tag


// 2. Text Selector

//await page.locator('text=Submit').click()


// 3. XPath Selector

await page.locator('//input[@name="email"]').fill('hello@gmil.com')

// 4. Role Selector 

await page.getByRole('button', {name: 'Submit'}).click()

// 5. Test ID Selector

//await page.getByTestId('exampleInputPassword1').fill("1234")

// 6. Placeholder Selector

await page.getByPlaceholder("Password").fill('1234')

// 7. Label Selector 
 await page.getByLabel('Email')

 // 8. Alt Text Selector 

 //await page.getByAltText('logo')


});


test("Built-in Locators", async ({page}) => {
    
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  const logo =  await page.getByAltText("company-branding")
  await expect(logo).toBeVisible()

  await page.getByPlaceholder('Username').fill("Admin")
  await page.getByPlaceholder('Password').fill("admin123")

  await page.getByRole('button', { name: 'Login' }).click()

  await expect( page.getByText('First Name TEST Last Name TEST')).toBeVisible();



})