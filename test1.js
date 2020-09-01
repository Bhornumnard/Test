//  สร้าง function ด้วยภาษาที่ถนัดจัดลำดับของ player ตาม score และใส่ rank ให้ตามลำดับเรียงจาก score มากสุด

player = [
    {'Name':'A', 'score': 50},
    {'Name':'B', 'score': 60},
    {'Name':'C', 'score': 85},
    {'Name':'D', 'score': 80},
    {'Name':'E', 'score': 90}
]

rank = ['Gold', 'Silver', 'Bronze']

//  ผลลัพธ์
// [
//      {'Name': 'E', 'score': 90, 'rank': 'Gold'}, 
//      {'Name': 'C', 'score': 85, 'rank': 'Silver'}, 
//      {'Name': 'D', 'score': 80, 'rank': 'Bronze'},      
//      {'Name': 'B', 'score': 60, 'rank': '-'}, 
//     {'Name': 'A', 'score': 50, 'rank': '-'}
//  ]

function raking (player) {
    player.sort((a,b) => b.score - a.score)
    player = player.map(obj => {
        if(obj.score >= 90 && obj.score ) {
            return {...obj, rank: "Gold"}
        } else if (obj.score >= 85 ){
            return {...obj, rank : "Silver"}
        }else if (obj.score >= 80){
            return {...obj, rank: "Bronze"}
        } else { 
            return {...obj, rank : "-"}
        }
    })
    return player
}
console.log(raking(player))