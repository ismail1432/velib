module.exports = {
    cssMap: by.css('div.leaflet-container'),
    cssTitle: '.homeTitle',
    elements: {
        title: by.css('h1.homeTitle')
    },

    checkTitleIsLoaded: function () {
        return driver.wait(until.elementsLocated(page.homepage.elements.title), 10000).then(function () {
            return driver.findElements(page.homepage.elements.title);
        })
            .then(function (elements) {
                expect(elements.length).to.not.equal(0);
            });
    },

    mapIsDisplayed: function () {

        return driver.findElements(page.homepage.cssMap).then(function (elements) {
            expect(elements.length).to.not.equal(0);
        });

    }
};
