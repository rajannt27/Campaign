import React, {Component} from 'react';
import Layout from '../../components/layout';
import Campaign from '../../Ethereum/campaign';
import {Card, Grid, Button} from 'semantic-ui-react';
import web3 from '../../Ethereum/web3';
import ContributeForm from '../../components/contribute';
import {Link} from '../../routes';

class CampaignShow extends Component{
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);
        const campaignSummary = await campaign.methods.getSummary().call();
        console.log(campaignSummary);
        return {
            address: props.query.address,
            minimumContribution: campaignSummary[0],
            manager: campaignSummary[4],
            balance: campaignSummary[1],
            requestCount: campaignSummary[2],
            approversCount: campaignSummary[3]
        };
    }
    render(){
        return (
            <Layout>
                <h3>Campaign Details {this.props.manager}</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address}></ContributeForm>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Request</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }

    renderCards(){
        const {
            balance,
            manager,
            minimumContribution,
            requestCount,
            approversCount
        } = this.props;
        const items = [
            {
                header: manager,
                meta: 'Address of manager',
                description: 'The manager created this campaign and can create request to spend money',
                style:{overflowWrap: 'break-word'}
            },
            {
                header: web3.utils.fromWei(balance, 'ether') ,
                meta: 'Campaign balance (ether)',
                description: 'The balance for this campaign'
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'Minimum contribution to the campaign to become an approver'
            },
            {
                header: requestCount,
                meta: 'Request Count',
                description: 'Number of spend request for this campaign. A request tries to withdraw money from contract. Request must be approved by approvers to take money from contract.'
            },
            {
                header: approversCount,
                meta: 'Approvers count',
                description: 'Number of approvers who have already donated to the campaign'
            }
        ];

        return <Card.Group items={items} />;
    }
}

export default CampaignShow;