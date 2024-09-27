import useAPIService from '../components/hooks/useAPIService';
import { useTheme } from '../context/ThemeContext';

const Staff = () => {
  // 獲取現在主題
  const {currentTheme} = useTheme()

  const { data } = useAPIService("http://localhost:5000/staff");

  return (
    <div className={`theme-${currentTheme}`}>
      <ul className="flex flex-col w-[80vw]  mx-auto my-[8vh]">
        {data &&
          data.map((s) => {
            return (
              <li
                key={s.id}
                className="flex justify-around m-[2vh] p-4 bg-white/50 rounded-lg"
              >
                <div
                  style={{ backgroundImage: `url(${s.img})` }}
                  className={`w-[10rem] h-[10rem] rounded-full bg-[length:12rem] bg-no-repeat bg-left`}
                ></div>
                <div className="w-[40rem] text-tertiary">
                  <div className="flex items-center">
                    <h2 className="font-semibold text-[2rem] text-highLight mr-7">
                      {s.name}
                    </h2>
                    <p>{s.gender}</p>
                  </div>

                  <div className="flex my-4">
                    <h3 className="mr-3 p-2 rounded-full bg-primary">
                      {s.expertise}
                    </h3>
                  </div>
                  <div className="flex bg-white rounded-full opacity-50 p-5">
                    {s.certificates.map((certificate, index) => {
                      return (
                        <h3 key={index} className="mr-5">
                          {" "}
                          {certificate}
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