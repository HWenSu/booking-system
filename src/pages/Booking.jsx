import BookingSelectForm from "../components/BookingSelectForm";
import useAPIService from "../components/hooks/useAPIService";

const Booking = () => {
  // 取得後端資料
  const {data: serviceData, error: serviceError} = useAPIService('/modals/serviceData.json')
  const { data: staffData, error: staffError } = useAPIService('/modals/staffData.json')

  if( !serviceData || !staffData ) return <div>Loading</div>
  if( serviceError ) return <div>Error: { serviceError.message }</div>
  if( staffError ) return <div>Error: { staffError.message }</div>

  return (
    <form className="flex flex-col m-4">
      <h2>BOOKING</h2>
      {/* <label htmlFor="service">
        SERVICE
        <BookingSelectForm
          data={serviceData.services}
          name="service"
          value={item.name}
        />
      </label> */}
      <label htmlFor="service">
        SERVICE
        <BookingSelectForm 
        name="service" 
        data={serviceData.services} 
        value="name" 
        />
      </label>

      <label htmlFor="staff">
        STAFF GENDER
        <BookingSelectForm
          name="gender"
          data={staffData.staff}
          value="gender"
        />
      </label>

      <label htmlFor="staff">
        STAFF
        <BookingSelectForm
          name="name"
          data={staffData.staff}
          value="name"
        />
      </label>
    </form>
  );
}

export default Booking