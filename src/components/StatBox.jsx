// import { Box, Typography, useTheme } from "@mui/material";
// import { tokens } from "../theme";
// import ProgressCircle from "./ProgressCircle";

// const StatBox = ({title, subtitle, icon, progress, increse}) => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode)

//     return(
//         <Box width="100%" m="0 30px">
//             <Box display="flex"
//             justifyContent="space-between"
//             >
//                 <Box>
//                     {icon}
//                     <Typography
//                     variant="h4"
//                     fontWeight="bold"
//                     sx={{color: colors.grey[100]}}
//                     >
//                         {title}
//                     </Typography>
//                 </Box>
//                 <Box>
//                     <ProgressCircle progress={progress} />
//                 </Box>
//                 <Box display="flex" justifyContent="space-between">
//                     <Typography 
//                     variant="h5" 
//                     sx={{color: colors.greenAccent[500]}}
//                     >
//                         {subtitle}
//                     </Typography>
//                     <Typography
//                     variant="h5"
//                     fontStyle="italic"
//                     sx={{color: colors.greenAccent[600]}}
//                     >
//                         {increse}
//                     </Typography>

//                 </Box>


//             </Box>

//         </Box>
//     )
// }


// export default StatBox



import { Box, Typography,  } from "@mui/material";
// import { tokens } from "../theme";
// import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {


  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: '#e0e0e0' }}
          >
            {title}
          </Typography>
        </Box>
        {/* <Box>
          <ProgressCircle progress={progress} />
        </Box> */}
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: '#4cceac' }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: '#3da58a' }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
