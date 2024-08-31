import { useState, useEffect } from "react";
import BookingSelectForm from "../components/BookingSelectForm";
import useAPIService from "../components/hooks/useAPIService";

const Booking = () => {
  //儲存表單資料
  const [formData, setFormData] = useState({
    service: "",
    timeStamp: "",
    staff: "",
    name: "",
    gender: "",
    phone: "",
    email: "",
    remark: "",
  });

  //處存過濾 staff 清單
  const [filteredStaff, setFilteredStaff] = useState([]);

  //處理表單變化
  const handleChange = (name, value) => {
    setFormData((preFormData) => ({
      ...preFormData,
      [name]: value,
    }));
  };

  // 取得後端資料
  const { data: serviceData, error: serviceError } = useAPIService(
    "/modals/serviceData.json"
  );
  const { data: staffData, error: staffError } = useAPIService(
    "/modals/staffData.json"
  );

  //監聽 formData.gender 來過濾 Staff 名單
  useEffect(() => {
    if (staffData && staffData.staff) {
      const filteredStaff =  formData.gender? 
      staffData.staff.filter( staff => staff.gender === formData.gender) : staffData.staff
      setFilteredStaff(filteredStaff);
    } else {
      setFilteredStaff([]); // 避免在staff還未得取時被判定為 null 需加條件設置為 []
    }
  }, [staffData, formData.gender]);

  if (!serviceData || !staffData) return <div>Loading</div>;
  if (serviceError) return <div>Error: {serviceError.message}</div>;
  if (staffError) return <div>Error: {staffError.message}</div>;

  return (
    <form className="flex flex-col m-4">
      <h2>BOOKING</h2>

      <label htmlFor="service">
        SERVICE
        <BookingSelectForm
          name="service"
          data={serviceData.services}
          getValue="name"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="staff">
        STAFF GENDER
        <BookingSelectForm
          name="gender"
          data={staffData.staff}
          getValue="gender"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="staff">
        STAFF
        <BookingSelectForm
          name="name"
          data={filteredStaff}
          getValue="name"
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default Booking