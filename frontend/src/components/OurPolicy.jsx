import {} from "../assets/assets";
import { useShopContext } from "../hooks/useShopContext";

import PolicyItem from "./PolicyItem";

const OurPolicy = () => {
  const { policies } = useShopContext();

  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-8 text-center py-20 text-base sm:text-sm md:text-base text-gray-700'>
      {policies.map((policy, index) => (
        <PolicyItem
          key={index}
          icon={policy.icon}
          title={policy.title}
          description={policy.description}
        />
      ))}
    </div>
  );
};

export default OurPolicy;
