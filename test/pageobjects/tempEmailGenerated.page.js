
class GeneratedEmailPage {
  get copyEmailBtn () {
    return $('//*[@id="cprnd"]')
  }

  get checkEmailBtn () {
    return $('.//span[text()="Проверить почту"]/ancestor::button')
  }
}

module.exports = new GeneratedEmailPage()
