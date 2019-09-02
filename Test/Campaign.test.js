const events = require('events').EventEmitter.defaultMaxListeners = 0;
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../Ethereum/build/FactoryCampaign.json');
const compiledCampaign = require('../Ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'});

    await factory.methods.CreateCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    [campaignAddress] = await factory.methods.GetCampaigns().call();
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(factory.options.address);
    });

    it('marks caller the campaign manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(manager, accounts[0]);
    });

    it('allows people to contribute money and is marked approver', async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]
        });

        const isApprovers = await campaign.methods.approvers(accounts[1]).call();
        assert(isApprovers);
    });

    it('requires a minimum contribution', async () =>{
        try{
            await campaign.methods.contribute().send({
                value: '5',
                from: accounts[1]
            });
            assert(false);
        }
        catch(err)
        {
            assert(err);
        }
    });

    it('allows a manager to make a payment request', async () =>{
        await campaign.methods
        .createRequest('Payment desc', '100', accounts[1])
        .send({
            gas:'1000000',
            from: accounts[0]
        });

        const request = await campaign.methods.requests(0).call();
        assert.equal(request.description, 'Payment desc');
    });

    it('processes requests', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10','ether')
        });

        await campaign.methods
        .createRequest('Buy raw materials',web3.utils.toWei('5','ether'),accounts[1])
        .send({from: accounts[0], gas:'1000000'});

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas:'1000000'
        });

        await campaign.methods.finaliseRequest(0).send({
            from: accounts[0],
            gas:'1000000'
        });

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        console.log(balance);
        assert(balance > 103);
    })
});

