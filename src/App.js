import React  ,{ useContext } from 'react'

import { BrowserRouter as Router , Redirect, Route, Switch } from 'react-router-dom';

import './Css/estilonav.css';
import { CRMAuthContext } from "./Context/AuthProvider";
import { Provider } from "./Context/Provider";

import Register from "./Components/Admin/Register";
import Login from "./Components/Admin/Login";
import CaseAdmin from "./Components/Admin/CaseAdmin";
import Prestamos from "./Components/Admin/Prestamos";
import EspecificBook from "./Components/Admin/EspecificBook";
import Reservations from "./Components/Admin/Reservations";
import Returns from "./Components/Admin/Returns";
import FormLoans from "./Components/Admin/FormLoans";
import FormAddBook from "./Components/Admin/FormAddBook";
import EditBook from "./Components/Admin/EditBook";
import ReportAdmin from "./Components/Admin/ReportAdmin";

function App() {

   const { auth } = useContext(CRMAuthContext);

  return (
    <>
      <Router>
        <Provider>
          <Switch>
            <Route exact path="/admin/login" component={Login} />

            {auth.auth || localStorage.getItem("token") ? (
              <Route exact path="/sistemAdministration" component={CaseAdmin} />
            ) : (
              <Redirect to="/admin/login" />
            )}

            <Route exact path="/admin/loans" component={Prestamos} />
            <Route exact path="/admin/books" component={EspecificBook} />
            <Route exact path="/admin/add/books" component={FormAddBook} />
            <Route exact path="/admin/reservations" component={Reservations} />
            <Route exact path="/admin/returns" component={Returns} />
            <Route exact path="/admin/loan/:id" component={FormLoans} />
            <Route exact path="/admin/register" component={Register} />
            <Route exact path="/admin/edit/:id" component={EditBook} />
            <Route exact path="/admin/report" component={ReportAdmin} />
          </Switch>
        </Provider>
      </Router>
    </>
  );
}

export default App;
