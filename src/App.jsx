import {
  Button,
  Container,
  IconButton,
  Slider,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { theme } from "./config/mui-config";
import { useMediaQuery } from "@mui/material";
import { Badge } from "./style";
import { CustomButton } from "./components/ui/button/button";
import { CustomLInkButton } from "./components/ui/button/button";

function App() {
  const [value, setValue] = React.useState("one");
  const md = useMediaQuery("(max-width:1100px)");
  console.log(md);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container maxWidth="xl">
        <Badge>lorem</Badge>
        <CustomLInkButton to={"/"}>Все новинки</CustomLInkButton>
        <CustomButton>lorem</CustomButton>
        <Button variant="contained">lorem</Button>
        <Button variant="outlined">lorem</Button>
        <Button variant="text">lorem</Button>
        {!md && (
          <>
        
            <Typography variant="h2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              recusandae autem omnis aut id, repellat nisi incidunt ad
              architecto cupiditate maxime, totam minus natus quis perferendis
              illum quasi quae optio!
            </Typography>
            <Typography variant="h2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              recusandae autem omnis aut id, repellat nisi incidunt ad
              architecto cupiditate maxime, totam minus natus quis perferendis
              illum quasi quae optio!
            </Typography>
          </>
        )}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
        <TextField size="small" variant="outlined" placeholder="lorem" />
       
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
     <TextField size="small" variant="filled" placeholder="lorem" />
     <TextField size="small" variant="standard" placeholder="lorem" />
      </Container>
    </>
  );
}

export default App;
