import { ItemCard } from "../../../components/itemCard";
import data from '../../data';
import RentLayout from "../layout";

export const metadata = {
  title: "Продажа"
};

export default function RentPage() {
  return (
    <>
      <RentLayout title="Все объекты на продажу">
        <div className="wrap">
          {data.purchase.map((item) => (
            <ItemCard item={item} key={item.name} />
          ))}
        </div>
      </RentLayout>
    </>
  );
}
