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
    <form>
      <h2>Booking</h2>
      {console.log(serviceData.services)}
      <BookingSelectForm data={serviceData.services} name="service" />
      <BookingSelectForm data={staffData.staff} name="staff" />
    </form>
  );
}

export default Booking