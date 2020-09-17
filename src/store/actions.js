export default{
  addToList(context,productList){
    return new Promise((resolve,reject)=>{
      const item = context.state.cartLists.find(item => item.iid == productList.iid)
      if(item)
      {
        context.commit("addCount",item.iid);
        resolve("商品数量加1");
      }
      else{
        productList.isChecked = true;
        productList.count = 1;
        // state.cartLists.push(productList)
        context.commit("addListItem",productList);
        resolve("成功将该商品添加到购物车");
      }
    })

}
}
