import React, {Component} from 'react';
import Layout from '../../components/layout';
import instance from '../../Ethereum/factory';
import web3 from '../../Ethereum/web3';

class CampaignNew extends Component{
    state = {
        minimumContribution: '',
        errorMessage:''
    };
    onSubmit = async (event) => {
        event.preventDefault();
        try{
            const accounts = await web3.eth.getAccounts();
            await instance.methods.CreateCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });
        }
        catch(err){
            this.setState({errorMessage: err.message});
        }
    };

    render(){
        return (
            <Layout>
                <h3>Create a campaign</h3>
                <form class="ui form error" onSubmit={this.onSubmit} >
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
                    <div class="ui error message">
                        <i class="close icon"></i>
                        <div class="header">
                            Oops!
                        </div>
                        <ul class="list">
                            <li>{this.state.errorMessage}</li>
                        </ul>
                    </div>
                    <button class="ui button primary" type="submit">Create</button>
                </form>
            </Layout>
        );
    }
}

export default CampaignNew;