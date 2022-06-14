// 데코레이터는 뭘까요?

function qqq(aaaaaaa:any){
  console.log("=================")
  console.log(aaaaaaa)
  console.log("=================")
}

// 데코레이터 qqq를 사용
@qqq
class Product {}