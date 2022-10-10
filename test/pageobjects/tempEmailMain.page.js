
class TempEmailMainPage {
  get emailgenerator () {
    return $('//*[@id="listeliens"]/a[1]')
  }
}

module.exports = new TempEmailMainPage()
