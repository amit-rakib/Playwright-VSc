import test from "@playwright/test";


test('get all the links', async({page})=>{

 await page.goto("https://www.demoblaze.com/")

 // to get WebElements 
 const links = await page.$$("a");

 for(const link of links){
    const linkText = await link.textContent();
    console.log(linkText)
 }

})

test("Get all product title", async ({page}) => {
    await page.goto("https://www.demoblaze.com/")

    await page.waitForSelector(".hrefch")
    const elements = await page.$$(".hrefch"); 
    const n = elements.length
    console.log(`Product length: ${n}`)
    for(const name of elements) {
         const productName = await name.textContent()
         console.log(productName)
    }
})


test("Click all links and get titles", async ({ page, browser }) => {
    await page.goto("https://www.demoblaze.com/");
    
    // Get all links
    const links = await page.$$("a");
    const n = links.length;

    console.log(`Total links found: ${n}`);

    for (let i = 1; i < n; i++) {
        const link = links[i];

        // Get the href attribute
        const href = await link.getAttribute("href");
        
        if (href) {  // Ensure href exists
            const newPage = await browser.newPage(); // Open a new tab
            await newPage.goto(href.startsWith("http") ? href : `https://www.demoblaze.com/${href}`);
            
            // Get title
            const title = await newPage.title();
            console.log(`Title of ${href}: ${title}`);

            await newPage.close(); // Close the tab after getting the title
        } else{
            const brokenLink = link.textContent()
            console.log(`Broken link ${brokenLink}`)
        }
    }
});
