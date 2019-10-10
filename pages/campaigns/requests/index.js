import React, {Component} from 'react';
import Layout from '../../../components/layout';
import { Button, Table, Tab } from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../Ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component{
    static async getInitialProps(props){
        const {address} = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element, index) => {
                return campaign.methods.requests(index).call()
            })
        );

        return  {address, requests, requestCount, approversCount};
    }

    renderRow(){
        return this.props.requests.map((request, index) => {
            return <RequestRow 
            key={index}
            id={index}
            request={request}
            address={this.props.address}
            approversCount = {this.props.approversCount}
            />;
        })
    }

    render(){
        const {Header, Row, HeaderCell, Body} = Table;
        return(
            <Layout>
                <Link route={`/campaigns/${this.props.address}`}>
                    <a>Back</a>
                </Link>
                <h3>Pending Requests</h3>
                <Table>
                    <Header>
                        <HeaderCell>Id</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Header>
                    <Body>
                        {this.renderRow()}
                    </Body>
                </Table>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary>Add request</Button>
                    </a>
                </Link>
            </Layout>
        );
    }
}

export default RequestIndex;