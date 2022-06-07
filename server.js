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