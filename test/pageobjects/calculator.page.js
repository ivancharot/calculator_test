
const Page = require('./page')

class CalculatorPage extends Page {
  get calculatorFrame () {
    return $('//*[@id="cloud-site"]/devsite-iframe/iframe')
  }

  get chapterItems () {
    return $$('<md-tab-item />')
  }

  get numberOfInstancesInput () {
    return $('//*[@id="input_90"]')
  }

  get seriesInput () {
    return $('//*[@id="select_115"]')
  }

  get seriesOptions () {
    return $$('//*[@id="select_container_116"]//md-option')
  }

  get machineTypeInput () {
    return $('//*[@id="select_117"]')
  }

  get machineTypeOptions () {
    return $$('//*[@id="select_container_118"]//md-option')
  }

  get addGPUCheckbox () {
    return $('//*[contains(text(),"Add GPUs.")]')
  }

  get GPUtypeInput () {
    return $('.//span[text()="GPU type"]/ancestor::md-select')
  }

  get GPUtypeOptions () {
    return $$('//*[contains(text(),"NVIDIA Tesla")]/ancestor::md-option')
  }

  get GPUnumberInput () {
    return $('//label[text()="Number of GPUs"]/following-sibling::md-select')
  }

  get GPUnumberOptions () {
    return $$('//*[@class="md-select-menu-container md-active md-clickable"]//md-content//md-option')
  }

  get localSSDInput () {
    return $('(//*[@placeholder="Local SSD"])[1]')
  }

  get localSSDOptions () {
    return $$('//*[@class="md-select-menu-container md-active md-clickable"]//md-content//md-option')
  }

  get dataCenterLocationInput () {
    return $('//*[@id="select_value_label_88"]')
  }

  get dataCenterLocationOptions () {
    return $$('//*[@id="select_container_124"]//md-option')
  }

  get committedUsageInput () {
    return $('//*[@id="select_value_label_89"]')
  }

  get committedUsageOptions () {
    return $$('//*[@id="select_container_131"]//md-option')
  }

  get addToEstimateButton () {
    return $('.//*[@name="ComputeEngineForm"]//button[contains(text(),"Add to Estimate")]')
  }

  get opt () {
    return $$('//*[@class="md-select-menu-container md-active md-clickable"]//md-content//md-option')
  }

  async calcInit () {
    await this.calculatorFrame.waitForDisplayed()
    await browser.switchToFrame(0)
    await browser.switchToFrame(0)
    return this
  }

  async setNumberOfInstances (number) {
    await this.numberOfInstancesInput.click()
    await this.numberOfInstancesInput.keys(number)
    return this
  }

  async clickAddGPUCheckbox () {
    await this.addGPUCheckbox.click()
    await this.GPUtypeInput.waitForDisplayed()
    return this
  }

  async setOptionsInTo (element, value) {
    await this[`${element}Input`].click()
    // eslint-disable-next-line wdio/no-pause
    await browser.pause(100)
    const options = await this[`${element}Options`].map(el => el.getText())
    await this[`${element}Options`][options.findIndex(el => el === value)].click()
    return this
  }
}

module.exports = new CalculatorPage()
