class Chatbot{
    public static chatContent:any;
    public containerRef:any;
    private static objectName:any;
    private chat={
        welcomeMsg:"Hi I am your personal assistant",
        sendOfMsg:"Thanks for your feedback",
        redirectMsg:"Chat with our agent",
        redirectLink:""
};
    constructor({
        content,container,objectName}:{content:any,container:any,objectName:string},
        chat:{welcomeMsg?:string,sendOfMsg?:string,redirectMsg?:string,redirectLink?:string}
        ){
        Chatbot.chatContent=content;
        Chatbot.objectName=objectName;
        this.chat={...this.chat,...chat};
        this.containerRef=container;
        this.containerRef.style.position="relative";
    }

    initialise(){
        let x=document.createElement("li");
        let y=document.createTextNode(this.chat.welcomeMsg)
        x.appendChild(y);
        x.setAttribute("class","initial");
        this.containerRef.appendChild(x);
        this.bot(Chatbot.chatContent);
    };

    bot(messageContent:any){
        let con="";
        let keys=Object.keys(messageContent);
        if (typeof(messageContent)==typeof({})){
        keys.forEach((i) => {
            con+=`<li onclick='(()=>{${Chatbot.objectName}.reciever("${i}"),${Chatbot.objectName}.bot(${JSON.stringify(messageContent[i])})})()' class='botchat'>${i}</li>`;
            
        });
        let x=document.createElement("div");
       x.setAttribute("class","bot");
        x.innerHTML=con;
        this.containerRef.appendChild(x);
        }
        else{
            this.reciever(`'${messageContent}'`);
            let x=document.createElement("div");
            x.setAttribute("class","bot");
            x.innerHTML=`<li class="botchat">Does this clarify your doubt?</li><br><li class="botchat" onclick='(()=>{${Chatbot.objectName}.reciever("yes");${Chatbot.objectName}.feedback()})()'>yes</li><li class="botchat" onclick='(()=>{${Chatbot.objectName}.reciever("no");${Chatbot.objectName}.finalise()})()'>no</li>`;
            this.containerRef.appendChild(x);
        }
    
    };
    reciever(recieverChat:any){
        let x=document.createElement("div");
        x.setAttribute("class","client");
        x.innerHTML=`<li class="clientchat">${recieverChat}</li>`;
        this.containerRef.appendChild(x);
    };
    finalise(){
        let x=document.createElement("div");
        x.setAttribute("class","bot");
        x.innerHTML=`<li class='botchat' onclick='(()=>{${Chatbot.objectName}.reciever("RESTART"),${Chatbot.objectName}.initialise()})()'>Restart</li><li class='botchat' onClick="agent()"><a href="${this.chat.redirectLink}">${this.chat.redirectMsg}</a></li>`;
        this.containerRef.appendChild(x);
    };
    feedback(){
        let x=document.createElement("b");
        x.setAttribute("class","final");
        let y=document.createTextNode(this.chat.sendOfMsg);
        x.appendChild(y);
        this.containerRef.appendChild(x);
    }; 
};