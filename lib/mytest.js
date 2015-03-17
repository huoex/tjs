$(document).ready(function() {
    $("#btn1").click( function(){
        $("#header").addClass("hover");
        $("#header").removeClass("no_hover");
    });
    $("#btn2").click( function(){
        $("#header").removeClass("hover");
        $("#header").addClass("no_hover");
    });
});

function Parent(username){
    this.username=username;
    this.sayHello=function(){
        alert(this.username);
    }
}

function Child(username,password){
    Parent.call(this,username);
    this.password=password;
    this.sayWord=function(){
        alert(this.password);
    }
}

function combo(msg){
    var arr=msg.split("-");
    for(var i=1;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);
    }
    msg=arr.join("");
    return msg;
}

function deRepeat(){
            var newArr=[];
            var obj=[];
            var index=0;
            var l=arr.length;
            for(var i=0;i<l;i++){
                if(obj[arr[i]]==undefined)
                  {
                    obj[arr[i]]=1;
                    newArr[index++]=arr[i];
                  }
                else if(obj[arr[i]]==1)
                  continue;
            }
            return newArr;

        }

function ff()
{
    var ul = document.getElementById("test");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Four"));
    ul.appendChild(li);
}

$(document).ready(function() {
    $('li').click(function() {
        var index = $(this).index();
        alert(index);
    })
});

