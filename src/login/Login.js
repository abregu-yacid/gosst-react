import React, { useState } from "react";
import {Form, Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import logo from "../images/logoGosst.png";
import LogicCallssss  from "../util/utilClass.js";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  function validateForm() {
    return user.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const dataParam = {
        userName : user,
        password : password
    }
    
    LogicCallssss.callAjaxPost("login/validated",dataParam,(data)=>{
        console.log(data);
        procesarRespuesta(data);
    });
  }

  return (
    <div className="Login">
        <h6>Gestor Online de Seguridad y Salud en el Trabajo</h6>
        <img src={logo} alt="logoGosst" height="200px"/>
       {
       // <h5>Enter the system</h5> 
    }
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="user"  >
          <FormLabel>User</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password"  >
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block   disabled={!validateForm()} type="submit">
          Login
        </Button>
        <div className="msgAlert"  >{msg}</div>
      </Form>
     
      <a className="efectoLink" href="https://www.gosst.io">Forgot Password?</a>

    </div>
  );
  function procesarRespuesta(data) {
	setMsg("");
	if (data.CODE_RESPONSE === "02") {
		setMsg("Usuario y/o contraseña incorrectos.");
	} else if (data.CODE_RESPONSE === "03") {
		setMsg("Usuario está bloqueado, intentelo dentro de 2 minutos.");
	} else if (data.CODE_RESPONSE === "11") {
		setMsg("Usuario no existe");
	} else if (data.CODE_RESPONSE === "13") {
		setMsg("Contratista no activo en la empresa");
	} else if (data.CODE_RESPONSE === "14") {
		setMsg("Trabajador retirado de la empresa");
	} else if (data.CODE_RESPONSE === "01") {
		var clasifs = data.listaClasificaciones;
		var pels = data.mapPeligros;
		var riesgos = data.mapRiesgos;
		LogicCallssss.createSession("moduloGosstId", data.moduloId);
		LogicCallssss.createSession("gestopcompanyid", data.empresaId);
		LogicCallssss.createSession("gestopcompanyname", data.empresaNombre);
		
		LogicCallssss.createSession("clasifs", JSON.stringify(clasifs));
		LogicCallssss.createSession("peligros", JSON.stringify(pels));
		LogicCallssss.createSession("riesgos", JSON.stringify(riesgos));
		//createSession("gestopusername", data.usuarioNombre);
		LogicCallssss.createSession("numEmpresas", data.numEmpresas);
		LogicCallssss.createSession("numUnidades", data.numUnidades);
		LogicCallssss.createSession("trabajadorGosstId", data.trabajadorId);
		LogicCallssss.createSession("contratistaGosstId", data.contratistaId);
		LogicCallssss.createSession("unidadGosstId", data.trabajadorUnidadId);
		LogicCallssss.createSession("areaGosstId", data.trabajadorAreaId);
		LogicCallssss.createSession("puestoGosstId", data.trabajadorPuestoId);
		LogicCallssss.createSession("fechaActualizacionPuesto", data.trabajadorFechaPuesto);
		LogicCallssss.createSession("accesoGerencia", data.accesoGerencia);
		
		LogicCallssss.createSession("accesoUsuarios", data.accesoUsuarios);
		LogicCallssss.createSession("hasTutorialCap", data.hasTutorialCap);
		LogicCallssss.createSession("gestopInicio",0);
		LogicCallssss.createSession("modulo", "Modulos");
        
        document.location.href=(data.PATH.split(".")[0]);
		
	} else {
		setMsg("<b>Usuario incorrecto.</b>");
	}
}
}


