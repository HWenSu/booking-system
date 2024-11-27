import useAPIService from '../components/hooks/useAPIService';

const Staff = () => {
  const { data } = useAPIService("http://localhost:5000/miumiu-spa/staff");
  console.log(data);

  return (
    <div>
      <ul className="flex flex-col w-[80vw]  mx-auto py-[8vh]">
        {data &&
          data.map((s) => {
            return (
              <li
                key={s.id}
                className="flex justify-around m-[2vh] p-4 bg-white/50 rounded-lg"
              >
                <div
                  style={{ backgroundImage: `url(${s.img ||" ../modals/images/b170870007dfa419295d949814474ab2_t.jpeg"})` }}
                  className={`w-[10rem] h-[10rem] rounded-full bg-[length:12rem] bg-no-repeat bg-left`}
                ></div>
                <div className="w-[40rem]">
                  <div className="flex items-center">
                    <h2 className="font-semibold text-[2rem]  mr-7 text-highlight ">
                      {s.name}
                    </h2>
                    <p>{s.gender}</p>
                  </div>

                  <div className="flex my-4">
                    <h3 className="mr-3 p-2 rounded-full bg-tertiary text-highlight ">
                      {s.expertise}
                    </h3>
                  </div>
                  <div className="flex bg-white/70 rounded-full p-5">
                    {s.certificates.map((certificate, index) => {
                      return (
                        <h3 key={index} className="mr-5">
                          {" "}
                          {certificate.name}
                        </h3>
                      );
                    })}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Staff