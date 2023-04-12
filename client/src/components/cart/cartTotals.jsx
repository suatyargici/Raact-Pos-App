import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useSelector,useDispatch } from "react-redux";
import { deleteCart } from "../../redux/cartSlice";


const CartTotals = () => {
  const  cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="cart flex h-full max-h-[calc(100vh_-_90px)] flex-col">
      <h2 className="bg-blue-600 py-4 text-center font-bold tracking-wide text-white">
        Sepetteki Ürünler
      </h2>

      <ul className="cart-items flex flex-col gap-y-3 overflow-y-auto px-2 py-2">
        {cart.cartItems?.map((item) => (
          <li className="cart-item flex justify-between" key={item._id}>
            <div className="flex items-center">
              <img src={item.img} alt="" className="h-16 cursor-pointer w-16 object-cover" onClick={()=> dispatch(deleteCart(item))}/>
              <div className="ml-2 flex flex-col">
                <b>{item.title}</b>
                <span>
                  {item.price}₺ x {item.quantity}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              <Button
                type="primary"
                size="small"
                className="flex w-full items-center justify-center !rounded-full"
                icon={<PlusCircleOutlined />}
              />
              <span className="font-bold">{item.quantity}</span>
              <Button
                type="primary"
                size="small"
                className="flex w-full items-center justify-center !rounded-full"
                icon={<MinusCircleOutlined />}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>{cart.total > 0 ? cart.total.toFixed(2) : 0}₺</span>
          </div>
          <div className="flex justify-between p-2">
          <b>KDV %{cart.tax}</b>
            <span className="text-red-700">
              {(cart.total * cart.tax) / 100 > 0
                ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
                : 0}
              ₺
            </span>
          </div>
        </div>
        <div className="mt-4 border-b">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">
              {cart.total + (cart.total * cart.tax) / 100 > 0
                ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                : 0}
              ₺
            </span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full">
            Sipariş Oluştur
          </Button>
          <Button
            type="primary"
            size="large"
            className="mt-2 flex w-full items-center justify-center"
            icon={<ClearOutlined />}
            danger
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
