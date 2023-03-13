import { companyPricingData } from "../../../../../components/Home/MembershipFees/data";
import PricingCard from "../../../../../components/Home/MembershipFees/PricingCard/PricingCard";


const CompanyPlan = ({ onSelect, selected }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-x-8 md:space-y-0 mt-8">
        {companyPricingData.map((element, index) => (
          <PricingCard
            key={index}
            data={element}
            selector={() => {
              onSelect(element.title);
            }}
            isPrimary={selected === element.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyPlan;
