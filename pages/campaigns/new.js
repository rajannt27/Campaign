import React, {Component} from 'react';
import Layout from '../../components/layout';
import instance from '../../Ethereum/factory';
import web3 from '../../Ethereum/web3';
import {Form, Button, Input, Message} from 'semantic-ui-react'

class CampaignNew extends Component{
    state = {
        minimumContribution: '',
        errorMessage:'',
        loading : false
    };
    onSubmit = async (event) => {
        event.preventDefault();
        await ethereum.enable();
        this.setState({ loading : true, errorMessage: '' });
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
        this.setState({ loading : false });
    };

    render(){
        return (
            <Layout>
                <h3>Create a campaign</h3>
                <Form error={!!this.state.errorMessage} onSubmit={this.onSubmit} >
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event => this.setState({minimumContribution: event.target.value})}
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button primary loading = {this.state.loading}>Create</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;