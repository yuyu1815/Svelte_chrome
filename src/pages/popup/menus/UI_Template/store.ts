import { writable } from 'svelte/store'

/**
 * button1: 拡張機能追加
 * button2:　旧名に戻す
 * button3: false
 **/
export const default_buttonsState = {
    button1: false,
    button2: false,
    button3: false
}

export let buttonsState = writable(default_buttonsState)
