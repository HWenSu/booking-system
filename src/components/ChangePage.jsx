const ChangePage = ({ changePageString, onChangePage }) => {
  return (
    <div>
      <button onClick={onChangePage} state={changePageString}>
        {changePageString}
      </button>
    </div>
  );
};

export default ChangePage