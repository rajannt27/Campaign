import React, {Component} from 'react';
import Layout from '../../components/layout';
import Campaign from '../../Ethereum/campaign';

class CampaignShow extends Component{
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);
        const campaignSummary = await campaign.methods.getSummary().call();
        console.log(campaignSummary);
        return {};
    }
    render(){
        return (
            <Layout>
                <h3>Campaign Details</h3>
            </Layout>
        );
    }
}

export default CampaignShow;