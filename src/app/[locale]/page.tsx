import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import useGetSwiper from "../cors/Services/Slider";
import { ISlider } from "../cors/interfaces/islider";
import MainSlider from "@/components/home/mainSlider/mainSlider";

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const swiperData: ISlider[] = await useGetSwiper(params.locale);
  return (
    <div className="my-3 text-center">
      <MainSlider images={swiperData} />
    </div>
  );
}
