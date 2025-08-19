import i18n from "@/i18n";
import { z } from "zod";

export const getLoginRequestSchema = () => {
  return z.object({
    email: z.email({
      message: i18n.t("form.errors.invalidField", {
        field: i18n.t("form.email"),
      }),
    }),
    password: z.string().min(6, {
      message: i18n.t("form.errors.minLength", {
        field: i18n.t("form.password"),
        length: 6,
      }),
    }),
  });
};

export const loginResponseSchema = z.object({
  authToken: z.string(),
});
