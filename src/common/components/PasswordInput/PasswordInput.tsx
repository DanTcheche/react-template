import { type ComponentProps, useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { Icons } from "../Icons";

export const PasswordInput = (props: ComponentProps<typeof Input>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => {
      return !prev;
    });
  };

  return (
    <Input
      right={
        <Button
          className="cursor-pointer"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              togglePasswordVisibility();
            }
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            togglePasswordVisibility();
          }}
          variant="plainText"
        >
          {isPasswordVisible ? <Icons.Eye /> : <Icons.EyeOff />}
        </Button>
      }
      type={isPasswordVisible ? "text" : "password"}
      {...props}
    />
  );
};
