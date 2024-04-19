<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  </head>
  <div class="container d-flex justify-content-center">
    <div class="col-sm-5">
      <div class="card">
        <div class="card-header"> Kullanıcı Oluştur
          <div class="card-body">
            <Form @submit="onSubmit" id="form">
              <div class="form-group">
                <Field name="username"  class="form-control" type="username" placeholder="kullanıcı adı yazınız" v-model="username"
                       :rules="checkLength" />
                <ErrorMessage name="username" class="text-danger" />
              </div>
              <br/>
              <div class="form-group">
                <Field name="email"  class="form-control" type="email" placeholder="email adresi yazınız"  :rules="validateEmail" v-model="email"/>
                <ErrorMessage name="email" class="text-danger" />
              </div>
              <br/>
              <div class="form-group">
                <Field name="password"  class="form-control" type="password" placeholder="şifre yazınız" v-model="password" :rules="checkPasswordLength"/>
                <ErrorMessage name="password" class="text-danger" />
              </div>
              <br/>
              <button type="submit" class="btn btn-success w-100">Kayıt Ol</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>
<script>
import { Form, Field,ErrorMessage } from 'vee-validate';
export default {

  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data(){
    return{
      username:'',
      password:'',
      email:''
    }
  },

  methods: {
    onSubmit() {
      document.getElementById('form').addEventListener('submit',function (e) {
        e.preventDefault();
        window.location.href = '/products';
      })
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'Bu alan boş bırakılamaz';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'Geçerli bir mail adresi giriniz';
      }
      // All is good
      return true;
    },

    checkLength()
    {
      if (this.username.length < 6) {
        return `${this.username} en az 6 karakter olmalıdır` ;
      }
      else  if (this.username.length >  10) {
        return`${this.username} en fazla 10 karakter olmalıdır`;
      }

      return true;

    },
    checkPasswordLength(){
      if (this.password.length <  6) {
        return` Şifre en az 6 karakter olmalıdır` ;
      }
      return  true;
    }

  }
}
</script>
