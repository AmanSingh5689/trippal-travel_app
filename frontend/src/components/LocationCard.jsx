import styled from "styled-components";
const StyledLocationCard = styled.div`
  /* width: 35.8rem; */
  max-height: 42rem;
  text-align: left;
  border-radius: 12px;
  color: white;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  &:hover div:first-child {
    min-height: 10rem;
    padding: 6.1rem 1.6rem 1.6rem 1.6rem;
    filter: grayscale(0);
  }
  &:hover div:nth-child(2) {
    background-color: none;
  }
`;
const StyledImageContainer = styled.div`
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8),
      rgba(255, 255, 255, 0.1)
    ),
    url(${(props) => props.$img});
  background-size: cover;
  min-height: 24rem;
  background-position: center;
  font-size: 2rem;
  font-weight: 600;
  padding: 20rem 1.6rem 1.6rem 1.6rem;
  filter: grayscale(0.5);
  transition: all 0.3s ease-in-out;
`;
const StyledDescriptionContainer = styled.div`
  height: 100%;
  padding: 2.4rem;
  font-size: 1.6rem;
  line-height: 1.3;
  text-align: justify;
  color: #1a1a1a;
`;

function LocationCard({ item }) {
  return (
    <StyledLocationCard>
      <StyledImageContainer $img={item.image}>
        <p>{item.name}</p>
      </StyledImageContainer>
      <StyledDescriptionContainer>
        <p>{item.description}</p>
      </StyledDescriptionContainer>
    </StyledLocationCard>
  );
}

export default LocationCard;
