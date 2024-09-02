
const DropdownMenu = ({ data, name, getValue, onChange }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(name, value); // 將事件回調給父層
  };

  const isDurationArray =
    Array.isArray(data[0]?.[getValue]) && name === "duration";

  return (
    <select name={name} id={name} onChange={handleChange} className="m-2">
      {console.log(data)}
      <option value="">Choose {name} </option>
      {isDurationArray
        ? data.map((item, i) =>
            item[getValue].map((subItem, j) => (
              <option key={`${i}-${j}`} value={subItem} className="p-2" >
                {subItem}
              </option>
            ))
          )
        : data.map((item, index) => (
            <option key={index} value={item[getValue]}>
              {item[getValue]}
            </option>
          ))}
    </select>
  );
};

export default DropdownMenu;