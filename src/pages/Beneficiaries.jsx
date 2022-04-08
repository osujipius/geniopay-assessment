import Nav from "../components/nav/Nav";
import SubNav from "../components/subnav/SubNav";
import Transactions from "../components/transactions/Transactions";

import user from "./../assets/person.svg";

export default function Beneficiaries() {
  return (
    <div className="main">
      <Nav title="Beneficiaries" username="Huss Smith" image={user} />
      <SubNav />
      <Transactions />
    </div>
  );
}
