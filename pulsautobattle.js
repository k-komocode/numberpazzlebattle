let panel1 = ["panel0","panel1","panel2","panel3","panel4","panel5","panel6","panel7","panel8"]
let panel2 = ["panela0","panela1","panela2","panela3","panela4","panela5","panela6","panela7","panela8"]
let panel = []

var sum1 = 0
var sumhelp1 = 0
var sum2 = 0
var sumhelp2 = 0
var flg2 = 0

var flg4 = new Boolean()

/*for (i = 0; i < panel.length; i++){
    document.getElementById(panel[i]).innerHTML=1;
}*/
document.getElementById("stop").style.visibility = "hidden"
document.getElementById("firldid").style.visibility = "hidden"
document.getElementById("thinkingtime").style.visibility = "hidden"

//下は初期値
document.getElementById(panel1[0]).innerHTML=1
document.getElementById(panel1[1]).innerHTML=2
document.getElementById(panel1[2]).innerHTML=3
document.getElementById(panel1[3]).innerHTML=4
document.getElementById(panel1[4]).innerHTML=5
document.getElementById(panel1[5]).innerHTML=6
document.getElementById(panel1[6]).innerHTML=7
document.getElementById(panel1[7]).innerHTML=8
document.getElementById(panel1[8]).innerHTML=9
document.getElementById(panel2[0]).innerHTML=1
document.getElementById(panel2[1]).innerHTML=2
document.getElementById(panel2[2]).innerHTML=3
document.getElementById(panel2[3]).innerHTML=4
document.getElementById(panel2[4]).innerHTML=5
document.getElementById(panel2[5]).innerHTML=6
document.getElementById(panel2[6]).innerHTML=7
document.getElementById(panel2[7]).innerHTML=8
document.getElementById(panel2[8]).innerHTML=9
document.getElementById('nextpanel').innerHTML=5
var div = document.getElementById('thinkingtimeplayer');
var mo = new MutationObserver(function() {
  CPU()
});
var config = {
  childList: true,
};
mo.observe(div, config);

function reset(){
  document.getElementById(panel1[0]).innerHTML=1
  document.getElementById(panel1[1]).innerHTML=2
  document.getElementById(panel1[2]).innerHTML=3
  document.getElementById(panel1[3]).innerHTML=4
  document.getElementById(panel1[4]).innerHTML=5
  document.getElementById(panel1[5]).innerHTML=6
  document.getElementById(panel1[6]).innerHTML=7
  document.getElementById(panel1[7]).innerHTML=8
  document.getElementById(panel1[8]).innerHTML=9
  document.getElementById(panel2[0]).innerHTML=1
  document.getElementById(panel2[1]).innerHTML=2
  document.getElementById(panel2[2]).innerHTML=3
  document.getElementById(panel2[3]).innerHTML=4
  document.getElementById(panel2[4]).innerHTML=5
  document.getElementById(panel2[5]).innerHTML=6
  document.getElementById(panel2[6]).innerHTML=7
  document.getElementById(panel2[7]).innerHTML=8
  document.getElementById(panel2[8]).innerHTML=9
  document.getElementById('nextpanel').innerHTML=5
  document.getElementById("winner").innerHTML = ""
  document.getElementById('winner').innerHTML = 0
  sum1 = 0
  sumhelp1 = 0
 sum2 = 0
 sumhelp2 = 0
 flg2 = 0
 flg3 = 0
 flg4 = 0
}

function move(){
    count = Number(document.getElementById("movecount").value)
    document.getElementById("firldid").style.visibility = "visible"
    reset()
}

