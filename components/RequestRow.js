import React, {Component} from 'react';
import {Table,Button} from 'semantic-ui-react';
import web3 from '../Ethereum/web3'

class RequestRow extends Component{
    static async getInitialProps(){
        const {key, request, address } = props.query;
        return {key, request, address};
    }
    render(){
        const {Row, Cell} = Table;
        const {id, request} = this.props;
        return(
            
            <Row>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalsCount }</Cell>
                <Cell><Button primary>Approve</Button></Cell>
                <Cell><Button primary>Finalize</Button></Cell>
            </Row>
            );
    }
}

export default RequestRow;