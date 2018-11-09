function  read(){
    console.log("testing succces");
    var name=document.getElementById("getname").value;
    console.log(name);
    var rno=document.getElementById("getregister").value;
    console.log(rno);
    var adn=document.getElementById("getad").value;
    console.log(adn);
    var age=document.getElementById("getage").value;
    console.log(age);
    
   
    if(age>=18)
    {
        alert("  u r eligible");
        console.log(" u r eligible");

    }
    else{
        alert("not eligible");
        console.log("not eligible");
    }
    var op=document.getElementById("district");
    var district=op.options[op.selectedIndex].text;
    
    console.log(district);

}
function largest()
{
    var a=document.getElementById("op1").value;
    var b=document.getElementById("op2").value;
    var c=document.getElementById("op3").value;
    var x=parseInt(a);
    var y=parseInt(b);
    var z=parseInt(c);

    if(x>y && x>z)
      
      {
        console.log(x);
      }
     else if(y>z)
      {
          console.log(y);

        }
        else {
            console.log(z);
        }
    }

    function small()
    {
        var a=document.getElementById("op1").value;
        var b=document.getElementById("op2").value;
        var c=document.getElementById("op3").value;
        var x=parseInt(a);
        var y=parseInt(b);
        var z=parseInt(c);

        if(x<y && x<z)
        {
            var res=x;
        }
        else if(y<z)
        {
            var res=y;
        }
        else{
            var res=z;
        }

  document.getElementById("result").innerHTML=res;

    }