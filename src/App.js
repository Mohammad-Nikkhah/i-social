import RightBar from "./components/RightBar";
import { SideBar } from "./components/SideBar";
import { Feedd } from "./components/Feedd";

import { Box, Stack } from "@mui/system";
import Navbar from "./components/Navbar";

// import SettingsIcon from '@mui/icons-material/Settings';
function App() {
  return (
     <Box>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
             <SideBar/>
             <Feedd/>
             <RightBar/>
        </Stack>
     </Box>
  );
}

export default App;
