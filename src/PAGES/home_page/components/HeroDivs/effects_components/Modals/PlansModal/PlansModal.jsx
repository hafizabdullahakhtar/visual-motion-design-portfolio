import Modal from "../Modal";
import Checklist from "./components/CheckList/CheckList";
// import PricingBox from "./components/Pricing/PricingBox";
// import CloseIcon from "../../../../../../../ASSETS/ICONS/CloseIcon";
// import pricingData from "./pricingData";
import ExpandableCard from "../ServicesModal/components/ExpandableCard";

const PlansModal = ({ onClose }) => {
  // const [selectedServices, setSelectedServices] = useState(["Branding"]);

  // const handleSelectionChange = useCallback((selectedOptions) => {
  //   if (selectedOptions.length === 0) {
  //     selectedOptions = ["Branding"];
  //   }
  //   setSelectedServices(selectedOptions);
  // }, []);

  // const removeService = (serviceToRemove) => {
  //   const updatedServices = selectedServices.filter(
  //     (service) => service !== serviceToRemove
  //   );
  //   handleSelectionChange(updatedServices);
  // };

  // const renderPricingBoxes = () => (
  //   <div
  //     style={{
  //       display: "flex",
  //       flexDirection: "column-reverse",
  //       gap: "1rem",
  //     }}
  //   >
  //     {selectedServices.map((service) => (
  //       <div
  //         key={service}
  //         style={{
  //           display: "flex",
  //           flexDirection: "column",
  //           marginTop: "1rem",
  //         }}
  //       >
  //         <div
  //           className="service_heading"
  //           style={{
  //             display: "flex",
  //             justifyContent: "space-between",
  //             alignItems: "center",
  //           }}
  //         >
  //           <div
  //             className="service-heading"
  //             style={{
  //               fontWeight: "bold",
  //               marginBottom: "1rem",
  //             }}
  //           >
  //             {service}
  //           </div>
  //           <div
  //             className="close"
  //             onClick={() => removeService(service)}
  //             style={{ cursor: "pointer" }}
  //           >
  //             {selectedServices.length !== 1 && <CloseIcon />}
  //           </div>
  //         </div>

  //         <div
  //           style={{
  //             display: "flex",
  //             flexDirection: "row",

  //             gap: "1rem",
  //             overflowX: "auto",
  //             width: "100%",
  //             flexWrap: "wrap",
  //           }}
  //         >
  //           {pricingData[service]?.map((plan) => (
  //             <PricingBox
  //               key={`${service}-${plan.pricingTag}`}
  //               pricingTag={plan.pricingTag}
  //               price={plan.price}
  //               priceUnit={plan.priceUnit}
  //               description={plan.description}
  //               color={plan.color}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <Modal
      title="Vibe"
      content="Let’s make sure we’re a good fit before we start."
      listItems={[
        "Great work needs great chemistry.",
        "Alignment saves time (and headaches).",
        "Honest collaboration leads to better results.",
      ]}
      children={
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="checklist">
            Before it's getting serious, make sure we're on the same page:
          </div>
          <Checklist />

          <div
            className="heading"
            style={{
              width: "100%",
              textAlign: "center",
              paddingBlock: "1rem",
              fontSize: "17px",
            }}
          >
            Final Sprinkle
          </div>

          {/* <ButtonGroup
            onSelectionChange={handleSelectionChange}
            selectedOptions={selectedServices}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {renderPricingBoxes()}
          </div>
          <div
            className="divider"
            style={{
              width: "100%",
              height: "1px",
              marginBlock: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <div
              style={{
                width: "75%",
                height: "1px",
                backgroundColor: "var(--grey-color)",
              }}
            ></div>
          </div> */}

          <div className="note">
            <ExpandableCard
              color="var(--foreground-color)"
              header="Note"
              isExpanded={true}
              description="I’m selective about the projects I take on — I partner where I can add real value and grow professionally. Quality matters to me, and that means staying focused. gotonewline I'm not just about executing ideas; I'll challenge them, push back, and ensure end users are as happy as other stakeholders are.gotonewline If you're ready for a straightforward, collaborative approach, let's talk.gotonewline But if you're not open to a bit of pushback and prefer a more hands-off style, I might not be the right fit."
            />
          </div>
        </div>
      }
      onClose={onClose}
    />
  );
};

export default PlansModal;
