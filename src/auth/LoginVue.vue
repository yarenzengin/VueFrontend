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
        <div class="card-header">
          <div class="card-body">
            <Form @submit.prevent="login" id="form">
              <br/>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" id="email" v-model="email" class="form-control">
                </div>

                <div>
                  <label for="password">Parola:</label>
                  <input type="password" id="password" v-model="password" class="form-control">
                </div>

                <button type="submit" class="btn btn-success btn-block mt-2">Oturum Aç</button>
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
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.email === 'deneme@gmail.com' && this.password === '12345') {
        this.$router.push('/products');
      } else {
        alert('Email veya parola yanlış!');
      }
    }
  }
};
</script>
