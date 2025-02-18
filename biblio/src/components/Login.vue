<template>
  <div class="container">
    <div class="login-box">
      <h2>Login</h2>
      <form id="login-form" @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" class="submit-btn">Login</button>

        <div class="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </form>

      <p class="signup-link">Don't have an account? <router-link to="/register">Sign up here</router-link></p>
    </div>
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
    handleLogin() {
      // Clear previous error messages
      console.log('Login:', this.email, this.password);
      this.$router.push('/');

      // Validate email
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(this.email)) {
        this.displayError('email', 'Please enter a valid email');
        return;
      }

      // Validate password
      if (this.password.length < 6) {
        this.displayError('password', 'Password must be at least 6 characters long');
        return;
      }

      // If validation passes, proceed with login logic
      console.log('Login successful:', this.email, this.password);
      this.$router.push('/');
    },
    clearErrors() {
      document.getElementById('email-error').textContent = '';
      document.getElementById('password-error').textContent = '';
    },
    displayError(field, message) {
      document.getElementById(`${field}-error`).textContent = message;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error-message {
  color: red;
  font-size: 12px;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #0056b3;
}

.forgot-password {
  text-align: right;
  margin-top: 10px;
}

.signup-link {
  text-align: center;
  margin-top: 20px;
}
</style>