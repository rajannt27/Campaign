pragma solidity ^0.4.17;

contract FactoryCampaign{
    address[] public campaignAddress;
    
    function CreateCampaign(uint minimum) public{
        address newCampaign = new Campaign(minimum,msg.sender);
        campaignAddress.push(newCampaign);
    }
    
    function GetCampaigns() public view returns(address[]){
        return campaignAddress;
    }
}

contract Campaign{
    struct Request{ 
        string description; 
        uint value; 
        address recipient; 
        bool complete; 
        mapping(address=>bool) approvals; 
        uint approvalsCount; 
    }
    
    Request[] public requests;
    address public manager;
    mapping(address=>bool) public approvers;
    uint public minimumContribution;
    uint public approversCount;
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minValue, address creator) public{
        manager = creator;
        minimumContribution = minValue;
    }
    
    function contribute() public payable{ 
        require(msg.value >= minimumContribution); 
        approvers[msg.sender] = true; 
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted{ 
        Request memory request = Request({ 
            description: description, 
            value: value, 
            recipient: recipient, 
            complete: false, 
            approvalsCount: 0 });

        requests.push(request);
    }

    function approveRequest(uint index) public{ 
        Request storage request = requests[index]; 
        require(approvers[msg.sender]); 
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalsCount++;
    }
    
    function finaliseRequest(uint index) public restricted{
        Request storage request = requests[index]; 
        require(!request.complete);
        require(request.approvalsCount > (approversCount/2));
        
        request.recipient.transfer(request.value);
        request.complete = true;
    } 

    function getSummary() public view returns(
        uint,
        uint,
        uint,
        uint,
        address
    ) {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns(uint){
        return requests.length;
    }
}