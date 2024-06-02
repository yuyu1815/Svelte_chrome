<script lang="ts">
    import { Button } from 'flowbite-svelte'
    import { default_buttonsState, buttonsState } from './store'
    // ボタンの初期設定
    // https://ota42y.com/blog/2014/08/17/local-storage/
    const btn1 = () => {
        // リセット
        localStorage.setItem('Key', JSON.stringify(default_buttonsState))
        console.log(localStorage)
    }

    const btn2 = () => {
        // 保存
        console.log(buttonsState)
        localStorage.setItem('Key', JSON.stringify(buttonsState))
        console.log(localStorage)
    }
</script>

<div class="child">
    <Button on:click={btn1}>RESET</Button>
    <Button on:click={btn2}>SAVE</Button>
</div>
