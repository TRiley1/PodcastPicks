import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 10px;
  margin-top: 5px;
`;

const StyledTitle = styled.h1`
  font-size: 0.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  text-transform: capitalize;
`;

const StyledButton = styled.button`
  color: #fff;
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  margin-top: 15px

  &:hover {
    background-color: #005f8b;
  }
`;

const StyledItem = styled.div`
  background-color: #eee;
  padding: 1rem;
  text-align: center;
  border-radius: 50px
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 5px
`

 
export {StyledContainer,StyledTitle,StyledButton, StyledItem, StyledImage}