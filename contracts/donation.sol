pragma solidity >=0.4.0 <0.7.0;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';

contract LibraToken is ERC20 {

  string public constant name = "LibraToken";
  string public constant symbol = "LIT";
  uint8 public constant decimals = 18;

  uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

  constructor() public {
    _mint(msg.sender, INITIAL_SUPPLY);
  }
}

contract donation is ERC20 {
    event donated(address indexed _from, address indexed _to, uint256 amount);
    
    function donate(address payable _to) public payable{
        transfer(_to, msg.value);
        emit donated(msg.sender, _to, msg.value);
    }
}