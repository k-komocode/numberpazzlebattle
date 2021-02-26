let panel1 = ["panel0","panel1","panel2","panel3","panel4","panel5","panel6","panel7","panel8"]
let panel2 = ["panela0","panela1","panela2","panela3","panela4","panela5","panela6","panela7","panela8"]


var sum1 = 0
var sumhelp1 = 0
var sum2 = 0
var sumhelp2 = 0
var flg1 = 0
var flg2 = 0
var flg3 = 0
var flg4 = new Boolean()


document.getElementById("stop").style.visibility = "hidden"
document.getElementById("nextid").style.visibility = "hidden"
document.getElementById("firldid").style.display="none"
document.getElementById("think").style.visibility = "hidden"


document.getElementById('nextpanel').innerHTML=5


function reset(){

  for (i = 0; i < panel1.length; i++){
    document.getElementById(panel1[i]).innerHTML=1+i;
    document.getElementById(panel2[i]).innerHTML=1+i;
  }
  document.getElementById('nextpanel').innerHTML=5
  document.getElementById("winner").innerHTML = ""
  document.getElementById('winner').innerHTML = 0
  document.getElementById("sum1").innerHTML = ""
  document.getElementById("sum2").innerHTML = ""
  document.getElementById("turn").style.visibility = "visible"
  flg2 = 0
  var gote = document.getElementById("gote") 
  var level2 = document.getElementById("level2")
  if(level2.checked){
    flg3 = 1
  }else if(level3.checked){
    flg3 = 2
  } 
  if(gote.checked){
     
    document.getElementById('winner').innerHTML = flg2
    document.getElementById("think").style.visibility = "visible"
    flg1 = 1
    var CPUattak = function(){
      if(flg3 == 0){
        CPU()
      }else if(flg3 == 1){
        CPU2()
      }else{
        CPU3()
      }
    }
    setTimeout(CPUattak, 500);
    flg1 = 0
    flg5 = true
    }
}
  
  sum1 = 0
  sumhelp1 = 0
 sum2 = 0
 sumhelp2 = 0
 flg1 = 0
 flg2 = 0
 flg3 = 0
 flg4 = new Boolean()
 flg5 = new Boolean()
 flg5 = true


function move(){
  if(document.getElementById("movecount").value == false){
    alert('合計手数を指定してください')
  }else{
    count = Number(document.getElementById("movecount").value)
    document.getElementById("rule").style.display="none"
    document.getElementById("firldid").style.display="block"
    document.getElementById("nextid").style.visibility = "visible"

    reset()
  }
}

function panelcaluclation(id,panel){        //押すパネルのidとその盤面を入力すると、
                                            //ネクストパネルに入る数字と押したパネル、盤面の結果が出力される。
                                            //いずれも今の盤面の状況を使って計算しているので、
                                            //2手以上先を読むことには使えない。
  if(flg5 == true){
    var panelnumber = id.replace(/[^0-9]/g, ''); //idから数字の要素だけ抜く。panelnumberは押したパネルの場所
  }
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
                        //[数値(数値),文字(id),[文字(id),文字(数値)]・・・・・・]
}
  
