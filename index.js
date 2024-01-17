let menuItems = JSON.parse(localStorage.getItem("menuItems"))
    ? JSON.parse(localStorage.getItem("menuItems"))
    :[
        {
            name: "Chilli and salmon penne",
            image: "https://i.postimg.cc/brN1GG9M/salmon-chilli-pesto-penne.webp",
            description: "Fresh egg tubular pasta in a sauce made from red chilli and freshly-caught salmon.",
            ingredients: "tomato, onion, garlic, pasta, oregano, black pepper, chilli, salmon",
    
        },
        {
            name: "Lamb and aubergine skewers",
            image: "https://i.postimg.cc/PJ3Y1t6q/Lamb-and-aubergine-skewers.png",
            description: "Bamboo skewers loaded with minced lamb and fried aubergine",
            ingredients: "lamb, aubergine"
    
        },
        {
            name: "Mangetout and chicken kebab",
            image: "https://i.postimg.cc/LXVz6kLL/Mangetout-and-chicken-kebab.jpg",
            description: "Skewer-cooked fresh mangetout and corn-fed chicken served in warm pitta pockets.",
            ingredients: "onions, flour, yeast, water, salt, sugar, oil, mangetout, chicken"
    
        },
        {
            name: "Napolitana and spinach penne",
            image: "https://i.postimg.cc/hGTLNRGC/Napolitana-and-spinach-penne.jpg",
            description: "Fresh egg tubular pasta in a sauce made from napolitana and baby spinach.",
            ingredients: "tomato, onion, garlic, pasta, oregano, black pepper, napolitana, spinach"
    
        },
        {
            name: "Turkey and orange salad",
            image: "https://i.postimg.cc/x1WGs19J/Turkey-and-orange-salad.jpg",
            description: "Free-range turkey and naval orange served on a bed of lettuce",
            ingredients: "lettuce, turkey, orange"
    
        },
        {
            name: "Date and fennel yoghurt",
            image: "https://i.postimg.cc/sgz8dfnV/Date-and-fennel-yoghurt.jpg",
            description: "A rich yoghurt made with moist date and fresh fennel",
            ingredients: "soya milk, sugar, date, fennel"
    
        },
    ];
    
    console.log(menuItems); 

    function showItems(menuItems) {
        document.querySelector("#menuItems").innerHTML=""; 
        menuItems.forEach((menuItem, _i) => {
        // menuItems.forEach((menuItem, i) => {
            document.querySelector("#menuItems").innerHTML += `
            <div class="card">
            <img class="card-img-top" src=${menuItem.image} alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title text-dark"><em>${menuItem.name}</em></h5>
              <p class="card-text text-dark">${menuItem.description}</p>
            </div>
            <div class="card-footer">
              <small class="text-success">${menuItem.ingredients}</small>
            </div>
          </div>
          
          `;
        });
    };
    
    showItems(menuItems);
    localStorage.setItem("menuItems", JSON.stringify(menuItems));


