let commentFieldText=document.querySelector('.text_a')
let commentButtonText=document.querySelector('.b_send')

commentFieldText.oninput=function()
{
    if((commentFieldText.value.length>200)||(commentFieldText.value.length<10))
    {
        commentFieldText.classList.add('warning');
        commentButtonText.disabled=true;
    }
    else{
        commentFieldText.classList.remove('warning');
        commentButtonText.disabled=false;
    }
}