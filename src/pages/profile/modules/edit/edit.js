import Handlebars from "handlebars";

import LayoutTmpl from "../../../../layout/profile/profile.tmpl";
import EditTmpl from "./edit.tmpl";
import InputComponentTmpl from "../../../../components/input/input.tmpl";

import registerInputPartials from "../../../../utils/registerInputPartials";

const InputComponentTemplate = Handlebars.compile(InputComponentTmpl);

const inputsMap = {
  emailInput: {
    name: "email",
    value: "User's email",
  },
  loginInput: {
    name: "login",
    value: "User's login",
  },
  firstNameInput: {
    name: "first_name",
    value: "User's first name",
  },
  secondNameInput: {
    name: "second_name",
    value: "User's second name",
  },
  displayNameInput: {
    name: "display_name",
    value: "User's nickname",
  },
  phoneInput: {
    name: "phone",
    value: "8-800-555-3535",
  },
};

registerInputPartials(inputsMap, InputComponentTemplate);

const EditTemplate = Handlebars.compile(EditTmpl);
const LayoutTemplate = Handlebars.compile(LayoutTmpl);

Handlebars.registerPartial("pageContent", EditTemplate());

document.body.insertAdjacentHTML("afterbegin", LayoutTemplate());
