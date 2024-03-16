import { ItemCard } from "../../../components/itemCard";
import data from "../../data";
import RentLayout from "../layout";

export const metadata = {
  title: "Услуги",
};

export default function RentPage() {
  return (
    <>
      <RentLayout title="Все услуги">
        <div className="wrap">
          {data.service.map((item) => (
            <ItemCard item={item} key={item.name} />
          ))}
        </div>
      </RentLayout>
    </>
  );
}
