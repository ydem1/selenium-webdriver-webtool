import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  User,
  UserAddUrl,
  NotFound,
  UserAddRule,
  UserAllRules,
  UserAddForm,
} from "src/pages";
import { PATHNAMES } from "src/constants/routes";

const AppRoutes: FC = () => (
  <Router>
    <Routes>
      <Route path={PATHNAMES.HOME} element={<Home />} />
      <Route path={PATHNAMES.USER} element={<User />} >
        <Route index path={PATHNAMES.USER_ADD_URL} element={<UserAddUrl />} />
        <Route path={PATHNAMES.USER_ADD_FORM} element={<UserAddForm />} />
        <Route path={PATHNAMES.USER_ADD_FORM_EDIT_INPUT} element={<UserAddForm />} />
        <Route path={PATHNAMES.USER_ADD_RULE} element={<UserAddRule />} />
        <Route path={PATHNAMES.USER_ADD_RULE_EDIT_INPUT} element={<UserAddRule />} />
        <Route path={PATHNAMES.USER_ALL_RULES} element={<UserAllRules />} />
      </Route>
      <Route path={PATHNAMES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRoutes;
