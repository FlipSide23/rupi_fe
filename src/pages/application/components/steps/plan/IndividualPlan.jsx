import { pricingData } from "../../../../../components/Home/MembershipFees/data";
import PricingCard from "../../../../../components/Home/MembershipFees/PricingCard/PricingCard";


const IndividualPlan = ({ onSelect, selected }) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 md:mt-8">
        {pricingData.map((element, index) => (
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

export default IndividualPlan;
