const Page = require('./page')

class CloudHomePage extends Page {
  get searchInput () {
    return $('//input[@name="q"]')
  }

  open () {
    return super.open('https://cloud.google.com/')
  }
}

module.exports = new CloudHomePage()
