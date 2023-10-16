<template>
    <form 
    @submit.prevent="handleSubmit"
    class="user-form">
        <h2>In Authentication from Firebase</h2>
        <div class="user-form__box">
            <label for="user_email" class="user-form__label">Name</label>
            <input type="email" id="user_email" class="user-form__input" v-model="email">
        </div>
        <div class="user-form__box">
            <label for="user_pass" class="user-form__label">Password</label>
            <input type="password" id="user_pass" class="user-form__input" v-model="pass">
        </div>
        <button type="submit">Send</button>
        <hr>
        <button @click="userWithGogle">Sign In with Google</button>
    </form>
</template>

<script>
import { createUser, signInUser, signInWithGoogle  } from '@/firebase/auth'
import { reactive, ref } from 'vue'

export default {
    setup() {
        const user = reactive({})
        const email = ref();
        const pass = ref();
        return {
            email,
            pass,
            handleSubmit: (e) => {
                user.email = email.value
                user.pass = pass.value
                
                signInUser(user)
            },
            userWithGogle: async () => {
                await signInWithGoogle()
            }        
        }
    }
}

</script>