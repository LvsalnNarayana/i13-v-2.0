import * as React from 'react';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Main } from './components/StyledComponents/StyledComponents';
import Header from './components/Header/Header';
import RightMenu from './components/RightMenu/RightMenu';
import ApplicationMenu from './components/ApplicationMenu/ApplicationMenu';
import { selectRightDrawer, selectLeftDrawer } from './features/AppState/AppState';
import { PDFViewer } from '@react-pdf/renderer';
import PDFGenerator from './pages/PdfGenerator';
import { Routes, Route } from 'react-router-dom';
import VPCCanvasEditor from './pages/VPCCanvasEditor';
import Home from './components/Home/Home';
const theme = createTheme({
  palette: {
    primary: {
      main: '#38a169',
    },
  },
});

const VPCTemplate = ({ leftDrawerStatus, rightDrawerStatus }) => (
  <div>
    <Header />
    <ApplicationMenu />
    <RightMenu />
    <Main LeftOpen={leftDrawerStatus} RightOpen={rightDrawerStatus} className='main'>
      <VPCCanvasEditor />
    </Main>
  </div>
);
const PDFReport = () => (
  <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <PDFGenerator />
    </PDFViewer>
  </div>
)
export default function App() {
  const rightDrawerStatus = useSelector(selectRightDrawer);
  const leftDrawerStatus = useSelector(selectLeftDrawer);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/VPC'
          element={<VPCTemplate leftDrawerStatus={leftDrawerStatus} rightDrawerStatus={rightDrawerStatus} />}
        />
        <Route path='/report' element={<PDFReport />} />
      </Routes>
      {/* <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PDFViewer style={{ width: '100%', height: '100%' }}>
        <PDFGenerator />
      </PDFViewer>
    </div> */}
      {/* <PDFDownloadLink document={<PDFGenerator />} fileName="generated-pdf.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now'
      }
    </PDFDownloadLink> */}
    </ThemeProvider>
  );
}


