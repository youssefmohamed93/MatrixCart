const cartProduct = [
    {
        id: 0,
        image: "Images/Laptop.svg",
        title: "ASUS FHD Gaming Laptop",
        price: 500,
    },
    {
        id: 1,
        image: "Images/Keyboard.svg",
        title: "AK-900 Wired Keyboard",
        price: 80,
    },
    {
        id: 2,
        image: "Images/Monitor.svg",
        title: "IPS LCD Gaming Monitor",
        price: 220,
    },
    {
        id: 3,
        image: "Images/Cam.svg",
        title: "CANON DSLR Camera",
        price: 220,
    },
];

const cartCategories = [
    ...new Set(cartProduct.map((cartItem) => {
        {return cartItem} }))
];
let i = 0;

document.getElementById("root").innerHTML = cartCategories.map((cartItem) => {
    var {image,title,price} = cartItem;
    return (
        `<div class="cart-box">
            <div class="cart-img">
                <img class="images" src="${image}"></img>
            </div>
            <div class="bottom">
            <p>${title}</p>
            <h2>$${price}.00</h2>
        `
        + "<button onclick='addToCart("+(i++)+")'>Add To Cart </button>" +
        `</div>
        </div>`
    );
}).join("");

var cart =[];
function addToCart(a) {
    cart.push({...cartCategories[a]});
    displayCart();
};

function delElement(a) {
    cart.splice(a,1);
    displayCart();
};

function displayCart(a) {
    let j =0; total = 0;

    document.getElementById("count").innerHTML = cart.length;

    if(cart.length == 0) {
        document.getElementById("cartItem").innerHTML = "Your Cart Is Empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) =>
         {
            var {image,title,price} = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ "+ total +".00";
            return (
                `<div class="cart-item">
                <div class="row-img">
                    <img class="rowing" src=${image}>
                </div>
                <p style="font-size: 12px;">${title}</p>
                <h2 style="font-size: 15px;">$${price}.00</h2>` + 
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join("");
    }
};