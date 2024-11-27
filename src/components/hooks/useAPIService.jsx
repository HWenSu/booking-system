import { useEffect, useState } from "react";
import axios from "axios";

const useAPIService = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        console.log("Fetched data:", response.data);
        setData(response.data);
      } catch (error) {
        if (error.response) {
          // 伺服器響應了一個狀態碼，該狀態碼在 2xx 范圍之外
          console.error("伺服器錯誤:", error.response.data);
          console.error("狀態碼:", error.response.status);
        } else if (error.request) {
          // 請求已經發出，但是沒有收到回應
          console.error("請求未獲得回應:", error.request);
        } else {
          // 設置請求時觸發的錯誤
          console.error("錯誤:", error.message);
        }
      }
    };
    getData();
  }, [url]);

  return { data, error };
};

export default useAPIService;
