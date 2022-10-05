const Page = require('./page')

class SearchResultsPage extends Page {
  get resultsBox () {
    return $('//div[@class="gsc-resultsbox-visible"]')
  }

  get searchResults () {
    return $$('//div[@class="gs-title"]//a')
  }
}

module.exports = new SearchResultsPage()
