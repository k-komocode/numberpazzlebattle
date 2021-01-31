let panel1 = ["panel0","panel1","panel2","panel3","panel4","panel5","panel6","panel7","panel8"]
let panel2 = ["panela0","panela1","panela2","panela3","panela4","panela5","panela6","panela7","panela8"]

var sum1 = 0
var sumhelp1 = 0
var sum2 = 0
var sumhelp2 = 0
var flg2 = 0
var flg3 = 0
var flg4 = 0

/*for (i = 0; i < panel.length; i++){
    document.getElementById(panel[i]).innerHTML=1;
}*/
document.getElementById("stop").style.visibility = "hidden"
document.getElementById("firldid").style.visibility = "hidden"

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
  document.getElementById('nextpanel').innerHTML=0
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
  return returnmatrix
}
  


    
//caluculation関数でリターンしなきゃいけない物。
//１、どのパネルにどんな数値が入ったか。
//２、押したパネルの数値そのもの(nextpanelに保存するため)
//３、押したパネルが何なのか(押したパネルの指定にidが必要だから)
//４、





  function pushed(id){
    let pushpanel = document.getElementById(id);
    if ((pushpanel.parentNode.getAttribute('id') == "bodydiv2") && (flg3 != 2)){
      panel = panel2
      flg3 = 2
      flg4 = 1
      document.getElementById("stop").style.visibility = "hidden"
    }else if ((pushpanel.parentNode.getAttribute('id') == "bodydiv") && (flg3 != 1)){
      panel = panel1
      flg3 = 1
      flg4 = 1
      document.getElementById("stop").style.visibility = "hidden"
    }else {
      document.getElementById("stop").style.visibility = "visible"
      flg4 = 0
    }
    if (flg4 == 1){
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
      document.getElementById(panel[panelnumber]).innerHTML=Number(document.getElementById("nextpanel").innerHTML);//押したパネルはに
      document.getElementById('nextpanel').innerHTML = nextnumber
      
     
      flg2 = flg2 + 1 
      document.getElementById('winner').innerHTML = flg2
     //ここから下は終了後の勝敗判定
     //いちいち押すごとにトリガーするのもかったるいが、やはり常に作動させる方法が思いつかなかった。
     if(flg2 == count){  
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






