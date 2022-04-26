import "./OrderCheckout.style.scss";
function OrderCheckout({ notes, rate, total }) {
  return (
    <div className="order-checkout-container">
      <p>
        <span>{notes}</span>
        <span class="green">الملاحظات</span>
      </p>
      <p>
        <span> {rate} ريال</span>
        <span class="green">عمولة التطبيق</span>
      </p>

      <p class="total">
        <span>
          <span class="green">ريال</span> {total}
        </span>
        <span>المجموع</span>
      </p>
      <button>شراء</button>
    </div>
  );
}

export default OrderCheckout;
