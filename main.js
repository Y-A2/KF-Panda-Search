// KF Panda Search
document.getElementById("theme-btn").addEventListener("click", theme);
document.getElementById("btn").addEventListener("click", search);
function theme() {
    if (document.getElementById("theme-in").value == "dark" || document.getElementById("theme-in").value == "black")
    {
        document.getElementById("body").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        document.getElementById("h1").style.color = "white";
        document.getElementById("h2").style.color = "white";
        document.getElementById("p").style.color = "white";
        document.getElementById("div").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else if (document.getElementById("theme-in").value == "light" || document.getElementById("theme-in").value == "white"){
        document.getElementById("body").style.backgroundColor = "rgba(255,255,255, 0.7)";
        document.getElementById("h1").style.color = "black";
        document.getElementById("h2").style.color = "black";
        document.getElementById("p").style.color = "black";
        document.getElementById("div").style.backgroundColor = "rgba(128, 128, 128, 0.7)";
    } else if (document.getElementById("theme-in").value.toLowerCase() == "random") {
        var random1 = Math.random() * 255;
        var random2 = Math.random() * 255;
        var random3 = Math.random() * 255;
        var random4 = Math.random() * 255;
        var random5 = Math.random() * 255;
        var random6 = Math.random() * 255;
        var random7 = Math.random() * 255;
        var random8 = Math.random() * 255;
        var random9 = Math.random() * 255;
        var random10 = Math.random() * 255;
        var random11 = Math.random() * 255;
        var random12 = Math.random() * 255;
        var random13 = Math.random() * 255;
        var random14 = Math.random() * 255;
        var random15 = Math.random() * 255;
        document.getElementById("body").style.background = `rgba(${random1},${random2},${random3}, 0.7)`;
        document.getElementById("h2").style.color = `rgb(${random4},${random5},${random6})`;
        document.getElementById("p").style.color = `rgb(${random7},${random8},${random9})`;
        document.getElementById("h1").style.color = `rgb(${random10},${random11},${random12})`;
        document.getElementById("div").style.backgroundColor = `rgba(${random13},${random14},${random15}, 0.7)`;
    }
}
function search()
{
    if (document.getElementById("search").value.toLowerCase() == "po" || document.getElementById("search").value.toLowerCase() == "dragonwarrior" || document.getElementById("search").value.toLowerCase() == "master oogway")
    {
        document.getElementById("img").src = "img/po.png";
        document.getElementById("h2").innerHTML = "Po";
        document.getElementById("p").innerHTML = '"Buddy I am the Dragon Warrior."';
    } else if (document.getElementById("search").value.toLowerCase() == "viper") {
    document.getElementById("img").src = "img/viper.png"; 
    document.getElementById("h2").innerHTML = "Viper";
    document.getElementById("p").innerHTML = `"I don't need to bite to fight!"`;
     } else if (document.getElementById("search").value.toLowerCase() == "tigress") {
        document.getElementById("img").src = "img/tigress.png";
        document.getElementById("h2").innerHTML = "Tigress";
        document.getElementById("p").innerHTML = '"Well, you should be! I am Tigress, Tigress the monster! A monster no one wants."';
    } else if (document.getElementById("search").value.toLowerCase() == "kai") {
        document.getElementById("img").src = "img/kai.png";
        document.getElementById("h2").innerHTML = "Kai";
        document.getElementById("p").innerHTML = '"In my hands you will be dead!"';
    } else if (document.getElementById("search").value.toLowerCase() == "tai lung") {
        document.getElementById("img").src = "img/tai-lung.png";
        document.getElementById("h2").innerHTML = "Tai Lung";
        document.getElementById("p").innerHTML = 'So that is his name: Po... Finally, a worthy opponent! Our battle will be legendary!"';
    } else if (document.getElementById("search").value.toLowerCase() == "shifu") {
        document.getElementById("img").src = "img/shifu.png";
        document.getElementById("h2").innerHTML = "Shifu";
        document.getElementById("p").innerHTML = '"Well done, students—if you were trying to disappoint me."';
    } else if (document.getElementById("search").value.toLowerCase() == "storming ox") {
        document.getElementById("img").src = "img/storming-ox.png";
        document.getElementById("h2").innerHTML = "Storming ox";
        document.getElementById("p").innerHTML = '"Good Luck, getting past my horns!"';
    } else if (document.getElementById("search").value.toLowerCase() == "soothsayer") {
        document.getElementById("img").src = "img/soothsayer.png";
        document.getElementById("h2").innerHTML = "Soothsayer";
        document.getElementById("p").innerHTML = `"Even with his poor eyesight, he can see the truth. Why is it that you cannot?"`;
    } else if (document.getElementById("search").value.toLowerCase() == "shen") {
        document.getElementById("img").src = "img/shen.png";
        document.getElementById("h2").innerHTML = "Shen";
        document.getElementById("p").innerHTML = `"Search the farthest villages. Find more metal! China will be mine..."`;
    } else if (document.getElementById("search").value.toLowerCase() == "oogway" || document.getElementById("search").value.toLowerCase() == "masteroogway" || document.getElementById("search").value.toLowerCase() == "master oogway") {
        document.getElementById("img").src = "img/oogway.png";
        document.getElementById("h2").innerHTML = "Oogway";
        document.getElementById("p").innerHTML = `"Have you ever heard of the phrase "turtles are slow?" Well they are not wrong!"`;
    } else if (document.getElementById("search").value.toLowerCase() == "mr ping") {
        document.getElementById("img").src = "img/mr-ping.png";
        document.getElementById("h2").innerHTML = "Mr Ping";
        document.getElementById("p").innerHTML = `"A lot of babies can't say words."`;
    } else if (document.getElementById("search").value.toLowerCase() == "monkey") {
        document.getElementById("img").src = "img/monkey.png";
        document.getElementById("h2").innerHTML = "Monkey";
        document.getElementById("p").innerHTML = `"If you beat me, I will go. If not, then it is you who must leave—without your pants!"`;
    } else if (document.getElementById("search").value.toLowerCase() == "mantis") {
        document.getElementById("img").src = "img/mantis.png";
        document.getElementById("h2").innerHTML = "Mantis";
        document.getElementById("p").innerHTML = `"He's not gonna quit bouncing, I'll tell you that."`;
    } else if (document.getElementById("search").value.toLowerCase() == "croc") {
        document.getElementById("img").src = "img/croc.png";
        document.getElementById("h2").innerHTML = "Croc";
        document.getElementById("p").innerHTML = `"You will never beat me in a tail fight!"`;
    } else if (document.getElementById("search").value.toLowerCase() == "crane") {
        document.getElementById("img").src = "img/crane.png";
        document.getElementById("h2").innerHTML = "Crane";
        document.getElementById("p").innerHTML = `"Look, you don't belong here."`;
    } else if (document.getElementById("search").value.toLowerCase() == "boss wolf") {
        document.getElementById("img").src = "img/boss-wolf.png";
        document.getElementById("h2").innerHTML = "Boss Wolf";
        document.getElementById("p").innerHTML = `"The panda? That's impossible!"`;
    } else {
        document.getElementById("img").src = "img/question-mark.png";
        document.getElementById("h2").innerHTML = "NO RESULTS";
        document.getElementById("p").innerHTML = `What exactly are you trying to search for?`;
    }
}

