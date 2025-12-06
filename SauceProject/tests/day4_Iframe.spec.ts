import {test} from'@playwright/test'
import { log } from 'console';
test(`to test iframes`,async({page})=>{
await page.goto(`https://testpages.herokuapp.com/styled/iframes-test.html`);
const framesCount=page.frames();
console.log(framesCount.length);
for(const frameId of framesCount){

    const frameTitle = await frameId.textContent(`h1`);
    console.log(`frame title :${frameTitle}`)
    if (frameTitle===`frame title :iFrames Example`){
     const frame0= page.frameLocator(`iframe[src='frames/get-list?name=iFrame&list=60']`);
     const frameFound =await frame0.locator(`//li[@id='iframe0']`).textContent();
console.log(frameFound);

    }
}


})