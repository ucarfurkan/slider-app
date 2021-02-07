//Firstly, let set our titles, images and descriptions
        
var slider = [
    {
        title: "Title About Current Slide #1",
        image: "img/1.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque cupiditate enim sed maiores natus quod illum, perspiciatis recusandae officia, ratione perferendis ad, nemo commodi deserunt mollitia atque incidunt excepturi consequuntur!"
    },
    {
        title: "Title About Current Slide #2",
        image: "img/2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi architecto quia, suscipit repellat, incidunt maxime ipsam rem commodi magnam possimus quos ullam quasi corporis doloremque laudantium illum asperiores accusamus?"
    },
    {
        title: "Title About Current Slide #3",
        image: "img/3.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil molestias excepturi numquam corporis facilis, cupiditate ea adipisci, placeat dolor nulla! Molestiae, reprehenderit debitis voluptatum expedita labore sequi inventore culpa?"
    },
    {
        title: "Title About Current Slide #4",
        image: "img/4.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quasi illo vel iusto, beatae quam dolorem. Delectus modi iusto id numquam sint laboriosam excepturi eos quis suscipit, distinctio cupiditate. Quas."
    },
    {
        title: "Title About Current Slide #5",
        image: "img/5.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate iste non, iure architecto impedit, nisi quas fugiat quod totam fuga sequi eligendi id dolorem corrupti illo, dolores velit? Voluptatum!"
    },
]

var index = 0;
var slideCount = slider.length;

console.log(slideCount)

showSlide(index);

//Now we are going to add clickevent to our "next" and "previous" icons.

document.querySelector(".fa-arrow-alt-circle-left").addEventListener("click",function(){
    index--;
    //we need to add showSlide();
    showSlide(index);
});

document.querySelector(".fa-arrow-alt-circle-right").addEventListener("click",function(){
    index++;
    //we need to add showSlide();
    showSlide(index);
});

function showSlide(i){
    index = i;

    //if we are on the first slide and we click the "previous" icon, it need to go to the last slide. And here we go:
    if(i<0){
        index = (slideCount - 1);
    }
    //if we are on the last slide and we click the "next" icon, it need to go to the first slide. And here we go:
    if (i > slideCount - 1) {
        index = 0;
    }

    //Then we need to set the titles,images and descriptions.

    //sets title according to index.
    document.querySelector("#title").textContent = slider[index].title;

    //sets image according to index.
    document.querySelector("img").setAttribute("src",slider[index].image);

    //sets description according to index.
     document.querySelector("#description").textContent = slider[index].description;
}