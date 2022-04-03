import Nav from "../components/nav/Nav";
import user from "./../assets/person2.svg";

export default function Fx() {
  return (
    <div
      style={{
        width: "100%",
        height: "865px",
        backgroundColor: "rgb(252, 253, 254)",
      }}
    >
      <Nav title="FX Center" username="Kudi LTD" image={user} />
    </div>
  );
}
