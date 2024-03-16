export const metadata = {
  title: "FINSON PROPERTY",
};

export default function ItemPage({ params }) {
  metadata.title = params.slug;
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}
