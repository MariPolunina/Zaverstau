let commentList=document.querySelector('.comment-list');
let commentField=document.querySelector('.comment-field');
let commentForm=document.querySelector('.form_comments');
let commentName=document.querySelector('.name_fields');
let email=document.querySelector('.email_fields');
let commentButton=document.querySelector('.button_submit');

commentForm.onsubmit=function(evt){
    evt.preventDefault();
    let newComment=document.createElement('li');
    let newImage=document.createElement('img');
    newImage.src="Images_Desktop_1/Rectangle 24.png";
    let newName=document.createElement('p');
    let newDiv=document.createElement('div');
    newDiv.classList.add('name');
    let textOfComment=document.createElement('p');

    newName.textContent=commentName.value;
    textOfComment.textContent=commentField.value;
    newDiv.append(newImage);
    newDiv.append(newName);
    newComment.append(newDiv);
    newComment.append(textOfComment);
    commentList.append(newComment);
    
    email.value='';
    commentField.value='';
    commentName.value='';
    
}


commentField.oninput=function()
{
    if((commentField.value.length>200)||(commentField.value.length<10))
    {
        commentField.classList.add('warning');
        commentButton.disabled=true;
    }
    else{
        commentField.classList.remove('warning');
        commentButton.disabled=false;
    }
}