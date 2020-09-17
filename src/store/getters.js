export default{
  shopCount(state){
    return state.cartLists.length
  },
  totalPrice(state){
    console.log(state.cartLists.filter(item=>item.isChecked));
    return state.cartLists.filter(item=>item.isChecked).reduce((previousValue,item)=>item.count*item.newPrice+previousValue,0);
  }
}
