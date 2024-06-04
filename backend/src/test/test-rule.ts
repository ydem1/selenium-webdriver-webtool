import { Builder, By } from "selenium-webdriver";
import { Rule } from "../types/rule.js";
export async function testRule(url: string, data: Rule) {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.manage().window().maximize();

    await driver.get(url);

    for (const element of data) {
      try {
        const inputElement = await driver.findElement(By.xpath(element.selector));

        if (element.value !== undefined) {
          await inputElement.sendKeys(element.value);
        } else {
          inputElement.click();
        }

        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (error) {
        console.error(`Error filling form element:`, error);
        throw new Error(`Error filling form element with selector ${element.selector}: ${error.message}`);
      }
    }

  } catch (error) {
    console.error('Error in testRule:', error);
    throw new Error(error);
  }
}
