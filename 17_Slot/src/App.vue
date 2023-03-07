<script setup>
import ChildA from "./childComponentA.vue";
import ChildB from "./childComponentB.vue";
import ChildC from "./childComponentC.vue";
import ChildD from "./childComponentD.vue";
</script>

<template>
  <p class="text-White text-5xl mt-10 text-rose-400 font-extrabold">Slot</p>

  <hr class="my-10 text-white w-full" />
  <p class="mt-10 text-white text-lg m-5">
    You can pass a template fragment to a child component, and let the child
    component render that fragment within its own template
  </p>
  <p class="pl-2 border-l-4 border-rose-400 mt-5 text-white text-lg m-5">
    The &lt;slot&gt; element is a
    <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]">slot outlet</span>
    that indicates where the parent-provided slot content should br rendered.
  </p>
  <p class="pl-2 border-l-4 border-rose-400 mt-5 text-white text-lg m-5">
    The Slot content has access to the data scope of the parent component,
    because
    <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]"
      >it is defined in the parent.</span
    >
  </p>
  <p class="pl-2 border-l-4 border-rose-400 mt-5 text-white text-lg m-5">
    The Slot content
    <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]">doesn't</span> have
    access to the child component's data, similarly slot Outlet
    <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]">doesn't</span> have
    access of Parent Component
  </p>

  <ChildA>
    <h1 class="my-3 bg-[#222] p-5 rounded-md shadow-sm shadow-rose-400">
      <span class="text-rose-400 font-extrabold text-xl">[]</span> I am a slot
      content defined inside Parent Component but rendered from Child Component
    </h1>
    <h1 class="my-3 bg-[#222] p-5 rounded-md shadow-sm shadow-rose-400">
      <span class="text-rose-400 font-extrabold text-xl">[]</span> Yes you can
      define more than one HTML tag inside slot content
    </h1>
    <h1 class="my-3 bg-[#222] p-5 rounded-md shadow-sm shadow-rose-400">
      <span class="text-rose-400 font-extrabold text-xl">[]</span> I was unable
      to style slot, So I wrapped it inside a div
    </h1>
  </ChildA>

  <hr class="my-10 text-white w-full" />
  <p class="text-White text-xl mt-10 text-rose-400 font-extrabold my-3">
    Fallback Content
  </p>
  <p class="pl-2 border-l-4 border-rose-400 mt-5 text-white text-lg m-5">
    There are cases when it is useful to specify
    <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]"
      >fallback content</span
    >
    for a slot, to be rendered only when no content is provided.
  </p>

  <ChildB></ChildB>
  <p class="pl-2 border-l-4 border-rose-400 mt-5 text-white text-lg m-5">
    There are cases when it is useful to specify
    <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]"
      >fallback content</span
    >
    for a slot, to be rendered only when no content is provided.
  </p>
  <hr class="my-10 text-white w-full" />
  <p class="text-White text-xl mt-10 text-rose-400 font-extrabold my-3">
    Named Slot
  </p>
  <p class="pl-2 border-l-4 border-rose-400 mt-5 text-white text-lg m-5">
    There are time when it is useful to have
    <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]"
      >multiple slot outlets</span
    >
    in a single component.
  </p>
  <p class="pl-2 border-l-4 border-rose-400 mt-5 text-white text-lg m-5">
    For these cases, the
    <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]">&lt;slot&gt;</span>
    element has a special attribute,
    <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]">name</span>, which
    can be used to assign a unique ID to different slots so you can determine
    where content should be rendered.
  </p>
  <p class="pl-2 border-l-4 border-rose-400 mt-5 text-white text-lg m-5">
    To pass a named slot, we need to use a
    <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]"
      >&lt;template&gt;</span
    >
    element with the
    <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]">v-slot</span>
    directive, and then pass the name of the slot as an argument to v-slot
  </p>

  <ChildC class="bg-rose-200 p-5 mb-10 rounded-lg">
    <template v-slot:header>
      <h1 class="px-28 my-3 bg-[#222] p-5 rounded-md shadow-sm shadow-rose-400">
        This is Header,
        <p>
          defined inside Parent Component &lt;template v-slot:header&gt;
          &lt;h1&gt;...&lt;h1&gt; &lt;/template&gt;
        </p>
      </h1>
    </template>
    <template v-slot:main>
      <h1 class="p-28 my-3 bg-[#222] rounded-md shadow-sm shadow-rose-400">
        This is Main,
        <p>
          defined inside Parent Component &lt;template v-slot:main&gt;
          &lt;h1&gt;...&lt;h1&gt; &lt;/template&gt;
        </p>
      </h1>
    </template>
    <template #footer>
      <h1 class="px-28 my-3 bg-[#222] p-5 rounded-md shadow-sm shadow-rose-400">
        This is Footer,
        <p>
          defined inside Parent Component &lt;template #fo oter&gt;
          &lt;h1&gt;...&lt;h1&gt; &lt;/template&gt;
        </p>
      </h1>
    </template>
  </ChildC>

  <hr class="my-10 text-white w-full" />
  <p class="text-White text-xl mt-10 text-rose-400 font-extrabold my-3">
    Scoped Slots
  </p>

  <p class="pl-2 border-l-4 border-rose-400 mt-5 text-white text-lg m-5">
    There are cases where it could be usful if a slot's content can make use of
    data from both the parent scope and the chils scope.
  </p>

  <p class="pl-2 border-l-4 border-rose-400 mt-5 text-white text-lg m-5">
    To acheive that, we need a way for the child to pass data to a slot when
    rendering it.
  </p>

  <p class="pl-2 border-l-4 border-rose-400 mt-5 text-white text-lg m-5">
    We can pass attributes to a slot outlet just like passing props to a
    component.
  </p>

  <ChildD v-slot="slotProps" class="bg-[#222] space-x-10 p-5 rounded-lg">
    <span>{{ slotProps.myName }}</span>
    <span>{{ slotProps.age }}</span>
    <span>{{ slotProps.pet.petName }}</span>
    <span>{{ slotProps.email[0] }}</span>
  </ChildD>
</template>
