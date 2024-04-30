//write code to replace  paragraph with with content.txt
var content = require('content.json').content;
var obj = document.getElementById("content")

obj.insertAdjacentText("afterbegin", content);