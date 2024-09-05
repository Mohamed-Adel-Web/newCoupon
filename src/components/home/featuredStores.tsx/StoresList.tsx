
import StoreCard from "@/components/cards/StoreCard";
import { IStore } from "@/app/cors/interfaces/istore";
import { useFeaturedStores } from "@/app/cors/Services/Stores";

export default async function StoresList({ lang }: { lang: string }) {
  const featuredStores: IStore[] = await useFeaturedStores(lang);
  return (
    <div className="grid grid-cols-12 gap-3">
      {featuredStores.map((store) => (
        <div
          className="bg-white shadow-md rounded-lg p-4 xl:col-span-3 lg:col-span-4 md:col-span-6  col-span-12"
          key={store.id}
        >
          <StoreCard store={store} />
        </div>
      ))}
    </div>
  );
}
