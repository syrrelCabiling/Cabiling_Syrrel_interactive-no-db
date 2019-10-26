import veiData from "/js/modules/DataObjects.js";

// IIFE - Immediately Invoiced Function Expression
(() => {
    console.log('fired!');

    // grab the bio container and get ready to populate its contents

    const Info = document.querySelector('.info-wrapper').children;
    // grabbing the children inside the main section or div with this class
    
   

    function showVeiData() {
        //change data on the page here
        debugger;
         
        //this is teh label of the buttons
        let eachIndex = this.textContent;

        Info[0].src = `images/${veiData [eachIndex].image}`;
        Info[1].textContent = veiData [eachIndex].classification;
        Info[2].textContent = veiData [eachIndex].volcano;
        Info[3].textContent = veiData [eachIndex].tephra;
        Info[4].textContent = veiData [eachIndex].howOften;
        Info[5].textContent = veiData [eachIndex].deathToll;
        Info[6].textContent = veiData [eachIndex].otherDamages;
        
       
 
    }

    for (let prof in veiData ) {
        console.log(prof);

        // create a button for every prof (every entry) in our object
        let indexButton = document.createElement('button');

        // set the button's label (text) in the prof name (current entry in the object)
        indexButton.textContent = prof;

        //add some some event in the handling so that when we click one of our new buttons, we can show the right data
        indexButton.addEventListener('click', showVeiData);
        
        //add the button to the top of the section on our web page
        document.querySelector("#section1").appendChild(indexButton);
    }

    debugger;
})();

/*(() => {
    console.log('Work it!');

    // grab the bio container and get ready to populate its contents
    const displayArea = document.querySelector("#information").children;


    function showInfo() {
        document.getElementById("information").innerHTML = showVeiData();
    }

    function showVeiData() {
        let currentData = this.textContent;

        veiInfo[0].textContent = VeiIndex[currentData].classification;
        veiInfo[1].textContent = VeiIndex[currentData].volcano;
        veiInfo[2].textContent = VeiIndex[currentData].tephra;
        veiInfo[3].textContent = VeiIndex[currentData].howOften;
        veiInfo[4].textContent = VeiIndex[currentData].deathToll;
        veiInfo[5].textContent = VeiIndex[currentData].otherDamages;
        veiInfo[6].src = `/images/${VeiIndex[currentData].image}`;
    }

    for (let index in veiIndex) {
        console.log(index);

        let indexButton = document.createElement('button');

        // set the button's label (text) in the prof name (current entry in the object)
       indexButton.textContent = index;

        //add some some event in the handling so that when we click one of our new buttons, we can show the right data
        indexButton.addEventListener('click', showVeiData);
        
        //add the button to the top of the section on our web page
       document.querySelector("#information").appendChild(indexButton);
    }
})();*/