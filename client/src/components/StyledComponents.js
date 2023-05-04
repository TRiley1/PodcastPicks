import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 10px;
  margin-top: 5px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 10px;
    margin-top: 5px;
      }
  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 10px;
    margin-top: 5px;
      }
`;

const StyledContainerFav = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 5rem;
  margin: 10px;
  margin-top: 5px;
`;

const StyledTitle = styled.h1`
  font-size: 0.9rem;
  font-weight: bold;
  color: #00A676;
  margin-bottom: 2rem;
  text-transform: capitalize;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  font-weight: bold;
  color: #00A676;
  margin-bottom: 2rem;
  text-transform: capitalize;
  text-decoration: none;
  &:hover {
    color: black;
};  
`

const StyledTitleFav = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #00A676;
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
  margin-top: 15px;

  &:hover {
    background-color: grey;
  }
`;
const StyledButtonFav = styled.button`
  color: #fff;
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: grey;
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
  border-radius: 10px;
`

const StyledImageFav = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  margin-right: 5px;
`
const StyledContainerEp = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 10px;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledEpisode = styled.li`
  list-style: none;
  padding: 1rem;
  text-align: center;
  border-radius: 50px;
  background-color: #eee;
  a {
    color: #00A676;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
`;

const StyledEpisodeImg = styled.img`
  margin: 15px;
  border-radius: 10px;
`

const StyledText = styled.p`
  text-align: justify;
  padding: 30px;
`

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledDescription = styled.h3`
  text-align: justify;
  border-radius: 5px;
  height: auto;
  padding: 5rem;
`
 
export {StyledContainer, StyledText, StyledContainerEp, StyledDescription, StyledFlex, StyledTitle, StyledButton, StyledItem, StyledImage, StyledContainerFav, StyledEpisodeImg, StyledImageFav, StyledButtonFav, StyledTitleFav, StyledEpisode, StyledLink}