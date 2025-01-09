import useAPIService from '../components/hooks/useAPIService';

const Staff = () => {
  const { data, error } = useAPIService("/miumiu-spa/staff");

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div className='load-style'>Loading...</div>;

  return (
    <div>
      <ul className="staff-container">
        {data &&
          data.map((s) => {
            return (
              <li key={s.id} className="staff-list-container">
                <div
                  style={{
                    backgroundImage: `url(${
                      s.img ||
                      " ../modals/images/b170870007dfa419295d949814474ab2_t.jpeg"
                    })`,
                  }}
                  className="staff-avatar"
                ></div>
                <div className="staff-info-container">
                  <div className="flex items-center">
                    <h2 className="font-semibold text-[2rem] text-highlight ">
                      {s.name}
                    </h2>
                    <p>{s.gender}</p>
                  </div>

                  <div className="flex my-4">
                    <h3 className="p-2 rounded-full bg-tertiary text-highlight ">
                      {s.expertise}
                    </h3>
                  </div>
                  <div className="flex bg-secondary bg-opacity-30 rounded-full p-[0.6rem] ">
                    {s.certificates.map((certificate, index) => {
                      return (
                        <h3 key={index} className="m-2">
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