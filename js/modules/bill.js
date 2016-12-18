define(['jquery', 'utils/events', 'utils/string_template'], function($, events, strTemplate) {
  var $bill;
  var billItemTemplate = '<tr><td>{name}</td><td class="qty">{quantity}</td><td>{price}.00</td></tr>';

  var billTotal = 0;

  function renderBillItem(billItem) {
    return strTemplate.render(billItemTemplate, billItem);
  }

  function renderTotal() {
    return strTemplate.render('Total: {billTotal}.00', { billTotal });
  }

  function handleAddBillItem() {

    return function(billItem) {
      $.extend(billItem, { quantity: 1 });
      billTotal += billItem.quantity * parseInt( billItem.price );
      $bill.find('#receipt').append( renderBillItem(billItem) );
      $bill.find('#total').html( renderTotal() );
    }
  }

  function handleRemoveBillItem() {

    return function(e) {
      $(this).remove();
    }
  }

  function addEventListeners() {
      events.listen('tray', handleAddBillItem());
      $bill.on('click', '#receipt tbody tr', handleRemoveBillItem())
  }

  return {
    init: function($billContainer) {
      $bill = $billContainer;

      addEventListeners();
    }
  }
});
