import breakpoints from "@/styles/breakpoints"
import styled from "styled-components"

export const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 33.86rem;

  @media (min-width: 656px) {
    width: 90%;
    max-width: unset;
  }

  @media (min-width: 750px) {
    width: 80%;
  }

  @media ${breakpoints.md} {
    width: 100%;
    max-width: unset;
  }

  button {
    position: absolute;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    top: 50%;
    transform: translateY(-50%);
    right: 1.6rem;
    text-align: center;
  }
`

export const SearchElement = styled.input`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  height: 5.6rem;
  padding: 1.6rem;
  padding-right: 5.6rem;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.colors.bg.light};
  font-size: 1.6rem;
  font-weight: 400;
  border: 0.2rem solid transparent;

  &:focus:valid {
    border-color: #009edd;
    cursor: text;
  }

  &::placeholder {
    color: #c0c0c0;
  }
`
