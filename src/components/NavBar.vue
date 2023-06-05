<template>
    <div @keydown.ctrl.k="doSomething" class="w-full fixed top-0 z-50">
        <div class="navbar flex flex-row justify-between bg-base-200">
            <div class="">
                <a class="btn btn-ghost normal-case text-3xl">Kein Learning</a>
            </div>
            <div class="flex justify-evenly w-1/4">
                <div class="form-control">
                    <input ref="searchInput"  type="text" id="searchKey" :placeholder="isMac? 'Search (⌘ + K)' : 'Search (Ctrl + K)'" class="input input-bordered w-64 md:w-64 " />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useMagicKeys} from '@vueuse/core';
import { watch } from 'vue';

const keys = useMagicKeys();
const CmdK = keys['meta+K'];
const CtrlK = keys['ctrl+K'];

watch(CmdK, (v)=>{
    if(v){
        document.getElementById('searchKey').focus();
    }
});
watch(CtrlK, (v)=>{
    if(v){
        document.getElementById('searchKey').focus();
    }
});

export default {
    data () {
      return {
        isMac: false
      }
    },
    mounted () {
      let platform = navigator?.userAgentData?.platform || navigator?.platform || 'unknown';
      if(platform.toUpperCase()==="MACOS"){
        this.isMac = true;
      }
      else{
        this.isMac=false;
      }
    }
}
</script>

<style scoped>

</style>
