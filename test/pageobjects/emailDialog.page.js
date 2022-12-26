
class EmailDialog {
  get dialogContainer () {
    return $('//*[@name="emailForm"]')
  }

  get emailInput () {
    return $('//*[@type="email"]')
    // return this.dialogContainer.$('input')
  }

  get sendEmailBtn () {
    return this.dialogContainer.$('button=Send Email')
  }
}

module.exports = new EmailDialog()
