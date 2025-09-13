export const cart =[];

export function addProductTocart(productId){
    let matchingcartItem;

  cart.forEach((cartItem) =>{
    if(productId === cartItem.productId){
        matchingcartItem = cartItem;
    }
  })

  if(matchingcartItem){
      matchingcartItem.quantity = 2;
  }else{
    cart.push({
      productId: productId,
      quantity: 1
  });
  }
}