import React from "react";
import useInitial from "../../Hooks/useInitial";
import {
  Screen,
  Container,
  TextTitle,
  ButtonCard,
  TextTitleCenter,
  ContainerTitle,
  ContainerHeader,
  ContainerHeaderBotton,
} from "../../styles/globalStyles.js";

import { images } from "../../assets";
import CardLips from "../CardLips";

const Home = () => {

  const connectToRopsten = async () => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${Number(3).toString(16)}` }],
    });
  };

  const render = () => {
    const {
      walletAddress,
      listNtfs,
      isOwner,
      balanceWallet,
      feeAmount,
      getUpLvl,
      balanceContract,
      getCreateNTF,
      createNtfAlert,
      withdrawalOwner,
      messageAlertError,
    } = useInitial();

    const handleCreate = () => {
      if (balanceWallet > feeAmount) createNtfAlert(getCreateNTF);
      else messageAlertError("INSUFFICIENT BALANCE");
    };
    
    return (
      <Container ai={"center"} style={{ padding: "10px" }}>
        <ContainerHeader>
          <div style={{ width: "30%", marginLeft: 20 }}>
            <TextTitle> ¡WELCOME NTF! </TextTitle>
          </div>
          <ContainerHeaderBotton>
            <ButtonCard onClick={handleCreate}>CREATE NEW NTF</ButtonCard>
            <ButtonCard onClick={balanceContract}>
              SMART CONTRACT BALANCE
            </ButtonCard>

            {isOwner && (
              <ButtonCard onClick={withdrawalOwner}>
                WITHDRAW BALANCE
              </ButtonCard>
            )}
          </ContainerHeaderBotton>
        </ContainerHeader>

        {listNtfs.length === 0 ? (
          <ContainerTitle>
            <TextTitleCenter>CREATE YOUR FIRST NTF</TextTitleCenter>
          </ContainerTitle>
        ) : (
          <Container
            jc={"center"}
            fd={"row"}
            style={{
              flexWrap: "wrap",
              backgroundColor: "rgb(25, 39, 61)",
              width: "80%",
              opacity: 0.8,
            }}
          >
            {listNtfs.map((item) => {
              return (
                <CardLips
                  item={item}
                  getUpLvl={getUpLvl}
                  key={item.id}
                  owner={walletAddress}
                />
              );
            })}
          </Container>
        )}
      </Container>
    )
  }

  return (
    <Screen image={images.bg1}>
      {!window.ethereum ? (
        <Container flex={1} ai={"center"} jc={"center"}>
          <TextTitle> ¡WELCOME TO NTF GAMES!</TextTitle>
          {window.ethereum && (
            <ButtonCard onClick={connectToRopsten}>
              CONNECT TO ROPSTEN
            </ButtonCard>
          )}
          {!window.ethereum && (
            <a href='https://metamask.io/'>CONNECT TO YOUR WALLET</a>
          )}
        </Container>
      ) : (
        render ()
      )}
    </Screen>
  );
};

export default Home;
