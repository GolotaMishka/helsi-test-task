export enum SexType {
  male = "male",
  female = "female",
}

export enum CommunicationWayType {
  email = "email",
  phone = "phone",
}

export enum DocumentType {
  additionalProtection = "additionalProtection",
  idPassport = "idPassport",
  bookPassport = "bookPassport",
  permanentResidence = "permanentResidence",
  refugee = "refugee",
  residence = "residence",
  temporaryCitizen = "temporaryCitizen",
}

export interface Optiontype {
  value: string;
  label: string;
}

export interface FormDataType {
  firstName: string;
  lastName: string;
  isPatronymicNameAllowed: boolean;
  patronymicName?: string;
  isVATNumberAllowed: boolean;
  VATNumber?: string;
  birthDate: string;
  sex: SexType;
  country: string;
  city: string;
  communicationWay: CommunicationWayType;
  secretWord: string;
  phoneNumber?: string;
  email?: string;
  documentType: DocumentType;
  passportNumber: string;
  issuedDate: string;
  validToDate?: string;
  issuedBy: string;
  demographicNumber?: string;
}
