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

const f2=document.getElementById("heroform2");

const cardc=document.getElementById("cardc");




let step=0;
// const stepsForm=[form1,form2,form3];


let form1data=[];
let form2data=[];
let form3data=[];
let form4data=[];

// let finalData=[form1data,form2data,form3data,form4data];


const headings=["What you want to do","Choose Product" ,"Campaign Settings","Ready to go"];
const formItems=[f1,f2,f3,f4];

function updateIconsText(step){
    if(step==2){
        document.getElementById("step2Bold").style.fontWeight="bold";
        document.getElementById("step2Bold").style.color="black";
       
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
function refixText(){
    document.getElementById("step2Bold").style.fontWeight="light";
    document.getElementById("step2Bold").style.color="gray";
    document.getElementById("step3Bold").style.fontWeight="light";
    document.getElementById("step3Bold").style.color="gray";
    document.getElementById("step4Bold").style.color="gray";

    document.getElementById("step4Bold").style.fontWeight="light";

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
function refixIcons(){
    
        document.getElementById("stepimg2").setAttribute("src","./images/Ellipse 1350.svg");
    

       document.getElementById("stepimg3").setAttribute("src","./images/Group 17278.svg");
    
    
        document.getElementById("stepimg4").setAttribute("src","./images/Ellipse 1351.svg");
    
}


function handleClick(){
    console.log(step);
    if(step>=4){
        addFiles();
        displayContent1();
        refixIcons();
        refixText();
        step=0;
    }
    displayContent();
    headingStep.innerText=`${headings[step-1]}`
    //updating step state
    stepLocate.innerText=`Step ${step} of 4`;
   
    updateIconsText(step);
    updateIcons(step);

}

function addFiles(){
    const curdate=new Date();
    const creationDate=curdate.getDate()+"/"+curdate.getMonth()+"/"+curdate.getFullYear();

    const newrow=document.createElement("tr");
    newrow.innerHTML=`<td><input type="checkbox"></td><td><div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked></div></td><td><div class="insTa"><img src="./images/Gilroy-FREE/unsplash_S2jw81lfrG0.svg" alt=""><div><h3>Come Bluberry cake Campaign</h3><p>Created on 14 july</p></div></div></div></td><td>July 25 - August 1, 2020</td><td>300</td><td>INR 3,400</td><td>Chennai</td><td><img src="./images//Gilroy-FREE/Group 2.svg" alt=""></td><td><div class="status-live" style="width: 104px; height: 30px; flex-shrink: 0;">Live now</div></td><td><img src="./images/Gilroy-FREE/edit-2.svg" alt="" onclick=del(event)> <img src="./images/Gilroy-FREE/trash.svg" alt="" onclick=del(event)></td>
    `;
    ;
    const tableBody=document.getElementById("tableBody");
    tableBody.appendChild(newrow);

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
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", cardEvent);
});


 function cardEvent(event)
{
    
    const clickedCard = event.currentTarget;
    
    const h1Element = clickedCard.querySelector('h1');
    const pElement = clickedCard.querySelector('p');

    if (h1Element && pElement) {
        const h1Value = h1Element.textContent;
        const pValue = pElement.textContent;

        console.log("Title (h1):", h1Value);
        console.log("Paragraph (p):", pValue);
    } else {
        console.log("Either <h1> or <p> element is missing in the clicked card.");
    }
}


const buttonActive = document.getElementById("nf1b1");

buttonActive.addEventListener("click", () => {
    const btnActive = buttonActive.querySelector("#nf1bActive");
    const btnInactive = buttonActive.querySelector("button:not(#nf1bActive)");

    // Check if the active button exists and toggle the IDs
    if (btnActive && btnInactive) {
        btnActive.removeAttribute("id");
        btnInactive.id = "nf1bActive";
    }
});



displayContent1();

//api key  



//api call for finding the location

if ("geolocation" in navigator) {
    // The Geolocation API is available in the user's browser.

    navigator.geolocation.getCurrentPosition(function (position) {
        // The user's location is available in the `position` object.
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // You can use the latitude and longitude for your application.
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
        findCityName(longitude,latitude);
    }, function (error) {
        // Handle any errors that occur during the geolocation request.
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.error("User denied the request for geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.error("The request to get user location timed out.");
                break;
            default:
                console.error("An unknown error occurred.");
                break;
        }
    });
} else {
    // The Geolocation API is not available in the user's browser.
    console.error("Geolocation is not available in this browser.");
}


async function findCityName(longitude,latitude){
    let ans={"Results":[{"Distance":0.020473593593960417,"address":"Ambikapur, Surguja, Chhattisgarh, India","city":"Ambikapur","region":"Chhattisgarh","subregion":"Surguja","country":"India","longitude":83.184845,"latitude":23.134208}]}

      
const url = `https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat=${latitude}&lng=${longitude}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1df765ec1bemsh0d5e9644fb85c11p16bf0djsn69bac089d648',
		'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.Results[0].city);
    const locationInp=document.getElementById("locationInput");

    locationInp.value=`${result.Results[0].city}`;

} catch (error) {
	console.error(error);
}
}