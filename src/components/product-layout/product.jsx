import {
  Box,
  Container,
  Rating,
  Stack,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import React from "react";
import { data } from "../../data/data";
import { theme } from "../../config/mui-config";
import { Link, useParams } from "react-router-dom";
import LikeIcon from "../../assets/icons/like-icon";
import Car from "../../assets/icons/car";
import Nazat from "../../assets/icons/nazat";
import WatSapp from "../../assets/icons/watsapp";
import Tabs from "../tab/tab";
import { ProductCard } from "../card/product-card";

export default function Product({ imgs, img }) {
  const { id } = useParams();
  const product = data.prodact.find((item) => item.id == id);
  let item = product ? product : <h2>topilmadi</h2>;

  const handleAddToCart = () => {
    console.log("Product added to cart");
  };

  return (
    <Container maxWidth="xs"> 
      <Stack sx={{ borderBottom: "2px solid #00000080", pb: 2 }}>
        <Stack direction="row" my={2}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Главная / Ковры /{" "}
          </Link>
          <Typography sx={{ color: theme.palette.primary.main }}>
            Elexus Semerkant 1763 Coken Orta Beige
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h4" component="h1">
            Elexus Semerkant 1763 Coken Orta Beige
          </Typography>
        </Stack>
        <Stack my={1} direction="row" alignItems="center" gap={1}>
          <Rating name="no-value" value={null} />
          <Typography color={theme.palette.grey[700]} variant="body2">
            0 отзывов
          </Typography>
          <Typography color={theme.palette.grey[700]} variant="body2">
            В наличии: 10 штук
          </Typography>
        </Stack>
      </Stack>

      <Grid container spacing={2} my={3}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={3}> 
              <Stack gap={2}>
                {data.prodact.map((item, index) => (
                  <img
                    key={index}
                    src={item?.oddiy?.imgs}
                    alt=""
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={9}> 
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={item.img}
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack gap={2}>
            <Stack direction="row" justifyContent="space-between">
              <Stack gap={1}>
                <Typography variant="body2" color={theme.palette.grey[700]}>
                  Цена:
                </Typography>
                <Typography variant="h3">160.000 T</Typography>
                <Typography variant="body2" color={theme.palette.grey[700]}>
                  Размер: 160x230 см
                </Typography>
                <Typography variant="body2" color={theme.palette.primary.main}>
                  Перейти к описанию
                </Typography>
              </Stack>

              <Stack gap={1}>
                <Typography variant="body2" color={theme.palette.grey[700]}>
                  В рассрочку
                </Typography>
                <Typography variant="h3" color={theme.palette.primary.main}>
                  13.333 T
                </Typography>
                <Typography variant="body2" color={theme.palette.grey[700]}>
                  Количество: 2 штук
                </Typography>
                <Typography variant="body2" color={theme.palette.primary.main}>
                  Подробнее о рассрочке
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" gap={2} alignItems="center">
              <Button
                onClick={handleAddToCart}
                sx={{
                  backgroundColor: "#CB4A4A",
                  padding: { xs: "10px 30px", md: "13px 110px" },
                  color: "#fff",
                  "&:hover": { backgroundColor: "#a73c3c" },
                  width: "100%",
                }}
              >
                В корзину
              </Button>
              <IconButton
                sx={{
                  border: "1px solid #00000080",
                  borderRadius: "10px",
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LikeIcon />
              </IconButton>
            </Stack>

            {/* Product details and return/delivery info */}
            <Stack
              padding="20px"
              boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.1)"
              gap={2}
            >
              <Stack direction="row" alignItems="center" gap={1}>
                <IconButton>
                  <Nazat />
                </IconButton>
                <Typography variant="body2" color={theme.palette.grey[700]}>
                  Возврат в течение 14 дней
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <IconButton>
                  <Car />
                </IconButton>
                <Typography variant="body2" color={theme.palette.grey[700]}>
                  Среднее время доставки 2.5 дня
                </Typography>
              </Stack>
              <Typography variant="body2" color={theme.palette.primary.main}>
                Подробнее
              </Typography>
            </Stack>

            {/* WhatsApp support section */}
            <Stack gap={2}>
              <Typography>
                Нужна помощь с выбором? Просто напишите нам в WhatsApp и мы
                обязательно вам поможем!
              </Typography>
              <Button
                onClick={handleAddToCart}
                sx={{
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#618C78",
                  width: "100%",
                  padding: "13px",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#618C78" },
                }}
              >
                <WatSapp />
                В корзину
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Tabs/>
      <Box pt={"100px"} pb={"100px"}>
        <Container>
          <Typography mb={"29px"} variant="h2">Вам может понравиться</Typography>
          <Grid container spacing={4}>
            {
              data.prodact.map((item) => (
                <Grid item xs={12} md={6} lg={3} key={item.id}> 
                  <ProductCard {...item}/>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
