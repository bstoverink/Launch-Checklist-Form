 window.addEventListener("load", function(){ 
   fetch('https://handlers.education.launchcode.org/static/planets.json')
      .then( function(response){
         response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}"></img>
            `
         });
      });
   
   


   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");



      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Fuel Level and Cargo Mass must be numbers!")
      } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)){
         alert("Pilot and Co-Pilot names can't be numbers!")
      } else {
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`;
         
         if (fuelLevel.value < 10000 || cargoMass.value > 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            if (fuelLevel.value < 10000) {
               fuelStatus.innerHTML = "Fuel level too low for launch.";
            } else {
               fuelStatus.innerHTML = "Fuel level is high enough for launch!";
            } 
            if (cargoMass.value > 10000) {
               cargoStatus.innerHTML = "Cargo mass level too high for launch.";
            } else {
               cargoStatus.innerHTML = "Cargo mass level low enough for launch!";
            }
         } else {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
         };
      }
   });
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/
