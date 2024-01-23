import CreateFlow from "../Section/Account/CreateFlow";
import TotalViews from "../Section/Account/TotalViews";
import BasicPlan from "../Section/Account/BasicPlan";

const AccountInfo = () => {
  return (
    <div className="flex gap-12">
      <CreateFlow />
      <TotalViews />
      <BasicPlan />
    </div>
  );
};

export default AccountInfo;
