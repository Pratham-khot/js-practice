//this type is used in adding shopping cart items price to make it total..

const myNums=[1,2,3]

// 

const myTotal=myNums.reduce((acc,curval)=>acc+curval,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    }
]

const pricetoPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(pricetoPay);
