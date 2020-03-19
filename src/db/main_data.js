import Store from "../../src/store/store";


const domain = Store.state.config.domain;
const address = Store.state.config.address;
const telephone = Store.state.config.telephone;
const name = Store.state.config.name;

let icons = `
<div class="field has-addons">
  <p class="control">
    <i class="fab fa-skype ml-5 is-size-3 has-text-primary"></i>
    <span class="has-text-weight-bold">Skype</span>
  </p>
  <p class="control">
   <i class="fas fa-envelope ml-3 is-size-3 has-text-primary"></i>
   <span class="has-text-weight-bold">Email</span>

  </p>
</div>

                    `;
const global = {
    name,
    telephone,
    address,
    domain,
};

const features = [

    {
        icon: 'fas fa-users-cog',
        image: '/img/home/trade-for-me.jpg',
        title: 'Trade for me Service',
        text: `At ${name} you can be guided by Professional traders who are continuously making profits from trading due to years of experience in the financial trading industry.`,
    },

    {
        icon: 'fas fa-money-bill-wave',
        image: '/img/home/profit.jpg',
        title: 'Guaranteed Earnings',
        text: `Whether Your Using The Trade For Me Service Or The ${name} Software, Your Profits Are Always Guranteed. Join ${name} Services Today And Start Making Profits.`,
    },
    {
        icon: 'fas fa-headset',
        image: '/img/home/contact.jpg',
        title: 'Available 24/7',
        text: ` At ${name}, our agents work round the clock to keep our customers satisfied. Have and issue or just want to say hi. we are happy to hear from you.`,

    },


];

const preferences = [
    {
        title: 'PRIMARY TFM',
        item: [
            'Subscription cost range; USD 5,000+',
            'Estimated minimum payout (2weeks); USD $19,850',
            '24/7 Customer support', 'Designated Trade Expert',
            'Trade-expert contact:',
        ],
        contact: icons

    },
    {
        title: 'Secondary TFM',
        item: [
            'Subscription Cost Range; 1850+',
            'Estimated minimum payout (2weeks); USD $9,850',
            '24/7 Customer support',
            'Designated Trade Expert',
            '100% access into trading account',
        ],
        contact: `<br>`


    }
];

const starters = [
    {
        no: '01',
        title: 'Subscribe',
        text: 'Subscribe into the TradeForMe service ( 2 basic category, Tick your Preferred category in Application form ).',
    },

    {
        no: '02',
        title: 'Open Account',
        text: 'After Subscribing to the Trade for me Service, Open a good broker account and deposit the minimum.'
    },

    {
        no: '03',
        title: 'Get a Trader',
        text: 'Upon confirmation of your broker account, an expert is assigned to Trade for you  ( Minimum of 2 weeks ).',
    },
];

const history = [
    {
        number: '1366',
        title: 'Total Clients'
    },
    {
        number: '4',
        title: 'Global Fin\n' +
            'TechAwards'
    },
    {
        number: '220',
        title: 'Employees'
    },
    {
        number: '5',
        title: 'Years of Trading\n' + '  Experince'
    },
];


export default {features, preferences, global, starters, history};
