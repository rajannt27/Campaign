import React, { Component } from 'react';
import factory from '../Ethereum/factory';

class CampaignIndex extends Component{
    static async getInitialProps(){
        const campaigns = await factory.methods.GetCampaigns().call();
        return {campaigns};
    }

    render() {
        
        return <div>{this.props.campaigns[0]}</div>;
    }
}

export default CampaignIndex;