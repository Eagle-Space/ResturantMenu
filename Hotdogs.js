const menu = {
    hotdog: 4,
    fries: 3.5,
    soda: 1.5,
    sauerkraut: 1
  };
  
  let order = {};
  
  function addToOrder(item) {
    let quantity = parseInt(document.getElementById(item + "-quantity").value);
    if (quantity > 0) {
      order[item] = (order[item] || 0) + quantity;
      document.getElementById(item + "-quantity").value = "0";
      alert(`Added ${quantity} ${item} to your order.`);
    }
  }
  
function calculateSubtotal() {
    let subtotal = 0;
    for (let item in order) {
      subtotal += menu[item] * order[item];
    }
    return subtotal;
  }
  
function showOrder() {
    let subtotal = calculateSubtotal();
    let discount = subtotal >= 20 ? subtotal * 0.1 : 0;
    let tax = (subtotal - discount) * 0.0625;
    let total = subtotal - discount + tax;
  
    let summary = "<h2>Order Summary:</h2><ul>";
    for (let item in order) {
      summary += `<li>${order[item]} x ${item.charAt(0).toUpperCase() + item.slice(1)} - $${(menu[item] * order[item]).toFixed(2)}</li>`;
    }
    summary += `</ul><p>Subtotal: $${subtotal.toFixed(2)}</p>`;
    if (discount > 0) {
      summary += `<p>Discount (10%): -$${discount.toFixed(2)}</p>`;
    }
    summary += `<p>Tax (6.25%): $${tax.toFixed(2)}</p><h3>Total: $${total.toFixed(2)}</h3>`;
  
    document.getElementById("order-summary").innerHTML = summary;
  }
  
  function checkout() {
    alert("Thank you for your order!");
    order = {};
    showOrder();
  }
  