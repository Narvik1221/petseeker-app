// src/entities/user/model/authWidget.ts
import React from "react";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import InputMask from "react-input-mask-next";
import { phoneConsts, nameConsts } from "../../../../shared/constants";
import { useTranslation } from "react-i18next";
import { Form } from "../../../../shared/ui/form";
type AuthFormProps = {
  handleClickSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickConfirm?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleChangePhone?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  phoneNumber?: string;
  name?: string;
  isSendingLogin?: boolean;
  isAuth?: boolean;
};

export const AuthForm: React.FC<AuthFormProps> = ({
  handleClickSubmit,
  handleChangePhone,
  handleChangeName,
  isAuth,
  phoneNumber,
  name,
  isSendingLogin,
}) => {
  const { t } = useTranslation("authForm");
  const textAuthButton = isAuth ? t("enter") : t("registration");
  return (
    <Form >
      <InputMask
        onChange={handleChangePhone}
        value={phoneNumber}
        mask={phoneConsts.mask}
        placeholder={phoneConsts.placeholder}
      >
        <Input label={t("number")} />
      </InputMask>

      {!isAuth && (
        <Input
          label={t("name")}
          value={name}
          onChange={handleChangeName}
          placeholder={nameConsts.placeholder}
        />
      )}

      <Button
        type="button"
        onClick={handleClickSubmit}
        disabled={isSendingLogin}
      >
        {textAuthButton}
      </Button>
    </Form>
  );
};
