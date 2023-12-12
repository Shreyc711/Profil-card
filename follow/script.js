let friends = document.querySelector('h5');
let follow = document.querySelector(".btn-1");
let check = 0;


follow.addEventListener('click',()=>{
    if(check == 0){
    friends.innerHTML = "Friends ✓"
    friends.style.color = "green"
    check = 1;
    follow.innerHTML = "Remove friend";
    }
    else{
        friends.innerHTML = "Stranger";
        friends.style.color = "red"
        check = 0;
        follow.innerHTML = "Add friend";
    }
});


