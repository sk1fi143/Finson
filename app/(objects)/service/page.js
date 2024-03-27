import { ServiceCard } from '../../../components/serviceCard';
import data from '../../data';

export const metadata = {
  title: 'Услуги',
};

export default function ServicePage() {
  return (
    <>
      <h2 className="title">Все услуги</h2>
      <div className="wrap center">
        {data.service.map((item) => (
          <ServiceCard item={item} key={item.name} />
        ))}
      </div>
    </>
  );
}
