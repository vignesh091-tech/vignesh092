import{test} from '@playwright/test'
test(`to test windows handling `,async({page,context})=>{
await page.goto(`https://leafground.com/window.xhtml`);
const [newPage]=await Promise.all([context.waitForEvent('page'),page.locator(`button[id='j_idt88:new'] span[class='ui-button-text ui-c']`).click()
])
await newPage.waitForLoadState();
const newPageUrl= newPage.url();
console.log(newPageUrl)




});
// to check how many tabs opened 
test.only(` to check multiple tabs opened `,async({page,context})=>{
await page.goto(`https://leafground.com/window.xhtml`);
const [muliplePage]=await Promise.all([context.waitForEvent('page'),page.locator(`button[id='j_idt88:new'] span[class='ui-button-text ui-c']`).click()]);
const pages= context.pages();
console.log(`total number of tabs opened ${pages.length}`);
for(const [index,tab] of pages.entries()){
    console.log(`Tab${index+1}URL:${tab.url()}`);
    if(tab.url()===`https://leafground.com/window.xhtml`){
console.log(`this is the page need to work `);


    }



}






})