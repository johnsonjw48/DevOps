import Head from "next/head";

//IMG
import erreur404 from "./../../assets/img/error-404-monochrome.svg";

const LightSidenav = () => {
  return (
    <>
      <Head>
        <title>404 Error - SB Admin</title>
      </Head>
      <div id="layoutError">
        <div id="layoutError_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="text-center mt-4">
                    <img className="mb-4 img-error" src={erreur404.src}/>
                    <p className="lead">This requested URL was not found on this server.</p>
                    <a href="/">
                      <i className="fas fa-arrow-left me-1"></i>
                      Return to Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutError_footer">
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; Your Website 2022</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
              crossOrigin="anonymous"></script>
      <script src="js/scripts.js"></script>
    </>

);
};

export default LightSidenav;
