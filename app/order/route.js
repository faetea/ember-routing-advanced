import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return [
      {
        id: 1,
        orderDate: '2015-10-16',
        totalCost: 270,
        purchaser: "Carmen's Kitchen"
      },
      {
        id: 2,
        orderDate: '2015-11-30',
        totalCost: 540,
        purchaser: "Lovin' Oven"
      },
      {
        id: 3,
        orderDate: '2015-12-08',
        totalCost: 135,
        purchaser: "Amelia Brent"
      },
    ][params.order_id - 1]; // not real life
  }
});
