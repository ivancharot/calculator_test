const Page = require('./page')

class CloudHomePage extends Page {
  open () {
    return super.open('https://cloud.google.com/')
  }
}

module.exports = new CloudHomePage()
