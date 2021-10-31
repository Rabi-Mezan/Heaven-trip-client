import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Login from './Login/Login';
import About from './Pages/About/About';
import AddPakages from './Pages/AddPakages/AddPakages';
import BookTrip from './Pages/BookTrip/BookTrip';
import Home from './Pages/Home/Home';
import ManageTrips from './Pages/ManageTrips/ManageTrips';
import Mytrip from './Pages/Mytrip/Mytrip';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Service from './Pages/Service/Service';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/addpackage'>
              <AddPakages></AddPakages>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/managetrips'>
              <ManageTrips></ManageTrips>
            </PrivateRoute>
            <PrivateRoute path='/booktrip/:tripId'>
              <BookTrip></BookTrip>
            </PrivateRoute>
            <PrivateRoute path='/mytrip'>
              <Mytrip></Mytrip>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
