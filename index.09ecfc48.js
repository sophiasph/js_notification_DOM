var e=function(e,t,i,n,s){var a=document.createElement("div"),o=document.createElement("h2"),c=document.createElement("p");a.classList.add("notification",s),a.style.top="".concat(e,"px"),a.style.right="".concat(t,"px"),o.classList.add("title"),o.textContent=i,c.classList.add("description"),c.textContent=n,a.appendChild(o),a.appendChild(c),document.body.appendChild(a),setTimeout(function(){a.style.visibility="hidden"},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.09ecfc48.js.map
