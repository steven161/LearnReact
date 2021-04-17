const foods = [
    {
        id: 1,
        calories: 78,
        isFavorite: false,
        imagePath : require('../assets/hamberger.png'),
        name: 'Hamburger',
        description: 'Chicken patty hamburger',
        price: 15.99,
    },
    {
        id: 2,
        calories: 78,
        isFavorite: true,
        imagePath : require('../assets/tacos.png'),
        name: 'Hot Tacos',
        description: 'Mexican tortilla & tacos',
        price: 10.99,
    },
    {
        id: 3,
        calories: 66,
        isFavorite: true,
        imagePath : require('../assets/sandwich.png'),
        name: 'Wrap Sandwich',
        description: 'Grilled vegetables sandwich',
        price: 10.99,
    },


];

export default foods;