function panelcaluclation(id){
  var panelnumber = id.replace(/[^0-9]/g, ''); //idから数字の要素だけ抜く。panelnumberは押したパネルの場所
  var subpanel = []       //パネルの表示している要素を入れる配列(この時点では空)
  var de = []             //パネルidそのものを入れる配列
  var returnmatrix = []
  if([1,3,4].includes(Number(panelnumber))){                //panel0を推したときに反応する奴
    subpanel.push(document.getElementById(panel[0]).innerHTML)
    de.push(panel[0])
    
  }
  if([0,2,3,4,5].includes(Number(panelnumber))){            //panel1を推したときに反応する奴
    subpanel.push(document.getElementById(panel[1]).innerHTML)
    de.push(panel[1])
    
 }
 if([1,4,5].includes(Number(panelnumber))){                //panel2を推したときに反応する奴
    subpanel.push(document.getElementById(panel[2]).innerHTML)
    de.push(panel[2])
  
  }
  if([0,1,4,6,7].includes(Number(panelnumber))){            //panel3を推したときに反応する奴
    subpanel.push(document.getElementById(panel[3]).innerHTML)
    de.push(panel[3])
  
  }
  if([0,1,2,3,5,6,7,8].includes(Number(panelnumber))){      //panel4を推したときに反応する奴
    subpanel.push(document.getElementById(panel[4]).innerHTML)
    de.push(panel[4])
  
  }
  if([1,2,4,7,8,].includes(Number(panelnumber))){           //panel5を推したときに反応する奴
    subpanel.push(document.getElementById(panel[5]).innerHTML)
    de.push(panel[5])
  
  }
  if([3,4,7].includes(Number(panelnumber))){                //panel6を推したときに反応する奴
    subpanel.push(document.getElementById(panel[6]).innerHTML)
    de.push(panel[6])
  
  }
  if([3,4,5,6,8].includes(Number(panelnumber))){            //panel7を推したときに反応する奴
    subpanel.push(document.getElementById(panel[7]).innerHTML)
    de.push(panel[7])
  
  }
  if([4,5,7].includes(Number(panelnumber))){                //panel8を推したときに反応する奴
    subpanel.push(document.getElementById(panel[8]).innerHTML)
    de.push(panel[8])
  
  }
  const nextNumber = Number(document.getElementById(panel[panelnumber]).innerHTML) //押したパネルの数値を保存
  for (i=0; i < subpanel.length ;i++){
     var ab = Number(subpanel[i])+ nextNumber 
     ab = String(ab)
     subpanel[i] = ab.substring(ab.length-1)//ab.lengthはabの長さ。二桁なら2になる。
                                            //substringは前の変数(この場合はab)を文字列に変え、
                                            //かつそのn番目以降を返す関数
  }
  returnmatrix = [nextNumber,panelnumber]
  for (i=0; i < subpanel.length ;i++){
    returnmatrix.push([de[i],[subpanel[i]]])
  }
  return returnmatrix   //[nextNumber,panelnumber,[de[0],subpanel[0]]・・・・・・]
                        //下はリターンされる要素の型
                        //[数値,文字,[文字,文字]・・・・・・]
}
  


    
//caluculation関数でリターンしなきゃいけない物。
//１、どのパネルにどんな数値が入ったか。
//２、押したパネルの数値そのもの(nextpanelに保存するため)
//３、押したパネルが何なのか(押したパネルの指定にidが必要だから)
//４


