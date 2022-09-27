import React from "react";
import {
  Container2,
  Container,
  TextDescription,
  ButtonCard,
  ButtonDisable,
  Center,
} from "../../styles/globalStyles.js";
import LipRenderer from "../LipRenderer/index.js";

const CardLips = ({ item, getUpLvl, owner }) => {
  const { id, dna, level, name, rarity, ownerNtf } = item;

  return (
    <Container2 style={{ padding: "15px", opacity: 0.9 }} test>
      <LipRenderer lip={item} />
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <TextDescription>ID: {id}</TextDescription>
        <TextDescription>DNA: {dna}</TextDescription>
        <TextDescription>LEVEL: {level}</TextDescription>
        <TextDescription>NAME: {name.toUpperCase()}</TextDescription>
        <TextDescription>RARITY: {rarity}</TextDescription>
        <TextDescription>OWNER: {ownerNtf}</TextDescription>

        <Center>
          {owner.toUpperCase() !== ownerNtf.toUpperCase() ? (
            <ButtonDisable
              disabled={owner.toUpperCase() !== ownerNtf.toUpperCase()}
              onClick={() => {
                getUpLvl(item.id);
              }}
            >
              DISABLE
            </ButtonDisable>
          ) : (
            <ButtonCard
              disabled={owner.toUpperCase() !== ownerNtf.toUpperCase()}
              onClick={() => {
                getUpLvl(item.id);
              }}
            >
              LEVEL UP
            </ButtonCard>
          )}
        </Center>
      </Container>
    </Container2>
  );
};

export default CardLips;
