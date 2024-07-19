import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useAddPetCardMutation,
  useGetPetTypesQuery,
} from "../../../entities/pet/index";
import { Input } from "../../../shared/ui/input";
import { TextArea } from "../../../shared/ui/textArea";
import { Select } from "../../../shared/ui/select";
import { Form } from "../../../shared/ui/form";
import { Button } from "../../../shared/ui/button";
import { match } from "ts-pattern";
import { useTranslation } from "react-i18next";
import { PetCardFormType } from "../model/petCardFormType";

export const PetCardForm: React.FC = () => {
  const { register, handleSubmit } = useForm<PetCardFormType>();
  const [addPetCard, { isLoading, error: errorMessage }] =
    useAddPetCardMutation();
  const [isUserForm, setIsUserForm] = useState(false);
  const { t } = useTranslation('petCardForm'); 
  const { data: petTypes = [], isLoading: petTypesLoading } =
    useGetPetTypesQuery();
  const textSubmitButton = isLoading ? t("loading") : t("create");
  const onSubmit: SubmitHandler<PetCardFormType> = async (data) => {
    const formData = new FormData();
    console.log(data)
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("type", data.type);
    formData.append("status", data.status);
    formData.append("age", data.age);
    match(isUserForm)
    .with(false, () => formData.append("address", data.address))
    .with(true, () => formData.append("itn", data.itn))
    .exhaustive();
    Array.from(data.images).forEach((file) => formData.append("images", file));

    try {
      await addPetCard(formData).unwrap();
    } catch (error) {
      console.error(errorMessage);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t("name")}
          id="name"
          register={register("name", { required: true })}
        />

        <Input
          label={t("images")}
          id="images"
          type="file"
          accept="image/*"
          multiple
          register={register("images", { required: true })}
        />

        <TextArea
           label={t("description")}
          id="description"
          register={register("description")}
        />
        {match(isUserForm)
          .with(false, () => (
            <Input
              label={t("address")}
              id="address"
              register={register("address", { required: true })}
            />
          ))
          .with(true, () => (
            <Input
              label={t("itn")}
              id="itn"
              register={register("itn", { required: true })}
            />
          ))
          .exhaustive()}

        <Select
          label={t("type")}
          id="type"
          options={petTypes}
          register={register("type" )}
        />

        <Input
          label={t("status")}
          id="status"
          register={register("status", { required: true })}
        />

        <Input
          label={t("age")}
          id="age"
          type="number"
          register={register("age", { required: true })}
        />

        <Button type="submit">{textSubmitButton}</Button>
      </Form>
    </>
  );
};
