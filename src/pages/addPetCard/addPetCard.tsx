import React from "react";
import { MainContainer } from "../../shared/ui/mainContainer";
import { PetCardForm } from "../../widgets/addPetCardWidget";
export const AddPetCard: React.FC = () => {
  return (
    <MainContainer>
      <PetCardForm/> 
    </MainContainer>
  );
};
