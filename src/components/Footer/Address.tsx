import { twMerge } from "tailwind-merge";
import { address } from "../../data/contactData";

const Address = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge(`w-[min(300px,100%)]`, className)}>
      <h2 className="text-2xl">Address</h2>
      <p>{address}</p>
    </div>
  );
};

export default Address;
