pragma solidity >=0.4.0 <0.7.0;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';

contract Donation is ERC20 {

    string public constant name = "LibraToken";
    string public constant symbol = "LIT";
    uint8 public constant decimals = 18;
    uint public constant TokenPriceWei = 2000;

    uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));
    event donated(address indexed _from, address indexed _to, uint256 amount);

    function buy() public payable {
      //the value of Libra is equal to ethers.
      uint decimals = 10**18;
      uint numberoftokens = (msg.value*decimals)/TokenPriceWei;
      _mint(msg.sender, numberoftokens);
    }

    function donate(address payable to, uint256 amount) public{
      transfer(to, amount);
      emit donated(msg.sender, to, amount);
    }
}