import {React,useState} from 'react'
import '../App.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function MyForm(prop) {
    const [pass,setPass] = useState("Your Password Will Come Here");
    const [copyvar,setCopyvar] = useState("");
    function generateRandom(webapp,spword,password)
    {
        let val;
        for(let i=0;i<spword.length;i++)
            {
                for(let j=0;j<webapp.length;j++)
                {
                    if(i%2===0)
                        val = (webapp.charCodeAt(j) + spword.charCodeAt(i))%127;
                    else
                    {
                        val = (webapp.charCodeAt(j) - spword.charCodeAt(i));
                        if(val < 0)
                        {
                            val=val*-1;
                        }
                        val = val%127;
                    } 
                    if(val<34)
                        val=val+33;
                    console.log(val);
                    password = password + String.fromCharCode(val);  
                }
            }
            return password;
    }
    function generatePassword()
    {
        let webapp = document.getElementById("webapp").value;
        let spword = document.getElementById("spword").value;
        let passlen = document.getElementById("passlen").value;
        
        let password="";
        if(webapp==="" || spword==="" || passlen==="")
        {
            console.log("inavliad");
            prop.alert("Please Fill all the fields","warning");
            return;
        }
        else
        {
         
            password=generateRandom(webapp,spword,password);
            if(password.length!==passlen)
            {
                while(password.length<passlen)
                {
                    let newpass="";
                    password=password+generateRandom(password,webapp,newpass); 
                }
                password = password.substring(0,passlen);
            }
            console.log(password);
            setPass(password);
            setCopyvar(password);
            prop.alert("Password Generated Successfully","success");
        }
    }
    function copyToClipboard()
    {
        if(pass==="Your Password Will Come Here" || pass==="")
        {
            prop.alert("Generate the password first","warning");
            return;
        }
        prop.alert("Password Copied Successfully","success");
    }
  return (
    <div className='myform' >
        <label className='form-components'>Enter website name or app name where you want to login</label>
        <br/>
        <input  className='form-components' type="text" placeholder='Website or App' id='webapp' required/>
        <br/>
        <label className='form-components' >Enter any word to create Your Special Password</label>
        <br/>
        <input  className='form-components' type="text" placeholder='Special Word' id='spword' required/>
        <br/>
        <label className='form-components'>Enter length of password</label>
        <br/>
        <input className='form-components' type="number" id="passlen" placeholder='Length'/>
        <br/>
        <button className='form-components generatePassword' onClick={generatePassword}>Generate Password</button>
        <br/>
        <br/>
        <label className='passwordLabel'>{pass}</label>
        <CopyToClipboard text={copyvar}>
            <button className='copyButton' onClick={copyToClipboard}>Copy Password</button>
        </CopyToClipboard>
    </div>
  )
}
