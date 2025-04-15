import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../ASSETS/ICONS/arrow_leftright";

const BookingPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This goes back to the previous page
  };

  return (
    <>
      <div
        className="back_button"
        style={{
          position: "absolute",
          top: "8rem",
          left: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          border: "1px solid var(--ui-border-color)",
          padding: "0.5rem 1rem",
          borderRadius: "2rem",
          cursor: "pointer",
          zIndex: "999",
        }}
        onClick={handleBackClick}
      >
        <ArrowIcon direction="left" />
        back
      </div>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
        }}
      >
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3glCpk5dUAHw7wet2Ke3Pk8jDo8R7RK6uyVFmoUoMjDxtBjEuSPhXlDtki-C6S6B4O25uwWY61?gv=true"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
          }}
          title="Google Calendar Appointment Scheduling"
        ></iframe>
      </div>
    </>
  );
};

export default BookingPage;
