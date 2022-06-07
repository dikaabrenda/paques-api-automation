import number from "../../helper/generate";

export const CREATE_USERS = {
  email: `qa.post${number}@mailnesia.com`,
  firstname: "Dika",
  groups: ["773f8918-9c6c-4dbf-8365-a21ddc557b94"],
  lastname: "Brenda",
  username: `dikabrenda${number}`,
  password: "Qwerty*123",
  password_confirmation: "Qwerty*123",
};

export const USERNAME_ALREADY_EXIST = {
  email: "dika.brenda@mailnesia.com",
  firstname: "Dika",
  groups: [
    "773f8918-9c6c-4dbf-8365-a21ddc557b94"
  ],
  lastname: "Brenda",
  username: "dikabrenda",
  password: "Qwerty*123",
  password_confirmation: "Qwerty*123",
};
