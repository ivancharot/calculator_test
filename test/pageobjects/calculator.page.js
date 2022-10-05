
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
    return $('//span[contains(text(),"GPU type")]/ancestor::md-select')
  }

  get GPUtypeOptions () {
    return $$('//*[@id="select_container_464"]//md-option')
  }

  get GPUnumberInput () {
    return $('//*[@id="select_value_label_462"]')
  }

  get GPUnumberOptions () {
    return $$('//*[@id="select_container_466"]//md-option')
  }

  get localSSDInput () {
    return $('//*[@id="select_value_label_419"]')
  }

  get localSSDOptions () {
    return $$('//*[@id="select_container_421"]//md-option')
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
    await this[`${element}Options`].forEach(el => el.waitForDisplayed())
    const options = await this[`${element}Options`].map(el => el.getText())
    await this[`${element}Options`][options.findIndex(el => el === value)].click()
    await this[`${element}Options`].forEach(el => el.waitForDisplayed({ reverse: true }))
    return this
  }
}

module.exports = new CalculatorPage()
