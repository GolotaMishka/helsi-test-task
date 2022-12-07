import {
  Optiontype,
  SexType,
  CommunicationWayType,
  DocumentType,
} from "./types";

export const sexOptions: Optiontype[] = [
  { value: SexType.female, label: "жіноча" },
  { value: SexType.male, label: "чоловіча" },
];

export const сommunicationWayOptions: Optiontype[] = [
  { value: CommunicationWayType.email, label: "Електронною поштою" },
  { value: CommunicationWayType.phone, label: "Телефоном" },
];

export const documentTypeOptions: Optiontype[] = [
  {
    value: DocumentType.additionalProtection,
    label: "Посвідчення особи, яка потребує додаткового захисту",
  },
  { value: DocumentType.idPassport, label: "Паспорт(ID-картка)" },
  { value: DocumentType.bookPassport, label: "Паспорт(книжечка)" },
  {
    value: DocumentType.permanentResidence,
    label: "Посвідка на постійне проживання в Україні",
  },
  { value: DocumentType.refugee, label: "Посвідка біженця" },
  { value: DocumentType.residence, label: "Посвідка на проживання" },
  {
    value: DocumentType.temporaryCitizen,
    label: "Тимчасове посвідчення громадянина України",
  },
];
