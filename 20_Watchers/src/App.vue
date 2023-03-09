<script setup>
import ChildA from "./childComponentA.vue";
import ChildB from "./childComponentB.vue";
import {ref, watch} from 'vue';

const count = ref(0);
const countWatch = ref(0);

function incCount(){
  return ++count.value;
}

const stopWatch = watch(count,()=>{ ++countWatch.value})

function stopWatchEffect(){
  return stopWatch();
}


</script>
<template>
  <h1 class="text-center text-4xl font-bold my-10 text-purple-300">
    Watchers & WatchEffects
  </h1>
  <h1 class="my-5 text-xl text-purple-300 font-bold text-center">
    ~ It is a combination of useState & useEffect Hook
  </h1>
  <h1 class="text-lg my-4">
    <span class="text-lg text-purple-300 font-bold pr-2">[]</span> Watch() -
    This function is used to watch one or more reactive data sources and invokes
    a callback function when the sources changes.
  </h1>
  <h1 class="text-lg my-4">
    <span class="text-lg text-purple-300 font-bold pr-2">[]</span> Watchers is
    lazy by default - the callback is only called when the watched source has
    changed.
  </h1>
  <h1
    class="text-lg my-4 p-5 bg-[#222] text-left rounded-lg border-2 border-purple-300 shadow-lg shadow-[#111]"
  >
    <span class="text-lg text-purple-300 font-bold pr-5">[] Syntax - </span>
    Watch(data_src, callback, options)
    <p class="text-lg my-5">
      <span class="text-lg text-purple-300 font-bold pr-2">[]</span> The first
      arguments is the watcher's source.
    </p>
    <p class="text-lg my-5">
      <span class="text-lg text-purple-300 font-bold pr-2">[]</span> The source
      can be one of the following:
    </p>
    <p class="text-lg my-5">
      <span class="text-xl text-purple-300 font-bold pr-2 ml-5">----</span> A
      ref
    </p>
    <p class="text-lg my-5">
      <span class="text-xl text-purple-300 font-bold pr-2 ml-5">----</span> A
      getter function that returns a value
    </p>
    <p class="text-lg my-5">
      <span class="text-xl text-purple-300 font-bold pr-2 ml-5">----</span> A
      reactive object
    </p>
    <p class="text-lg my-5">
      <span class="text-xl text-purple-300 font-bold pr-2 ml-5">----</span> An
      array
    </p>
    <p class="text-lg my-5">
      <span class="text-lg text-purple-300 font-bold pr-2">[]</span> The second
      arguments is the callback that will be called when the source changes.
    </p>
    <span class="text-lg text-purple-300 font-bold pr-5">[] Syntax - </span>
    (newValue, oldValue, function) => { }
    <p class="text-lg my-5">
      <span class="text-lg text-purple-300 font-bold pr-2">[] function </span>is
      used for registering a side effect cleanup
    </p>
    <p class="text-lg my-5">
      <span class="text-lg text-purple-300 font-bold pr-2">[]</span> The Third
      arguments is optional. That support the following options.
    </p>
    <p class="text-lg my-5">
      <span class="text-lg text-purple-300 font-bold pr-2 ml-5"
        >---- immediate :</span
      >
      Trigger the callback immediately on watcher creation. Oldvalues will be
      undefined on the first call.
    </p>
    <p class="text-lg my-5">
      <span class="text-lg text-purple-300 font-bold pr-2 ml-5"
        >---- deep :
      </span>
      force deep traversal of the source if it is an object, so that the
      callback fires on deep mutations.
    </p>
    <p class="text-lg my-5">
      <span class="text-lg text-purple-300 font-bold pr-2 ml-5"
        >---- flush :
      </span>
      adjust the callback's flush timing
    </p>
    <p class="text-lg my-5">
      <span class="text-lg text-purple-300 font-bold pr-2 ml-5"
        >---- onTrack / onTrigger :
      </span>
      debug watcher's dependencies
    </p>
  </h1>

  <hr class="my-10" />
  <ChildA />
  <hr class="my-20" />
  <h1 class="text-center text-3xl my-5">I am ChildB</h1>
  <ChildB />
  <hr class="my-20" />
  <h1 class="text-center text-3xl my-5">I am Parent Component</h1>
  <h1 class="text-center text-3xl my-5 text-purple-300">
    Lets see watchEffect( ) & Stop Watcher
  </h1>
  <h1 class="text-center text-xl my-5 text-purple-300 font-bold">
    **pure useEffect( )
  </h1>

  <h1
    class="text-lg text-center my-4 p-5 bg-[#222] rounded-lg border-2 border-purple-300 shadow-lg shadow-[#111]"
  >
    <span class="text-lg text-purple-300 font-bold pr-5">[] Syntax - </span>
    watchEfect(function, options)
  </h1>

  <p class="text-lg text-purple-300 font-bold pr-5 my-5">
    [] Good for Api calling . . .
  </p>
  <p class="text-lg text-purple-300 font-bold pr-5 my-5">
    [] You can directly use async like this, watchEffect( async( ) => { } )
  </p>
  <p class="text-lg text-purple-300 font-bold pr-5 my-5">
    [] It will auomatically keep track of reactive elements . . .
  </p>
  <p class="text-lg text-white font-bold pr-5 my-5">
    >> Stop watcher is used to stop the effect of watchEffect
  </p>
  <p class="text-lg text-white font-bold pr-5 my-5">
    >> Lets see an example . . .
  </p>

  <h1
    class="flex justify-around items-center text-lg text-center mt-4 mb-20 p-5 bg-[#222] rounded-lg border-2 border-purple-300 shadow-lg shadow-[#111]"
  >
    <button 
    class="active:bg-[#222] font-bold m-3 bg-[#444] p-3 rounded-lg text-purple-300 border-2 border-purple-300"
    @click="incCount"
    >+ + count</button>
    <p class="text-3xl"> &gt;&gt; {{ count }}</p>
    <p class="text-3xl"> ||</p>
    <p class="text-3xl">{{ countWatch }} &lt;&lt;</p>
    <button 
    @click="stopWatchEffect"
    class="active:bg-[#222] font-bold m-3 bg-[#444] p-3 rounded-lg text-purple-300 border-2 border-purple-300">stop watcher</button>
  </h1>
</template>
