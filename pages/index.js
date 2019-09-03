import React, { Component } from 'react';
import factory from '../Ethereum/factory';
import {Card} from 'semantic-ui-react';

class CampaignIndex extends Component{
    static async getInitialProps(){
        const campaigns = await factory.methods.GetCampaigns().call();
        return {campaigns};
    }

    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return{
                header: address,
                description: <a>View Campaigns</a>,
                fluid: true
            };
        });

        return <Card.Groups items={items}/>;
    }
    render() {
        
        return <div>{this.renderCampaigns()}</div>;
    }
}

export default CampaignIndex;