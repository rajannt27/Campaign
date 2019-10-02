import web3 from './web3';
import CampaignFactory from './build/FactoryCampaign.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x16C685EECDDCB7e1eA346040A1ea3D7044E38366'
);

export default instance;