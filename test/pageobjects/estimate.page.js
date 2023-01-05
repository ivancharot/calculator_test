
// selectors should be fixed
class Estimate {
  get vmClass () {
    return $('//*[@id="compute"]/md-list/md-list-item[4]/div')
  }

  get instanceType () {
    return $('//*[@id="compute"]/md-list/md-list-item[5]/div[1]')
  }

  get region () {
    return $('//*[@id="compute"]/md-list/md-list-item[1]/div')
  }

  get localSSD () {
    return $('//*[@id="compute"]/md-list/md-list-item[8]/div[1]')
  }

  get commitmentTerm () {
    return $('//*[@id="compute"]/md-list/md-list-item[3]/div')
  }

  get finalPrice () {
    return $('//*[@id="resultBlock"]//div[@class="cpc-cart-total"]//b')
  }

  get emailBtn () {
    return $('//*[@title="Email Estimate"]')
  }
}

module.exports = new Estimate()
