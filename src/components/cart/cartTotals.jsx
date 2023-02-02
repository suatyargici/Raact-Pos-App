import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const CartTotals = () => {
  return (
    <div className="cart flex h-full max-h-[calc(100vh_-_90px)] flex-col">
      <h2 className="bg-blue-600 py-4 text-center font-bold tracking-wide text-white">
        Sepetteki Ürünler
      </h2>

      <ul className="cart-items flex flex-col gap-y-3 overflow-y-auto px-2 py-2">
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="h-16 w-16 object-cover"
            />
            <div className="ml-2 flex flex-col">
              <b>Elma</b>
              <span>12₺ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              type="primary"
              size="small"
              className="flex w-full items-center justify-center !rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="">1</span>
            <Button
              type="primary"
              size="small"
              className="flex w-full items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="h-16 w-16 object-cover"
            />
            <div className="ml-2 flex flex-col">
              <b>Elma</b>
              <span>12₺ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              type="primary"
              size="small"
              className="flex w-full items-center justify-center !rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="">1</span>
            <Button
              type="primary"
              size="small"
              className="flex w-full items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="h-16 w-16 object-cover"
            />
            <div className="ml-2 flex flex-col">
              <b>Elma</b>
              <span>12₺ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              type="primary"
              size="small"
              className="flex w-full items-center justify-center !rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="">1</span>
            <Button
              type="primary"
              size="small"
              className="flex w-full items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="h-16 w-16 object-cover"
            />
            <div className="ml-2 flex flex-col">
              <b>Elma</b>
              <span>12₺ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              type="primary"
              size="small"
              className="flex w-full items-center justify-center !rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="">1</span>
            <Button
              type="primary"
              size="small"
              className="flex w-full items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="h-16 w-16 object-cover"
            />
            <div className="ml-2 flex flex-col">
              <b>Elma</b>
              <span>12₺ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              type="primary"
              size="small"
              className="flex w-full items-center justify-center !rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="">1</span>
            <Button
              type="primary"
              size="small"
              className="flex w-full items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
      </ul>

      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>99₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %8</b>
            <span className="text-red-700">+7.92₺</span>
          </div>
        </div>
        <div className="mt-4 border-b">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">99₺</span>
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
