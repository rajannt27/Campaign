# Campaign
#Test comment
#New checkin

pragma solidity ^0.4.17;
contract Campaign {
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
    }
    
    Request[] public requests;
    address public manager;
    address[] public approvers;
    uint public minimumContribution;
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint minValue) public{
        manager = msg.sender;
        minimumContribution = minValue;
    }
   
   function contribute() public payable{
       require(msg.value >= minimumContribution);
       approvers.push(msg.sender);
   }
   
   function createRequest(string description, uint value, address recipient) public restricted{
       Request memory request = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false
       });
       
       requests.push(request);
   }
}

