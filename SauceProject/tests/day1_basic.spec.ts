import {test} from '@playwright/test';
test(`To test Basic Search in amazon` ,async({page})=>{
await page.goto(`https://demo.automationtesting.in/AutoComplete.html`);
await page.locator('.ui-autocomplete-multiselect.ui-state-default.ui-widget input').fill(`india`);
await page.waitForSelector('.ui-menu-item',{state:'visible'});
const countries =   await page.locator(`.ui-menu-item`).all();
for(const suggestion of countries){
    const text = await suggestion.innerText();
if (text.trim()==="India"){
console.log(`text found `)


}
}



})