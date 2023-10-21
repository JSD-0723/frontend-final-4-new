import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";

const ProductInfo = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "12px",
  padding: "20px 10px",
  background: "var(--bright)",
}));

const Image = styled("img")(({ theme }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "8px",
}));

const ItemDesc = styled("p")(({ theme }) => ({
  color: "var(--type-low-emphasis)",
}));

const BrandName = styled("p")(({ theme }) => ({
  fontWeight: "var(--semi-bold-font)",
}));

export const OrderImage = () => {
  return (
    <>
      <ProductInfo>
        <Image src="/Assets/class.png" alt="" />
        <Sheet sx={{ background: "var(--bright)" }}>
          <BrandName>Coach</BrandName>
          <ItemDesc>Leather Coach Bag</ItemDesc>
          <ItemDesc>Qty- 1</ItemDesc>
        </Sheet>
      </ProductInfo>
    </>
  );
};