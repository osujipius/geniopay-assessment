import FxNav from "../components/fxnav/FxNav";
import Nav from "../components/nav/Nav";
import Swap from "../components/swap/Swap";
import user from "./../assets/person2.svg";

export default function Fx() {
  return (
    <div className="main">
      <Nav title="FX Center" username="Kudi LTD" image={user} />
      <FxNav />
      <Swap />
    </div>
  );
}
