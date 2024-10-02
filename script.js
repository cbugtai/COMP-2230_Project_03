
let question = document.getElementById("question")
let button1 = document.getElementById("next-btn")
let choices = document.getElementById("choices")
let scene = document.getElementById("scenario")
let button2 = document.createElement("button")
let option1 = document.createElement("li")
let option2 = document.createElement("li")

start()

function start(){
    scene.textContent = ""
    question.textContent = "You are an adventurous explorer searching for the legendary treasure hidden deep within the enchanted forest of Eldoria."
    button1.textContent = "Next"

    button1.removeEventListener("click", start)
    button1.addEventListener("click", choice1)
}

function choice1(){
    scene.textContent = "You stand at the edge of the enchanted forest. Rumors of a lost treasure have lured you here, "
                          + "but the forest is known for its magical creatures and tricky paths.";
    question.textContent = "How do you enter the forest?";
    choices.appendChild(option1)
    choices.appendChild(option2)
    option1.textContent = "Take the well-trodden path."
    option2.textContent = "Venture off the beaten track into the dense underbrush.";
    button1.textContent = "Choice 1";
    button2.textContent = "Choice 2";
    document.body.appendChild(button2);

    button1.removeEventListener("click", choice1)
    button1.addEventListener("click", choice11)
    button2.addEventListener("click", choice12)
}

function choice11(){
    scene.textContent = "You decide to take the safe route. As you walk, you encounter a group of friendly woodland creatures who offer to guide you to the treasure.";
    question.textContent = "Do you trust the creatures?";
    choices.removeChild(option1)
    choices.removeChild(option2)
    button1.textContent = "Trust";
    button2.textContent = "Don't Trust";
    
    button1.removeEventListener("click", choice11)
    button2.removeEventListener("click", choice12)
    button1.addEventListener("click", choice111)
    button2.addEventListener("click", choice112)
}

function choice111(){
    scene.textContent = "The creatures lead you to a hidden glade where the treasure lies. You find chests filled with gold and gems!";
    question.textContent = "";
    button1.textContent = "Next";
    document.body.removeChild(button2);
    
    button1.removeEventListener("click", choice111)
    button2.removeEventListener("click", choice112)
    button1.addEventListener("click", ending1)
}

function choice112(){
    scene.textContent = "You wander deeper into the forest but soon get lost. After hours of searching, you stumble upon a mystical pond."
                        + " A wise old spirit offers you a chance to find your way out in exchange for a riddle."
    question.textContent = "";
    choices.appendChild(option1)
    choices.appendChild(option2)
    option1.textContent = "Attempt to solve the riddle."
    option2.textContent = "Ask the spirit for another way out.";
    button1.textContent = "Choice 1";
    button2.textContent = "Choice 2";
    document.body.appendChild(button2);
    
    button1.removeEventListener("click", choice111)
    button2.removeEventListener("click", choice112)
    button1.removeEventListener("click", choice121)
    button1.addEventListener("click", choice1121)
    button2.addEventListener("click", choice1122)
}

function choice1121(){
    scene.textContent = "After your attempt, white light surges from the spirit blinding you. You blink and look around and realize you're back at the edge of the forest" 
                    + " but the path you took is nowhere to be seen.";
    question.textContent = "";
    choices.removeChild(option1)
    choices.removeChild(option2)
    document.body.removeChild(button2);
    button1.textContent = "Next";
    
    button1.removeEventListener("click", choice1121)
    button2.removeEventListener("click", choice1122)
    button1.addEventListener("click", ending2)
}

function choice1122(){
    scene.textContent = "White light surges from the spirit blinding you. You blink and look around finding both the pond and the spirit gone.";
    question.textContent = "";
    choices.removeChild(option1)
    choices.removeChild(option2)
    document.body.removeChild(button2);
    button1.textContent = "Next";
    
    button1.removeEventListener("click", choice1121)
    button2.removeEventListener("click", choice1122)
    button1.addEventListener("click", ending3)
}

function choice12(){
    scene.textContent = "You push through the thick foliage and discover an ancient, overgrown temple. It looks abandoned, but you sense powerful magic inside.";
    question.textContent = "Do you enter the temple?";
    choices.appendChild(option1)
    choices.appendChild(option2)
    option1.textContent = "Cautiously explore inside."
    option2.textContent = "Turn back and look for another way to the treasure.";
    button1.textContent = "Choice 1";
    button2.textContent = "Choice 2";
    document.body.appendChild(button2);
    
    button1.removeEventListener("click", choice11)
    button2.removeEventListener("click", choice12)
    button1.addEventListener("click", choice121)
    button2.addEventListener("click", choice112)
}

function choice121(){
    scene.textContent = "Inside, you find a magical artifact that reveals the treasure's location!";
    question.textContent = "";
    button1.textContent = "Next";
    document.body.removeChild(button2);
    choices.removeChild(option1);
    choices.removeChild(option2);
    
    button1.removeEventListener("click", choice121)
    button2.removeEventListener("click", choice112)
    button1.addEventListener("click", ending4)
}

function ending1(){
    scene.textContent = "You thank your new friends and leave the forest as a wealthy explorer.";
    question.textContent = "You win!";
    button1.textContent = "Finish";
    
    button1.removeEventListener("click", ending1)
    button1.addEventListener("click", start)
}

function ending2(){
    scene.textContent = "You decide that adventuring is not for you and retire.";
    question.textContent = "You survive!";
    button1.textContent = "Finish";
    
    button1.removeEventListener("click", ending2)
    button1.addEventListener("click", start)
}

function ending3(){
    scene.textContent = "You were never seen or heard from again, your story serves as a cautionary tale told to travellers hoping to get rich looking for the lost treasure";
    question.textContent = "You died?";
    button1.textContent = "Finish";
    
    button1.removeEventListener("click", ending3)
    button1.addEventListener("click", start)
}

function ending4(){
    scene.textContent = "You head to the hidden glade where the treasure lies then leave with bags filled with gold and gems.";
    question.textContent = "You win!";
    button1.textContent = "Finish";
    
    button1.removeEventListener("click", ending4)
    button1.addEventListener("click", start)
}