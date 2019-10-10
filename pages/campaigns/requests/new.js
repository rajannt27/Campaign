import React,{Component} from 'react'
import Layout from '../../../components/layout'
import {Form,Button,Message,Input} from 'semantic-ui-react'
import Campaign from '../../../Ethereum/campaign'
import web3 from '../../../Ethereum/web3'
import {Link,Router} from '../../../routes'

class RequestNew extends Component{
    state = {
        value:'',
        description:'',
        recipient:'',
        loading:false,
        errorMessage:''
    };

    static async getInitialProps(props){
        const {address} = props.query;

        return {address};
    }

    onSubmit = async (event) => {
        event.preventDefault();
        await ethereum.enable();
        const campaign = Campaign(this.props.address);
        const {description, value, recipient} = this.state;
        this.setState({loading:true, errorMessage:''});
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                    description,
                    web3.utils.toWei(value, 'ether'),
                    recipient
                ).send({from: accounts[0]});
            Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
           
            this.setState({loading:false, value:'',description:'',recipient:''});
        }
        catch(err){
            this.setState({errorMessage : err.message});
        }
    }
    render(){
        return(
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>
                        Back
                    </a>
                </Link>
                <h3>Create a Request</h3>
                <Form error={!!this.state.errorMessage} onSubmit = {this.onSubmit}>
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                            value={this.state.description}
                            onChange={event => this.setState({description: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Value in ether</label>
                        <Input 
                            label="ether"
                            labelPosition="right"
                            value={this.state.value}
                            onChange={event => this.setState({value: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input 
                            value={this.state.recipient}
                            onChange={event => this.setState({recipient: event.target.value})}
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Create</Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;