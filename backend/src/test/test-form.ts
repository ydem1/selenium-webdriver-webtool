import { Builder, By } from "selenium-webdriver";
import { Input } from "../types/input.js";

export async function testForm(url: string, formDataArray: Input[], formSubmitBtn: Input) {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(url);

    for (const formData of formDataArray) {
      const inputElement = await driver.findElement(By.xpath(formData.selector));

      await inputElement.sendKeys(formData.value);
    }

    const submitBtn = await driver.findElement(By.xpath(formSubmitBtn.selector));

    submitBtn.click();

  } catch (error) {
    console.error(`Error filling form element:`, error);
  }
}
