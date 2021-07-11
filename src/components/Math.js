function Math() {
  var a = 1;
  var b = 2;
  var name = "TTV";
  var product = {
    id: 1,
    name: "1. Điện thoại iPhone 12 Pro Max 128GB",
    price_new: 2000000,
    price_old: 1890000,
    sold: 2938,
    discount: 10,
    status: true ? "Active" : "Pending",
  };
  return (
    <div>
      <div className="row my-2">
        <div className="col-4 border">
          <p>Value a = {a}</p>
          <p>Vavlue b = {b}</p>
          <p>Sum = {a + b}</p>
          <p>Name : {name}</p>
        </div>
        <div className="col-4 border"></div>
        <div className="col-4 border"></div>
      </div>
    </div>
  );
}

export default Math;
