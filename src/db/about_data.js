import Store from "../../src/store/store";


const domain = Store.state.config.domain;
const address = Store.state.config.address;
const telephone = Store.state.config.telephone;
const name = Store.state.config.name;


const global = {
    name,
    telephone,
    address,
    domain,
};


const history = [

    {
        title: 'Brief History',
        text: `
                            The TradeForMe service was launched by ${name} in 2016, since then this has been a
                            life-changing service for hundreds of thousands of personal Traders, companies & business
                            firms who subscribed to it. Our positive impact in the industry with the ‘Trade For Me’
                            service led to its infamous nature leading to an aggressive impersonation or rather
                            copyright breach of the service by Fraudsters.
                            <br>
                            <br>
                            If you are reading this and claim to have a trader who claims to be trading for you while
                            he/she isn’t a recognized ${name} expert, There’s a 99.9% chance you are in the wrong
                            hands because as of 2018 and beyond, only ${name}  possesses the parent registered
                            regulatory right to offer the Trade For Me Service in the industry.
                            <br>
                            <br>
                            We are very interested in seeing all level and types of traders grow, with our expert and
                            the many years of experience embedded in them, we are able to comfortably average a weekly
                            income of about $7,199 from a capital investment as low as $450 only.

                        `,
    }

];

const profit = [

    {
        image: '/img/icons/cash.svg',
        title: 'PROFIT',
        text: `  10% of whatever profit made at the end of a trade-session is to be paid by account holder to
                            ${name}. The 2 different TradeForMe Categories comes with their different offers,
                            Interested traders kindly contact us for more information T&Cs Apply. <br>Are you still reading
                            this? contact us right away to experience it all first hand. contact@${domain}`,
    },
    {
        image: '/img/icons/history.svg',
        title: `History`,
        text: `
                            The TradeForMe service was launched by ${name} in 2016, since then this has been a
                            life-changing service for hundreds of thousands of personal Traders, companies & business
                            firms who subscribed to it. Our positive impact in the industry with the ‘Trade For Me’
                            service led to its infamous nature leading to an aggressive impersonation or rather
                            copyright breach of the service by Fraudsters. If you are reading this and claim to have a
                            trader who claims to be trading for you while he/she isn’t a recognized ${name} expert,
                            There’s a 99.9% chance you are in the wrong hands because as of 2018 and beyond, only
                            ${name} possesses the parent registered regulatory right to offer the Trade For Me Service
                            in the industry.`
    },
    {
        image: '/img/icons/goal.svg',
        title: 'Goal',
        text: `Overtime as a goal driven team with a solid workforce, we also developed the highly
                            acclaimed NBOT1.0, The most efficient Trading ToolKit according to user conducted surveys &
                            as described at the 2018 IIF Awards. We are proud to help many traders around the globe
                            improve their standard of living through revenues from trading digital options.`
    }
];

export default {global, history, profit};
