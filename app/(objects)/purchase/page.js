import { ItemCard } from "@/components/itemCard";
import data from "@/app/data";
import RentLayout from "../layout";

export const metadata = {
  title: "Продажа",
};

export default function RentPage() {
  return (
    <>
      <h2 className="title">Все объекты на продажу</h2>
      <div className="wrap">
        {data.purchase.map((item) => (
          <ItemCard item={item} key={item.name} />
        ))}
      </div>
    </>
  );
}
