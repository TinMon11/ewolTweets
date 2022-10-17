import { useContext, useState } from "react";
import { registerUser } from "../../../../../api/users";
import Card from "../../../../components/Card";
import LoadingOverlay from "../../../../components/loaders/LoadingOverlay";
import Logo from "../../../../components/Logo";
import AppContext from "../../../../contexts/AppContext";
import RegisterForm from "../RegisterForm";
import "./styles.css";

const RegisterLayout = () => {

  const { data: appData, setData: setAppData } = useContext(AppContext);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (formData) => {

    setSubmitError(null)
    if (!formData.name || !formData.photo) { setSubmitError("Faltan Datos para Loguearse") }

    else {
      setSubmitLoading(true);
      registerUser(formData.name, formData.photo).then(response => {
        let id = response.id
        setAppData({
          ...appData,
          ...formData,
          auth: {
            user_id: id
          }
        })
        setSubmitLoading(false);
      }).catch(
        err => {
          console.log(err)
          setSubmitError(err)
          setSubmitLoading(false)
        })
    };
  }

  const handleLogout = () => {
    setAppData({
      ...appData,
      name: undefined,
      auth: undefined
    });
  };

  return (
    <div className="register-layout-container">
      <Logo width={200} />
      <Card className="card">
        <LoadingOverlay visible={submitLoading} />
        <span className="title">Bienvenido</span>
        <span className="subtitle">Regístrate para poder twittear</span>
        {submitError && (<p className="error-message"> {submitError} </p>)}
        <RegisterForm onSubmit={handleSubmit} />
      </Card>
    </div>
  );
};

export default RegisterLayout;


        //   <>
        //     <UserWelcome name={appData.name} onLogout={handleLogout} />
        //   </>
        // ) : (