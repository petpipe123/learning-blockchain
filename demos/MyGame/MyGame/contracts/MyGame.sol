pragma solidity ^0.4.4;

contract IScoreStore{
    function GetScore(string name) returns (int);
}

contract MyGame
{
function ShowScore(string name) returns (int)
    {
        IScoreStore scoreStore = IScoreStore(0x31956956e8ef42d1bcfe38bbb3b9dfad802c6987);
        return scoreStore.GetScore(name);

    }

}
