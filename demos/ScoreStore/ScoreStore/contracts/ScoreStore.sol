pragma solidity ^0.4.4;
contract ScoreStore
{
mapping (string=> int) PersonScores;

function AddPersonScore(string name, int score)
{
        PersonScores[name] = score;
}

function GetScore(string name) returns (int)
{
    return PersonScores[name];
}

}
