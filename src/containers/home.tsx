import * as React from "react";

var logo = require("../img/react-logo.png");

export class Home extends React.Component {
    public render() {

        return <div>

            <div className="row">
                <div className="col-sm-6 d-flex ">
                    <div className="justify-content-center">
                        <div className="col-sm-12 text-right">
                            <h1 className="text-uppercase mb-0"><br /><br />Start  a REact Project</h1>
                            <hr className="star-light" />
                            <h2 className="font-weight-light mb-0">The starting point of your React application.</h2>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img className="img-fluid" src={logo} alt="" />
                </div>
            </div>

            <section className="divided clearfix bg-light text-center">
                <div className="container">
                    <div className="row py-5">
                        <div className="col col-12 col-sm-12 col-md-6 p-lg-5">
                            <div className="p-5">
                                <h5 className="h5 text-muted">JavaScript</h5>
                                <h1 className="h1 mb-5">React </h1>
                                <p>Includes React 16, one of the most powerful javascript library. Your app will be fast, light-weight and scalable.</p>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 p-lg-5">
                            <div className="p-5">
                                <h5 className="h5 text-muted">Bundler</h5>
                                <h1 className="h1 mb-5">Parcel </h1>
                                <p>A no config bundler, easy, simple and fast, just drop your files  into the project, and let Parcel work for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>;
    }
}