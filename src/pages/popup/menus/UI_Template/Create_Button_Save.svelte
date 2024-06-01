<script lang="ts">
    import { Button } from 'flowbite-svelte'
    // https://ota42y.com/blog/2014/08/17/local-storage/
    const btn1 = () => {
        // リセット
    }

    const btn2 = () => {
        // 保存

    }
</script>

<div class="child">
    <Button on:click={btn1}>RESET</Button>
    <Button on:click={btn2}>SAVE</Button>
</div>

