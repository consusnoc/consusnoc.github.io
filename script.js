var hand = document.getElementById('wave');
    setInterval(function(){
        hand.classList.add("hi");
        setTimeout(function(){
            hand.classList.remove("hi");
        }, 4000);
    }, 6000);