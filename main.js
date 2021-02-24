let App = {
    init: function () {
        App.elements.cards = App.model.cards.map(game);
    },
    model: {
        cards: cards,
    },
    elements: {
        
    }
};
App.init();