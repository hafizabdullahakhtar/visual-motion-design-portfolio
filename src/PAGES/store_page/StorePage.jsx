import usePageTitle from "../../usePageTitle";

const StorePage = () => {
  usePageTitle("About | Visual Motion Design");

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      store is under development
    </div>
  );
};

export default StorePage;
