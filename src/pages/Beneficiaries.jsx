import Nav from "../components/nav/Nav";
import SubNav from "../components/subnav/SubNav";
import Transactions from "../components/transactions/Transactions";

import user from "./../assets/person.svg";

export default function Beneficiaries() {
  return (
    <div
      style={{
        width: "100%",
        height: "865px",
        backgroundColor: "rgb(252, 253, 254)",
      }}
    >
      <Nav title="Beneficiaries" username="Huss Smith" image={user} />
      <SubNav />
      <Transactions />
    </div>
  );
}
