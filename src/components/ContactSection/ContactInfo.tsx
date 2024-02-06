import ContactItem from "./ContactItem";
import { contactData } from "./contactData";

const ContactInfo = () => {
  return (
    <div className="flex w-[min(550px,100%)] flex-col justify-between gap-20">
      <h2 className="hidden text-center text-3xl font-semibold drop-shadow-light md:text-4xl lg:block">
        Contact
      </h2>
      <ul className="mx-auto grid gap-5 py-10 lg:border-2 lg:px-14 lg:text-light lg:backdrop-blur-md lg:backdrop-brightness-75">
        {contactData.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;
