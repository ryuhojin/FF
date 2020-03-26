<template>
    <div class="panel_signin">
        <input type="text" placeholder="아이디를 입력해주세요"/>
        <input type="password" placeholder="비밀번호를 입력해주세요"/>
        <button @click="SignIn">로그인</button>
    </div>
</template>
<script>
import {PasswordValidation} from '../../utils/validation'
export default {
    data:function(){
        return{
            user:{
                userId:"",
                userPw:"",
            }
        }
    },
    methods:{
        SignIn(){
            if(this.FormValidation())
            {
                const user = {userId:this.user.userId, userPw: this.user.userPw}
            }
        },
        FormValidation(){
            this.erros=[];
            if(!this.user.userId)
            {
                return false;
            }
            if(!this.user.userPw)
            {
                return false;
            }else{
                if(PasswordValidation(this.user.userPw))
                {
                    return false;
                }
            }
            return true;
        }
    }
}
</script>