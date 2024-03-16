export default function RentLayout({ children, title }) {
  return (
    <main>
      <h2 className="title">{title}</h2>
      {children}
    </main>
  );
}
