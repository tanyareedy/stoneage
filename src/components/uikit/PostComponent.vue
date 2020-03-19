<template>
    <div>

<!--        CRETAE POST HERE-->
        <div class="create-post">
            <label for="create-post">Say ahhhhh!!!</label>
            <input type="text" id="create-post" v-model="text" placeholder="Create a posst">
        </div>
        <button @click="createPost()">POST!! </button>


        <hr>
        <p class="error" v-if="error">{{error}}</p>
        <div class="posts-container">
            <div class="post"
                v-for="(post, index) in posts"
                 :item="post"
                 :index="index"
                 :key="post._id"
                 @dblclick="deletePost(post._id)"
            >
                {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/
                ${post.createdAt.getFullYear()}/ ${post.createdAt.getMinutes()}`}}

                <p class="text">{{post.text}}</p>


            </div>

        </div>
    </div>
</template>

<script>
    import PostService from "../../../api/service/PostService";


    export default {
        data() {
            return {
                posts: [],
                error: '',
                text: ''
            }
        },



        async created() {
            try {
                this.posts = await PostService.getPost();
            } catch (err) {
                this.error = err.message;

            }
        },

        methods:{
            async createPost(){
                await PostService.insertPost(this.text);
                this.posts = await PostService.getPost();

            },

            async deletePost(id){
                await PostService.deletePost(id);
                this.posts = await PostService.getPost();

            }
        }
    }
</script>

<style scoped>

    div.container {
        max-width: 800px;
        margin: 0 auto;
    }

    p.error {
        border: 1px solid red;
        background-color: pink;
        padding: 10px;
        margin-bottom: 15px;
    }

    div.post {
        position: relative;
        border: 1px solid darkseagreen;
        background-color: #00d0b2;
        padding: 10px 10px 30px 10px;
        margin-bottom: 15px;
    }


    div.created-at {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px 15px 5px 15px;
        background-color: darkseagreen;
        color: white;
        font-size: 13px;
    }

    p.text {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 0;
    }
</style>
