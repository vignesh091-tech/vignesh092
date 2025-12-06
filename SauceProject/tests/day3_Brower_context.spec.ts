import {test,Browser,chromium} from '@playwright/test'
test(`to test browser context`,async()=>{
const browser=await chromium.launch();
const context1 = await browser.newContext();
const page1=await context1.newPage();
await page1.goto(`https://www.google.com/`);

const context2= await browser.newContext();
const page2=await context2.newPage();
await page2.goto(`https://www.amazon.com/`);




})