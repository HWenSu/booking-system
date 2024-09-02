import DropdownMenu from "../components/DropdownMenu";

const BookingDropdown = ({
  serviceData,
  filterService,
  staffData,
  filteredStaff,
  onChange
}) => {


  return (
    <div className="flex flex-col">
      <label htmlFor="service">
        SERVICE
        <DropdownMenu
          name="service"
          data={serviceData}
          getValue="name"
          onChange={onChange}
        />
      </label>

      <label htmlFor="duration">
        DURATION
        <DropdownMenu
          name="duration"
          data={filterService}
          getValue="duration"
          onChange={onChange}
        />
      </label>

      <label htmlFor="gender">
        STAFF GENDER
        <DropdownMenu
          name="gender"
          data={staffData}
          getValue="gender"
          onChange={onChange}
        />
      </label>

      <label htmlFor="staff">
        STAFF
        <DropdownMenu
          name="name"
          data={filteredStaff}
          getValue="name"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default BookingDropdown