<template>
    <div class="w-full fixed top-0 z-50">
        <div class="navbar flex flex-row justify-between bg-base-200 pr-6">
    
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><router-link to="/" class="font-bold text-[1.25em]">Home</router-link></li>
                        <li><router-link to="/blog" class="font-bold text-[1.25em]">Blogs</router-link></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-3xl">Kein Learning</a>
            </div>

            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 font-bold text-[1.25em]">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/blog">Blog</router-link>
                    </li>
                </ul>
            </div>
    
            <!-- <div class="flex justify-end w-1/4">
                <div class="form-control">
                    <input ref="searchInput" type="text" id="searchKey" :placeholder="isMac? 'Search (⌘ + K)' : 'Search (Ctrl + K)'" class="input input-bordered w-64 md:w-64 " />
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import { useMagicKeys } from '@vueuse/core';
import { watch } from 'vue';

const keys = useMagicKeys();
const CmdK = keys['meta+K'];
const CtrlK = keys['ctrl+K'];

watch(CmdK, (v) => {
    if (v) {
        document.getElementById('searchKey').focus();
    }
});
watch(CtrlK, (v) => {
    if (v) {
        document.getElementById('searchKey').focus();
    }
});

export default {
    data() {
        return {
            isMac: false
        }
    },
    mounted() {
        let platform = navigator ?.userAgentData ?.platform || navigator ?.platform || 'unknown';
        if (platform.toUpperCase() === "MACOS") {
            this.isMac = true;
        } else {
            this.isMac = false;
        }
    }
}
</script>

<style scoped>

</style>
