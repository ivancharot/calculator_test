
class MailBoxPage {
  get statusMessage () {
    return $('//*[@id="message"]')
  }

  get mail () {
    return $('//*[@id="mail"]')
  }

  get priceInMail () {
    return $('//*[@id="mail"]/div/div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[2]/h3')
  }

  async waitForMail () {
    if (await this.statusMessage.isDisplayed()) {
      // eslint-disable-next-line wdio/no-pause
      await browser.pause(500)
      await browser.refresh()
      await this.waitForMail()
    } else return this
  }

  async getPriceFromMail () {
    const frame = await $('//*[@id="ifmail"]')
    await browser.switchToFrame(frame)
    return await this.priceInMail.getText()
  }
}

module.exports = new MailBoxPage()
