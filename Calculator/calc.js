function fun(val)
{
    value=document.getElementById("printAns");
    // console.log(value.innerHTML,typeof(value.innerHTML));
    // if (value.innerHTML.trim()=="")
    // {
    //     // console.log("ans");
    //     let ans=0;
    // }
    let ans=val;
    if (!localStorage.getItem("calculator"))
    {
        if(val>=0 && val<=9)
        {
            ans=val;
        }
        else
        {
            ans="";
        }
    }
    else
    {
        // console.log(typeof(localStorage.getItem("calculator")))
        pastVal=localStorage.getItem("calculator");
        // console.log(pastVal.substr(-1));
        if(val==='C')
        {
            ans="";
        }
        else if(val==='CE')
        {
            ans=pastVal.substr(0,pastVal.length-1);
        }
        else if(val==='%')
        {
            ans=pastVal/100;
        }
        else if(val==='=')
        {
            ans=String(eval(pastVal));
            // ans=parseInt(pastVal.substr(0,pastVal.length-1))
        }
        else
        {
            if(pastVal.substr(-1)==='=' && val>=0 && val<=9)
            {
                ans=val;
            }
            else if(pastVal.substr(-1)==='=')
            {
                ans=pastVal.substr(0,pastVal.length-1)+val;
            }
            else
            {
                ans=pastVal+val;
            }
        }
    }

    if(val!="=")
    {
        value.innerHTML=ans;
    }
    else
    {
        value.innerHTML=ans;  
        ans+="=";  
    }
    // console.log(ans);
    localStorage.setItem("calculator",ans);
}
