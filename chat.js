a={
    "attendance issues": {
        "teacher": "database is down currently",
        "app": {
            "hanging": "requirements are 4gb",
            "report issues": {
                "on service": "database is down currently",
                "on help": "database is down currently"
            }
        },
        "other": "database is down currently"
    },
    "want to know my attendance?": {
        "yearly": "database is down currently",
        "monthly": "database is down currently",
        "todays": "database is down currently",
        "other": "database is down currently"
    },
    "raise complaint?": {
        "on faculty": "database is down currently",
        "on ams_app": "database is down currently",
        "other": "database is down currently"
    },
    "want to give feedback on app?": "database is down currently",
};
content=document.getElementById("chat");
initial(a);
function initial(a){
    x=document.createElement("li");
    y=document.createTextNode("hi i am your personal assistant")
    x.appendChild(y);
    x.setAttribute("class","initial");
    content.appendChild(x);
    bot(a);


}

function terminal(){
    x=document.createElement("div");
    x.setAttribute("class","bot");
    x.innerHTML=`<li class='botchat' onclick='(()=>{reciever("RESTART"),initial(${JSON.stringify(a)})})()'>Restart</li><li class='botchat' onClick="agent()">chat with agent</li>`;
    content.appendChild(x);
}
function bot(a){
   
    con="";
    keys=Object.keys(a);
    if (typeof(a)==typeof({})){
    keys.forEach((i) => {
        con+=`<li onclick='(()=>{reciever("${i}"),bot(${JSON.stringify(a[i])})})()' class='botchat'>${i}</li>`;
        
    });
    x=document.createElement("div");
   x.setAttribute("class","bot");
    x.innerHTML=con;
    content.appendChild(x);
    // console.log(con)
    }
    else{
        reciever(`'${a}'`);
        x=document.createElement("div");
        x.setAttribute("class","bot");
        x.innerHTML=`<li class="botchat">Does this clarify your doubt?</li><br><li class="botchat" onclick='(()=>{reciever("yes");feedback()})()'>yes</li><li class="botchat" onclick='(()=>{reciever("no");terminal()})()'>no</li>`;
        content.appendChild(x);
    }



}
function feedback(){
    x=document.createElement("b");
    x.setAttribute("class","final");
    y=document.createTextNode("Thanks for your interest");
    x.appendChild(y);
    content.appendChild(x);
}
function reciever(i){
    x=document.createElement("div");
    x.setAttribute("class","client");
    x.innerHTML=`<li class="clientchat">${i}</li>`;
    content.appendChild(x);

}
