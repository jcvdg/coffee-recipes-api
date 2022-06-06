// from https://www.onlyfoods.net/types-of-coffee.html
const express = require('express');
const app = express();

const coffee = [
    { 
      "id": 1,
      "name": "espresso", 
      "region": "Italian",
      "description" : "One of the basic types of coffees, a short black (alternately called) is made using a single shot, while the doppio or double has two espressos in a single cup. In spite of having higher caffeine per unit volume, the overall content is less compared to regular coffee, since the serving size is smaller.",
      "cup-size": {
          "cup": "espresso cup",
          "amount": "2 to 4 oz"
      },
      "ingredient-ratio": {
          "espresso shot":"1 or 2",
          "water": "1 to 2 oz"
      },
      "served": "hot"
    },
    { 
        "id": 2,
        "name": "caffè americano", 
        "region": "Italian",
        "description" : "Espresso diluted with hot water gives rise to this coffee, with the strength varying by the quantity of water and the number of espresso shots (single or double) added. The popular belief has it that during World War II, American soldiers would prepare such kind of drinks to help their beverage last for a longer span. Iced Americano, the chilled variation, involves the addition of cold water to the espresso.",
        "cup-size": {
            "cup": "Demitasse cups",
            "amount": "12 oz"
        },
        "ingredient-ratio": {
            "espresso shot":"1",
            "water": "3 oz"
        },
        "served": "hot"
    },
    { 
        "id": 3,
        "name": "latte", 
        "region": "Italian",
        "description" : "Café Latte, translating to milk coffee, is prepared from espresso and steamed or foam milk. The addition of milk gives it a sweet taste, thus making it a perfect introductory drink. Flavoring syrups are often added to intensify its sweetness. Variations of latte include substituting the coffee with other drink bases like matcha, rooibos, turmeric, or mate tea.  Almond or soy milk could also serve as replacements for the whole milk. The iced latte is a variation, most famous in the United States, with chilled milk and espresso poured upon the ice, and syrups or sugar used for flavoring.",
        "cup-size": {
            "cup": "Mixing glass",
            "amount": "14 oz"
        },
        "ingredient-ratio": {
            "espresso shot":"1",
            "steamed milk": "8 to 10 oz",
            "foam": "1 cm"
        },
        "served": "hot"
    }, 
    { 
        "id": 4,
        "name": "cappuccino", 
        "region": "Italian",
        "description" : "One of the best and popular varieties of coffee, Cappuccino has similar ingredients to latte, the main difference being that the milk used here is not so steamed, thus making it appear less foamy. Baristas and coffee bars where this drink tops their menu chart, often add garnishes of chocolate shavings or powder on top. Cappuccino Freddo is the cold variation popularized in Greece and Cyprus, topped with foam prepared by frothing cold milk. Other beverages that bear similarity to cappuccino are cortado, flat white, and caffe macchiato.",
        "cup-size": {
            "cup": "Cappuccino mug",
            "amount": "6 to 8 oz"
        },
        "ingredient-ratio": {
            "espresso shot":"1",
            "steamed milk": "2 oz",
            "foam": "2 oz"
        },
        "served": "hot"
    },  
    { 
        "id": 5,
        "name": "flat white", 
        "region": "Australian",
        "description" : "The flat white has espresso and microfoam (steamed milk with small bubbles and a glossy texture) as its primary ingredients. This beverage was said to have originated in Australia during the mid-1980s in Sydney’s Moors Espresso Bar. New Zealand also claims of inventing this coffee in Auckland around the same time. The upper layer of the flat white is brown, with a thick, velvety texture. Its popularity spread worldwide and has become famous in the United States and the United Kingdom, being an addition to Star buck’s menu.",
        "cup-size": {
            "cup": "Glass tumbler or flat ceramic cup with saucer",
            "amount": "6 oz"
        },
        "ingredient-ratio": {
            "espresso shot":"1",
            "steamed milk": "4 oz",
        },
        "served": "hot and cold"
    },  
];

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

// GET and returns a JSON object
app.get('/api/coffee', (req, res) => {
    res.json(coffee);
});

app.get('/api/coffee/:name', (req, res) => {
    const name = req.params.name.toLowerCase(); 
    const entry = coffee.find( entry => entry.name === name);
    console.log(entry, name)
    if(entry) {
        res.json(entry);
    } else {
        res.status(404).end();
    }
});


const PORT = 8000;
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})