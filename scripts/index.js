"use strict";
let cityStates = [{
        state: "California",
        stateAbbr: "CA",
        cities: ["Los Angeles", "San Francisco", "San Diego"]
    },
    {
        state: "Colorado",
        stateAbbr: "CO",
        cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
    },
    {
        state: "Texas",
        stateAbbr: "TX",
        cities: ["Austin", "Dallas", "Houston", "San Antonio"]
    },
    {
        state: "New York",
        stateAbbr: "NY",
        cities: ["Queens", "Long Island City", "Manhattan", "Rochester", "Albany"]
    }
];

window.onload = function () {
    //add loadStatesDropdown function
    loadStatesDropdown();

    //connect onchange event handler for statesDropdown
    const statesDropdown = document.getElementById("statesDropdown");
    statesDropdown.onchange = onStatesDropdownChanged;

    //connect onchange event handler for citiesDropdown
    const citiesDropdown = document.getElementById("citiesDropdown");
    citiesDropdown.onchange = onCitiesDropdownChanged;
}
//loadStatesDropdown() 
function loadStatesDropdown() {
    //state dropdown
    const statesDropdown = document.getElementById("statesDropdown");

    //add "Select one..." option
    let selectOption = document.createElement("option");
    //use textContent to get the content of all elements including <script> and <style> elements
    selectOption.textContent = "Select State...";
    selectOption.value = "";
    statesDropdown.appendChild(selectOption);

    //iterate thru cityStates array to create <option> for each state
    //append whatever is in the option at the end using statesDropdown
    for (let i = 0; i < cityStates.length; i++) {
        let optionTag = document.createElement("option");
        optionTag.textContent = cityStates[i].state;
        optionTag.value = cityStates[i].stateAbbr;
        statesDropdown.appendChild(optionTag);
    }
    //call addSelectStateToCity()
    addSelectStateToCity();
}
//onStatesDropdownChanged()
function onStatesDropdownChanged() {
    //declare statesDropdown and citiesDropdown
    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");

    //remove ALL cities from citiesDropdown in dropdown
    citiesDropdown.options.length = 0;
    
    //find the statesDropdown selection
    let selectedStateAbbr = statesDropdown.value;
    //if they pick selected state invoke addSelectStateToCity function
    if (selectedStateAbbr == "") {
        addSelectStateToCity()
    }
    //match elements in cityStates array using find method
    let matchingState = cityStates.find(arrElement => arrElement.stateAbbr == selectedStateAbbr);
    //add "Select one..." option
    let selectOption = document.createElement("option");
    selectOption.textContent = "Now select a city...";
    selectOption.value = "";
    citiesDropdown.appendChild(selectOption);

    //iterate thru matchingStates array
    //append whatever is in the option at the end using citiesDropdown
    for (let i = 0; i < matchingState.cities.length; i++) {
        let optionTag = document.createElement("option");
        optionTag.textContent = matchingState.cities[i];
        citiesDropdown.appendChild(optionTag);
    }
    //when selecting new states clears message content
    clearContent();
}
//onCitiesDropdownChanged()
function onCitiesDropdownChanged() {
    //declare statesDropdown and citiesDropdown
    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");

    //clears cityState para
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";

    //get selectedCity
    let selectedCity = citiesDropdown.value;
    if (selectedCity == "") {
        return;
    }
    let selectedStateIndex = statesDropdown.selectedIndex;
    let selectedState = statesDropdown.options[selectedStateIndex].text;

    //message display in <p>
    messagePara.innerHTML = "State: " + selectedState + "<br>" +
                            "City: " + selectedCity;
}
//addSelectStateToCity function for dropdown menu
function addSelectStateToCity() {
    const citiesDropdown = document.getElementById("citiesDropdown");
    //add "Select one..." option
    let selectOption = document.createElement("option");
    selectOption.textContent = "Select one...";
    selectOption.value = "";
    citiesDropdown.appendChild(selectOption);
}
//add clearContent function on statesDropdown
function clearContent() {
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
}