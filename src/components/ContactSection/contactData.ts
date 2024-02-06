import { address, email, phoneNumber } from "../../data/contactData";
import addresIcon from "../../assets/images/icons/contact/pin-icon.svg";
import phoneIcon from "../../assets/images/icons/contact/phone-icon.svg";
import mailIcon from "../../assets/images/icons/contact/mail-icon.svg";
import lightPinIcon from "../../assets/images/icons/contact/light-pin-icon.svg";
import lightPhoneIcon from "../../assets/images/icons/contact/light-phone-icon.svg";
import lightMailIcon from "../../assets/images/icons/contact/light-mail-icon.svg";

export const contactData = [
  {
    id: 1,
    name: "Address",
    value: address,
    icon: addresIcon,
    lightIcon: lightPinIcon,
  },
  {
    id: 2,
    name: "Phone",
    value: phoneNumber,
    icon: phoneIcon,
    lightIcon: lightPhoneIcon,
  },
  {
    id: 3,
    name: "E-mail",
    value: email,
    icon: mailIcon,
    lightIcon: lightMailIcon,
  },
];
