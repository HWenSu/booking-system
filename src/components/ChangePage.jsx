const ChangePage = ({ data, onClick, currentPage, pagesLength }) => {
  const nextType = data[0].type[1]
  const backType = data[0].type[0];

  {
    //第一頁只會渲染出 Next 按鈕
    if (currentPage === 1) {
      return (
        <button onClick={() => onClick(nextType)} className="changePageBtn">
          {" "}
          {nextType}{" "}
        </button>
      );
    } // 最後一頁只會渲染出 Back 按鈕
    else if ((currentPage === pagesLength)) {
      return (
        <button onClick={() => onClick(backType)} className="changePageBtn">
          {" "}
          {backType}{" "}
        </button>
      );
    } else {
      return (
        <div>
          {data[0].type.map((type, index) => (
            <button
              onClick={() => onClick(type)}
              key={index}
              className="changePageBtn"
            >
              {type}
            </button>
          ))}
        </div>
      );
    }
  }
};

export default ChangePage