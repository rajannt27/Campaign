import web3 from './web3';
import CampaignFactory from './build/FactoryCampaign.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x20D4dB6bA02a9847AB8b626A34655bD580b34FC1'
);

export default instance;