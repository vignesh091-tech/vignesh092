import {test} from '@playwright/test';
import testData from '../tests/testData/login.json';
test.describe(`login Test`,()=>{
for (const data of testData){
test(`login for ${data.username}(${data.type}) `,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator("#username").fill(data.username);
await page.locator("#password").fill(data.password);
 await page .locator(".decorativeSubmit").click();
 if(data.type==="valid"){
    console.log(`Valid Login `)
 }
 else{

    console.log(`invalid login `)
 }




});
}
});
