import colors from "../../colors";

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 80px;
  background: ${colors.mineShaft};
  font-size: 20px;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;

  strong {
    margin-left: 20px;
  }
`;