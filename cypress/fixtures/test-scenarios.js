export const chatScenarios = {
  mob: {
    name: 'MOB Intents',
    testCases: [
      { intent: 'telus reward expiring', followUps: ['agent'] },
      { intent: 'pre authorized update information', followUps: ['agent'] },
      { intent: 'Payment issue', followUps: ['agent'] },
      { intent: 'Credit card issues', followUps: ['agent'] },
      { intent: 'pre authorized payment discount', followUps: ['agent'] },
      { intent: 'Why my rewards points expired', followUps: ['agent'] },
      { intent: 'Accidental roaming', followUps: ['agent'] },
      { intent: 'I want to know the balance on my bill', followUps: ['agent'] },
      { intent: 'Bill dispute', followUps: ['agent'] },
      { intent: 'Ebill notification', followUps: ['agent'] },
      { intent: 'View mobility bill', followUps: ['agent'] },
      { intent: 'How does roaming work', followUps: ['agent'] },
      { intent: 'Explain my first bill', followUps: ['agent'] },
      { intent: 'Set up pre authorized payment', followUps: ['agent'] },
      { intent: 'Pre-Authorized Payments', followUps: ['agent'] },
      { intent: 'I want to make a payment', followUps: ['agent'] },
      { intent: 'Want to make a credit card payment', followUps: ['agent'] },
      { intent: 'Overpaid balance', followUps: ['agent'] },
      { intent: 'Payment', followUps: ['agent'] },
      { intent: 'When easy roam take effect', followUps: ['agent'] },
      { intent: 'How does roaming cost', followUps: ['agent'] },
      { intent: 'Roaming coverage map', followUps: ['agent'] },
      { intent: "I don't understand my bill", followUps: ['agent'] },
      { intent: 'Bill', followUps: ['agent'] },
      { intent: 'Want to change my rate plan', followUps: ['agent'] },
      { intent: 'What are the available plans', followUps: ['agent'] }
    ]
  },
  ffh: {
    name: 'FFH Intents',
    testCases: [
      { intent: 'Set up pre authorized payment', followUps: ['agent'] },
      { intent: 'pre authorized payment issue', followUps: ['agent'] },
      { intent: 'pre authorized payment discount', followUps: ['agent'] },
      { intent: 'Why my reward points expired', followUps: ['agent'] },
      { intent: 'Can you explain telus rewards', followUps: ['agent'] },
      { intent: 'How to view my telus rewards', followUps: ['yes', 'agent'] },
      { intent: 'What is my account balance', followUps: ['agent'] },
      { intent: 'Want to subscribe to ebill', followUps: ['agent'] },
      { intent: 'Bill copie', followUps: ['agent'] },
      { intent: 'Want to review my fist bill', followUps: ['agent'] },
      { intent: 'Want to make a payment', followUps: ['agent'] },
      { intent: 'Payment', followUps: ['agent'] },
      { intent: 'Status of my refund', followUps: ['agent'] },
      { intent: 'Bill', followUps: ['agent'] },
      { intent: 'High bill', followUps: ['agent'] },
      { intent: 'I have other charges on my bill', followUps: ['Other charges', 'agent'] },
      { intent: 'Rate increase', followUps: ['Rate update', 'agent'] },
      { intent: 'Bill Dispute', followUps: ['yes'] },
      { intent: 'Want to remove optik tv channel', followUps: ['agent'] },
      { intent: 'Want to remove pik tv channel', followUps: ['agent'] },
      { intent: 'Want to change my tv channel', followUps: ['agent'] }
    ]
  }
};

export const mobScenarios = chatScenarios.mob;
export const ffhScenarios = chatScenarios.ffh; 