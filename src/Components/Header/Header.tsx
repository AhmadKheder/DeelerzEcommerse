import CallCenter from "./CallCenter";
import Logo from "./Logo";
import Shipping from "./Shipping";

export default function Header() {
  //   const classes = useStyles();
  //   const { height, width } = useWindowDimensions();

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "93px",
          left: "0px",
          top: "0px",
          border: "2px solid red",
          background: "#FFFFFF",
        }}
      >
        <section className={"classes.logo"}>
          <Logo />
        </section>

        <div className={"Sd"}>
          <div>
            <CallCenter />
          </div>
          <div>
            {/* <Shipping /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
