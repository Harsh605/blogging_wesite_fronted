import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Loader from './Components/Loader';
import NotFound from './Components/404Page';
import EditProfile from './DoctorDashboard/Component/EditProfile';
import Profile from './AdminDashboard/Profile';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import Posts from './AdminDashboard/Posts';
import Settings from './AdminDashboard/Settings';
import AdminEditProfile from './AdminDashboard/Components/EditProfile';
import Category from './AdminDashboard/Category';
import Users from './AdminDashboard/Users';
import PaidSingleUser from './AdminDashboard/Components/PaidSingleUser';
import SinglePost from './AdminDashboard/Components/SinglePost';
import UpdatePost from './DoctorDashboard/UpdatePost';
import DoctorsPage from './AdminDashboard/DoctorsPage';
import PaymentPage from './AdminDashboard/PaymentPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ForgotPassword from './Pages/ForgotPassword';
import CreateNote from './DoctorDashboard/CreateNote';
import PatientProfilePage from './PatientDashboard/ProfilePage';
import PatientEditProfile from './PatientDashboard/Component/EditProfile';
import { FaRegQuestionCircle } from 'react-icons/fa';
import MyQuestionsTable from './PatientDashboard/Component/MyQuestionsTable';
import QuestionsPage from './PatientDashboard/QuestionsPage';
import AddQuestion from './PatientDashboard/Component/AddQuestion';
import UpdateQuestion from './PatientDashboard/Component/UpdateQuestion';
import PatientDashboard from './PatientDashboard/PatientDashboard';
import Notifications from './PatientDashboard/Component/Notifications';
import DoctorQuestionsPage from './DoctorDashboard/DoctorQuestionsPage';
import UpdateQuickNote from './DoctorDashboard/Component/UpdateQuickNote';
import AnswerTheQuestion from './DoctorDashboard/Component/AnswerTheQuestion';
import Instagram from './DoctorDashboard/Instagram';
import InstagramCreate from './DoctorDashboard/Component/InstagramCreate';
import AdminAskedQuestionPage from './AdminDashboard/AdminAskedQuestionPage';
import RepliedQuestionsPage from './AdminDashboard/RepliedQuestionsPage';
import AdminInstagram from './AdminDashboard/AdminInstagramPage';
import InstaAddCategory from './AdminDashboard/InstaAddCategory';
import AdminQuickNotes from './AdminDashboard/AdminQuickNotesPage';
import QuickNotesAddCat from './AdminDashboard/QuickNotesAddCat';
import QuestionsAddCat from './AdminDashboard/QuestionsAddCat';
import QuestionAnswerPage from './Components/QuestionAnswerPage';

const Home = lazy(() => import('../src/Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Articles = lazy(() => import('./Pages/Articles'));
const Doctors = lazy(() => import('./Pages/Doctors'));
const Login = lazy(() => import('./Pages/Login'));
const SingleMember = lazy(() => import('./Components/Members/SingleMember'));
const SinglePageArticles = lazy(() => import('./Components/Articles/SinglePageArticles/SinglePageArticls'));

const Pricing = lazy(() => import('./Pages/Pricing'));
const Register = lazy(() => import('./Pages/Register'));
const FreeRegister = lazy(() => import('./Pages/FreeRegister'));
const Dashboard = lazy(() => import('./DoctorDashboard/Dashboard'));
const Layout2 = lazy(() => import('./Layout/Layout2'));
const Layout = lazy(() => import('./Layout/Layout'));
const PostPage = lazy(() => import('./DoctorDashboard/PostPage'));
const Profilepage = lazy(() => import('./DoctorDashboard/Profilepage'));
const CreatePost = lazy(() => import('./DoctorDashboard/CreatePost'));
const PlanPage = lazy(() => import('./DoctorDashboard/PlanPage'));
const QuickNotes = lazy(() => import('./DoctorDashboard/QuickNotes'));

const App = () => {

  const userData = {
    role: "doctor"
  }
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/*" element={<Layout userData={userData}/>}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="articles" element={<Articles />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="register-as-a-user" element={<FreeRegister />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="singlePageArticles" element={<SinglePageArticles />} />
            <Route path="singleMember" element={<SingleMember />} />
            <Route path="privacyPolicy" element={<PrivacyPolicy />} />
            {/* <Route path="QuestionsPage" element={<QuestionAnswerPage userData={userData} />} /> */}
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Route>




          {
            userData && userData.role === "admin" ?
              <Route exact path={`/admin/*`} element={<Layout2 userData={userData}/>}>
                <Route exact path="dashboard" element={<AdminDashboard />} />
                <Route exact path="profile" element={<Profile />} />
                <Route exact path="doctors" element={<DoctorsPage />} />
                <Route exact path="users" element={<Users />} />
                <Route exact path="users/:id" element={<PaidSingleUser />} />
                <Route exact path='profile/edit' element={<AdminEditProfile />} />
                <Route exact path="setting" element={<Settings />} />
                <Route exact path="posts" element={<Posts />} />
                <Route exact path="payments" element={<PaymentPage />} />
                <Route exact path="payments/:id/doctor" element={<PaidSingleUser />} />
                <Route exact path="posts/:id" element={<SinglePost />} />
                <Route exact path="category" element={<Category />} />
                <Route exact path='questions' element={<AdminAskedQuestionPage />} />
                <Route exact path='questions/replied' element={<RepliedQuestionsPage />} />
                <Route exact path='questions/replied/add/category' element={<QuestionsAddCat />} />
                <Route exact path='instagram' element={<AdminInstagram />} />
                <Route exact path='instagram/add/category' element={<InstaAddCategory />} />
                <Route exact path='quickNotes' element={<AdminQuickNotes />} />
                <Route exact path='quickNotes/add/category' element={<QuickNotesAddCat />} />
              </Route>
              : userData && userData.role === "doctor" ?
              <Route exact path={`/doctor/*`} element={<Layout2 userData={userData}/>}>
                <Route exact path='dashboard' element={<Dashboard />} />
                <Route exact path='posts' element={<PostPage />} />
                <Route exact path='posts/:id/edit' element={<UpdatePost />} />
                <Route exact path='profile' element={<Profilepage />} />
                <Route exact path='posts/create' element={<CreatePost />} />
                <Route exact path='questions' element={<DoctorQuestionsPage />} />
                <Route exact path='plan' element={<PlanPage />} />
                <Route exact path='profile/edit' element={<EditProfile />} />
                <Route exact path='quickNotes/:id/edit' element={<UpdateQuickNote />} />
                <Route exact path='quickNotes' element={<QuickNotes />} />
                <Route exact path='quickNotes/create' element={<CreateNote />} />
                <Route exact path='questions/:id/edit' element={<AnswerTheQuestion />} />
                <Route exact path='instagram' element={<Instagram />} />
                <Route exact path='instagram/create' element={<InstagramCreate />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              :
              <Route exact path={`/patient/*`} element={<Layout2 userData={userData}/>}>
                <Route exact path='dashboard' element={<PatientDashboard />} />
                <Route exact path='notifications' element={<Notifications />} />
                <Route exact path='profile' element={<PatientProfilePage />} />
                <Route exact path='profile/edit' element={<PatientEditProfile />} />
                <Route exact path='questions' element={<QuestionsPage />} />
                <Route exact path='questions/create' element={<AddQuestion />} />
                <Route exact path='questions/:id/edit' element={<UpdateQuestion />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              

          }

        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
