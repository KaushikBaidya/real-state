import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/frontend/landing/Landing";
import { FallbackLoading } from "./components/frontend/common/Loading";
import "./App.css";
import Dashboard from "./components/frontend/adminPanel/Dashboard";

import AdminBannerList from "./components/frontend/adminPanel/adminBanner/AdminBannerList";
import AdminBannerAdd from "./components/frontend/adminPanel/adminBanner/AdminBannerAdd";
import AdminBannerEdit from "./components/frontend/adminPanel/adminBanner/AdminBannerEdit";

import AdminServicesList from "./components/frontend/adminPanel/adminServices/AdminServicesList";
import AdminServicesAdd from "./components/frontend/adminPanel/adminServices/AdminServicesAdd";
import AdminServicesEdit from "./components/frontend/adminPanel/adminServices/AdminServicesEdit";

import AdminPropertiesList from "./components/frontend/adminPanel/adminProperties/AdminPropertiesList";
import AdminPropertiesAdd from "./components/frontend/adminPanel/adminProperties/AdminPropertiesAdd";
import AdminPropertiesEdit from "./components/frontend/adminPanel/adminProperties/AdminPropertiesEdit";

import AdminGalleryList from "./components/frontend/adminPanel/adminGallery/AdminGalleryList";
import AdminGalleryAdd from "./components/frontend/adminPanel/adminGallery/AdminGalleryAdd";
import AdminGalleryEdit from "./components/frontend/adminPanel/adminGallery/AdminGalleryEdit";

import AdminOurTeamList from "./components/frontend/adminPanel/adminOurTeam/AdminOurTeamList";
import AdminOurTeamAdd from "./components/frontend/adminPanel/adminOurTeam/AdminOurTeamAdd";
import AdminOurTeamEdit from "./components/frontend/adminPanel/adminOurTeam/AdminOurTeamEdit";

import AdminTestimonialsList from "./components/frontend/adminPanel/adminTestimonials/AdminTestimonialsList";
import AdminTestimonialsAdd from "./components/frontend/adminPanel/adminTestimonials/AdminTestimonialsAdd";
import AdminTestimonialsEdit from "./components/frontend/adminPanel/adminTestimonials/AdminTestimonialsEdit";

import AdminPartnerList from "./components/frontend/adminPanel/adminPartner/AdminPartnerList";
import AdminPartnerAdd from "./components/frontend/adminPanel/adminPartner/AdminPartnerAdd";
import AdminPartnerEdit from "./components/frontend/adminPanel/adminPartner/AdminPartnerEdit";
import SignIn from "./components/frontend/authnication/SignIn";
import SignUp from "./components/frontend/authnication/SignUp";
import PrivateRoute from "./components/frontend/authnication/PrivateRoute";
import AboutUs from "./components/frontend/components/AboutUs.jsx";
import WhyUs from "./components/frontend/components/WhyUs.jsx";

const NotFound = lazy(() => import("./components/frontend/common/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<FallbackLoading />}>
        <Toaster position="top-right" reverseOrder={false} />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/whyus">
            <WhyUs />
          </Route>

          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/banner">
            <AdminBannerList />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/banner/add">
            <AdminBannerAdd />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/banner/edit/:id">
            <AdminBannerEdit />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/service">
            <AdminServicesList />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/service/add">
            <AdminServicesAdd />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/service/edit/:id">
            <AdminServicesEdit />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/properties">
            <AdminPropertiesList />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/properties/add">
            <AdminPropertiesAdd />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/properties/edit/:id">
            <AdminPropertiesEdit />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/gallery">
            <AdminGalleryList />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/gallery/add">
            <AdminGalleryAdd />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/gallery/edit/:id">
            <AdminGalleryEdit />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/ourTeam">
            <AdminOurTeamList />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/ourTeam/add">
            <AdminOurTeamAdd />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/ourTeam/edit/:id">
            <AdminOurTeamEdit />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/testimonials">
            <AdminTestimonialsList />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/testimonials/add">
            <AdminTestimonialsAdd />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/testimonials/edit/:id">
            <AdminTestimonialsEdit />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/partner">
            <AdminPartnerList />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/partner/add">
            <AdminPartnerAdd />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/partner/edit/:id">
            <AdminPartnerEdit />
          </PrivateRoute>
          <PrivateRoute path="*">
            <NotFound />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
