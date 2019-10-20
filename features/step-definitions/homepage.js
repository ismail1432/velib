module.exports = function () {

    this.When(/^I access to url "([^"]*)"$/, function (url) {

        return helpers.loadPage(url).then(function () {

            // use a method on the page object which also returns a promise
            return page.homepage.checkTitleIsLoaded();
        });
    });


    //I should see "V-Liberty !" in class "homeTitle"
    this.Then(/^I should see a title "([^"]*)"$/, function (expected) {

        return helpers.getElementsContainingText(page.homepage.cssTitle, expected).then(function (result) {

            expect(result.length).to.not.equal(0);
        });
    });

    //I can see a Map
    this.Then(/^I can see a Map$/, function () {

        return page.homepage.mapIsDisplayed();
    });

};
