import { useState } from "react";
import Button from "../../../../components/Button";
import InputImage from "../../../../components/InputImages";
import InputText from "../../../../components/InputText";

const RegisterForm = ({ onSubmit }) => {
  const [formValue, setFormValue] = useState({});

  const handleInputChange = (newValue) => {
    setFormValue({
      ...formValue,
      ...newValue
    }
    )
  };


  return (
    <>
      <div>
      <InputImage
        className="input-image"
        onChange={(imageBase64) => handleInputChange({ photo: imageBase64 })}
      />
        <InputText
          placeholder="Nombre"
          value={formValue.name}
          onChange={(e) => handleInputChange({ name: e.target.value })}
        />
      </div>
      <div>
        <Button onClick={() => onSubmit(formValue)}>Guardar</Button>
      </div >
    </>
  );
};

export default RegisterForm;
