import * as Yup from "yup";

const VAT_REG_EXP = /^\d{10}$/;
const PHONE_REG_EXP =
  /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

const PASSPORT_REG_EXP = /^[а-яА-Яa-zA-ZіІєЄґҐїЇ]{2}\d{6}$|^\d{9}$/;
const DEMOGRAPHIC_NUMBER_REG_EXP =
  /(?:(?:19|20)[0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])-\d{5}$/;

const REQUIRED_ERROR_MESSAGE = "Поле не може бути пустим";
const nameValidation = Yup.string()
.min(2, "Мінімум 2 символи")
.max(20, "Максимум 20 символів")
.required(REQUIRED_ERROR_MESSAGE);

export const patientSchema = Yup.object().shape({
  lastName: nameValidation,
  firstName: nameValidation,
  patronymicName: Yup.string().when("isPatronymicNameAllowed", {
    is: true,
    then: nameValidation,
    otherwise: Yup.string().nullable(),
  }),

  VATNumber: Yup.string().when("isVATNumberAllowed", {
    is: true,
    then: Yup.string()
      .matches(VAT_REG_EXP, "Некоректний ІПН, поле повинно містити 9 цифр")
      .required(REQUIRED_ERROR_MESSAGE),
    otherwise: Yup.string().nullable(),
  }),

  birthDate: Yup.date()
    .typeError(() => "Некоректна дата. Приклад: 12.31.1971")
    .max(new Date(), "Дата має бути в минулому")
    .required(REQUIRED_ERROR_MESSAGE),
  sex: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  country: Yup.string()
    .min(2, "Мінімум 2 символи")
    .max(40, "Максимум 40 символів")
    .required(REQUIRED_ERROR_MESSAGE),
  city: Yup.string()
    .min(2, "Мінімум 2 символи")
    .max(20, "Максимум 20 символів")
    .required(REQUIRED_ERROR_MESSAGE),
  communicationWay: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  secretWord: Yup.string()
    .min(6, "Мінімум 6 символів")
    .max(20, "Максимум 20 символи")
    .required(REQUIRED_ERROR_MESSAGE),
  phoneNumber: Yup.string().matches(
    PHONE_REG_EXP,
    "Некоректний номер телефона. Приклад: +38(098)765-43-21"
  ),
  email: Yup.string().email("Некоректна адреса електронної пошти. Приклад: example@example.com"),
  documentType: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  passportNumber: Yup.string()
    .matches(
      PASSPORT_REG_EXP,
      "Номер введено некоректно, поле має містити 9 цифр, або бути формату ММ556677"
    )
    .required(REQUIRED_ERROR_MESSAGE),

  issuedDate: Yup.date()
    .typeError(() => "Некоректна дата. Приклад: 12.31.1971")
    .max(new Date(), "Дата має бути в минулому")
    .required(REQUIRED_ERROR_MESSAGE),

  validToDate: Yup.date()
    .typeError(() => "Некоректна дата. Приклад: 12.31.2025")
    .min(new Date(), "Дата має бути в майбутньому"),

  issuedBy: Yup.string()
    .min(3, "Мінімум 10 символи")
    .max(20, "Максимум 50 символи")
    .required(REQUIRED_ERROR_MESSAGE),

  demographicNumber: Yup.string()
    .matches(
      DEMOGRAPHIC_NUMBER_REG_EXP,
      "Номер введено некоректно. Приклад: РРРРММДД-XXXXX"
    )
    .required(REQUIRED_ERROR_MESSAGE),
});
