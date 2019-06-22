pragma solidity >=0.4.0 <0.7.0;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';

contract donation is ERC20 {
    event donated(address indexed _from, address indexed _to, uint256 amount);
    
    function donate(address payable _to) public payable{
        transfer(msg.sender, _to, msg.value);
    }
    
    function transfer(address _from, address payable _to, uint256 _amount) internal{
        _to.transfer(_amount);
        emit donated(_from, _to, _amount);
    }
}