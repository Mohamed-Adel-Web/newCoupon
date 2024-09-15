import { ICoupon } from "@/app/cors/interfaces/icoupon";

export default function StoreCoupon({ coupon }: { coupon: ICoupon }) {
  return (
    <>
      {" "}
      <div className="md:col-span-2 flex md:flex-col justify-between text-center col-span-12 text-red-600 font-bold  ">
        <h6 className="text-red-600">{coupon.title}</h6>
        <h6>Coupon</h6>
      </div>
      <div className="md:col-span-10 grid grid-cols-12 col-span-12 gap-4">
        <div className="md:col-span-7 col-span-12 bg-red-400">
          {coupon.title}
        </div>
        <div className="md:col-span-7 col-span-12 bg-gray-500">
          AVALIABLE IN
        </div>
      </div>
    </>
  );
}
