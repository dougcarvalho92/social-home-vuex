<template>
<div class="newPost">
    <label for="content">O que você está pensando?</label>
    <input type="text" id="content" v-model="content" @focus="showContentMedia" />
    <div :class="[focus ? 'show' : 'hidden', 'media-content ']">
        <div class="input-group">
            <label for="media">Desejar adicionar um arquivo? </label>
            <input type="file" name="media" id="media" @change="changeInputFile" accept="image/*" />
        </div>

        <div class="input-group">
            <input type="checkbox" name="sponsored" id="sponsored" value="Patrocinado? " v-model="sponsored" />
            <label for="sponsored">Patrocinado? </label>
        </div>
    </div>
    <button @click="addNewPost">Enviar</button>
</div>
</template>

<script>
export default {
    name: "NewPost",
    data: function () {
        return {
            content: "",
            media: File,
            sponsored: false,
            focus: false,
        };
    },
    methods: {
        addNewPost() {
            this.$store.dispatch({
                "user_id": "5f7ce11b612ac2398e7748cd",
                "id": "5f7ce11b654acfc98e7748cd",
                "media": "http://placehold.it/400x250",
                "name": "João",
                "registered": "2017-06-03T04:04:59",
                "sponsored": false,
                "liked": false,
                "likeCount": 0,
                "type": "image",
                "content": "A type specimen book. survived not only five centuries, but also the electronic typesetting, remaining essentially. It was popularised in the 1960s"
            }, )

        },
        changeInputFile(event) {
            this.media = event.target.files[0];
        },
        showContentMedia() {
            this.focus = true;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.newPost {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #fff;
    text-align: left;
}

.newPost input {
    margin: 1rem 0;
}

.newPost input+label {
    margin-left: 1rem;
}

.newPost #content {
    height: 45px;
    border-radius: 8px;
    border: none;
    background: #e8e8e8;

}

.input-group {
    margin-bottom: 1.2rem;
    width: 100%;
    overflow: hidden;

}

#media::-webkit-file-upload-button {
    visibility: hidden;
}

#media::before {
    content: "Escolha uma imagem";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 8px 16px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 0.8rem;
}

#media:hover::before {
    border-color: black;
}

#media:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

.newPost button {
    width: 100px;
    background: #00afb8;
    border: none;
    padding: 0.5rem;
    border-radius: 8px;
    color: #fff;
}

.show {
    height: 150px;
    display: block;
}

.hidden {
    height: 0px;
    display: none;
}

.media-content {
    transition: height 2s;
}
</style>
