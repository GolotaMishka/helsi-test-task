import React from "react";
import { Form } from "react-final-form";
import { TextField, Select, Switches, makeValidate } from "mui-rff";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import {
  sexOptions,
  сommunicationWayOptions,
  documentTypeOptions,
} from "./constants";
import { patientSchema } from "./validation";
import "./App.css";

const validate = makeValidate(patientSchema);

export default function App() {
  return (
    <div className="container">
      <h1>Створення персони</h1>
      <Form
        onSubmit={(values) => console.log(values)}
        initialValues={{
          isPatronymicNameAllowed: true,
          isVATNumberAllowed: true,
        }}
        validate={validate}
        mutators={{
          resetPatronymicName: (_, state, utils) => {
            utils.changeValue(state, "patronymicName", () => undefined);
          },
          resetVATNumberName: (_, state, utils) => {
            utils.changeValue(state, "VATNumber", () => undefined);
          },
        }}
        render={({ handleSubmit, form, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <h2>Дані пацієнта</h2>

            <div className="row">
              <TextField label="Прізвище*" name="lastName" variant="standard" />
              <TextField label="Ім'я*" name="firstName" variant="standard" />
              <div className="fieldWidthSwitch">
                <TextField
                  label="По батькові*"
                  name="patronymicName"
                  variant="standard"
                  disabled={!values.isPatronymicNameAllowed}
                />
                <Switches
                  name="isPatronymicNameAllowed"
                  data={{ value: values.isPatronymicNameAllowed, label: "" }}
                  formGroupProps={{ className: "switch" }}
                  onClick={form.mutators.resetPatronymicName}
                />
              </div>
            </div>

            <div className="row">
              <div className="fieldWidthSwitch">
                <TextField
                  label="РНОКПП (ІПН)*"
                  name="VATNumber"
                  variant="standard"
                  disabled={!values.isVATNumberAllowed}
                />
                <Switches
                  name="isVATNumberAllowed"
                  data={{ value: values.isVATNumberAllowed, label: "" }}
                  formGroupProps={{ className: "switch" }}
                  onClick={form.mutators.resetVATNumberName}
                />
              </div>

              <TextField
                label="Дата народження*"
                name="birthDate"
                variant="standard"
                placeholder="11.27.1998"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Select label="Стать*" name="sex" variant="standard">
                {sexOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className="row">
              <TextField
                label="Країна народження*"
                name="country"
                variant="standard"
              />
              <TextField
                label="Місце народження*"
                name="city"
                variant="standard"
              />
            </div>

            <div className="row">
              <Select
                label="Бажаний спосіб зв'язку із пацієнтом"
                name="communicationWay"
                variant="standard"
              >
                {сommunicationWayOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                label="Секретне слово (не менше 6 символів)*"
                name="secretWord"
                variant="standard"
              />
            </div>
            <div className="row">
              <TextField
                label="Контактний номер телефону"
                name="phoneNumber"
                variant="standard"
                placeholder="+38(098)765-43-21"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Адреса електронної пошти"
                name="email"
                variant="standard"
                placeholder="example@example.com"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <h2>Документ, що посвідчує особу</h2>
            <div className="row">
              <Select
                label="Тип документу*"
                name="documentType"
                variant="standard"
              >
                {documentTypeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                label="Серія (за наявності), номер*"
                name="passportNumber"
                variant="standard"
              />
            </div>
            <div className="row">
              <TextField
                label="Коли видано*"
                name="issuedDate"
                placeholder="12.31.1971"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
              <TextField
                label="Діє до"
                name="validToDate"
                placeholder="12.31.2025"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
            </div>

            <div className="row">
              <TextField
                label="Ким видано*"
                name="issuedBy"
                variant="standard"
              />
              <TextField
                label="Запис №(УНЗР)"
                name="demographicNumber"
                placeholder="РРРРММДД-XXXXX"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                helperText="Вкажіть унікальний номер запису в Демографічному реєстрі (Запис №)"
              />
            </div>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        )}
      />
    </div>
  );
}
