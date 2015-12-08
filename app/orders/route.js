import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        orderDate: '2015-10-16',
        totalCost: 270,
        purchaser: "Carmen's Kitchen"
      },
      {
        orderDate: '2015-11-30',
        totalCost: 540,
        purchaser: "Lovin' Oven"
      },
      {
        orderDate: '2015-12-08',
        totalCost: 135,
        purchaser: "Amelia Brent"
      },
    ];
  }
});
