
var count = 0;//切り替え確認用のあたい　なくてもOK
var isFirst = true;

var dispByChar = function(){
  console.log("fonc dbc loaded")
  message.start("result",count + "this is message! if click -> all" + "  ");
  count++;
  isFirst = true
}

window.onload = function(){
  dispByChar();
}

var message = {
  oneChar : function(){
    document.getElementById(this.outID).innerHTML = this.text.substr(0, this.count);
    this.count++;
    if (this.count <= this.text.length) setTimeout("message.oneChar()", 100);
    else message.subChar();
  },
  allChar : function(){
    console.log("allChar kmaked")
    document.getElementById(message.outID).innerHTML = message.text;
    message.count = message.text.length;
    message.subChar();
  },
  subChar : function(){　//クリック用のaタグを出力する関数作った
    console.log("subChar leaded")
    this.a_tag = "<a onclick='dispByChar()'><u> ▽ </u></a>"
    document.getElementById(message.outID).innerHTML += message.a_tag;
    message.count = message.a_tag.length;
  },
  start : function(oID, str){
    console.log("start maked")
    this.text = str;
    this.count = 0;
    this.outID = oID;
    document.getElementById(this.outID).onclick = function(){
      console.log(isFirst)
      if(isFirst)
        isFirst = false
      else
        message.allChar();
    }
    setTimeout("message.oneChar()", 100);
  }
}
