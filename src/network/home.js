import {request} from "./request";
export  function homeGetMultiData()
{
  return  request({
    url:"home/multidata"
  });
}
export function homeGetGoodsData(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}
