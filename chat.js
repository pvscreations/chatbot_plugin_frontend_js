var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Chatbot = /** @class */ (function () {
    function Chatbot(_a, chat) {
        var content = _a.content, container = _a.container, objectName = _a.objectName;
        this.chat = {
            welcomeMsg: "Hi I am your personal assistant",
            sendOfMsg: "Thanks for your feedback",
            redirectMsg: "Chat with our agent",
            redirectLink: ""
        };
        Chatbot.chatContent = content;
        Chatbot.objectName = objectName;
        this.chat = __assign(__assign({}, this.chat), chat);
        console.log(chat);
        this.containerRef = container;
    }
    Chatbot.prototype.initialise = function () {
        var x = document.createElement("li");
        var y = document.createTextNode(this.chat.welcomeMsg);
        x.appendChild(y);
        x.setAttribute("class", "initial");
        this.containerRef.appendChild(x);
        this.bot(Chatbot.chatContent);
    };
    ;
    Chatbot.prototype.bot = function (messageContent) {
        var con = "";
        var keys = Object.keys(messageContent);
        if (typeof (messageContent) == typeof ({})) {
            keys.forEach(function (i) {
                con += "<li onclick='(()=>{".concat(Chatbot.objectName, ".reciever(\"").concat(i, "\"),").concat(Chatbot.objectName, ".bot(").concat(JSON.stringify(messageContent[i]), ")})()' class='botchat'>").concat(i, "</li>");
            });
            var x = document.createElement("div");
            x.setAttribute("class", "bot");
            x.innerHTML = con;
            this.containerRef.appendChild(x);
            // console.log(con)
        }
        else {
            this.reciever("'".concat(messageContent, "'"));
            var x = document.createElement("div");
            x.setAttribute("class", "bot");
            x.innerHTML = "<li class=\"botchat\">Does this clarify your doubt?</li><br><li class=\"botchat\" onclick='(()=>{".concat(Chatbot.objectName, ".reciever(\"yes\");").concat(Chatbot.objectName, ".feedback()})()'>yes</li><li class=\"botchat\" onclick='(()=>{").concat(Chatbot.objectName, ".reciever(\"no\");").concat(Chatbot.objectName, ".finalise()})()'>no</li>");
            this.containerRef.appendChild(x);
        }
    };
    ;
    Chatbot.prototype.reciever = function (recieverChat) {
        var x = document.createElement("div");
        x.setAttribute("class", "client");
        x.innerHTML = "<li class=\"clientchat\">".concat(recieverChat, "</li>");
        this.containerRef.appendChild(x);
    };
    ;
    Chatbot.prototype.finalise = function () {
        var x = document.createElement("div");
        x.setAttribute("class", "bot");
        x.innerHTML = "<li class='botchat' onclick='(()=>{".concat(Chatbot.objectName, ".reciever(\"RESTART\"),").concat(Chatbot.objectName, ".initial(").concat(JSON.stringify(Chatbot.chatContent), ")})()'>Restart</li><li class='botchat' onClick=\"agent()\"><a href=\"").concat(this.chat.redirectLink, "\">").concat(this.chat.redirectMsg, "</a></li>");
        this.containerRef.appendChild(x);
    };
    ;
    Chatbot.prototype.feedback = function () {
        var x = document.createElement("b");
        x.setAttribute("class", "final");
        var y = document.createTextNode(this.chat.sendOfMsg);
        x.appendChild(y);
        this.containerRef.appendChild(x);
    };
    ;
    return Chatbot;
}());
;
