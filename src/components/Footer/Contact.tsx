import { twMerge } from "tailwind-merge";
import { email, phoneNumber } from "../../data/contactData";

const Contact = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge(`w-[min(400px,100%)]`, className)}>
      <h2 className="text-2xl">Contact</h2>
      <p>Tel: {phoneNumber}</p>
      <p>Mail: {email}</p>
    </div>
  );
};

export default Contact;
