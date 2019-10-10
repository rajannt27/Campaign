import React, {Component} from 'react';
import {Table,Button} from 'semantic-ui-react';
import web3 from '../Ethereum/web3'
import Campaign from '../Ethereum/campaign';

class RequestRow extends Component{
    onApprove = async () => {
        console.log('In on approve ', this.props.id);
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
            from:accounts[0]
        });
    };

    onFinalize = async () => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finaliseRequest(this.props.id).send({
            from:accounts[0]
        }); 
    } 

    render(){
        const {Row, Cell} = Table;
        const {id, request, approversCount} = this.props;
        const readyToFinalize = request.approvalsCount > approversCount / 2;
        return(
            
            <Row disabled={request.complete} positive = {readyToFinalize && !request.complete}>

                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
                <Cell>{request.recipient}</Cell>

                <Cell>{request.approvalsCount}/{approversCount}</Cell>
                {request.complete ? null : (
                    <Cell><Button color="green" basic onClick={this.onApprove}>Approve</Button></Cell>
                )}
                {request.complete ? null : (
                    <Cell><Button color="teal" basic onClick={this.onFinalize}>Finalize</Button></Cell>
                )}
            </Row>
            );
    }
}

export default RequestRow;