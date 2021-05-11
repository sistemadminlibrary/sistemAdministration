import React, {useContext} from 'react'
import Swal from 'sweetalert2';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { CRMAuthContext } from '../../Context/AuthProvider';

import clienteAxios from '../../Config/config';

import '../../Css/login.css';

const Login = () => {

      const {setAuth} = useContext(CRMAuthContext);
      let history = useHistory();

    const onFinish = async (values) => {
     
      try {

       let data = await clienteAxios.post("login", values);
       setData(data);
        if (data.data.token) history.push("/sistemAdministration");
    
        } catch (error) {
          Swal.fire({icon: 'error',title: 'Oops...',text: `${error.response.data.message}`});
      }
    };
    
    const setData = ({data}) => {
    setAuth({auth:true,token: data.token,user: data.admin});
    localStorage.setItem("token",data.token)
  }

  return (
   <div className="content-frist-login">
      <div className="container content-login">
        <div className="col-sm-5 col-md-5 col-lg-6">
          <div className="card fontcss">
            <div className="card-title m-2" >
              <h1 className="text-center">Iniciar Sesion</h1>
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Ingrese su correo!',
                  },
                ]}
                
              >
                <Input className="control-intp" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Ingrese su contraseña!',
                  },
                ]}
              >
                <Input
                  className="control-intp"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Contraseña"
                />
              </Form.Item>


              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Ingresar
        </Button>

              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Login
