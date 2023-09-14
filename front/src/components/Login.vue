<template>
  <div class="login-container">
    <div class="login-form">
      <div class="login-field">
        <input type="text" placeholder="Email" v-model="username">
      </div>
      <div class="login-field">
        <input type="password" placeholder="Password" v-model="password">
      </div>
      <div>
        <button @click="login()">Connect</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    // The login function attempts to log in a user.
    async login() {
      const username = this.username;
      const password = this.password;
      console.log(username, password)
      try {
        const response = await fetch('http://localhost:3001/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
          // The response has the status before the promise is resolved
          // The details of the error are in the response body which is not yet resolved
          const errorData = await response.json();
          throw new Error(`Failed to login, status code: ${response.status}, message: ${errorData.details}`);
        } else {
          const data = await response.json();
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
  },
}
</script>

<style scoped lang="scss">
.login-container {
  display: grid;
  place-items: center;
  text-align: center;


  .login-form {
    width: 330px;
    border-radius: 10px;
    margin-top: 250px;


    .login-field {
      height: 50px;
      width: 100%;
      display: flex;
      margin-bottom: 30px;

      input {
        height: 100%;
        width: 100%;
        padding-left: 45px;
        font-size: 18px;
        outline: none;
        color: #000000;
        border: 3px solid rgba(255, 255, 255, 0.438);
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.438);
        ;
      }
    }
  }
}
</style>