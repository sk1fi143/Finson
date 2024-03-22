import { ServiceCard } from "../../../components/serviceCard";
import data from "../../data";

export const metadata = {
  title: "Услуги",
};

export default function RentPage() {
  return (
    <>
      <h2 className="title">Все услуги</h2>
      <div className="wrap">
        {data.service.map((item) => (
          <ServiceCard item={item} key={item.name} />
        ))}
      </div>
    </>
  );
}
