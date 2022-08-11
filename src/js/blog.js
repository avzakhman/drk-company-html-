window.addEventListener('DOMContentLoaded', ()=> {
    const tagbuttons = (document.querySelector('.blog-contents__tags')).querySelectorAll('button'),
    post_tags  = document.querySelectorAll('.post-tag'),
    blogposts  = document.querySelectorAll('.blog-post'),
    noposts    = document.querySelector('.blog-contents__notfound');

    let postsstate = 2; //2 - все посты; 1 - только избранные; 0 - ничего не найдено

    //функция нажатия кнопок
    const pressTags = function() {
    tagbuttons.forEach((tagbutton)=> {
        tagbutton.addEventListener('click', (e)=> {
            postsstate = 1;
            targeted = e.target.id;
            showPosts(targeted);
            makePressed(targeted);
            notFound();
            showAll();
        });
    });
    };

    //функция изменения состояния кнопок
    const makePressed = function(id){
    tagbuttons.forEach((tagbutton)=> {
        if (tagbutton.id === id && !tagbutton.classList.contains('blog-contents__tags_pressed') ) {
            tagbutton.classList.add('blog-contents__tags_pressed');
        } else if (tagbutton.id === id && tagbutton.classList.contains('blog-contents__tags_pressed') )  {
            tagbutton.classList.remove('blog-contents__tags_pressed');
            postsstate = 2;
        } else {
            tagbutton.classList.remove('blog-contents__tags_pressed');
        }
    });
    };

    //функция перехода по тегам в постах
    const pressPostTags = function() {
    post_tags.forEach((post_tag) =>{
        post_tag.addEventListener('click', (e)=> {
            targeted = e.target.id;
            showPosts(targeted);
            makePressed(targeted);
            notFound();
            showAll();
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    });
    }

    //функция отображения постов
    const showPosts = function(id) {
    postsstate = 0;
    blogposts.forEach((blogpost)=> {
        if (blogpost.classList.contains(id)) {
            blogpost.classList.remove('blog-post_hidden');
            postsstate = 1;
        } else {
            blogpost.classList.add('blog-post_hidden');
        }
    });
    };

    //функция отображения "не найдено" в случае отсутствия постов по тегу
    const notFound = function() {
    if (postsstate == 0) {
        noposts.classList.remove('blog-post_hidden');
    } else {
        noposts.classList.add('blog-post_hidden');
    }
    }

    //функция отображения всех постов в случае повторного нажатия по тегу
    const showAll = function() {
    if (postsstate == 2) {
        blogposts.forEach((blogpost) => {
            blogpost.classList.remove('blog-post_hidden');
        });
    }
    }

    //инициализация основных функций
    pressTags();
    pressPostTags();

});

