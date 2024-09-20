
const ServiceDropdown = ({ data, onChange, isHidden }) => {
  return (
    <div className={isHidden ? "hidden" : "block"}>
      {data &&
        data.map((item, itemIndex) => (
          <div key={itemIndex}>
            <label>{item.label}</label>
            <select className="m-2" required>
              <option value="">Choose {item.label}</option>
              {item.option.map((option, index) => {
                // 判斷 option 是否為陣列
                if (Array.isArray(option)) {
                  return option.map((number, numberIndex) => (
                    <option key={numberIndex} value={number} className="p-2">
                      {number}
                    </option>
                  ));
                } else {
                  return (
                    <option key={index} value={option} className="p-2">
                      {option}
                    </option>
                  );
                }
              })}
            </select>
          </div>
        ))}
    </div>
  );
};

export default ServiceDropdown;
