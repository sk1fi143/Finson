import ItemPageRent from "@/components/itemRentPage";
import data from "@/app/data";

export const metadata = {
  title: "FINSON PROPERTY",
};

const tableType = [
  "Имя объекта",
  "Район",
  "Тип жилья",
  "Артикул",
  "Доступность",
  "Срок аренды",
  "Спальни",
  "Ванные",
  "Пешая доступность к морю",
  "Проживание с животными",
  "Что поблизости",
];

export default function ItemPage({ params }) {
  const selectedItem = data.rent.find(item => item.slug === params.slug);
  if(!selectedItem){
    return(
      <h1>Объект не найден</h1>
    )
  } else { metadata.title = selectedItem.name; }
  return (
    <div>
      <ItemPageRent
        textDescr='ffdsfdfdfdfdfdf'
        textRent='qwqwqwqwqw'
        title={selectedItem.name}
        price={selectedItem.price.toLocaleString()}
        tableType={tableType}
        data={data.rent}
        selectedItemSlug = {params.slug}
      />
    </div>
  );
}
