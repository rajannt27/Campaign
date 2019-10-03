import React, {Component} from 'react';
import {Button,Form,Input,Message} from 'semantic-ui-react';
import Campaign from '../Ethereum/campaign';
import web3 from '../Ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends Component{
    state = {
        value:'',
        loading:false,
        errorMessage:''
    };

    onSubmit = async (event) => {
        event.preventDefault();
        await ethereum.enable();
        const campaign = Campaign(this.props.address);
        this.setState({loading:true, errorMessage:''});
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether') 
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`);
           
        }
        catch(err){
            this.setState({errorMessage : err.message});
        }
        this.setState({loading:false, value:''});
    }

    render(){
        return(
            <div>
            <h3>Contribute to this campaign!</h3>
            <Form error={!!this.state.errorMessage} onSubmit = {this.onSubmit}>
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input 
                        label="ether"
                        labelPosition="right"
                        value={this.state.value}
                        onChange={event => this.setState({value: event.target.value})}
                    />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button loading={this.state.loading} primary>Contribute</Button>
            </Form>
            </div>
        );
    } 
}

export default ContributeForm;
