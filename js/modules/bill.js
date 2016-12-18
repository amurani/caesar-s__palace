define(['jquery', 'utils/events', 'utils/string_template', 'redux'], function($, events, strTemplate, redux) {

  var $bill;
  var billItemTemplate = '<tr data-id="{id}"><td>{name}</td><td class="qty">{quantity}</td><td>{price}.00</td></tr>';

  var billTotal = 0;

  var store;

  var defaultBillState = {
    total: 0,
    billItems: []
  }

  var billActions = {
    ADD_BILL_ITEM:    'ADD_BILL_ITEM',
    REMOVE_BILL_ITEM: 'REMOVE_BILL_ITEM'
  }

  function billReducer(billState, billAction) {
    billState = billState || defaultBillState;
    switch (billAction.type) {
      case billActions.ADD_BILL_ITEM:

        var billItem = billState.billItems.filter(function(billItem) {
          return billItem.id === billAction.billItem.id;
        });

        if (billItem.length) {
          return Object.assign({}, billState, {
            billItems: billState.billItems.map(function(_billItem) {
              if (_billItem.id === billItem[0].id)
                _billItem.quantity = _billItem.quantity + 1;
              return _billItem;
            })
          });
        } else {
          return Object.assign({}, billState, {
            billItems: []
              .concat(billState.billItems)
              .concat({
                id: billAction.billItem.id,
                name: billAction.billItem.name,
                price: billAction.billItem.price,
                quantity: 1
              })
          });
        }

      case billActions.REMOVE_BILL_ITEM:
        return Object.assign({}, billState, {
          billItems: billState.billItems.filter(function(billItem) {
            if (billItem.id === billAction.billItemId) {
              billItem.quantity = billItem.quantity - 1;
              if (billItem.quantity !== 0)
                return billItem;
              else
                return;
            }

            return billItem;
          })
        });
      default:
        return billState;
    }
  }

  function renderBillItem(billItem) {
    return strTemplate.render(billItemTemplate, billItem);
  }

  function renderTotal(billTotal) {
    return strTemplate.render('Total: {billTotal}.00', { billTotal });
  }

  function renderBill() {
    var billTotal = 0;

    $bill.find('#receipt').html('');
    store.getState().billItems.forEach(function(billItem) {
      $bill.find('#receipt').append( renderBillItem(billItem) );

      billTotal += parseInt( billItem.price ) * billItem.quantity;
    });

    $bill.find('#total').html( renderTotal(billTotal) );
  }

  function handleAddBillItem() {

    return function(billItem) {
      store.dispatch({ type: billActions.ADD_BILL_ITEM, billItem: billItem });
    }
  }

  function handleRemoveBillItem() {

    return function(e) {
      store.dispatch({ type: billActions.REMOVE_BILL_ITEM, billItemId: $(this).data().id });
    }
  }

  function addEventListeners() {
      events.listen('tray', handleAddBillItem());
      $bill.on('click', '#receipt tbody tr', handleRemoveBillItem())
  }

  return {
    init: function($billContainer) {
      $bill = $billContainer;

      store = redux.createStore(billReducer);
      store.subscribe(renderBill);

      addEventListeners();
    }
  }
});