function panelcaluclation2(id,panel,banmen){        //こちらは2手以上先を読む用。banmenにその時の盤面を示す配列を入れる。

if(flg5 == true){
var panelnumber = id.replace(/[^0-9]/g, ''); //idから数字の要素だけ抜く。panelnumberは押したパネルの場所
}
var subpanel = []       //パネルの表示している要素を入れる配列(この時点では空)
var de = []             //パネルidそのものを入れる配列
var returnmatrix = []
if([1,3,4].includes(Number(panelnumber))){                //panel0を推したときに反応する奴
subpanel.push(banmen[0])
de.push(panel[0])

}
if([0,2,3,4,5].includes(Number(panelnumber))){            //panel1を推したときに反応する奴
subpanel.push(banmen[1])
de.push(panel[1])

}
if([1,4,5].includes(Number(panelnumber))){                //panel2を推したときに反応する奴
subpanel.push(banmen[2])
de.push(panel[2])

}
if([0,1,4,6,7].includes(Number(panelnumber))){            //panel3を推したときに反応する奴
subpanel.push(banmen[3])
de.push(panel[3])

}
if([0,1,2,3,5,6,7,8].includes(Number(panelnumber))){      //panel4を推したときに反応する奴
subpanel.push(banmen[4])
de.push(panel[4])

}
if([1,2,4,7,8,].includes(Number(panelnumber))){           //panel5を推したときに反応する奴
subpanel.push(banmen[5])
de.push(panel[5])

}
if([3,4,7].includes(Number(panelnumber))){                //panel6を推したときに反応する奴
subpanel.push(banmen[6])
de.push(panel[6])

}
if([3,4,5,6,8].includes(Number(panelnumber))){            //panel7を推したときに反応する奴
subpanel.push(banmen[7])
de.push(panel[7])

}
if([4,5,7].includes(Number(panelnumber))){                //panel8を推したときに反応する奴
subpanel.push(banmen[8])
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
//[数値(数値),文字(id),[文字(id),文字(数値)]・・・・・・]
}

    
//caluculation関数でリターンしなきゃいけない物。
//１、どのパネルにどんな数値が入ったか。
//２、押したパネルの数値そのもの(nextpanelに保存するため)
//３、押したパネルが何なのか(押したパネルの指定にidが必要だから)
//４


function CPU(){                         //最も自分の合計値が高くなる手を採用する。
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
  for(l=0; l < panel2.length ;l++){ //パネルの数だけ続けるfor文
    
   var supposedlist = panelcaluclation(panel2[l],panel2)    //それぞれのパネルを押した場合に対して、一回計算する
   var supposednextnumber = supposedlist.shift()   //nextnumberをここで取り除く。
                                                    //その数字はプレイヤーの手番に影響するだけなのでここでは使わない。

   var supposedpanelnumber = supposedlist.shift()  //この数字は今調べているパネルのidなので、使わない
   let delist = []                   //deのリスト。則ちパネルのidのリスト
   let subpanellist = []             //サブパネルのリスト。則ち計算結果のリスト
   let subpanellistkeep = []         //合計値を出すときに破壊的な操作をするので、サブパネルリストをこっちでキープ
   
   for(i=0; i < supposedlist.length ;i++){//次の計算で条件分岐するために使うリストを生成するためのfor文
     delist.push(supposedlist[i][0])            //[[de[0],subpanel[0]]・・・・・・]であるので、ここでidを保存してる
     subpanellist.push(supposedlist[i][1])
     subpanellistkeep.push(supposedlist[i][1])
   }
   var supposedsum = 0
   for(i=0; i < panel2.length ;i++){  //パネルの計算が終わるまで続けるfor文。この部分で各パネルを押した場合の合計数値を見る
       if(delist.includes(panel2[i])){
         supposedsum = supposedsum + Number(subpanellist.shift())
       } else if (panel2[i] == panel2[l]){
         supposedsum = supposedsum +  Number(document.getElementById("nextpanel").innerHTML)    //押したパネルはネクストパネルの数値になる
       }else {
         supposedsum = supposedsum + Number(document.getElementById(panel2[i]).innerHTML)
       }

    }
    
     if(best < supposedsum){ //最高値がsupposedsumならそっちをbestにする。

       best = supposedsum 
       bestdelist = delist
       bestsubpanellist = subpanellistkeep
       bestid = panel2[l]

     }else if(best == supposedsum){//同値だったら時刻によってランダムに結果を変えよう。
       var sec = now.getSeconds()
       if(sec % 2 == 1){
         best = supposedsum
         bestdelist = delist
         bestsubpanellist = subpanellistkeep
         bestid = panel2[l]
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
    document.getElementById(bestid).innerHTML=Number(document.getElementById("nextpanel").innerHTML);
    document.getElementById('nextpanel').innerHTML = nextnumber
   
    flg2 = flg2 + 1 
    document.getElementById('winner').innerHTML = flg2

    document.getElementById("think").style.visibility = "hidden"
    hantei()   

}

function CPU2(){              //プレイヤーより常に自分の合計値のが高くなるような手を積極的に採用する
  var now = new Date();

  //全てのボタンにおいて押した場合のパターンを考え、
  //その中で最も合計値が高いものを採用する。
  //panela0 から順番に行い、勝ち残り方式で最良を決定する。

  //用意する数字
  //計算結果を保存し、勝ち残っている物と比べるための変数
  //勝った数や結果をストックする変数。
  var CPUbest = 0
  var CPUsemibest = 0
  var PLAbest = 0
  let CPUbestdelist = []
  let CPUsemibestdelist = []

  let CPUbestsubpanellist = []
  let CPUsemibestsubpanellist = []


  var CPUbestid = ''
  var CPUsemibestid = ''
  
  for(l=0; l < panel1.length ;l++){ //パネルの数だけ続けるfor文
   var PLAsupposedlist = panelcaluclation(panel1[l],panel1)    //それぞれのパネルを押した場合に対して、一回計算する
   var supposednextnumber = PLAsupposedlist.shift()   //nextnumberをここで取り除く。
                                                    //その数字はプレイヤーの手番に影響するだけなのでここでは使わない。

   var PLAsupposedpanelnumber = Number(PLAsupposedlist.shift())  //この数字は今調べているパネルに入る数字なので、合計値を出すときに使う
   let PLAdelist = []                   //deのリスト。則ちパネルのidのリスト
   let PLAsubpanellist = []             //サブパネルのリスト。則ち計算結果のリスト
   let PLAsubpanellistkeep = []         //合計値を出すときに破壊的な操作をするので、サブパネルリストをこっちでキープ
   
   for(i=0; i < PLAsupposedlist.length ;i++){//次の計算で条件分岐するために使うリストを生成するためのfor文
     PLAdelist.push(PLAsupposedlist[i][0])            //[[de[0],subpanel[0]]・・・・・・]であるので、ここでidを保存してる
     PLAsubpanellist.push(PLAsupposedlist[i][1])
     PLAsubpanellistkeep.push(PLAsupposedlist[i][1])
   }
   var PLAsupposedsum = 0
   for(i=0; i < panel1.length ;i++){  //パネルの計算が終わるまで続けるfor文
       if(PLAdelist.includes(panel1[i])){
         PLAsupposedsum = PLAsupposedsum + Number(PLAsubpanellist.shift())
       } else if (panel1[i] == panel1[l]){
         PLAsupposedsum = PLAsupposedsum + 0                //ここはこれから考えるCPU手で変わるので、今のところは0を足す。
       }else {
         PLAsupposedsum = PLAsupposedsum + Number(document.getElementById(panel1[i]).innerHTML)
       }

    }
    
     if(PLAbest < PLAsupposedsum){ //最高値がsupposedsumならそっちをbestにする。

       PLAbest = PLAsupposedsum 
     }else{
       //もっとも合計値が高いのはbestなので今現在特に変化なし。
     }
  }

  for(l=0; l < panel2.length ;l++){ //パネルの数だけ続けるfor文
    var CPUsupposedlist = panelcaluclation(panel2[l],panel2)    //それぞれのパネルを押した場合に対して、一回計算する
    var supposednextnumber = CPUsupposedlist.shift()   //nextnumberをここで取り除く。
                                                     //その数字はプレイヤーの手番に影響するだけなのでここでは使わない。
 
    var CPUsupposedpanelnumber = CPUsupposedlist.shift()  
    let CPUdelist = []                   //deのリスト。則ちパネルのidのリスト
    let CPUsubpanellist = []             //サブパネルのリスト。則ち計算結果のリスト
    let CPUsubpanellistkeep = []         //合計値を出すときに破壊的な操作をするので、サブパネルリストをこっちでキープ
    
    for(i=0; i < CPUsupposedlist.length ;i++){//次の計算で条件分岐するために使うリストを生成するためのfor文
      CPUdelist.push(CPUsupposedlist[i][0])            //[[de[0],subpanel[0]]・・・・・・]であるので、ここでidを保存してる
      CPUsubpanellist.push(CPUsupposedlist[i][1])
      CPUsubpanellistkeep.push(CPUsupposedlist[i][1])
    }
    var CPUsupposedsum = 0
    for(i=0; i < panel2.length ;i++){  //パネルの計算が終わるまで続けるfor文
        if(CPUdelist.includes(panel2[i])){
          CPUsupposedsum = CPUsupposedsum + Number(CPUsubpanellist.shift())
        } else if (panel2[i] == panel2[l]){
          CPUsupposedsum = CPUsupposedsum + Number(document.getElementById("nextpanel").innerHTML) 
        }else {
          CPUsupposedsum = CPUsupposedsum + Number(document.getElementById(panel2[i]).innerHTML)
        }
 
     }

     if(CPUsupposedsum > Number(document.getElementById(panel2[l]).innerHTML)+PLAbest){
      if(CPUbest < CPUsupposedsum){ //最高値がsupposedsumならそっちをbestにする。
 
        CPUbest = CPUsupposedsum 
        CPUbestdelist = CPUdelist
        CPUbestsubpanellist = CPUsubpanellistkeep
        CPUbestid = panel2[l]
 
      }else if(CPUbest == CPUsupposedsum){//同値だったら時刻によってランダムに結果を変えよう。
        var sec = now.getSeconds()
        if(sec % 2 == 1){
          CPUbest = CPUsupposedsum
          CPUbestdelist = CPUdelist
          CPUbestsubpanellist = CPUsubpanellistkeep
          CPUbestid = panel2[l]
        }
 
      }else{
        //もっとも合計値が高いのはbestなので今現在特に変化なし。
      }
 
     }

     
      if(CPUsemibest < CPUsupposedsum){ //最高値がsupposedsumならそっちをbestにする。
 
        CPUsemibest = CPUsupposedsum 
        CPUsemibestdelist = CPUdelist
        CPUsemibestsubpanellist = CPUsubpanellistkeep
        CPUsemibestid = panel2[l]
 
      }else if(CPUbest == CPUsupposedsum){//同値だったら時刻によってランダムに結果を変えよう。
        var sec = now.getSeconds()
        if(sec % 2 == 1){
          CPUsemibest = CPUsupposedsum
          CPUsemibestdelist = CPUdelist
          CPUsemibestsubpanellist = CPUsubpanellistkeep
          CPUsemibestid = panel2[l]
        }
 
      }else{
        //もっとも合計値が高いのはbestなので今現在特に変化なし。
      }


    if(CPUsemibestsubpanellist.length == false){
      CPUbest = CPUsemibest
      CPUbestdelist = CPUsemibestdelist
      CPUbestsubpanellist = CPUsemibestsubpanellist
      CPUbestid = CPUsemibestid
    }
    var nextnumber = Number(document.getElementById(CPUbestid).innerHTML)
    
    for (i=0; i < bestdelist.length ;i++){
      document.getElementById(CPUbestdelist[i]).innerHTML= CPUbestsubpanellist[i]
      }
      //document.getElementById("debug").innerHTML = 'ここまでは動いたで'
      //上の行に'ここまで動いた'入れると表示されない。
    document.getElementById(CPUbestid).innerHTML=Number(document.getElementById("nextpanel").innerHTML)
    document.getElementById('nextpanel').innerHTML = nextnumber
   
    flg2 = flg2 + 1 
    document.getElementById('winner').innerHTML = flg2

    document.getElementById("think").style.visibility = "hidden"
    hantei()   
  }
}

function CPU3(){                        //二手先を読んで最も合計値が大きくなる手を採用する。
  var now = new Date();
  

  var best = 0
  let bestdelist = []
  let bestsubpanellist = []
  var bestid = ''
  for(l=0; l < panel2.length ;l++){ //パネルの数だけ続けるfor文
    
   var supposedlist = panelcaluclation(panel2[l],panel2)    //それぞれのパネルを押した場合に対して、一回計算する
   var supposednextnumber = supposedlist.shift()   //nextnumberをここで取り除く。
                                                    //その数字はプレイヤーの手番に影響するだけなのでここでは使わない。

   var supposedpanelnumber = supposedlist.shift()  //この数字は今調べているパネルのidなので、使わない
   let delist = []                   //deのリスト。則ちパネルのidのリスト

   let subpanellist = []             //サブパネルのリスト。則ち計算結果のリスト
   let subpanellist2 = []             //サブパネルのリスト。則ち計算結果のリスト
   let subpanellistkeep = []         //合計値を出すときに破壊的な操作をするので、サブパネルリストをこっちでキープ
   
   for(i=0; i < supposedlist.length ;i++){//次の計算で条件分岐するために使うリストを生成するためのfor文
     delist.push(supposedlist[i][0])            //[[de[0],subpanel[0]]・・・・・・]であるので、ここでidを保存してる
     subpanellist.push(supposedlist[i][1])
     subpanellistkeep.push(supposedlist[i][1])
   }
   let banmen = []
   for(i=0; i < panel2.length ;i++){  //パネルの計算が終わるまで続けるfor文。この部分で各パネルを押した場合の合計数値を見る
      if(delist.includes(panel2[i])){
      banmen.push(Number(subpanellist.shift()))
      } else if (panel2[i] == panel2[l]){
        banmen.push(Number(document.getElementById("nextpanel").innerHTML))    //押したパネルはネクストパネルの数値になる
      }else {
      banmen.push(Number(document.getElementById(panel2[i]).innerHTML))
      }

    }

   for (o=0; o < panel2.length ;o++){  
   var supposedlist2 = panelcaluclation2(panel2[o],panel2,banmen)

    for(i=0; i < supposedlist2.length ;i++){
       
    subpanellist2.push(supposedlist2[i][1])
    }
    var supposedsum = 0
    for(i=0; i < panel2.length ;i++){  //パネルの計算が終わるまで続けるfor文。この部分で各パネルを押した場合の合計数値を見る
        if(delist.includes(panel2[i])){
          supposedsum = supposedsum + Number(subpanellist2.shift())
        } else if (panel2[i] == panel2[o]){
          supposedsum = supposedsum +  0
        }else {
          supposedsum = supposedsum + Number(banmen[i])
        }
 
     }
      if(best < supposedsum){ //最高値がsupposedsumならそっちをbestにする。
        best = supposedsum 
        bestdelist = delist
        bestsubpanellist = subpanellistkeep
        bestid = panel2[l]
      }else if(best == supposedsum){//同値だったら時刻によってランダムに結果を変えよう。
        var sec = now.getSeconds()
        if(sec % 2 == 1){
          best = supposedsum
          bestdelist = delist
          bestsubpanellist = subpanellistkeep
          bestid = panel2[l]
        }
      }else{
        //もっとも合計値が高いのはbestなので今現在特に変化なし。
      }
   }
  }
  
    var nextnumber = Number(document.getElementById(bestid).innerHTML)
    
    for (i=0; i < bestdelist.length ;i++){
      document.getElementById(bestdelist[i]).innerHTML= bestsubpanellist[i]
      }
      //document.getElementById("debug").innerHTML = 'ここまでは動いたで'
      //上の行に'ここまで動いた'入れると表示されない。
    document.getElementById(bestid).innerHTML=Number(document.getElementById("nextpanel").innerHTML);
    document.getElementById('nextpanel').innerHTML = nextnumber
   
    flg2 = flg2 + 1 
    document.getElementById('winner').innerHTML = flg2

    document.getElementById("think").style.visibility = "hidden"
    hantei()   

}


  function hantei(){
    if(flg2/2 == count){  
      for (l=0; l < panel.length ;l++){

       sumhelp1 = Number(document.getElementById(panel1[l]).innerHTML)
       sum1 = sum1 + sumhelp1
       sumhelp2 = Number(document.getElementById(panel2[l]).innerHTML)
       sum2 = sum2 + sumhelp2
      }
      document.getElementById("turn").style.visibility = "hidden"

       document.getElementById("sum1").innerHTML = "合計"+sum1
       document.getElementById("sum2").innerHTML = "合計"+sum2
       if (sum1 > sum2){
         document.getElementById("winner").innerHTML = "<p>左の勝ちです</p>"
       }else if (sum1 < sum2){
         document.getElementById("winner").innerHTML = "<p>右の勝ちです</p>"
       }else{
         document.getElementById("winner").innerHTML = "<p>同点です</p>"
       }
      flg5 = false
       
     }
  }



  function pushed(id){
    let pushpanel = document.getElementById(id);
    if ((pushpanel.parentNode.getAttribute('id') == "bodydiv") && (flg1 == 0)){
      panel = panel1
      flg4 = true
      document.getElementById("stop").style.visibility = "hidden"
    }else {
      document.getElementById("stop").style.visibility = "visible"
      flg4 = false
    }
    if (flg4 == true){
      let result = panelcaluclation(id,panel1)
      nextnumber = result.shift()           //次にネクストパネルに入る数字
      panelnumber = result.shift()          //押したパネルのid数
      //ここから下のfor文は計算結果を指定したパネルへ入れるもの。
     for (i=0; i < result.length ;i++){
      document.getElementById(result[i][0]).innerHTML= result[i][1]   //panelのidに直接代入したかったが押したパネルによって
                                                              //影響するパネルは変わり、かつそれらは不連続なので
                                                              //for文でかけなかった。
                                                              //de[]という配列に、その時その時に影響するpanelのidを入れ、
                                                              //それらを使ってfor文で結果を代入していく。
      
       }
      document.getElementById(panel1[Number(panelnumber)]).innerHTML=Number(document.getElementById("nextpanel").innerHTML);
      document.getElementById('nextpanel').innerHTML = nextnumber
      
     
      flg2 = flg2 + 1 
      document.getElementById('winner').innerHTML = flg2

      document.getElementById("think").style.visibility = "visible"
      flg1 = 1
      
      if (flg2/2 != count){
        var CPUattak = function(){
          if(flg3 == 0){
            CPU()
          }else if(flg3 == 1){
            CPU2()
          }else{
            CPU3()
          }
        }
        setTimeout(CPUattak, 500);
      }
     //ここから下は終了後の勝敗判定
     //いちいち押すごとにトリガーするのもかったるいが、やはり常に作動させる方法が思いつかなかった。


    }
    flg1 = 0
    hantei()
  }


  




