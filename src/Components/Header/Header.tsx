import CallCenter from "./CallCenter";
import Logo from "./Logo";
import ShippingsAndReturns from "./ShippingsAndReturns";
export default function Header() {
  const theme = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      height: "100px",

      backgroundColor: "#fff",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },

    header__logo__text: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#F86338",
      marginLeft: "10px",
    },

    header_contact_shippings: {
      display: "flex",
      alignItems: "center",
    },
  };
  return (
    <div style={theme.header}>
      <section style={theme.header__logo__text}>
        <Logo />
      </section>
      <section style={theme.header_contact_shippings}>
        <CallCenter />
        <ShippingsAndReturns />
      </section>
    </div>
  );
}
