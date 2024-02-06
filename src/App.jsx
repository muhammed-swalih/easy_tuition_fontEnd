import "./App.css";
import LoginPage from "./pages/TaecherPages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/manrope";
import TeachRegPage from "./pages/TaecherPages/TeachRegPage";
import TeachOTPPage from "./pages/TaecherPages/TeachOTPPage";
import TeacherPersonalPage from "./pages/TaecherPages/TeacherPersonalPage";
import TeachCollegePage from "./pages/TaecherPages/TeachCollegePage";
import TeachClassPage from "./pages/TaecherPages/TeachClassPage";
import TeachSubectBoardsPage from "./pages/TaecherPages/TeachSubectBoardsPage";
import TeacherTimePage from "./pages/TaecherPages/TeacherTimePage";
import TeacherBankPage from "./pages/TaecherPages/TeacherBankPage";
import TeachIntroPage from "./pages/TaecherPages/TeachIntroPage";
import TeachRegSuccPage from "./pages/TaecherPages/TeachRegSuccPage";
import TeachRegReject from "./pages/TaecherPages/TeachRegReject";
import TeachDashBoardPage from "./pages/TaecherPages/TeachDashBoardPage";
import TeacherChatPage from "./pages/TaecherPages/TeacherChatPage";
import TeachMessagePage from "./pages/TaecherPages/TeachMessagePage";
import TeachMyClassPage from "./pages/TaecherPages/TeachMyClassPage";
import MyStudentPages from "./pages/TaecherPages/MyStudentPages";
import StudDetailsPage from "./pages/TaecherPages/StudDetailsPage";
import TeachWebinarPage from "./pages/TaecherPages/TeachWebinarPage";
import HostWebinarPage from "./pages/TaecherPages/HostWebinarPage";
import TeachAssignmentPage from "./pages/TaecherPages/TeachAssignmentPage";
import CreateAssPage from "./pages/TaecherPages/CreateAssPage";
import TeachProfile from "./components/Teacher/TeachProfile";
import TeachMeterialPage from "./pages/TaecherPages/TeachMeterialPage";
import TeachCreateMeterialPage from "./pages/TaecherPages/TeachCreateMeterialPage";
import StudReg from "./components/Student/StudReg";
import StudOTP from "./components/Student/StudOTP";
import StudPersonal from "./components/Student/StudPersonal";
import SchoolDetails from "./components/Student/SchoolDetails";
import ParentDetails from "./components/Student/ParentDetails";
import StudCongrats from "./components/Student/StudCongrats";
import StudDashboard from "./components/Student/StudDashboard";
import StudChat from "./components/Student/StudChat";
import StudMessages from "./components/Student/StudMessages";
import StudClass from "./components/Student/studClass";
import StudAddSubject from "./components/Student/StudAddSubject";
import StudWebinar from "./components/Student/StudWebinar";
import StudTeachers from "./components/Student/StudTeachers";
import StudFilterTeachers from "./components/Student/StudFilterTeachers";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/teacherRegister" element={<TeachRegPage />} />
          <Route path="/teacherOTP" element={<TeachOTPPage />} />
          <Route path="/teachPersonal" element={<TeacherPersonalPage />} />
          <Route path="/teachCollege" element={<TeachCollegePage />} />
          <Route path="/teachChooseClass" element={<TeachClassPage />} />
          <Route path="/teachSub" element={<TeachSubectBoardsPage />} />
          <Route path="/teachTime" element={<TeacherTimePage />} />
          <Route path="/teachBank" element={<TeacherBankPage />} />
          <Route path="/teachIntro" element={<TeachIntroPage />} />
          <Route path="/teachRegSucc" element={<TeachRegSuccPage />} />
          <Route path="/teachRegFail" element={<TeachRegReject />} />
          <Route path="/teachDashboard" element={<TeachDashBoardPage />} />
          <Route path="/teachChats" element={<TeacherChatPage />} />
          <Route path="/teachMessages" element={<TeachMessagePage />} />
          <Route path="/teachMyClass" element={<TeachMyClassPage />} />
          <Route path="/myStudents" element={<MyStudentPages />} />
          <Route path="/studDetails" element={<StudDetailsPage />} />
          <Route path="/TeachWebinar" element={<TeachWebinarPage />} />
          <Route path="/hostWebinar" element={<HostWebinarPage />} />
          <Route path="/teachAssignment" element={<TeachAssignmentPage />} />
          <Route path="/createAss" element={<CreateAssPage />} />
          <Route path="/teachProfile" element={<TeachProfile />} />
          <Route path="/studyMeterial" element={<TeachMeterialPage />} />
          <Route path="/createMeterial" element={<TeachCreateMeterialPage />} />

          {/* Student router */}

          <Route path="/studReg" element={<StudReg />} />
          <Route path="/studOTP" element={<StudOTP />} />
          <Route path="/studPersonal" element={<StudPersonal />} />
          <Route path="/schoolDetails" element={<SchoolDetails />} />
          <Route path="/parentDetails" element={<ParentDetails />} />
          <Route path="/congrats" element={<StudCongrats />} />
          <Route path="/studDashboard" element={<StudDashboard />} />
          <Route path="/studChat" element={<StudChat />} />
          <Route path="/studMessages" element={<StudMessages />} />
          <Route path="/studClass" element={<StudClass />} />
          <Route path="/studAddSubject" element={<StudAddSubject />} />
          <Route path="/studWebinar" element={<StudWebinar />} />
          <Route path="/studTeachers" element={<StudTeachers />} />
          <Route path="/studFilter" element={<StudFilterTeachers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
