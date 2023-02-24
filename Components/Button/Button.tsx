import styled from "@emotion/styled";

const ButtonContainer = styled.button`
  background-color: #33b557;
  color: #fff;
  outline: none;
  border: none;
  font-weight: bolder;
  height: 3.5em;
  padding: 0 2em;
  border-radius: 0.5em;
`;

export default function Button({ title }: { title: string }) {
  return <ButtonContainer>{title}</ButtonContainer>;
}
