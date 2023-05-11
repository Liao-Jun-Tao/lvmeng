<template>
    <div>
        <h1>用户登录</h1>
        <form @submit.prevent>
            <div>
                <input type="text" autocomplete="username" placeholder="名字" v-model="name">
            </div>
            <div>
                <input type="password" autocomplete="current-password" placeholder="名字" v-model="password">
            </div>
            <div>
                <button class="param" @click="login">登录</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import type { CurrentUser } from '~/types/user.type';
const router = useRouter()
// 代理跨域  后端 向其它的后端发送请求， 跨域
useHead({
    title: '登录'
})
const name = ref('')
const password = ref('')
const currentUser = useState('currentUser')
const login = async () => {
    // useApiFetch hooks
    // 类型的传参
    const { data } = await useApiFetch<CurrentUser>('login', {
        method: 'POST',
        body: {
            name: name.value,
            password: password.value
        }
    })
    console.log(data);
    if (data.value) {
        currentUser.value = data.value;
        useLocalStorage('currentUser', currentUser.value);
        await router.push('/');
    }
}

</script>

<style scoped></style>