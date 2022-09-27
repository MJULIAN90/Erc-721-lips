import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--dark-grey);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 98vh;
  display: flex;
  flex-direction: column;
  // border-radius: 25% 10%;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "white" : "none")};
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  border-radius: 30px;
`;

export const Container2 = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "white" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  margin: 20px;
  border-radius: 30px;
  box-shadow: rgb(0 0 0 / 61%) 0px 1px 4px -2px;

  &:hover {
    box-shadow: 1px -1px 13px 10px rgba(155, 155, 155, 1);
  }
`;

export const ContainerTitle = styled.div`
  background-color: white;
  width: 80%;
  opacity: 0.7;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 40;
`;

export const ContainerHeaderBotton = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

export const TextTitle = styled.p`
  color: white;
  font-size: 30px;
  font-weight: 500;
`;

export const TextTitleCenter = styled.p`
  color: black;
  font-size: 50px;
  font-weight: 500;
`;

export const ButtonCard = styled.button`
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  color: ${({ test }) => (test ? "black" : "red")};
  font-size: 15px;
  padding: 10px 50px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  margin-left: 10px;
  color: white;
  font-weight: 600;

  &:hover {
    box-shadow: 1px -1px 13px 10px rgba(155, 155, 155, 1);
    color: white;
  }
`;

export const ButtonDisable = styled.button`
  background: gray;
  color: black;
  color: white;
  font-size: 20px;
  padding: 10px 50px;
  border-radius: 8px;
  margin: 10px 2px;
  // cursor: pointer;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TextDescription = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 10px;
`;
