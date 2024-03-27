import ItemPagePurch from "@/components/itemPurchPage";
import data from "@/app/data";

export const metadata = {
  title: "FINSON PROPERTY",
};

const tableType = [
  "Статус недвижимости",
  "Район",
  "Артикул",
  "Дата строительства",
  "Площадь",
  "Количество спален",
  "Количество ванных комнат",
  "Инфраструктура комплекса",
  "Платежи",
  "Привелегии от застройщика",
  "Тип собственности",
  "Что поблизости",
];

export default function ItemPage({ params }) {
  const selectedItem = data.purchase.find(item => item.slug === params.slug);
  if(!selectedItem){
    return(
      <h1>Объект не найден</h1>
    )
  } else { metadata.title = selectedItem.name; }
  return (
    <div>
      <ItemPagePurch
        textDescr={selectedItem.description}
        title={selectedItem.name}
        price={selectedItem.price.toLocaleString()}
        tableType={tableType}
        data={data.purchase}
        selectedItemSlug = {params.slug}
      />
    </div>
  );
}

