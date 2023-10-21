const formHandler=document.getElementById("heroform");
const f1=document.getElementById("myhero13");
const contButton1=document.getElementById("contButton");
const f3=document.getElementById("newd");
const f4=document.getElementById("newf4");
const stepLocate=document.getElementById("stepLocate");
const headingStep=document.getElementById("headingStep");

const newhero=document.getElementById("newheroo");

const mainContent=document.getElementById("mainContent");
const hero=document.getElementById("hero");
const hero11=document.getElementById("hero1-1");



let step=0;
// const stepsForm=[form1,form2,form3];
const f2=document.createElement("div");
f2.classList="heroform";
f2.innerHTML = '<div class="card"><img src="./images/users.svg" alt=""><div><h3>Get Customer Leads</h3><p>Sourabh take action</p></div></div><div class="card"><img src="./images/users.svg" alt=""><div><h3>GetCustomerLeads</h3><p>Sourabhtakeaction</p></div></div><div class="card"><img src="./images/users.svg" alt=""><div><h3>GetCustomerLeads</h3><p>Sourabhtakeaction</p></div></div><div class="card"><img src="./images/users.svg" alt=""><div><h3>GetCustomerLeads</h3><p>Sourabhtakeaction</p></div></div><div class="card"><img src="./images/users.svg" alt=""><div><h3>GetCustomerLeads</h3><p>Sourabhtakeaction</p></div></div><div class="card"><img src="./images/users.svg" alt=""><div><h3>GetCustomerLeads</h3><p>Sourabhtakeaction</p></div></div><div class="card"><img src="./images/users.svg" alt=""><div><h3>GetCustomerLeads</h3><p>Sourabhtakeaction</p></div></div><div class="card"><img src="./images/users.svg" alt=""><div><h3>GetCustomerLeads</h3><p>Sourabhtakeaction</p></div></div><div class="card"><img src="./images/users.svg" alt=""><div><h3>GetCustomerLeads</h3><p>Sourabhtakeaction</p></div></div>';



formHandler.append(f2);

const headings=["What you want to do","Choose Product" ,"Campaign Settings","Ready to go"];
const formItems=[f1,f2,f3,f4];

function updateIconsText(step){
    if(step==2){
        document.getElementById("step2Bold").style.fontWeight="bold";
        document.getElementById("step2Bold").style.color="black";
        console.log(document.getElementById("step2Bold"));
    }
    if(step==3){
        document.getElementById("step3Bold").style.fontWeight="bold";
        document.getElementById("step3Bold").style.color="black";

    }
    if(step==4){
        document.getElementById("step4Bold").style.color="black";

        document.getElementById("step4Bold").style.fontWeight="bold";
    }
}

function updateIcons(step){
    if(step==2){
        document.getElementById("stepimg2").setAttribute("src","./images/steps/step2c.svg");
    }
    if(step==3){
        document.getElementById("stepimg3").setAttribute("src","./images/steps/step3c.svg");
    }
    if(step==4){
        document.getElementById("stepimg4").setAttribute("src","./images/steps/step4c.svg");
    }
}



function handleClick(){
    console.log(step);
    if(step==4){
        displayContent1();
    }
    displayContent();
    headingStep.innerText=`${headings[step-1]}`
    //updating step state
    stepLocate.innerText=`Step ${step} of 4`;
    updateIconsText(step);
    updateIcons(step);

}
   

function displayContent() {
    console.log("button is clicked");
    console.log(mainContent.lastChild);
    // while (hero.hasChildNodes()) {
    //     hero.removeChild(hero.lastChild);
    // }

    // while (newhero.hasChildNodes()) {
    //     newhero.removeChild(newhero.lastChild);
    // }
    console.log(document.getElementById("hero"));
    
    for (let i = 0; i < formItems.length; i++) {
        if (step == i) {
        if (step == 0 || step == 1) {
            formItems[i].style.display = "grid";
        } else {
            formItems[i].style.display = "flex"; // Show the element
        }
        } else {
        formItems[i].style.display = "none"; // Hide other elements
        }
    }
    step += 1;
    }

function createCampaign()
{
    console.log();
    while(newhero.hasChildNodes){
        newhero.removeChild(newhero.lastChild);
    }
    displayContent();
}


function del(event){
    event.target.parentNode.parentNode.remove();
}

function homeP(){
    while(hero.hasChildNodes){
        hero.remove(hero.lastChild);
    }
    displayHome();
}
function displayContent1() {
    const hero = document.getElementById("hero"); // Ensure that 'hero' element is defined
    if(hero)hero.style.display="none";
    if(document.getElementById("newHeroo"))document.getElementById("newHeroo").style.display="flex";
   
}
const createCampaignButton = document.getElementById("createCampaignButton");

createCampaignButton.addEventListener("click", displayContent2);

async function displayContent2(){
    console.log("click");
   
    document.getElementById("hero").style.display="flex";
    document.getElementById("newHeroo").style.display="none";
    
    displayContent();
    
}


displayContent1();