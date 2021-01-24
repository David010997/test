import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/orders').reply(() => {
  const orders = [
    {
      ticker: 'CBAT',
      name: 'CBAK Energy Technology Inc.',
      price: 6.15,
      change_pd: 54.91,
      change_1m: 7.15,
      volume_d: 92887702,
      volume: 11201279,
      price_bd: -1,
      volume_bd: 0,
      alerts: 16,
      type: 1
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 1
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 1
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 1
    },
    {
      ticker: 'CBAT',
      name: 'CBAK Energy Technology Inc.',
      price: 6.15,
      change_pd: 54.91,
      change_1m: 7.15,
      volume_d: 92887702,
      volume: 11201279,
      price_bd: -1,
      volume_bd: 0,
      alerts: 16,
      type: 1
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 1
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 1
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 1
    },
    {
      ticker: 'CBAT',
      name: 'CBAK Energy Technology Inc.',
      price: 6.15,
      change_pd: 54.91,
      change_1m: 7.15,
      volume_d: 92887702,
      volume: 11201279,
      price_bd: -1,
      volume_bd: 0,
      alerts: 16,
      type: 1
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 0
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 0
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 0
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 0
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 0
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 0
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 0
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 0
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 0
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'APWC',
      name: 'Asia Pacific Wire & Cable Corporation',
      price: 1.95,
      change_pd: 47.72,
      change_1m: 5.19,
      volume_d: 29236597,
      volume: 3133703,
      price_bd: 5,
      volume_bd: 10,
      alerts: 9,
      type: 0
      
    },
    {
      ticker: 'NHLD',
      name: 'National Holdings Corporation',
      price: 2.72,
      change_pd: 2.72,
      change_1m: 2.39,
      volume_d: 1604525,
      volume: 11201279,
      price_bd: 40,
      volume_bd: 9,
      alerts: 9,
      type: 0
    },
    {
      ticker: 'SOLO',
      name: 'Electrameccanica Vehicles Corp',
      price: 6.29,
      change_pd: 30.22,
      change_1m: 9.22,
      volume_d: 1705365,
      volume: 294902,
      price_bd: 47,
      volume_bd: 1,
      alerts: 9,
      type: 0
    },
  ];

  return [200, { orders }];
});

mock.onGet('/api/orders/1').reply(() => {
  const order = {
    id: '5ecb8a6879877087d4aa2690',
    coupon: null,
    createdAt: moment()
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      address1: 'Street John Wick, no. 7',
      address2: 'House #25',
      city: 'San Diego',
      country: 'USA',
      name: 'Adam Denisov'
    },
    items: [
      {
        id: '5ecb8abbdd6dfb1f9d6bf98b',
        billingCycle: 'monthly',
        currency: '$',
        name: 'Project Points',
        quantity: 25,
        unitAmount: 50.25
      },
      {
        id: '5ecb8ac10f116d04bed990eb',
        billingCycle: 'monthly',
        currency: '$',
        name: 'Freelancer Subscription',
        quantity: 1,
        unitAmount: 5.00
      }
    ],
    number: 'DEV-103',
    paymentMethod: 'CreditCard',
    status: 'pending',
    totalAmount: 500.00
  };

  return [200, { order }];
});
