import ItemPageComp from "@/components/itemPage";
import data from "@/app/data";

export const metadata = {
  title: "FINSON PROPERTY",
};

export default function ItemPage({ params }) {
  metadata.title = params.slug;
  return (
    <div>
      <ItemPageComp textDescr='ffdsfdfdfdfdfdf' title={data.params}/>
    </div>
  );
}
