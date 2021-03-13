// JavaScript Document

var makePolitician = function(name, partyColor)
{
//create new object with properties
var politician = {};
politician.name = name;
politician.electionResults = null;
politician.totalVotes = 0;
politician.partyColor = partyColor;

politician.tallyUpVotes = function() 
{

//Method to track votes and results
    this.totalVotes = 0;
    for (var i=0; i < this.electionResults.length; i++)
    {
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
};

return politician;
};

//Create politician with name and partycolor
var mary = makePolitician("Mary Mooreright", [132,17,11]);

var sally = makePolitician("Sally Leansleft", [245, 141, 136]);

//Election results per politician
mary.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,
                        3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,
                        12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
                        
sally.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,
                         5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,
                         7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
                         
// Recount - update date //

mary.electionResults[9] = 1;
mary.electionResults[4] = 17;
mary.electionResults[43] = 11;

sally.electionResults[9] = 28;
sally.electionResults[4] = 38;
sally.electionResults[43] = 27;

//Compare votes within each state to determine winner of that state
var setStateResults = function(state)
{
    theStates[state].winner = null;
    if (mary.electionResults[state] > sally.electionResults[state]) 
    {
        theStates[state].winner = mary;
    }
    else if (mary.electionResults[state] < sally.electionResults[state]) 
    {
    theStates[state].winner = sally;
    }
    
//New variable for the state's winner property
    var stateWinner = theStates[state].winner;
 
    if (stateWinner !== null) 
    {
    theStates[state].rgbColor = stateWinner.partyColor;
    }
    else 
    {
    theStates[state].rgbColor = [11,32,57];
    }
//Assign the stateResults table to a variable

    var stateInfoTable = document.getElementById('stateResults');
//Create variables for each node within the sR table
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];
    var candidate1Results = body.children[0].children[1];
    var candidate2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];
//Fill in the stateInfoTable nodes with the appropriate text
    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
    
    candidate1Name.innerText = mary.name;
    candidate2Name.innerText = sally.name;
    
    candidate1Results.innerText = mary.electionResults[state];
    candidate2Results.innerText = sally.electionResults[state];
    
//Account for a draw result
    if(theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
    } else {winnersName.innerText = theStates[state].winner.name;
    }
    
};

//Tally up the votes and determine winner
mary.tallyUpVotes();
sally.tallyUpVotes();

var winner = "???";
    if (mary.totalVotes < sally.totalVotes)
        {winner = sally.name;}
    else if (mary.totalVotes > sally.totalVotes)
        {winner = mary.name;}
    else { 
        winner = "DRAW"
        }

//Create variable to connect HTML with jS for header table
    var countryInfoTable = document.getElementById('countryResults');
    var row = countryInfoTable.children[0].children[0];
    
    row.children[0].innerText = mary.name;
    row.children[1].innerText = mary.totalVotes;
    row.children[2].innerText = sally.name;
    row.children[3].innerText = sally.totalVotes;
    row.children[5].innerText = winner;
    


