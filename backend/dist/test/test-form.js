import { Builder, By } from "selenium-webdriver";
export async function testForm(url, formDataArray, formSubmitBtn) {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(url);
        for (const formData of formDataArray) {
            const inputElement = await driver.findElement(By.xpath(formData.selector));
            await inputElement.sendKeys(formData.value);
        }
        const submitBtn = await driver.findElement(By.xpath(formSubmitBtn.selector));
        submitBtn.click();
    }
    catch (error) {
        console.error(`Error filling form element:`, error);
    }
}
//# sourceMappingURL=test-form.js.map