function CPU(){
  var now = new Date();
  
  //相手の答えがすぐ表示されても具合が悪い。
  //考え中の文字をhtmlに出すために時間を測る。



  //全てのボタンにおいて押した場合のパターンを考え、
  //その中で最も合計値が高いものを採用する。
  //panela0 から順番に行い、勝ち残り方式で最良を決定する。

  //用意する数字
  //計算結果を保存し、勝ち残っている物と比べるための変数
  //勝った数や結果をストックする変数。
  var best = 0
  let bestdelist = []
  let bestsubpanellist = []
  var bestid = ''
  panel = panel2
  for(l=0; l < panel2.length ;l++){ //パネルの数だけ続けるfor文
   var supposedlist = panelcaluclation(panel[l])
   var supposednextnumber = supposedlist.shift()   //この数字はプレイヤーの手番に影響するだけなのでここでは使わない。
   var supposedpanelnumber = Number(supposedlist.shift())  //この数字は今調べているパネルに入る数字なので、合計値を出すときに使う
   let delist = []                   //deのリスト。則ちパネルのidのリスト
   let subpanellist = []             //サブパネルのリスト。則ち計算結果のリスト
   let subpanellistkeep = []         //合計値を出すときに破壊的な操作をするので、サブパネルリストをこっちでキープ
   
   for(i=0; i < supposedlist.length ;i++){//次の計算で条件分岐するために使うリストを生成するためのfor文
     delist.push(supposedlist[i][0])
     subpanellist.push(supposedlist[i][1])
     subpanellistkeep.push(supposedlist[i][1])
   }
   var supposedsum = 0
   for(i=0; i < supposedlist.length ;i++){  //パネルの計算が終わるまで続けるfor文
       if(delist.includes(panel2[i])){
         supposedsum = supposedsum + Number(subpanellist.shift())
       } else if (panel[l] == panel2[i]){
         supposedsum = supposedsum + supposedpanelnumber 
       }else {
         supposedsum = supposedsum + Number(document.getElementById(panel2[i]).innerHTML)
       }

    }
    
     if(best < supposedsum){ //最高値がsupposedsumならそっちをbestにする。

       best = supposedsum 
       bestdelist = delist
       bestsubpanellist = subpanellistkeep
       bestid = panel[l]

     }else if(best == supposedsum){//同値だったら時刻によってランダムに結果を変えよう。
       var sec = now.getSeconds()
       if(sec % 2 == 1){
         best = supposedsum
         bestdelist = delist
         bestsubpanellist = subpanellistkeep
         bestid = panel[l]
       }

     }else{
       //もっとも合計値が高いのはbestなので今現在特に変化なし。
     }
  }
  
    var nextnumber = Number(document.getElementById(bestid).innerHTML)
    
    for (i=0; i < bestdelist.length ;i++){
      document.getElementById(bestdelist[i]).innerHTML= bestsubpanellist[i]
      }
      //document.getElementById("debug").innerHTML = 'ここまでは動いたで'
      //上の行に'ここまで動いた'入れると表示されない。
    document.getElementById(bestid).innerHTML=Number(document.getElementById("nextpanel").innerHTML);//押したパネルはに
    document.getElementById('nextpanel').innerHTML = nextnumber
   
    flg2 = flg2 + 1 
    document.getElementById('winner').innerHTML = flg2
  while(new Date() < new Date(now.getTime() + 500)){

  }
  document.getElementById("thinkingtime").style.visibility = "hidden"
    
    
}




  function pushed(id){
    let pushpanel = document.getElementById(id);
    if (pushpanel.parentNode.getAttribute('id') == "bodydiv"){
      panel = panel1
      flg4 = true
      document.getElementById("stop").style.visibility = "hidden"
    }else {
      document.getElementById("stop").style.visibility = "visible"
      flg4 = false
    }
    if (flg4 == true){
      let result = panelcaluclation(id)
      nextnumber = result.shift()
      panelnumber = result.shift()
      //ここから下のfor文は計算結果を指定したパネルへ入れるもの。
     for (i=0; i < result.length ;i++){
      document.getElementById(result[i][0]).innerHTML= result[i][1]   //panelのidに直接代入したかったが押したパネルによって
                                                              //影響するパネルは変わり、かつそれらは不連続なので
                                                              //for文でかけなかった。
                                                              //de[]という配列に、その時その時に影響するpanelのidを入れ、
                                                              //それらを使ってfor文で結果を代入していく。
      
       }
      document.getElementById(panel1[Number(panelnumber)]).innerHTML=Number(document.getElementById("nextpanel").innerHTML);//押したパネルはに
      document.getElementById('nextpanel').innerHTML = nextnumber
      
     
      flg2 = flg2 + 1 
      document.getElementById('winner').innerHTML = flg2
      document.getElementById("thinkingtime").style.visibility = "visible"
      document.getElementById("thinkingtimeplayer").innerHTML = Number(document.getElementById("thinkingtimeplayer").innerHTML) + 1
     //ここから下は終了後の勝敗判定
     //いちいち押すごとにトリガーするのもかったるいが、やはり常に作動させる方法が思いつかなかった。
     if(flg2/2 == count){  
       for (l=0; l < panel.length ;l++){

        sumhelp1 = Number(document.getElementById(panel1[l]).innerHTML)
        sum1 = sum1 + sumhelp1
        sumhelp2 = Number(document.getElementById(panel2[l]).innerHTML)
        sum2 = sum2 + sumhelp2
       }

        document.getElementById("sum1").innerHTML = sum1
        document.getElementById("sum2").innerHTML = sum2
        if (sum1 > sum2){
          document.getElementById("winner").innerHTML = "<p>左の勝ちです</p>"
        }else if (sum1 < sum2){
          document.getElementById("winner").innerHTML = "<p>右の勝ちです</p>"
        }else{
          document.getElementById("winner").innerHTML = "<p>同点です</p>"
        }
      }
    }
    
  }


  




