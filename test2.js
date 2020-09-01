//  สร้าง function ด้วยภาษาที่ถนัดหาชื่อของ key ใน obj ด้านล่างที่มี value เป็น 'value5'

obj = { 
    "key1": 
    {
        "key2" : "value1",
        "key3" : "value2",
        "key4" : 
        {
            "key5": "value5"
        }
    }
}

function findKey(value){

    for(let object in obj){
        if(value === obj[object]) return object
       else {
           if(typeof obj[object] === "object"){
               const nestedObj = obj[object]
               for (let object in nestedObj){
                   if( nestedObj[object] === value) return object
                   else{
                       if(typeof nestedObj[object] === "object"){
                          const nestedNestedObj = nestedObj[object]
                          for(let object in nestedNestedObj){
                              if(nestedNestedObj[object] === value) return object
                          }
                       }
                   }
               } 
           }

       }
    }

}
console.log(findKey('value5'))

//  result
//  'key5'