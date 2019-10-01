import React, {Component} from 'react';
import Layout from '../../components/layout';
import instance from '../../Ethereum/factory';
import web3 from '../../Ethereum/web3';

class CampaignNew extends Component{
    state = {
        minimumContribution: ''
    };
    onSubmit = async (event) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        console.log("test west"+accounts[0]+" "+this.state.minimumContribution);
        this.state.accounts = accounts;
        await instance.methods.CreateCampaign(this.state.minimumContribution)
        .send({
            from: accounts[0]
        });
    };

    render(){
        return (
            <Layout>
                <h3>Create a campaign</h3>
                <form class="ui form" onSubmit={this.onSubmit}>
                    <div class="field">
                        <label>Minimum Contribution</label>
                        <div class="ui right labeled input">
                            <input 
                                type="text" 
                                name="minimum-contribution" 
                                placeholder="Minimum Contribution"
                                value={this.state.minimumContribution}
                                onChange={event => this.setState({minimumContribution: event.target.value})}
                            />
                            <div class="ui label">
                                wei
                            </div>
                        </div>
                    </div>
                    <button class="ui button primary" type="submit">Create</button>
                </form>
            </Layout>
        );
    }
}

export default CampaignNew;