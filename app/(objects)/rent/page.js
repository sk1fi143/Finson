import { ItemCard } from "../../../components/itemCard";
import data from "../../data";
import RentLayout from "../layout";

export const metadata = {
  title: "Аренда",
};

export default function RentPage() {
  return (
    <>
      <RentLayout title="Все объекты на аренду">
        <div className="wrap">
          {data.rent.map((item) => (
            <ItemCard item={item} key={item.name} />
          ))}
        </div>
      </RentLayout>
    </>
  );
}
