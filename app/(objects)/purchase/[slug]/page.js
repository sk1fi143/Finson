import ItemPagePurch from "@/components/itemPurchPage";
import data from "@/app/data";

export const metadata = {
  title: "FINSON PROPERTY",
};

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
        textDescr='qqwqwqwqwqwqwqwqw'
        title={selectedItem.name}
        price={selectedItem.price}
      />
    </div>
  );
}

