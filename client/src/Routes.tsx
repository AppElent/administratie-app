/* eslint-disable react/no-multi-comp */
import React, { FunctionComponent } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  // ThemeDashboard,
  // ThemeProductList,
  // ThemeUserList,
  // ThemeTypography,
  // ThemeIcons,
  // ThemeAccount,
  // ThemeSettings,
  // ThemeSignUp,
  // ThemeSignIn,
  // ThemeNotFound,
  Demo,
  // Home,
  SignIn,
  Account,
  Rekeningen,
  Bunq,
  TestPage,
  Events,
  Meterstanden,
  OAuthPage,
  NotFound,
} from './views';

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/account" />
      <RouteWithLayout component={SignIn} exact layout={MinimalLayout} path="/sign-in" />
      <RouteWithLayout component={Account} exact layout={MainLayout} path="/account" protectedRoute />
      <RouteWithLayout component={Events} exact layout={MainLayout} path="/events" protectedRoute />
      <RouteWithLayout component={Meterstanden} exact layout={MainLayout} path="/meterstanden" protectedRoute />
      <RouteWithLayout component={TestPage} exact layout={MainLayout} path="/testpage" protectedRoute />
      <RouteWithLayout component={Demo} exact layout={MainLayout} path="/demo" protectedRoute />
      <RouteWithLayout component={Rekeningen} exact layout={MainLayout} path="/rekeningen" protectedRoute />
      <RouteWithLayout component={Bunq} exact layout={MainLayout} path="/bunq/:tab" protectedRoute />
      <RouteWithLayout component={Bunq} exact layout={MainLayout} path="/bunq" protectedRoute />
      <RouteWithLayout component={OAuthPage} exact layout={MainLayout} path="/oauth/:action/:name" protectedRoute />
      <RouteWithLayout component={NotFound} exact layout={MinimalLayout} path="/not-found" />
      <Redirect to="/not-found" />
      {/*
      <RouteWithLayout 
        component={Home}
        exact
        layout={MainLayout}
        path="/home"
        protectedRoute
      />

      <RouteWithLayout 
        component={ThemeDashboard}
        exact
        layout={MainLayout}
        path="/private"
        protectedRoute
      />









      <RouteWithLayout 
        component={ThemeDashboard}
        exact
        layout={MainLayout}
        path="/theme/dashboard"
      />
      <RouteWithLayout        
        component={ThemeUserList}
        exact
        layout={MainLayout}
        path="/theme/users"
      />
      <RouteWithLayout        
        component={ThemeProductList}
        exact
        layout={MainLayout}
        path="/theme/products"
      />
      <RouteWithLayout        
        component={ThemeTypography}
        exact
        layout={MainLayout}
        path="/theme/typography"
      />
      <RouteWithLayout        
        component={ThemeIcons}
        exact
        layout={MainLayout}
        path="/theme/icons"
      />
      <RouteWithLayout        
        component={ThemeAccount}
        exact
        layout={MainLayout}
        path="/theme/account"
      />
      <RouteWithLayout 
        component={ThemeSettings}
        exact
        layout={MainLayout}
        path="/theme/settings"
      />
      <RouteWithLayout 
        component={ThemeSignUp}
        exact
        layout={MinimalLayout}
        path="/theme/sign-up"
      />
      <RouteWithLayout 
        component={ThemeSignIn}
        exact
        layout={MinimalLayout}
        path="/theme/sign-in"
      />
      <RouteWithLayout 
        component={ThemeNotFound}
        exact
        layout={MinimalLayout}
        path="/theme/not-found"
      />
      <Redirect to="/not-found" />
      */}
    </Switch>
  );
};

export default Routes;
