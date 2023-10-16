<template>
    <form @submit.prevent="newUser" class="form">
        <h2>In Firestore</h2>
        <div class="form__box">
            <label for="store_email" class="form__label">Email</label>
            <input type="email" id="store_email" class="form__input" v-model="email">
        </div>
        <div class="form__box">
            <label for="store_pass" class="form__label">Password</label>
            <input type="password" id="store_pass" class="form__input" v-model="pass">
        </div>
        <div class="form__box">
            <button type="submit">Send</button>
        </div>
    </form>
    <ul>
        <li
        v-for="item in items"
        :key="item.id"
        >
            <p>{{item.email}}</p>
            <p>{{item.pass}}</p>
            <button @click="selectItem(item.id)">Edit</button>
        </li>
    </ul>
    <div v-show="update" class="update">
        <form class="update__form" @submit.prevent="updateItem(itemUpdate)">
            <input type="text" v-model="itemUpdate.email">
            <input type="text" v-model="itemUpdate.pass">
            <button>update</button>
        </form>
    </div>
</template>

<script>
import { addNewUser, getData, getOneDocument, updateData } from '@/firebase/firestore'
import { reactive, ref } from 'vue';

export default {
    setup() {
        const user = reactive({})
        const email = ref()
        const pass = ref()
        const items = ref(null)
        const update = ref(false)
        const itemUpdate = reactive({})

        const getAllData = async() => {
            items.value = await getData()
        }

        getAllData()

        return {
            user,
            email,
            pass,
            items,
            itemUpdate,
            update,
            newUser: async () => {
                user.email = email.value;
                user.pass = pass.value

                await addNewUser(user)
            },
            selectItem: async (data) => {
                update.value = true
                const { email, pass, id } = await getOneDocument(data)
                itemUpdate.email = email
                itemUpdate.pass = pass
                itemUpdate.id = id
            },
            updateItem: async ( data ) => {
                await updateData(data)
                await getData()
                update.value = false
            }
        }
    }
}
</script>