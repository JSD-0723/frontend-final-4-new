import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { useContext, useState } from 'react';
import AutoPlaySwipeableViews from "react-swipeable-views-react-18-fix";
import SlidesGenerator from './SlidesGenerator';
import SlidesContext from '../Shared/Context/SlidesContext';

const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const images = useContext(SlidesContext);

  setTimeout(() => {
    setActiveStep(
      activeStep === images.length - 1 ? 0 : activeStep + 1
    );
  }, 4000);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1,height: 400, margin: 3 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "ltr" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        { SlidesGenerator() }
      </AutoPlaySwipeableViews>
    </Box>
  )
};

export default Carousel;