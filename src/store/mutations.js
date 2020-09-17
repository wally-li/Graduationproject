export default{
  addToList(state,productList){
    const item = state.cartLists.find(item => item.iid == productList.iid)
    if(item)
    {
      item.count++;
    }
    else{
      productList.isChecked = true;
      productList.count = 1;
      state.cartLists.push(productList)
    }
  },
  addCount(state,payload){
    const obj = state.cartLists.find(item=>item.iid==payload);
    obj.count++
  },
  addListItem(state,payload){
    state.cartLists.push(payload);
  },
  changeChecked(state,payload)
  {
    state.cartLists[payload].isChecked = !state.cartLists[payload].isChecked;
  },
  selectAllOrNot(state,payload)
  {
    console.log(payload);
    for(let item of state.cartLists)
    {
      item.isChecked = payload;
    }
  }
}
