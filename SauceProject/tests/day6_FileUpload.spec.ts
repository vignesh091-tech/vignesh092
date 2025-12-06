import{test} from '@playwright/test'
import path from 'path';
test(`to test windows handling `,async({page,context})=>{
await page.goto(`https://leafground.com/file.xhtml`);
const fileInput= page.locator(`//input[@type='file']`).nth(0);
await fileInput.click();
await fileInput.setInputFiles("tests/testData/uploads/vignesh.txt");
  

})