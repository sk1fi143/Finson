import ItemPageService from "@/components/itemServicePage";
import data from "@/app/data";

export const metadata = {
  title: "FINSON PROPERTY",
};

export default function ItemPage({ params }) {
  const selectedItem = data.service.find(item => item.slug === params.slug);
  if(!selectedItem){
    return(
      <h1>Услуга не найдена</h1>
    )
  } else { metadata.title = selectedItem.name; }
  return (
    <div>
      <ItemPageService
        textDescr='qqwqwqwqwqwqwqwqw'
        title={selectedItem.name}
        price={selectedItem.price}
      />
    </div>
  );
}