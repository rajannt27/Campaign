import React, { Component } from 'react';
import {Card} from 'semantic-ui-react';
import factory from '../Ethereum/factory';


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

        return <Card.Group items={items}/>;
    }
    render() {
        
        return <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        {this.renderCampaigns()}
        </div>;
    }
}

export default CampaignIndex;