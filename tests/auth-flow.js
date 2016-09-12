  module.exports = {
  'get to login page': (browser) => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('.navbar', 2000)
      .click('a[href="#/login"]')

    browser.assert.urlContains('login')
  },

  'logging in': (browser) => {
    browser
      // set the input email to a valid email
      .setValue('input[type=email]', 'ari@fullstack.io')
      // submit the form
      .click('input[type=submit]')
      // wait for the page to load
      .waitForElementVisible('.navbar', 1000)
      // Get the text of the h1 tag
      .getText('.content h1', function(comp) {
        this.assert.equal(comp.value, 'Welcome home!')
      })

    browser.assert.urlContains(`${browser.launchUrl}/`)
  },
  //
  'logging out': (browser) => {
    browser
      .click('a[href="#/logout"]')
      .waitForElementVisible('.content button', 1000)
      .click('button')
      .waitForElementVisible('h1', 1000)
      .getText('h1', function(res) {
        this.assert.equal(res.value, 'Welcome home!')
      })
      .waitForElementVisible('a[href="#/login"]', 1000)
  },

  'close': (browser) => browser.end()
}
