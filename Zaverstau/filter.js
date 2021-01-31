let articles=document.querySelectorAll('.article');
let filter=document.querySelector('.theme');

filter.onchange=function()
{
    document.getElementById('id_theme').style.border='thick solid #0000FF';
    for(let article of articles)
    {
        if(article.dataset.category!==filter.value && filter.value!=='all_articles')
        {
            article.classList.add('hidden');
            document.getElementsBy;
        }
        else
        {
            article.classList.remove('hidden');
        };
    };
};