export default function Parameters({ tableType, data, selectedItemSlug  }) {
  const selectedItem = data.find(item => item.slug === selectedItemSlug);

  if (!selectedItem) {
    return <div>Object not found</div>;
  }

  return (
    <div className="table">
      <h3 className="table__title">Характеристики</h3>
      {tableType.map((type, index) => (
        <>
          <div className="table__line"></div>
          <div className="table__row" key={index}>
            <span className="table__row__type">{type}</span>
            <span className="table__row__objData">
              {selectedItem.table && selectedItem.table[index]}
            </span>
          </div>
        </>
      ))}
    </div>
  );
}
