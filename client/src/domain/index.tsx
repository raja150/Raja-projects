import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";
import { ToastContainer } from "react-toastify";

const Domain = lazy(() => import("../domain/pages"));
const NotFound: React.FC = () => <div>404 Page Not Found</div>;

const AppMain: React.FC = () => {
    const renderLoader = (message: string) => (
        <div className="loader-container">
            <div className="loader-container-inner">
                <div className="text-center">
                    <Loader active={true} type="line-scale-party" />
                </div>
                <h6 className="mt-3">{message}</h6>
            </div>
        </div>
    );
    debugger
    return (
        <Fragment>
            <Suspense fallback={renderLoader("Please wait while we load the Page")}>
                <Routes>
                    <Route path="/" element={<Domain />} />
                </Routes>
            </Suspense>
            {/* <Routes>
                <Route path="*" element={<NotFound />} />
            </Routes> */}
            <ToastContainer />
        </Fragment>
    );
};

export default AppMain;
