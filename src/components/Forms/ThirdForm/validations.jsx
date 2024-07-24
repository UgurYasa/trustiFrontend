import { number, object, string} from "yup";

const validations = object({
  tcNo: "",
  birthDate: "",
  name: string(),
  email: string(),
  tcNo: number(),
  telNo: "",
});

export default validations;

