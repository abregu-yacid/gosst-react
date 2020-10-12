
 
import $ from 'jquery';
window.jQuery = $;
require("jquery-ui");
require('jquery-blockui');

export default class LogicCalls{
    
    static createSession(key, token) {
        sessionStorage.setItem(key, token);
    }
    static callAjaxPost(pUrl,dataParam,successFunction)  {
        $.ajax({
            url : "http://localhost:8080/sst/"+pUrl,
            type : 'post',
            async : true,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            beforeSend : () =>$.blockUI({message:'<img src="images/ruedita.gif"></img>cargando...'}),
				
            data : JSON.stringify(dataParam),
            contentType : "application/json",
            success : successFunction,
            complete:()=>{$.unblockUI()}
        })
    };

}

