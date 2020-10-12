import $ from 'jquery';

export default function LogicForCalls(){
    return {
        callAjaxPost: function(pUrl,dataParam,successFunction){
            $.ajax({
                url : "http://localhost:8080/sst/"+pUrl,
                type : 'post',
                async : true,
        		crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                data : JSON.stringify(dataParam),
                contentType : "application/json",
                success : successFunction
            })
        },
        test: () => console.log("test 2")

    }

}
export  function LogicForModules(){
    return {
        callAjaxPost: function(){
            console.log("test")
        },
        test: () => console.log("test 2")

    }

}
export function LogicForImages(){
    return {
        callAjaxPost: function(){
            console.log("test")
        },
        test: () => console.log("test 2")

    }

}