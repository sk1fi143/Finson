import ItemPageRent from "@/components/itemRentPage";
import data from "@/app/data";

export const metadata = {
  title: "FINSON PROPERTY",
};

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
        price={selectedItem.price}
      />
    </div>
  );
}
