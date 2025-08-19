import { Button } from "@/common/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/common/components/Card";
import { ErrorMessage } from "@/common/components/ErrorMessage";
import { Input } from "@/common/components/Input";
import { Label } from "@/common/components/Label";
import { PasswordInput } from "@/common/components/PasswordInput";
import { getLoginRequestSchema } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const { t } = useTranslation();
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(getLoginRequestSchema()),
  });

  const onSubmit = (data) => {};

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 via-purple-600 to-orange-500">
      <Card className="w-full max-w-sm bg-white/10 backdrop-blur-lg border-white/20 text-white ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("form.email")}
              </Label>

              <Input
                {...register("email")}
                className="bg-white/10 placeholder:text-white/60 border-white"
              />

              <Label
                htmlFor="password"
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-3"
              >
                {t("form.password")}
              </Label>

              <PasswordInput
                {...register("password")}
                className="bg-white/10 placeholder:text-white/60 border-white"
              />

              <ErrorMessage errorMessage={errors?.email?.message} />
            </div>
            <Button
              type="submit"
              className="w-full whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
            >
              {t("login.login")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
