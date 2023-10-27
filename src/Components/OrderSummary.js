import { Button, Divider, Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { Link } from "react-router-dom";
import { SectionTitle } from "./SectionTitle";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "var(--bright)",
  paddingTop: "15px",
}));

const LeftSide = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
}));

const RightSide = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  textAlign: "end",
  paddingRight: "15px",
}));

const PriceDetail = styled("p")(({ theme }) => ({
  fontWeight: "var(--semi-bold-font)",
  color: "var(--type-low-emphasis)",
}));

const Values = styled("p")(({ theme }) => ({
  fontWeight: "var(--medium-font)",
}));

export const OrderSummary = ({ showButtons = true }) => {
  return (
    <>
      <Divider />
      <Container>
        <LeftSide>
          <PriceDetail>Sub Total</PriceDetail>
          <PriceDetail>Discount</PriceDetail>
          <PriceDetail>Delivery Fee</PriceDetail>
          <h4>Grand Total</h4>
        </LeftSide>
        <RightSide>
          <Values>$119.69</Values>
          <Values>-$13.40</Values>
          <Values>$12.00</Values>
          <h4>$106.29</h4>
        </RightSide>
      </Container>
      {showButtons && (
        <Container>
          <Button as={Link} to="/checkout">
            Proceed to Checkout
          </Button>
          <Button
            as={Link}
            to="/"
            variant="outlined"
            sx={{
              color: "var(--primary)",
              borderColor: "var(--primary)",
              marginRight: "15px",
            }}>
            Continue Shopping
          </Button>
        </Container>
      )}
    </>
  );
};